"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  currentPage: "home" | "about" | "projects" | "places" | "gallery" | "contact" | "apply" | "reviews";
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling for older browsers/fallback sticky classes
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile navigation menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [navOpen]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "places", label: "Places to Visit", path: "/places" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
    { id: "reviews", label: "Reviews", path: "/reviews" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  return (
    <>
      {/* Blurred background overlay for mobile drawer */}
      <div 
        className={`nav-overlay ${navOpen ? "active" : ""}`} 
        onClick={() => setNavOpen(false)}
        aria-hidden="true"
      />

      <header className={`site-header ${isScrolled ? "scrolled" : ""} ${navOpen ? "menu-open" : ""}`}>
        <style dangerouslySetInnerHTML={{__html: `
          /* Native Scroll-Driven Shrinking Header */
          @media (prefers-reduced-motion: no-preference) {
            @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
              .site-header {
                animation: shrink-header auto linear both;
                animation-timeline: scroll(block root);
                animation-range: 0px 80px;
                /* Overriding globals.css transition when native scroll timeline is active */
                transition: none !important;
              }
              .site-header .nav-container {
                animation: shrink-container auto linear both;
                animation-timeline: scroll(block root);
                animation-range: 0px 80px;
                transition: none !important;
              }
            }
          }

          @keyframes shrink-header {
            to {
              background-color: rgba(255, 255, 255, 0.96);
              backdrop-filter: blur(20px);
              -webkit-backdrop-filter: blur(20px);
              box-shadow: 0 10px 30px rgba(0, 80, 80, 0.06);
              border-bottom-color: rgba(0, 128, 128, 0.15);
            }
          }

          @keyframes shrink-container {
            to {
              padding-block: 10px;
            }
          }

          /* Backdrop Blur Overlay for mobile drawer */
          .nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 30, 30, 0.35);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 1050;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          }

          .nav-overlay.active {
            opacity: 1;
            pointer-events: auto;
          }

          /* Logo layout and styling */
          .site-header .logo {
            display: flex;
            flex-direction: column;
            text-decoration: none;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }

          .site-header .logo:hover {
            transform: scale(1.02);
          }

          .site-header .logo-title {
            font-family: var(--font-display), var(--font-outfit), sans-serif;
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.5px;
            line-height: 1.2;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: background 0.3s ease;
          }

          .site-header .logo-text-desktop {
            display: inline;
          }

          .site-header .logo-text-mobile {
            display: none;
          }

          .site-header .logo-subtitle {
            font-family: var(--font-sans), var(--font-inter), sans-serif;
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 0.5px;
            color: var(--primary);
            opacity: 0.75;
            -webkit-text-fill-color: initial;
            transition: opacity 0.3s ease, color 0.3s ease;
            margin-top: 1px;
          }

          .site-header .logo:hover .logo-subtitle {
            opacity: 1;
            color: var(--accent-hover);
          }

          /* Modern Nav Links Underline & Glow for Desktop */
          .site-header .nav-link {
            position: relative;
            color: var(--dark);
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 6px 0;
            display: inline-block;
          }

          .site-header .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
            transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .site-header .nav-link:hover::after,
          .site-header .nav-link.active::after {
            width: 100%;
          }

          .site-header .nav-link.active {
            color: var(--primary);
            text-shadow: 0 0 1px rgba(0, 128, 128, 0.1);
          }

          /* Premium action button for Volunteer Application (Desktop) */
          .site-header .nav-link-apply {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
            color: var(--white) !important;
            padding: 9px 24px !important;
            border-radius: 30px;
            box-shadow: 0 4px 15px rgba(0, 128, 128, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            font-weight: 700;
            display: inline-block;
          }

          .site-header .nav-link-apply::after {
            display: none !important;
          }

          .site-header .nav-link-apply:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 128, 128, 0.3);
            background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
            color: var(--white) !important;
          }

          .site-header .nav-link-apply:active {
            transform: translateY(0);
          }

          /* Hamburger Toggle Button Container & Styles */
          .site-header .nav-toggle {
            display: none;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(0, 128, 128, 0.05);
            border: 1px solid rgba(0, 128, 128, 0.1);
            cursor: pointer;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 1100;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0;
          }

          .site-header .nav-toggle:hover {
            background: rgba(0, 128, 128, 0.1);
            border-color: rgba(0, 128, 128, 0.2);
            transform: scale(1.05);
          }

          .site-header .nav-toggle:active {
            transform: scale(0.95);
          }

          .site-header .nav-toggle-icon {
            width: 20px;
            height: 14px;
            position: relative;
          }

          .site-header .nav-toggle span {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary);
            border-radius: 2px;
            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                        opacity 0.3s ease,
                        background-color 0.3s ease;
          }

          /* Absolute spacing for spans inside icon */
          .site-header .nav-toggle span:nth-child(1) {
            top: 0;
          }

          .site-header .nav-toggle span:nth-child(2) {
            top: 6px;
          }

          .site-header .nav-toggle span:nth-child(3) {
            top: 12px;
          }

          /* Morph to X (Fallback/Transition state before it hides) */
          .site-header .nav-toggle.open span:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
            background-color: var(--accent);
          }

          .site-header .nav-toggle.open span:nth-child(2) {
            opacity: 0;
          }

          .site-header .nav-toggle.open span:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
            background-color: var(--accent);
          }

          /* Drawer Close Button (inside the drawer top-right) */
          .site-header .drawer-close-btn {
            display: none;
          }

          /* Mobile Menu Drawer Container */
          .site-header .nav-menu-wrapper {
            display: flex;
            align-items: center;
          }

          .site-header .nav-menu-links {
            display: flex;
            align-items: center;
            gap: 30px;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          @media (max-width: 960px) {
            /* Adjust logo display on tablets and mobiles */
            .site-header .logo-text-desktop {
              display: none;
            }

            .site-header .logo-text-mobile {
              display: inline;
            }

            .site-header .logo-title {
              font-size: 19px;
            }

            .site-header .logo-subtitle {
              font-size: 9px;
            }

            .site-header .nav-toggle {
              display: flex;
            }

            /* Hide floating trigger when menu is open to prevent overlapping styles */
            .site-header .nav-toggle.open {
              opacity: 0;
              pointer-events: none;
            }

            /* Close Button inside Drawer */
            .site-header .drawer-close-btn {
              display: flex;
              position: absolute;
              top: 20px;
              right: 20px;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: rgba(0, 128, 128, 0.05);
              border: 1px solid rgba(0, 128, 128, 0.1);
              color: var(--primary);
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              padding: 0;
              z-index: 1100;
            }

            .site-header .drawer-close-btn:hover {
              background: rgba(0, 128, 128, 0.1);
              border-color: rgba(0, 128, 128, 0.2);
              color: var(--accent-hover);
              transform: scale(1.05);
            }

            .site-header .drawer-close-btn:active {
              transform: scale(0.95);
            }

            /* Drawers and mobile layout override */
            .site-header .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 85%;
              max-width: 360px;
              height: 100vh;
              background: rgba(255, 255, 255, 0.88);
              backdrop-filter: blur(25px) saturate(180%);
              -webkit-backdrop-filter: blur(25px) saturate(180%);
              box-shadow: -10px 0 35px rgba(0, 40, 40, 0.1);
              border-left: 1px solid rgba(0, 128, 128, 0.12);
              flex-direction: column;
              justify-content: space-between;
              align-items: stretch;
              gap: 0;
              padding: 100px 30px 40px 30px;
              transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
              z-index: 1080;
              overflow-y: auto;
              margin: 0;
              list-style: none;
            }

            .site-header .nav-menu.open {
              right: 0;
            }

            /* Mobile Links layout */
            .site-header .nav-menu-links {
              display: flex;
              flex-direction: column;
              gap: 12px;
              width: 100%;
            }

            .site-header .nav-menu li {
              width: 100%;
              opacity: 0;
              transform: translateX(30px);
              transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            }

            .site-header .nav-menu.open li {
              opacity: 1;
              transform: translateX(0);
              transition-delay: calc(var(--item-index) * 60ms);
            }

            /* Mobile Links Styling */
            .site-header .nav-menu .nav-link {
              display: block;
              width: 100%;
              padding: 12px 18px;
              font-size: 16px;
              font-weight: 600;
              border-radius: 12px;
              transition: all 0.3s ease;
              color: var(--dark);
            }

            .site-header .nav-menu .nav-link:hover {
              background: rgba(0, 128, 128, 0.04);
              transform: translateX(5px);
              color: var(--primary);
            }

            .site-header .nav-menu .nav-link::after {
              display: none !important;
            }

            /* Mobile Active Link State */
            .site-header .nav-menu .nav-link.active {
              background: rgba(0, 128, 128, 0.08);
              color: var(--primary);
              border-left: 4px solid var(--primary);
              border-radius: 0 12px 12px 0;
              padding-left: 14px;
            }

            /* Mobile Volunteer CTA Button override */
            .site-header .nav-menu .nav-link-apply {
              text-align: center;
              margin-top: 15px;
              width: 100%;
              padding: 14px 20px !important;
              box-shadow: 0 4px 12px rgba(0, 128, 128, 0.15);
              font-size: 15px;
              border-radius: 14px;
            }
            
            .site-header .nav-menu .nav-link-apply:hover {
              transform: translateY(-2px);
              background: linear-gradient(135deg, var(--accent) 0%, var(--accent-hover) 100%);
            }

            .site-header .nav-menu .nav-link-apply.active {
              border-left: none;
              padding-left: 20px;
            }

            /* Mobile Footer elements inside drawer */
            .site-header .mobile-drawer-footer {
              margin-top: auto;
              padding-top: 30px;
              border-top: 1px solid rgba(0, 128, 128, 0.1);
              display: flex;
              flex-direction: column;
              gap: 15px;
              width: 100%;
            }

            .site-header .drawer-email {
              font-size: 14px;
              color: var(--primary);
              text-decoration: none;
              font-weight: 500;
              transition: color 0.3s ease;
              display: flex;
              align-items: center;
              gap: 8px;
            }

            .site-header .drawer-email:hover {
              color: var(--accent);
            }

            .site-header .drawer-socials {
              display: flex;
              gap: 15px;
              margin-top: 5px;
            }

            .site-header .drawer-social-icon {
              width: 38px;
              height: 38px;
              border-radius: 50%;
              background: rgba(0, 128, 128, 0.05);
              display: flex;
              align-items: center;
              justify-content: center;
              color: var(--primary);
              transition: all 0.3s ease;
            }

            .site-header .drawer-social-icon:hover {
              background: var(--primary);
              color: var(--white);
              transform: translateY(-3px);
            }

            .site-header .drawer-location {
              font-size: 12px;
              color: var(--dark);
              opacity: 0.6;
              margin-top: 5px;
              display: flex;
              align-items: center;
              gap: 5px;
            }
          }
        `}} />

        <div className="nav-container">
          <Link href="/" className="logo" aria-label="DIWASI Homepage">
            <span className="logo-title">
              <span className="logo-text-desktop">Volunteer Sri Lanka With Diwasi</span>
              <span className="logo-text-mobile">Volunteer With Diwasi</span>
            </span>
            <span className="logo-subtitle">where stays become stories</span>
          </Link>
          
          <button 
            className={`nav-toggle ${navOpen ? "open" : ""}`} 
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={navOpen}
            aria-controls="nav-menu"
          >
            <div className="nav-toggle-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <nav id="primaryNav" className="nav-menu-wrapper">
            <ul id="nav-menu" className={`nav-menu ${navOpen ? "open" : ""}`}>
              {/* Dedicated High-Contrast Close Button inside the Drawer on Mobile */}
              <button 
                className="drawer-close-btn" 
                onClick={() => setNavOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="nav-menu-links">
                {navLinks.map((link, index) => (
                  <li 
                    key={link.id}
                    style={{ "--item-index": index } as React.CSSProperties}
                  >
                    <Link 
                      href={link.path} 
                      className={`nav-link ${currentPage === link.id ? "active" : ""}`}
                      aria-current={currentPage === link.id ? "page" : undefined}
                      onClick={() => setNavOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li style={{ "--item-index": navLinks.length } as React.CSSProperties}>
                  <Link 
                    href="/apply" 
                    className={`nav-link nav-link-apply ${currentPage === "apply" ? "active" : ""}`}
                    aria-current={currentPage === "apply" ? "page" : undefined}
                    onClick={() => setNavOpen(false)}
                  >
                    Volunteer Application
                  </Link>
                </li>
              </div>

              {/* Mobile Drawer Footer - Only visible on media query */}
              <div className="mobile-drawer-footer">
                <a href="mailto:diwasicherath@gmail.com" className="drawer-email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  diwasicherath@gmail.com
                </a>
                <div className="drawer-socials">
                  <a href="https://www.facebook.com/share/1BupWRJmQs/?mibextid=wwXIfr" className="drawer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                  <a href="https://www.instagram.com/diwasi.herath?igsh=MTRxc29nb2czcmhqMg%3D%3D&utm_source=qr" className="drawer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="https://youtube.com/@diwasiherath?si=aLIuuY8phvwxz8Tc" className="drawer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/><polygon points="10 15 15 12 10 9 10 15"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/diwasi-herath-58a78b3b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="drawer-social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                </div>
                <div className="drawer-location">
                  <span>🇱🇰</span> Sri Lanka Volunteer Program
                </div>
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
