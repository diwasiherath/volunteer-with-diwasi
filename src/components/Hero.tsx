import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-content">
        <span
          style={{
            display: "block",
            fontSize: "14px",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "3px",
            color: "var(--accent)",
            marginBottom: "16px",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}
        >
          DIWASI Volunteer Program
        </span>
        <h1>Volunteer Work in Sri Lanka — Travel with Purpose, Volunteer with Love.</h1>
        <p>Be part of life-changing DIWASI community initiatives, embrace rich cultural immersion, and uncover the charm of this tropical paradise.</p>
        <Link href="/projects" className="btn-cta">
          Explore Our Projects
        </Link>
      </div>
    </section>
  );
}
