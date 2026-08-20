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
            <h2>Coming Soon</h2>
            <p>Our host family program is our most popular way to stay — sharing meals, routines, and everyday life with a local family while you volunteer.</p>
            <p>We&apos;re building out a full page with family profiles and what to expect. Until then, see current rates on our <Link href="/pricing">Pricing</Link> page, or reach out directly with questions.</p>
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
      </main>

      <Footer />
    </>
  );
}
