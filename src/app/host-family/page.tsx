import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HostFamilyPage() {
  return (
    <>
      <Navbar currentPage="host-family" />

      <div className="page-header">
        <h1>Host Family</h1>
        <p>Live with a local Sri Lankan family and experience daily life beyond the project site.</p>
      </div>

      <main className="about-container">
        <div className="split-section">
          <div className="split-text">
            <h2>Don&apos;t Just Stay in Sri Lanka - Live with Sri Lankans</h2>
            <p>One of the most special parts of your experience is getting to know the people behind the destination.</p>
            <p>You&apos;ll have the opportunity to experience everyday Sri Lankan life - not just the version you see in tourist guides.</p>
            <p>Share stories. Try local food. Learn simple Sinhala words. Discover family traditions. Ask questions. Laugh together.</p>
            <p style={{ fontWeight: 700, color: "var(--primary)" }}>
              Sometimes, the memories you&apos;ll take home won&apos;t be from the most famous tourist attraction — they&apos;ll be from sitting around a table with your Sri Lankan host family.
            </p>
            <Link href="/apply" className="btn-primary" style={{ textDecoration: "none", width: "fit-content" }}>
              Ask About Host Families
            </Link>
          </div>
        </div>

        <h2 className="section-title">What to Expect</h2>
        <p className="section-subtitle">A genuine window into Sri Lankan family life.</p>
        <div className="features-grid" style={{ marginBottom: "40px" }}>
          <div className="feature-card">
            <h3>Home-Cooked Meals</h3>
            <p>All meals included, prepared by your host family with traditional Sri Lankan cooking.</p>
          </div>
          <div className="feature-card">
            <h3>Cultural Immersion</h3>
            <p>Learn local customs, language basics, and daily routines directly from the people who live them.</p>
          </div>
          <div className="feature-card">
            <h3>A Home Away From Home</h3>
            <p>Shared accommodation, free WiFi, laundry, and a family looking out for you throughout your stay.</p>
          </div>
        </div>

        <h2 className="section-title">A Day in the Life of a Volunteer</h2>
        <p className="section-subtitle">What could a typical day look like? Every day is different — that&apos;s part of the experience.</p>
        <div className="features-grid" style={{ marginBottom: "40px" }}>
          <div className="feature-card">
            <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>☀️</span>
            <h3>Morning</h3>
            <p>Wake up, enjoy breakfast and prepare for the day&apos;s activities.</p>
          </div>
          <div className="feature-card">
            <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>🤝</span>
            <h3>Daytime</h3>
            <p>Take part in your volunteer project and spend meaningful time with the local community.</p>
          </div>
          <div className="feature-card">
            <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>🍛</span>
            <h3>Afternoon</h3>
            <p>Return to the villa, relax, explore the surrounding area or participate in a cultural activity.</p>
          </div>
          <div className="feature-card">
            <span style={{ fontSize: "32px", display: "block", marginBottom: "10px" }}>🌅</span>
            <h3>Evening</h3>
            <p>Enjoy dinner, talk with your hosts and other volunteers, share stories and plan the next day&apos;s adventure.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
