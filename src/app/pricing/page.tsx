import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Navbar currentPage="pricing" />

      <div className="page-header">
        <h1>Program Pricing</h1>
        <p>Transparent packaging that directly funds local community development, host initiatives, and fully managed accommodation.</p>
      </div>

      <main className="about-container">
        <div className="pricing-section">
          <h2 className="section-title">What Your Contribution Supports</h2>
          <div style={{ maxWidth: "760px", margin: "0 auto 40px auto" }}>
            <p style={{ marginBottom: "16px" }}>
              Your program fee doesn&apos;t simply pay for accommodation.
            </p>
            <p>
              It helps us provide your stay, meals, local support and volunteer experience while contributing to the operation of our community initiatives.
            </p>
            <p style={{ marginTop: "16px" }}>
              Your stay helps create opportunities for both travelers and the local community.
            </p>

            <p style={{ marginTop: "28px", marginBottom: "10px", fontWeight: 700, color: "var(--dark)" }}>
              Your program includes:
            </p>
            <ul className="price-features" style={{ marginBottom: 0 }}>
              <li>Accommodation</li>
              <li>Meals</li>
              <li>Volunteer placement</li>
              <li>Local orientation</li>
              <li>Host-family support</li>
              <li>Cultural interaction</li>
              <li>Local guidance</li>
            </ul>
          </div>

          <h2 className="section-title">Program Contributions</h2>
          <p className="section-subtitle">Every contribution goes straight back into the communities and families you&apos;ll be living and working alongside.</p>

          <div className="pricing-grid">
            <div className="price-card featured" style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }}>
              <span className="badge">Most Popular Track</span>
              <div className="price-header">
                <h3>Living with a Local Family</h3>
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
              <Link href="/apply" className="btn-primary" style={{ justifyContent: "center", textDecoration: "none" }}>
                Select Track
              </Link>
            </div>
          </div>

          <p className="pricing-footer-text">
            *Rates can be fully customized based on long-term stays, medical validation extensions, or group deployments. More packages — including our Volunteer Villa track — are being finalized. Reach out through the application link for a personalized quote.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
