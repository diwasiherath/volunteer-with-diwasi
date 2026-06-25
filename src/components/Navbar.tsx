"use client";

import { useState, useEffect } from "react";
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
    <header className={`site-header ${isScrolled ? "scrolled" : ""}`}>
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

        /* Enhancing Logo Interactions */
        .site-header .logo {
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          text-decoration: none;
        }
        .site-header .logo:hover {
          transform: scale(1.02);
        }
        .site-header .logo span {
          display: block;
          font-weight: 500;
          letter-spacing: 0.5px;
          color: var(--primary);
          opacity: 0.8;
          transition: opacity 0.3s ease, color 0.3s ease;
        }
        .site-header .logo:hover span {
          opacity: 1;
          color: var(--accent-hover);
        }

        /* Modern Nav Links Underline & Glow */
        .site-header .nav-link {
          position: relative;
          transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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
          text-shadow: 0 0 1px rgba(0, 128, 128, 0.2);
        }

        /* Custom premium action button for Volunteer Application */
        .site-header .nav-link-apply {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
          color: var(--white) !important;
          padding: 8px 20px !important;
          border-radius: 25px;
          box-shadow: 0 4px 15px rgba(0, 128, 128, 0.2);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          font-weight: 700;
        }

        .site-header .nav-link-apply::after {
          display: none !important;
        }

        .site-header .nav-link-apply:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 128, 128, 0.3);
          color: var(--accent) !important;
        }

        .site-header .nav-link-apply:active {
          transform: translateY(0);
        }

        /* Hamburger Morph Animation */
        .site-header .nav-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1100;
        }

        .site-header .nav-toggle span {
          width: 100%;
          height: 2px;
          background-color: var(--dark);
          border-radius: 2px;
          transition: transform 0.3s cubic-bezier(0.68, -0.6, 0.27, 1.55), 
                      opacity 0.3s ease,
                      background-color 0.3s ease;
        }

        .site-header .nav-toggle.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
          background-color: var(--primary);
        }

        .site-header .nav-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .site-header .nav-toggle.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
          background-color: var(--primary);
        }

        @media (max-width: 900px) {
          .site-header .nav-toggle {
            display: flex;
          }
          
          .site-header .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: -10px 0 35px rgba(0, 80, 80, 0.08);
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 25px;
            padding: 100px 40px;
            transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            border-left: 1px solid rgba(0, 128, 128, 0.08);
          }
          
          .site-header .nav-menu.open {
            right: 0;
          }

          .site-header .nav-menu li {
            width: 100%;
          }

          .site-header .nav-menu .nav-link-apply {
            display: inline-block;
            text-align: center;
            width: 100%;
            margin-top: 15px;
          }
        }
      `}} />

      <div className="nav-container">
        <Link href="/" className="logo" aria-label="DIWASI Homepage">
          Volunteer Sri Lanka With Diwasi <span>where stays become stories</span>
        </Link>
        
        <button 
          className={`nav-toggle ${navOpen ? "open" : ""}`} 
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={navOpen}
          aria-controls="nav-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav id="primaryNav">
          <ul id="nav-menu" className={`nav-menu ${navOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
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
            <li>
              <Link 
                href="/apply" 
                className={`nav-link nav-link-apply ${currentPage === "apply" ? "active" : ""}`}
                aria-current={currentPage === "apply" ? "page" : undefined}
                onClick={() => setNavOpen(false)}
              >
                Volunteer Application
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
