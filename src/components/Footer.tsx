"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial call
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  // SVGs inline icons
  const icons = {
    location: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    ),
    email: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    user: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    ),
    facebook: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    ),
    instagram: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
    youtube: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
      </svg>
    ),
    linkedin: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
    arrowUp: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5,12 12,5 19,12"></polyline>
      </svg>
    )
  };

  // 251.2 is the circumference of a circle with radius 40 (2 * pi * r)
  const strokeDashoffset = 251.2 - (251.2 * scrollProgress) / 100;

  return (
    <>
      <footer className="site-footer">
        <style dangerouslySetInnerHTML={{__html: `
          .site-footer {
            position: relative;
            background: linear-gradient(180deg, #1C2833 0%, #111a24 100%);
            border-top: 6px solid var(--primary);
            padding-top: 80px;
            overflow: hidden;
          }



          /* Interactive Social Row */
          .social-links {
            display: flex;
            gap: 12px;
            margin-top: 20px;
          }

          .social-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            color: #A0AAB2;
            transition: all var(--transition-fast);
            border: 1px solid rgba(255, 255, 255, 0.03);
          }

          .social-icon:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-4px) scale(1.08);
            box-shadow: 0 5px 15px rgba(0, 128, 128, 0.4);
          }

          /* Modern Contact details */
          .footer-contact-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #A0AAB2;
            font-size: 0.9rem;
            line-height: 1.5;
            margin-bottom: 20px;
          }

          .footer-contact-icon {
            color: var(--accent);
            flex-shrink: 0;
            margin-top: 2px;
          }

          /* Premium Circular Scroll Button */
          .scroll-progress-btn {
            position: fixed;
            bottom: calc(30px + env(safe-area-inset-bottom));
            right: calc(30px + env(safe-area-inset-right));
            width: 52px;
            height: 52px;
            border-radius: 50%;
            background: #1C2833;
            border: none;
            cursor: pointer;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            z-index: 999;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px) scale(0.9);
            transition: all var(--transition-normal) cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .scroll-progress-btn.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0) scale(1);
          }

          .scroll-progress-btn:hover {
            transform: translateY(-4px) scale(1.05);
            box-shadow: 0 12px 30px rgba(0, 128, 128, 0.3);
            background: #2C3E50;
            color: var(--accent);
          }

          .scroll-progress-btn:hover svg.arrow-icon {
            animation: bounce-up 0.5s infinite alternate;
          }

          .scroll-progress-btn svg.progress-ring {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: rotate(-90deg);
          }

          .scroll-progress-btn svg.progress-ring circle {
            fill: transparent;
            stroke-width: 4;
          }

          .scroll-progress-btn svg.progress-ring .ring-bg {
            stroke: rgba(255, 255, 255, 0.08);
          }

          .scroll-progress-btn svg.progress-ring .ring-fill {
            stroke: var(--accent);
            stroke-linecap: round;
            transition: stroke-dashoffset 0.1s;
          }

          @keyframes bounce-up {
            from { transform: translateY(0); }
            to { transform: translateY(-3px); }
          }
        `}} />


        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Volunteer work in sri lanka <span>Where stays become stories</span></h3>
            <p>An impactful volunteer initiative focused on community empowerment, ethical development models, and unforgettable cross-cultural storytelling.</p>
            
            {/* Social Icons Row */}
            <div className="social-links">
              <a href="https://www.facebook.com/share/1BupWRJmQs/?mibextid=wwXIfr" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                {icons.facebook}
              </a>
              <a href="https://www.instagram.com/diwasi.herath?igsh=MTRxc29nb2czcmhqMg%3D%3D&utm_source=qr" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {icons.instagram}
              </a>
              <a href="https://youtube.com/@diwasiherath?si=aLIuuY8phvwxz8Tc" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                {icons.youtube}
              </a>
              <a href="https://www.linkedin.com/in/diwasi-herath-58a78b3b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                {icons.linkedin}
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Program Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <Link href="/" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>
                  Home Dashboard
                </Link>
              </li>
              <li><Link href="/about">Our Mission & Vision</Link></li>
              <li><Link href="/projects">Core Volunteer Tracks</Link></li>
              <li><Link href="/places">Weekend Excursions</Link></li>
              <li><Link href="/gallery">Field Photo Gallery</Link></li>
              <li><Link href="/blog">Volunteer Blog & Stories</Link></li>
              <li><Link href="/reviews">Volunteer Reviews</Link></li>
              <li><Link href="/contact">Apply / Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Get In Touch</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <div className="footer-contact-icon">{icons.location}</div>
                <div>
                  <strong>Our Volunteer Headquarters:</strong>
                  Northwestern province, Sri Lanka
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">{icons.email}</div>
                <div>
                  <strong>Inquiries Email:</strong>
                  <a href="mailto:diwasicherath@gmail.com" style={{ color: "#A0AAB2", textDecoration: "none" }}>diwasicherath@gmail.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <div className="footer-contact-icon">{icons.user}</div>
                <div>
                  <strong>Official Program Director:</strong>
                  Diwasi Herath
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Volunteer work in sri lanka Initiative. Designed for ethical tourism and sustainable global partnerships.</p>
        </div>
      </footer>

      {/* Premium Circular Scroll Progress Back-To-Top Button */}
      <button 
        className={`scroll-progress-btn ${showBackToTop ? "visible" : ""}`} 
        onClick={scrollToTop} 
        aria-label="Scroll back to top"
      >
        <svg className="progress-ring" viewBox="0 0 100 100">
          <circle className="ring-bg" cx="50" cy="50" r="40" />
          <circle 
            className="ring-fill" 
            cx="50" 
            cy="50" 
            r="40" 
            strokeDasharray="251.2" 
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <span className="arrow-icon" style={{ zIndex: 2, display: "flex", alignItems: "center" }}>
          {icons.arrowUp}
        </span>
      </button>
    </>
  );
}
