"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdgNzmUgKlDBuQHjnT_lVHbx_dqvTK9youBiMiPRrCZCMpzGA/viewform?usp=header";

export default function ContactPage() {
  const [showForm, setShowForm] = useState<boolean>(false);


  if (showForm) {
    return (
      <>
        <Navbar currentPage="contact" />
        
        <div style={{ maxWidth: "900px", margin: "40px auto 0 auto", padding: "0 20px" }}>
          <button
            onClick={() => setShowForm(false)}
            style={{
              background: "none",
              border: "none",
              color: "#0056b3",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
              transition: "transform 0.2s ease, color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-4px)";
              e.currentTarget.style.color = "#004085";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.color = "#0056b3";
            }}
          >
            ← Back to Contact Information
          </button>
        </div>

        <div className="page-header" style={{ marginTop: 0, textAlign: "center", padding: "20px 20px 40px" }}>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.5px", background: "linear-gradient(135deg, var(--dark) 30%, #0056b3 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Send Us a Message
          </h1>
          <p style={{ maxWidth: "780px", margin: "0 auto", color: "var(--gray-600)", fontSize: "1.15rem", lineHeight: "1.65" }}>
            Have questions or want to customize your stay? Send us a message directly via our online form.
          </p>
        </div>

        <main className="app-container" style={{ maxWidth: "900px", margin: "0 auto 100px", padding: "0 20px" }}>
          <div className="reveal is-visible" style={{
            backgroundColor: "var(--white)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            border: "1px solid var(--gray-200)",
            overflow: "hidden"
          }}>
            <iframe 
              src={GOOGLE_FORM_URL}
              title="Send Us a Message Form"
              style={{
                width: "100%",
                height: "1400px",
                border: "none",
                borderRadius: "8px",
                display: "block"
              }}
            >
              Loading Message Form…
            </iframe>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar currentPage="contact" />

      {/* Embedded CSS for custom styling matching the modernized premium aesthetics */}
      <style dangerouslySetInnerHTML={{__html: `
        .contact-layout {
          max-width: 1200px;
          margin: 20px auto 100px;
          padding: 0 24px;
          position: relative;
          z-index: 1;
        }

        /* 3-Column Contact Cards Grid */
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
          margin-bottom: 100px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(229, 231, 235, 0.5);
          border-radius: 24px;
          padding: 48px 32px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.01);
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.01);
        }

        /* Card theme modifiers */
        .card-orange:hover {
          border-color: #f59e0b;
        }
        .card-green:hover {
          border-color: #10b981;
        }
        .card-blue:hover {
          border-color: #0056b3;
        }

        /* Icon Circles */
        .icon-circle {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }
        .contact-card:hover .icon-circle {
          transform: scale(1.1) rotate(5deg);
        }

        .circle-orange {
          background: linear-gradient(135deg, #f59e0b, #d97706);
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.25);
        }
        .circle-green {
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.25);
        }
        .circle-blue {
          background: linear-gradient(135deg, #3b82f6, #0056b3);
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.25);
        }

        /* Text Styles */
        .card-title {
          font-size: 1.5rem;
          font-weight: 850;
          color: var(--dark, #111827);
          margin: 0 0 10px 0;
          letter-spacing: -0.3px;
        }

        .card-subtext {
          font-size: 0.95rem;
          color: #6b7280;
          margin: 0 0 20px 0;
          font-weight: 500;
        }

        .card-highlight {
          font-size: 1.15rem;
          font-weight: 800;
          margin: 0 0 20px 0;
          line-height: 1.45;
          letter-spacing: -0.1px;
        }

        .highlight-orange {
          color: #d97706;
        }
        .highlight-green {
          color: #059669;
        }
        .highlight-blue {
          color: #0056b3;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .highlight-blue:hover {
          color: #004085;
          text-decoration: underline;
        }

        .card-description {
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.65;
          margin: 0;
        }

        /* Meet Our Co-Manager Section */
        .manager-section {
          text-align: center;
          margin-bottom: 100px;
          position: relative;
        }

        .manager-section-title {
          font-size: 2.25rem;
          font-weight: 850;
          color: var(--dark, #111827);
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, var(--dark, #111827) 30%, #0056b3 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .manager-section-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0 0 54px 0;
        }

        .manager-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(229, 231, 235, 0.6);
          border-radius: 24px;
          padding: 54px;
          max-width: 860px;
          margin: 0 auto;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          gap: 48px;
          align-items: center;
          text-align: left;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .manager-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.08);
        }
        .manager-card.card-blue:hover {
          border-color: rgba(0, 86, 179, 0.5);
        }
        .manager-card.card-green:hover {
          border-color: rgba(16, 185, 129, 0.5);
        }

        .manager-avatar-container {
          flex-shrink: 0;
          position: relative;
        }

        .manager-avatar {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease;
        }
        .manager-card:hover .manager-avatar {
          transform: scale(1.05);
        }

        .manager-info {
          flex-grow: 1;
        }

        .manager-header-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .manager-name {
          font-size: 1.8rem;
          font-weight: 850;
          color: var(--dark, #111827);
          margin: 0;
          letter-spacing: -0.3px;
        }

        .manager-contact-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .hotline-badge {
          color: #ffffff;
          padding: 6px 12px;
          font-size: 0.75rem;
          font-weight: 800;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
        }

        .badge-blue {
          background: linear-gradient(135deg, #3b82f6, #0056b3);
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
        }

        .badge-green {
          background: linear-gradient(135deg, #10b981, #059669);
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.2);
        }

        .hotline-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background-color: transparent;
          padding: 8px 20px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .button-green {
          color: #10b981;
          border: 2px solid #10b981;
        }

        .button-green:hover {
          background-color: #10b981;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .button-blue {
          color: #0056b3;
          border: 2px solid #0056b3;
        }

        .button-blue:hover {
          background-color: #0056b3;
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 86, 179, 0.25);
        }

        .manager-description {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.65;
          margin: 0;
        }

        /* Send Us a Message Section */
        .form-section {
          text-align: center;
          margin-bottom: 100px;
          position: relative;
        }

        .form-section-title {
          font-size: 2.25rem;
          font-weight: 850;
          color: var(--dark, #111827);
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, var(--dark, #111827) 30%, #0056b3 90%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .form-section-subtitle {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0 0 54px 0;
        }

        .dashboard-card {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
        }
        .dashboard-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 25px 50px rgba(0, 86, 179, 0.12), 0 1px 3px rgba(0, 86, 179, 0.04) !important;
          border-color: #0056b3 !important;
        }
        .action-btn {
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .action-btn:hover {
          background-color: #004085 !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(0, 86, 179, 0.3) !important;
        }
        .action-btn svg {
          transition: transform 0.2s ease;
        }
        .action-btn:hover svg {
          transform: translate(3px, -3px);
        }

        /* Responsive Breakpoints */
        @media (max-width: 768px) {
          .manager-card {
            flex-direction: column;
            text-align: center;
            padding: 36px 24px;
            gap: 32px;
          }

          .manager-header-row {
            justify-content: center;
          }

          .manager-contact-row {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}} />

      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* Decorative background blobs */}
        <div style={{
          position: "absolute",
          top: "2%",
          left: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(0, 86, 179, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
          zIndex: -1,
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "550px",
          height: "550px",
          background: "radial-gradient(circle, rgba(0, 128, 128, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
          zIndex: -1,
          pointerEvents: "none"
        }} />

        <div className="page-header" style={{ textAlign: "center", padding: "80px 20px 40px", position: "relative" }}>
          <span className="header-label" style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "2px", color: "#0056b3", textTransform: "uppercase", marginBottom: "8px", display: "inline-block" }}>
            Get In Touch
          </span>
          <h1 style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.5px", background: "linear-gradient(135deg, var(--dark, #111827) 30%, #0056b3 90%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Contact Volunteer Sri Lanka
          </h1>
          <p style={{ maxWidth: "780px", margin: "0 auto", color: "var(--gray-600)", fontSize: "1.15rem", lineHeight: "1.65", fontWeight: "400" }}>
            Have questions about our programs, accommodation, or travel details? We're here to help you every step of the way. Reach out to our team.
          </p>
        </div>

        <main className="contact-layout">
          {/* Top 3-Column Info Cards */}
          <section className="contact-grid">
            {/* Card 1: Location */}
            <div className="contact-card card-orange">
              <div className="icon-circle circle-orange">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="card-title">Our Location</h3>
              <p className="card-subtext">Visit us at our volunteer house</p>
              <div className="card-highlight highlight-orange">
                Diwasi - Northwestern province, Sri Lanka 
              </div>
              <p className="card-description">
                We're located in a beautiful area perfect for volunteers to explore Sri Lankan culture and make a meaningful impact.
              </p>
            </div>

            {/* Card 2: Phone */}
            <div className="contact-card card-green">
              <div className="icon-circle circle-green">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="card-title">Give Us a Call</h3>
              <p className="card-subtext">Speak directly with our team</p>
              <div className="card-highlight highlight-green">
                +94 74 348 1678
              </div>
              <p className="card-description">
                Available Monday to Friday, 9 AM to 6 PM (Sri Lanka Time). We're here to answer your questions and help plan your volunteer journey.
              </p>
            </div>

            {/* Card 3: Email */}
            <div className="contact-card card-blue">
              <div className="icon-circle circle-blue">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h3 className="card-title">Feel Free to Say Hi</h3>
              <p className="card-subtext">Send us an email at</p>
              <div className="card-highlight">
                <a href="mailto:diwasicherath@gmail.com" className="highlight-blue">
                  diwasicherath@gmail.com
                </a>
              </div>
              <p className="card-description">
                We'd love to hear from you and help with any questions you may have!
              </p>
            </div>
          </section>

          {/* Meet Our Leadership Section */}
          <section className="manager-section">
            <h2 className="manager-section-title">Meet Our Leadership Team</h2>
            <p className="manager-section-subtitle">
              Dedicated professionals coordinating your volunteering journey in Sri Lanka.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "40px", alignItems: "center" }}>
              {/* Card 1: Manager / Program Director (Diwasi Herath) */}
              <div className="manager-card card-blue">
                <div className="manager-avatar-container">
                  <Image
                    src="/images/diwasi-herath-program-director.jpeg"
                    alt="Diwasi Herath - Program Director / Manager"
                    className="manager-avatar"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="manager-info">
                  <div className="manager-header-row">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0056b3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <h3 className="manager-name">Diwasi Herath</h3>
                  </div>
                  <div className="manager-contact-row">
                    <span className="hotline-badge badge-blue">Project Manager</span>
                    <a href="tel:+94743481678" className="hotline-button button-blue">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      +94 74 348 1678
                    </a>
                  </div>
                  <p className="manager-description">
                    Oversees the strategic direction, international partnerships, and project coordination for Volunteer Sri Lanka with Diwasi. Coordinates logistics and volunteer placements, ensuring a safe, meaningful, and high-impact experience for all participants.
                  </p>
                </div>
              </div>

              {/* Card 2: Co-Manager (Mahee Janaka) */}
              <div className="manager-card card-green">
                <div className="manager-avatar-container">
                  <Image
                    src="/images/Co-diwasi-herath-program-director.jpeg"
                    alt="Mahee Janaka - Program Co-Manager"
                    className="manager-avatar"
                    width={180}
                    height={180}
                  />
                </div>
                <div className="manager-info">
                  <div className="manager-header-row">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <h3 className="manager-name">Mahee Janaka</h3>
                  </div>
                  <div className="manager-contact-row">
                    <span className="hotline-badge badge-green">Co-Manager</span>
                    <a href="tel:+94779978145" className="hotline-button button-green">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      +94 77 997 8145
                    </a>
                  </div>
                  <p className="manager-description">
                    Responsible for assisting in the daily operations of the volunteer program in Sri Lanka, coordinating volunteer activities, providing support and guidance, and serving as the primary hotline contact for inquiries, emergencies, and general support.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Send Us a Message Section */}
          <section className="form-section">
            <h2 className="form-section-title">Send Us a Message</h2>
            <p className="form-section-subtitle">
              Have questions or want to customize your stay? Get in touch with our team directly.
            </p>

            <div style={{ maxWidth: "860px", margin: "0 auto" }}>
              <div 
                className="dashboard-card primary-card reveal is-visible"
                onClick={() => setShowForm(true)}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "3px solid #0056b3",
                  borderRadius: "20px",
                  padding: "48px 36px",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "360px",
                  textAlign: "left",
                  cursor: "pointer"
                }}
              >
                <div>
                  {/* Header Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px", marginTop: "10px" }}>
                    {/* Icon */}
                    <div style={{
                      background: "linear-gradient(135deg, #0056b3, #0088ff)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 8px 20px rgba(0, 86, 179, 0.25)"
                    }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: "1.8rem", fontWeight: "800", color: "var(--dark)", margin: 0, lineHeight: "1.3", letterSpacing: "-0.2px" }}>
                      Send Us a Message
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ color: "var(--gray-700)", fontSize: "1.1rem", lineHeight: "1.7", marginBottom: "36px" }}>
                    Have questions or want to customize your stay? Send us a message directly via our online form. Quick and convenient way to start your journey with us.
                  </p>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    className="action-btn"
                    style={{
                      backgroundColor: "#0056b3",
                      color: "var(--white)",
                      border: "none",
                      padding: "14px 32px",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      borderRadius: "50px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow: "0 4px 15px rgba(0, 86, 179, 0.25)"
                    }}
                  >
                    Access Link
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
}
