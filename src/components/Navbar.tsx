"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  currentPage: "home" | "about" | "projects" | "places" | "gallery" | "contact" | "apply" | "reviews" | "blog";
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
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "reviews", label: "Reviews", path: "/reviews" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  const linkIcons: Record<string, React.ReactNode> = {
    home: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    about: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    projects: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    places: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    gallery: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    ),
    blog: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    reviews: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    contact: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    apply: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    )
  };

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

          /* Elevate header stacking context when menu is open to render drawer above overlay */
          .site-header.menu-open {
            z-index: 1080 !important;
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

          /* Morph to X (Open state: changes to high contrast white color on solid teal background) */
          .site-header .nav-toggle.open span:nth-child(1) {
            transform: translateY(6px) rotate(45deg);
            background-color: var(--white) !important;
          }

          .site-header .nav-toggle.open span:nth-child(2) {
            opacity: 0;
          }

          .site-header .nav-toggle.open span:nth-child(3) {
            transform: translateY(-6px) rotate(-45deg);
            background-color: var(--white) !important;
          }

          /* Hide drawer components on desktop */
          .site-header .nav-link-icon {
            display: none;
          }

          .site-header .drawer-brand-header {
            display: none;
          }

          .site-header .mobile-drawer-footer {
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
            /* Fix header opacity on mobile/tablet: Opaque white background */
            .site-header {
              background-color: #ffffff !important;
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
              box-shadow: 0 4px 20px rgba(0, 80, 80, 0.08) !important;
            }

            /* Dim and disable interaction with the background logo when menu is open */
            .site-header.menu-open .logo {
              opacity: 0.15;
              pointer-events: none;
            }

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

            /* High contrast styling for open toggle button */
            .site-header .nav-toggle.open {
              background: var(--primary) !important;
              border-color: var(--primary) !important;
              box-shadow: 0 4px 10px rgba(0, 128, 128, 0.2);
            }

            /* Drawer Brand Header inside Menu */
            .site-header .drawer-brand-header {
              display: flex;
              flex-direction: column;
              padding: 0 16px 20px 16px;
              border-bottom: 1px solid rgba(0, 128, 128, 0.08);
              margin-bottom: 15px;
            }

            .site-header .drawer-logo-title {
              font-family: var(--font-display), var(--font-outfit), sans-serif;
              font-size: 20px;
              font-weight: 800;
              letter-spacing: -0.5px;
              line-height: 1.2;
              background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }

            .site-header .drawer-logo-subtitle {
              font-family: var(--font-sans), var(--font-inter), sans-serif;
              font-size: 9px;
              font-weight: 600;
              letter-spacing: 0.5px;
              color: var(--primary);
              opacity: 0.8;
              margin-top: 1px;
            }

            /* Drawers and mobile layout override (solid background, no bleed through) */
            .site-header .nav-menu {
              position: fixed;
              top: 0;
              right: -100%;
              width: 85%;
              max-width: 360px;
              height: 100vh;
              background: #ffffff !important;
              backdrop-filter: none !important;
              -webkit-backdrop-filter: none !important;
              box-shadow: -10px 0 35px rgba(0, 40, 40, 0.1);
              border-left: 1px solid rgba(0, 128, 128, 0.12);
              flex-direction: column;
              justify-content: space-between;
              align-items: stretch;
              gap: 0;
              padding: 95px 24px 30px 24px;
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
              gap: 8px;
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

            /* Mobile Links Styling with SVGs */
            .site-header .nav-link-icon {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              color: inherit;
              opacity: 0.75;
              transition: transform 0.3s ease;
            }

            .site-header .nav-menu .nav-link {
              display: flex;
              align-items: center;
              gap: 14px;
              width: 100%;
              padding: 11px 16px;
              font-size: 15px;
              font-weight: 600;
              border-radius: 10px;
              transition: all 0.3s ease;
              color: var(--dark);
            }

            .site-header .nav-menu .nav-link:hover {
              background: rgba(0, 128, 128, 0.04);
              transform: translateX(5px);
              color: var(--primary);
            }

            .site-header .nav-menu .nav-link:hover .nav-link-icon {
              transform: scale(1.1);
              opacity: 1;
              color: var(--accent-hover);
            }

            .site-header .nav-menu .nav-link::after {
              display: none !important;
            }

            /* Mobile Active Link State */
            .site-header .nav-menu .nav-link.active {
              background: rgba(0, 128, 128, 0.08);
              color: var(--primary);
              border-left: 4px solid var(--primary);
              border-radius: 0 10px 10px 0;
              padding-left: 12px;
            }

            .site-header .nav-menu .nav-link.active .nav-link-icon {
              opacity: 1;
              color: var(--primary);
            }

            /* Mobile Volunteer CTA Button override */
            .site-header .nav-menu .nav-link-apply {
              text-align: center;
              margin-top: 10px;
              width: 100%;
              padding: 12px 20px !important;
              box-shadow: 0 4px 12px rgba(0, 128, 128, 0.15);
              font-size: 15px;
              border-radius: 10px;
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
              display: flex;
              margin-top: auto;
              padding-top: 20px;
              border-top: 1px solid rgba(0, 128, 128, 0.1);
              flex-direction: column;
              gap: 12px;
              width: 100%;
            }

            .site-header .drawer-card {
              background: linear-gradient(135deg, rgba(0, 128, 128, 0.05) 0%, rgba(255, 191, 0, 0.03) 100%);
              border: 1px solid rgba(0, 128, 128, 0.08);
              padding: 12px;
              border-radius: 10px;
            }

            .site-header .drawer-card-title {
              font-size: 13px;
              font-weight: 700;
              color: var(--primary);
              margin: 0 0 3px 0;
            }

            .site-header .drawer-card-text {
              font-size: 11px;
              color: var(--dark);
              opacity: 0.75;
              margin: 0;
              line-height: 1.35;
            }

            .site-header .drawer-email {
              font-size: 13.5px;
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
              gap: 12px;
              margin-top: 2px;
            }

            .site-header .drawer-social-icon {
              width: 36px;
              height: 36px;
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
              font-size: 11.5px;
              color: var(--dark);
              opacity: 0.6;
              margin-top: 2px;
              display: flex;
              align-items: center;
              gap: 5px;
            }
          }
        `}} />

        <div className="nav-container">
          <Link href="/" className="logo" aria-label="DIWASI Homepage">
            <span className="logo-title">
              <span className="logo-text-desktop">Volunteer Work in Sri Lanka | DIWASI</span>
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
              {/* Dedicated Branding inside mobile drawer */}
              <div className="drawer-brand-header">
                <span className="drawer-logo-title">DIWASI</span>
                <span className="drawer-logo-subtitle">Volunteer Sri Lanka</span>
              </div>

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
                      <span className="nav-link-icon">{linkIcons[link.id]}</span>
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
                    <span className="nav-link-icon">{linkIcons.apply}</span>
                    Volunteer Application
                  </Link>
                </li>
              </div>

              {/* Mobile Drawer Footer - Only visible on media query */}
              <div className="mobile-drawer-footer">
                <div className="drawer-card">
                  <p className="drawer-card-title">Ready to volunteer?</p>
                  <p className="drawer-card-text">Join us in Sri Lanka and create impact that lasts a lifetime.</p>
                </div>
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
