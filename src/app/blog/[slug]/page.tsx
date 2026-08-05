import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Volunteer work in sri lanka`,
      description: post.excerpt,
      images: [
        {
          url: post.imageSrc,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug);

  return (
    <>
      <Navbar currentPage="blog" />

      <main className="blog-detail-container">
        {/* Back Button */}
        <Link href="/blog" className="back-to-blog">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Blog Listing
        </Link>

        {/* Article Header */}
        <header className="blog-detail-header">
          <span className="blog-badge">{post.category}</span>
          <h1>{post.title}</h1>
          
          <div className="blog-detail-meta">
            <div className="blog-author-row">
              {post.author.avatarSrc && (
                <Image
                  src={post.author.avatarSrc}
                  alt={post.author.name}
                  className="author-avatar"
                  width={44}
                  height={44}
                />
              )}
              <div className="author-info">
                <h5>{post.author.name}</h5>
                <span>{post.author.role}</span>
              </div>
            </div>

            <div className="blog-meta" style={{ margin: 0 }}>
              <span>{post.publishDate}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="blog-detail-image">
          <Image src={post.imageSrc} alt={post.title} width={1200} height={800} />
        </div>

        {/* Article Body */}
        <article 
          className="blog-detail-body"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">
              #{tag}
            </span>
          ))}
        </div>

        {/* Newsletter Signup Widget */}
        <div className="newsletter-widget">
          <h4>Stay Connected With DIWASI</h4>
          <p>Subscribe to our newsletter to receive the latest stories, cultural guides, and program application deadlines straight to your inbox.</p>
          <form className="newsletter-form" action="#" method="POST">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              name="newsletter_email"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </main>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <h2>Related Articles</h2>
          <div className="blog-grid">
            {relatedPosts.map((rPost) => (
              <article key={rPost.slug} className="blog-card">
                <div className="blog-card-image">
                  <Image src={rPost.imageSrc} alt={rPost.title} width={1200} height={800} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-badge">{rPost.category}</span>
                  <h3>
                    <Link href={`/blog/${rPost.slug}`}>
                      {rPost.title}
                    </Link>
                  </h3>
                  <p className="blog-excerpt" style={{ fontSize: "14.5px", marginBottom: "20px" }}>
                    {rPost.excerpt}
                  </p>
                  
                  <div className="blog-card-footer">
                    <div className="blog-author-row" style={{ gap: "8px" }}>
                      {rPost.author.avatarSrc && (
                        <Image
                          src={rPost.author.avatarSrc}
                          alt={rPost.author.name}
                          className="author-avatar"
                          style={{ width: "32px", height: "32px" }}
                          width={44}
                          height={44}
                        />
                      )}
                      <div className="author-info">
                        <h5 style={{ fontSize: "12.5px" }}>{rPost.author.name}</h5>
                        <span style={{ fontSize: "11px" }}>{rPost.author.role}</span>
                      </div>
                    </div>
                    
                    <div className="blog-meta" style={{ margin: 0, fontSize: "12px" }}>
                      <span>{rPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
