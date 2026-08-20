import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VolunteerVillaPage() {
  return (
    <>
      <Navbar currentPage="volunteer-villa" />

      <div className="page-header">
        <h1>Volunteer Villa</h1>
        <p>A shared volunteer house for those who want their own space alongside fellow volunteers.</p>
      </div>

      <main className="about-container">
        <div className="split-section">
          <div className="split-text">
            <h2>More Than Accommodation — Your Sri Lankan Home</h2>
            <p>Our volunteer villa isn&apos;t simply a place to sleep.</p>
            <p>It is a place where international volunteers can slow down, connect with local people and experience everyday Sri Lankan life.</p>
            <p>Rather than staying in a large commercial hostel surrounded only by other tourists, you&apos;ll have the opportunity to experience the warmth of a local family environment.</p>
            <p style={{ fontWeight: 700, color: "var(--primary)" }}>
              Wake up in Sri Lanka. Share meals. Meet locals. Volunteer. Explore. Make memories.
            </p>
            <Link href="/apply" className="btn-primary" style={{ textDecoration: "none", width: "fit-content" }}>
              Ask About the Villa
            </Link>
          </div>
        </div>

        <h2 className="section-title">What Makes Our Villa Different?</h2>
        <p className="section-subtitle">A community-style stay built for volunteers, by volunteers.</p>
        <div className="values-grid" style={{ marginBottom: "40px" }}>
          <div className="value-card">
            <span className="value-icon">🏡</span>
            <h3>Local family environment</h3>
          </div>
          <div className="value-card">
            <span className="value-icon">🍛</span>
            <h3>Authentic Sri Lankan meals</h3>
          </div>
          <div className="value-card">
            <span className="value-icon">🌿</span>
            <h3>Peaceful surroundings</h3>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>International volunteer community</h3>
          </div>
          <div className="value-card">
            <span className="value-icon">🇱🇰</span>
            <h3>Cultural experiences</h3>
          </div>
          <div className="value-card">
            <span className="value-icon">❤️</span>
            <h3>A welcoming home away from home</h3>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
