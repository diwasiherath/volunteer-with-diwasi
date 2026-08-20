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
