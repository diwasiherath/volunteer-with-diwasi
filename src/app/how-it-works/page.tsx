import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STEPS = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our short application with your dates, interests, and a bit about yourself."
  },
  {
    number: "02",
    title: "Get Matched",
    description: "We confirm your project track and stay option — Host Family or Volunteer Villa — based on availability."
  },
  {
    number: "03",
    title: "Prepare for Sri Lanka",
    description: "We send a pre-departure guide covering travel, packing, visas, and what to expect on arrival."
  },
  {
    number: "04",
    title: "Arrive & Volunteer",
    description: "Land, settle in with your host, and start making an impact from day one."
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar currentPage="how-it-works" />

      <div className="page-header">
        <h1>How It Works</h1>
        <p>From application to arrival, here&apos;s what joining a volunteer program with us looks like.</p>
      </div>

      <main className="about-container">
        <div className="features-grid" style={{ marginBottom: "40px" }}>
          {STEPS.map((step) => (
            <div key={step.number} className="feature-card">
              <span style={{ color: "var(--accent)", fontWeight: 800, fontSize: "13px", letterSpacing: "1px" }}>STEP {step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className="split-section">
          <div className="split-text">
            <h2>Ready to Get Started?</h2>
            <p>Choose a project track, pick your stay, and apply — our team will guide you through every step from there.</p>
            <Link href="/apply" className="btn-primary" style={{ textDecoration: "none", width: "fit-content" }}>
              Apply Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
