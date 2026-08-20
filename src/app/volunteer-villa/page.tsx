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
            <h2>Coming Soon</h2>
            <p>We&apos;re putting the finishing touches on our dedicated Volunteer Villa — a shared house option for volunteers who&apos;d rather stay together than with a host family, while still being minutes from every project site.</p>
            <p>Full details on rooms, amenities, and pricing will be published here shortly. In the meantime, get in touch and we&apos;ll walk you through what&apos;s available.</p>
            <Link href="/apply" className="btn-primary" style={{ textDecoration: "none", width: "fit-content" }}>
              Ask About the Villa
            </Link>
          </div>
        </div>

        <h2 className="section-title">Why Volunteers Choose It</h2>
        <p className="section-subtitle">A community-style stay built for volunteers, by volunteers.</p>
        <div className="features-grid" style={{ marginBottom: "40px" }}>
          <div className="feature-card">
            <h3>Built-in Community</h3>
            <p>Live alongside other volunteers from around the world and share the experience day to day.</p>
          </div>
          <div className="feature-card">
            <h3>Close to Projects</h3>
            <p>Short commutes to schools, community centers, and every core volunteer track.</p>
          </div>
          <div className="feature-card">
            <h3>Comfort & Privacy</h3>
            <p>Private and shared rooms, common areas, and reliable WiFi for downtime between projects.</p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
