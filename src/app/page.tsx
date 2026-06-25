"use client";

import { useEffect } from "react";
import Link from "next/link";
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
            imageSrc="/images/DSC04478.JPG"
            imageAlt="School classroom development in Sri Lanka"
          />
          
          <TrackCard
            title="Paddy Field Experience"
            description="Step onto traditional family farms, take part in rice cultivation, explore centuries-old irrigation setups, and master rural village cooking skills."
            imageSrc="/images/IMG_1841.jpg"
            imageAlt="Traditional rice paddy field cultivation in Sri Lanka"
          />
          
          <TrackCard
            title="Bakery Volunteering"
            description="Collaborate inside local baking houses to master local bread preparation while directly strengthening community micro-entrepreneurship models."
            imageSrc="/images/Bakery & Culinary.jpeg"
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
            <img src="/images/Fortress in Galle.jpeg" alt="Galle Fort seaside ramparts" loading="lazy" />
            <div className="place-overlay">
              <h4>Galle Historic Fort</h4>
              <p>Walk alongside colonial ramparts, browse boutique design houses, and watch breathtaking Indian Ocean sunsets.</p>
            </div>
          </div>
          
          <div className="place-card reveal">
            <img src="/images/Sigiriya.JPG" alt="Sigiriya Citadel rock fortress" loading="lazy" />
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
            <img src="/images/DSC04518.JPG" alt="Sri Lankan school children smiling" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <img src="/images/DSC04484.JPG" alt="Volunteers conducting interactive classroom activities" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <img src="/images/DSC04528.JPG" alt="DIWASI community project team photo" loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-overlay-icon">📸</span>
            </div>
          </div>
          <div className="gallery-card reveal">
            <img src="/images/DSC04490.JPG" alt="Rural community English teaching lesson" loading="lazy" />
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
