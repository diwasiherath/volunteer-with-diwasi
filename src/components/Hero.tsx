import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true"></div>
      <div className="hero-content">
        <h1>Travel with purpose. Volunteer with love. Experience the true heart of Sri Lanka.</h1>
        <p>Be part of life-changing community initiatives, embrace rich cultural immersion, and uncover the charm of this tropical paradise.</p>
        <Link href="/projects" className="btn-cta">
          Explore Our Projects
        </Link>
      </div>
    </section>
  );
}
