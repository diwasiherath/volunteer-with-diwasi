"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { BlogPost } from "@/types";

const CATEGORIES = ["All", "Volunteer Stories", "Travel Tips", "Cultural Guide", "Impact Updates"] as const;

export default function BlogListingPage() {
  const posts = getAllPosts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  useEffect(() => {
    // IntersectionObserver for fade-in reveals
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const featuredPost = posts.find(p => p.slug === "day-in-life-school-volunteer") || posts[0];

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
    const matchesCategory = 
      selectedCategory === "All" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar currentPage="blog" />

      <div className="page-header">
        <h1>Volunteer Blog & Stories</h1>
        <p>Stay informed with travel tips, project updates, and inspiring stories directly from our team and volunteers in Sri Lanka.</p>
      </div>

      <main className="blog-container">
        {/* Featured Post Card */}
        {featuredPost && searchQuery === "" && selectedCategory === "All" && (
          <div className="featured-blog-card reveal">
            <div className="featured-blog-image">
              <Image src={featuredPost.imageSrc} alt={featuredPost.title} width={1200} height={800} />
            </div>
            <div className="featured-blog-content">
              <span className="blog-badge">{featuredPost.category}</span>
              <h2>
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <div className="blog-meta">
                <span>{featuredPost.publishDate}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <p className="blog-excerpt">{featuredPost.excerpt}</p>
              
              <div className="blog-author-row">
                {featuredPost.author.avatarSrc && (
                  <Image
                    src={featuredPost.author.avatarSrc}
                    alt={featuredPost.author.name}
                    className="author-avatar"
                    width={44}
                    height={44}
                  />
                )}
                <div className="author-info">
                  <h5>{featuredPost.author.name}</h5>
                  <span>{featuredPost.author.role}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Controls: Search and Filters */}
        <div className="blog-controls reveal">
          <div className="blog-search">
            <svg 
              className="blog-search-icon" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Search articles by title, tags..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="blog-categories">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Post Grid */}
        <div className="blog-grid reveal">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-card-image">
                  <Image src={post.imageSrc} alt={post.title} width={1200} height={800} />
                </div>
                <div className="blog-card-content">
                  <span className="blog-badge">{post.category}</span>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="blog-excerpt" style={{ fontSize: "14.5px", marginBottom: "20px" }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="blog-card-footer">
                    <div className="blog-author-row" style={{ gap: "8px" }}>
                      {post.author.avatarSrc && (
                        <Image
                          src={post.author.avatarSrc}
                          alt={post.author.name}
                          className="author-avatar"
                          style={{ width: "32px", height: "32px" }}
                          width={44}
                          height={44}
                        />
                      )}
                      <div className="author-info">
                        <h5 style={{ fontSize: "12.5px" }}>{post.author.name}</h5>
                        <span style={{ fontSize: "11px" }}>{post.author.role}</span>
                      </div>
                    </div>
                    
                    <div className="blog-meta" style={{ margin: 0, fontSize: "12px" }}>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="reveal" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px 0" }}>
              <h3>No articles found</h3>
              <p>Try refining your search terms or selecting another category.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
