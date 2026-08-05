"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  // IntersectionObserver for scroll reveal animations
  useEffect(() => {
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
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar currentPage="about" />
      
      <div className="page-header">
        <h1>Our Mission & Vision</h1>
        <p>Empowering local Sri Lankan communities through sustainable global partnerships</p>
      </div>

      <main className="about-container">
        <div className="split-section reveal">
          <div className="split-text">
            <h2>Our Mission</h2>
            <p>To connect volunteers with schools, children's homes, elder care centers, and community organizations through meaningful service projects while promoting cultural awareness, heritage preservation, education, and social responsibility for the benefit of local communities.</p>
          </div>
          <div className="split-image">
            <Image src="/images/school-classroom-volunteers-sri-lanka.jpg" alt="Volunteers working with children" loading="lazy" width={1200} height={800} />
          </div>
        </div>

        <div className="split-section reveal">
          <div className="split-text">
            <h2>Our Vision</h2>
            <p>To create a world where cultural exchange, volunteerism, and community engagement inspire positive social change, empower local communities, preserve cultural heritage, and build lasting connections between people from diverse backgrounds.</p>
          </div>
          <div className="split-image">
            <Image src="/images/community-development-project-sri-lanka.jpg" alt="Team building community structures" loading="lazy" width={1200} height={800} />
          </div>
        </div>

        <h2 className="section-title reveal">What Drives Us</h2>
        <p className="section-subtitle reveal">The core values that guide every project and partnership we build</p>
        <div className="values-grid">
          <div className="value-card reveal">
            <span className="value-icon">🤝</span>
            <h3>Community First</h3>
            <p>Every initiative is shaped around the real needs of the people we work alongside.</p>
          </div>
          <div className="value-card reveal">
            <span className="value-icon">🌱</span>
            <h3>Sustainability</h3>
            <p>We build for long-term impact, not short-term photo opportunities.</p>
          </div>
          <div className="value-card reveal">
            <span className="value-icon">🎓</span>
            <h3>Education</h3>
            <p>Knowledge exchange and skill-building sit at the heart of our programs.</p>
          </div>
          <div className="value-card reveal">
            <span className="value-icon">🌍</span>
            <h3>Cultural Respect</h3>
            <p>We honor local traditions, customs, and heritage in everything we do.</p>
          </div>
        </div>

        <div id="contributions" className="pricing-section reveal">
          <h2 className="section-title">Program Contributions</h2>
          <p className="section-subtitle">Transparent packaging that directly funds local community development, host initiatives, and fully managed accommodation details.</p>
          
          <div className="pricing-grid">
            <div className="price-card featured" style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }}>
              <span className="badge">Most Popular Track</span>
              <div className="price-header">
                <h3>Living with a local family</h3>
                <span className="duration-label">Perfect balance of project & discovery</span>
              </div>
              <div>
                <div className="price-amount">$220<span>/ week</span></div>
                <ul className="price-features">
                  <li>Shared accommodation</li>
                  <li>All meals included</li>
                  <li>Free WiFi</li>
                  <li>Bottled water</li>
                  <li>Free laundry</li>
                </ul>
              </div>
              <Link href="/apply" className="btn">
                Select Track
              </Link>
            </div>
          </div>
          
          <p className="pricing-footer-text">
            *Note: Rates can be fully customized based on specific long-term tracking, medical validation extensions, or group deployments. Review our official Questionnaire under the application link for personalized cost updates.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
