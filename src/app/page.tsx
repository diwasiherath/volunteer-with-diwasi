"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import TrackCard from "@/components/TrackCard";
import Footer from "@/components/Footer";

export default function Home() {
  // IntersectionObserver for scroll reveal animations (Firefox / general fallback)
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    
    // Check if browser has native support for view timelines
    const hasCSSScrollTimeline = 
      typeof window !== "undefined" && 
      typeof CSS !== "undefined" && 
      CSS.supports("(animation-timeline: view()) and (animation-range: entry)");

    if (!hasCSSScrollTimeline) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      // Add a support hook so CSS animations take over
      revealElements.forEach((el) => {
        el.classList.add("native-scroll-animation");
      });
    }
  }, []);

  return (
    <>
      {/* Header / Navigation Bar */}
      <Navbar currentPage="home" />

      {/* Hero Section */}
      <Hero />

      {/* DIWASI Volunteer Program Intro */}
      <section className="section-container">
        <span
          className="reveal"
          style={{
            display: "block",
            textAlign: "center",
            color: "var(--accent-hover)",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          DIWASI Volunteer Program
        </span>
        <h2 className="section-title reveal">Live. Volunteer. Experience Sri Lanka.</h2>
        <p className="section-subtitle reveal" style={{ marginBottom: "16px" }}>
          More than just volunteering, your stay is an opportunity to experience Sri Lanka through the eyes of a local family. Stay in our welcoming volunteer villa, share everyday moments with a Sri Lankan family, take part in meaningful community activities, and discover the culture, food, traditions, and natural beauty of Sri Lanka.
        </p>
        <p
          className="reveal"
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "18px",
            color: "var(--dark)",
            maxWidth: "600px",
            margin: "0 auto 50px auto",
          }}
        >
          You won&apos;t just visit Sri Lanka. You&apos;ll become part of it.
        </p>

        <div className="features-grid">
          <div className="feature-card reveal">
            <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>🏡</span>
            <h3>Live Like a Local</h3>
            <p>Stay in a peaceful home environment and experience genuine Sri Lankan hospitality.</p>
          </div>
          <div className="feature-card reveal">
            <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>🤝</span>
            <h3>Make a Difference</h3>
            <p>Take part in community-based volunteer activities where your time and effort can have a meaningful impact.</p>
          </div>
          <div className="feature-card reveal">
            <span style={{ fontSize: "36px", display: "block", marginBottom: "10px" }}>🌴</span>
            <h3>Discover Sri Lanka</h3>
            <p>Experience local culture, food, traditions, nature and everyday life beyond the typical tourist route.</p>
          </div>
        </div>
      </section>

      {/* Why Join DIWASI (Foundational Pillars) */}
      <section className="section-container">
        <h2 className="section-title reveal">Why Join With Us?</h2>
        <p className="section-subtitle reveal">Our three foundational pillars of sustainable, impactful volunteer travel</p>
        
        <main className="features-grid">
          <div className="feature-card reveal">
            <h3>Community Engagement</h3>
            <p>Volunteers support public schools, children's institutions, elder care centers, and rural community organizations through active social and educational modules.</p>
          </div>
          <div className="feature-card reveal">
            <h3>Cultural Experience</h3>
            <p>Participants explore authentic heritage, traditional cottage industries, sacred landmarks, and local community customs to build deep mutual respect.</p>
          </div>
          <div className="feature-card reveal">
            <h3>Sustainable Impact</h3>
            <p>We build responsible partnerships that prioritize local community ownership, empowering future generations long after your journey wraps up.</p>
          </div>
        </main>
      </section>

      {/* Field Operations Section (Interactive Map) */}
      <MapSection />

      {/* Volunteer Tracks (Projects) */}
      <section className="section-container">
        <h2 className="section-title reveal">Our Volunteer Tracks</h2>
        <p className="section-subtitle reveal">A glimpse of the diverse program modules waiting for your special contribution</p>
        
        <div className="projects-grid">
          <TrackCard
            title="School Development"
            description="Support public schools with classroom improvements, creative educational aids, conversational English tracks, and inclusive recreational activities."
            imageSrc="/images/school-classroom-volunteers-sri-lanka.jpg"
            imageAlt="School classroom development in Sri Lanka"
          />
          
          <TrackCard
            title="Paddy Field Experience"
            description="Step onto traditional family farms, take part in rice cultivation, explore centuries-old irrigation setups, and master rural village cooking skills."
            imageSrc="/images/paddy-field-rice-cultivation-sri-lanka.jpg"
            imageAlt="Traditional rice paddy field cultivation in Sri Lanka"
          />
          
          <TrackCard
            title="Bakery Volunteering"
            description="Collaborate inside local baking houses to master local bread preparation while directly strengthening community micro-entrepreneurship models."
            imageSrc="/images/bakery-culinary-volunteering-sri-lanka.jpeg"
            imageAlt="Local bakery house volunteering"
          />
        </div>
        
        <div className="view-all-container">
          <Link href="/projects" className="btn-outline">
            View All Project Tracks
          </Link>
        </div>
      </section>

      {/* Places to Visit */}
      <section className="section-container">
        <h2 className="section-title reveal">Places To Explore</h2>
        <p className="section-subtitle reveal">Spend your weekend trips uncovering historic seaside fortresses and vibrant highland terrains</p>
        
        <div className="places-grid">
          <div className="place-card reveal">
            <Image src="/images/galle-fort-sri-lanka.jpeg" alt="Galle Fort seaside ramparts" loading="lazy" width={1200} height={800} />
            <div className="place-overlay">
              <h4>Galle Historic Fort</h4>
              <p>Walk alongside colonial ramparts, browse boutique design houses, and watch breathtaking Indian Ocean sunsets.</p>
            </div>
          </div>
          
          <div className="place-card reveal">
            <Image src="/images/sigiriya-ancient-citadel-sri-lanka.jpg" alt="Sigiriya Citadel rock fortress" loading="lazy" width={1200} height={800} />
            <div className="place-overlay">
              <h4>Sigiriya Ancient Citadel</h4>
              <p>Scale the world-famous rock fortress to find historic fresco paintings and massive royal pleasure garden ruins.</p>
            </div>
          </div>
        </div>
        
        <div className="view-all-container">
          <Link href="/places" className="btn-outline">
            View Complete Travel Guide
          </Link>
        </div>
      </section>

      {/* Gallery Moments */}
      <section className="section-container">
        <h2 className="section-title reveal">Moments From the Field</h2>
        <p className="section-subtitle reveal">Real snapshots of everyday travel and field service moments shared by our global team</p>
        
        <div className="gallery-grid">
          <div className="gallery-card reveal">
            <Image src="/images/sri-lankan-school-children-smiling.jpg" alt="Sri Lankan school children smiling" loading="lazy" width={800} height={600} />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <Image src="/images/volunteers-classroom-activities-sri-lanka.jpg" alt="Volunteers conducting interactive classroom activities" loading="lazy" width={800} height={600} />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <Image src="/images/diwasi-community-project-launch.jpg" alt="DIWASI community project team photo" loading="lazy" width={800} height={600} />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <Image src="/images/rural-english-teaching-sri-lanka.jpg" alt="Rural community English teaching lesson" loading="lazy" width={800} height={600} />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
        </div>
        
        <div className="view-all-container">
          <Link href="/gallery" className="btn-outline">
            Open Full Image Gallery
          </Link>
        </div>
      </section>

      {/* Are You Looking for More Than a Holiday? */}
      <section className="section-container reveal" style={{ textAlign: "center", maxWidth: "700px" }}>
        <h2 className="section-title reveal">Are You Looking for More Than a Holiday?</h2>
        <div style={{ fontSize: "17px", lineHeight: "1.9", color: "var(--gray-700)" }}>
          <p>Maybe you&apos;re travelling alone.</p>
          <p>Maybe you want to meet new people.</p>
          <p>Maybe you want to experience another culture.</p>
          <p>Maybe you simply want to do something meaningful with your time.</p>
          <p>Or maybe you&apos;re looking for a fresh start and a different perspective.</p>
        </div>
        <p style={{ fontWeight: 700, fontSize: "20px", color: "var(--primary)", margin: "30px 0" }}>
          Sri Lanka is waiting.
        </p>
        <p style={{ fontSize: "18px", fontWeight: 600, lineHeight: "1.8", color: "var(--dark)" }}>
          Come volunteer.<br />
          Come live with a local family.<br />
          Come experience something real.
        </p>
        <p style={{ margin: "20px 0 30px 0", fontSize: "16px", color: "var(--gray-600)" }}>
          Your journey could start here.
        </p>
        <Link href="/apply" className="btn-cta">
          Start Your Journey
        </Link>
      </section>

      {/* Find Purpose CTA Section */}
      <section className="section-container find-purpose-section">
        <div className="find-purpose-banner reveal">
          <div className="find-purpose-content">
            <h2 className="find-purpose-text">
              Feeling lost? Find purpose, peace, and a fresh perspective through volunteering in the beauty of Sri Lanka.
            </h2>
            <Link href="/apply" className="find-purpose-btn">
              join with us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
