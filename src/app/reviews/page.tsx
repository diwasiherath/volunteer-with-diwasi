"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VolunteerReview } from "@/types";
import { fetchApprovedReviews, saveLocalReview, TRACK_NAMES, DEFAULT_FORM_URL, cleanGoogleFormUrl } from "@/lib/reviews";


export default function ReviewsPage() {
  const [reviews, setReviews] = useState<VolunteerReview[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTrack, setSelectedTrack] = useState<string>("all");
  const [selectedRating, setSelectedRating] = useState<string>("all");
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Stats
  const [stats, setStats] = useState({
    average: 0,
    total: 0,
    counts: [0, 0, 0, 0, 0] // 1, 2, 3, 4, 5 stars
  });

  const loadData = async () => {
    setLoading(true);
    const data = await fetchApprovedReviews();
    setReviews(data);
    
    // Calculate stats
    if (data.length > 0) {
      const sum = data.reduce((acc, curr) => acc + curr.rating, 0);
      const avg = parseFloat((sum / data.length).toFixed(1));
      const cnts = [0, 0, 0, 0, 0];
      data.forEach(r => {
        if (r.rating >= 1 && r.rating <= 5) {
          cnts[r.rating - 1]++;
        }
      });
      setStats({
        average: avg,
        total: data.length,
        counts: cnts
      });
    } else {
      setStats({ average: 0, total: 0, counts: [0, 0, 0, 0, 0] });
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();

    // IntersectionObserver for scroll animations
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);


  // Filtered reviews
  const filteredReviews = reviews.filter(r => {
    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          r.reviewText.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.country.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTrack = selectedTrack === "all" || r.trackId === selectedTrack;
    
    const matchesRating = selectedRating === "all" || r.rating.toString() === selectedRating;

    return matchesSearch && matchesTrack && matchesRating;
  });

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  const getAvatarGradient = (name: string) => {
    const colors = [
      "linear-gradient(135deg, #008080 0%, #006666 100%)", // Teal
      "linear-gradient(135deg, #FFBF00 0%, #e6ac00 100%)", // Amber
      "linear-gradient(135deg, #2C3E50 0%, #1A252F 100%)", // Slate
      "linear-gradient(135deg, #188038 0%, #115c28 100%)", // Green
      "linear-gradient(135deg, #3f51b5 0%, #283593 100%)", // Indigo
    ];
    let sum = 0;
    for (let i = 0; i < name.length; i++) sum += name.charCodeAt(i);
    return colors[sum % colors.length];
  };

  return (
    <>
      <Navbar currentPage="reviews" />
      
      <style dangerouslySetInnerHTML={{__html: `
        .reviews-layout {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .reviews-layout {
            grid-template-columns: 1fr;
          }
        }

        .stats-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
        }

        .stats-large {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 15px;
        }

        .stats-number {
          font-size: 3rem;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
        }

        .stats-stars {
          font-size: 1.25rem;
          color: var(--accent);
        }

        .stats-bar-container {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
          font-size: 0.85rem;
          color: var(--gray-600);
        }

        .stats-bar-bg {
          flex-grow: 1;
          height: 8px;
          background: var(--gray-100);
          border-radius: 4px;
          overflow: hidden;
        }

        .stats-bar-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 4px;
        }

        .filter-section {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
          margin-top: 20px;
        }

        .filter-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: var(--dark);
          border-bottom: 2px solid var(--gray-100);
          padding-bottom: 8px;
        }

        .filter-group {
          margin-bottom: 15px;
        }

        .filter-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
          color: var(--gray-700);
        }

        .filter-input, .filter-select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid var(--gray-300);
          border-radius: 8px;
          font-size: 0.95rem;
          background: var(--white);
          color: var(--dark);
          transition: border-color var(--transition-fast);
        }

        .filter-input:focus, .filter-select:focus {
          outline: none;
          border-color: var(--primary);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .review-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }

        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
        }

        .review-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .review-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
        }

        .review-user-info h3 {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 2px;
        }

        .review-user-info p {
          font-size: 0.8rem;
          color: var(--gray-600);
        }

        .review-rating-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .review-stars {
          color: var(--accent);
          font-size: 1rem;
        }

        .review-date {
          font-size: 0.8rem;
          color: var(--gray-600);
        }

        .review-text {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--dark);
          margin-bottom: 15px;
          position: relative;
        }

        .review-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .review-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 20px;
        }

        .badge-track {
          background: rgba(0, 128, 128, 0.08);
          color: var(--primary);
          border: 1px solid rgba(0, 128, 128, 0.15);
        }


        /* Modal Custom Styling Override */
        .modal-close {
          z-index: 10;
        }

        .star-picker {
          display: flex;
          gap: 6px;
          font-size: 1.75rem;
          margin-bottom: 15px;
        }

        .star-picker-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--gray-300);
          transition: color var(--transition-fast), transform var(--transition-fast);
          padding: 0;
        }

        .star-picker-btn:hover {
          transform: scale(1.15);
        }

        .star-picker-btn.filled {
          color: var(--accent);
        }

        .write-review-hero {
          background: linear-gradient(135deg, rgba(0,128,128,0.05) 0%, rgba(255,191,0,0.05) 100%);
          border-radius: 12px;
          padding: 30px;
          border: 1px dashed var(--primary);
          text-align: center;
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }

        .no-results {
          text-align: center;
          padding: 40px;
          background: var(--white);
          border-radius: 12px;
          border: 1px solid var(--gray-200);
          color: var(--gray-600);
        }

        .success-box {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          font-size: 3rem;
          color: var(--success);
          margin-bottom: 15px;
        }
      `}} />

      <div className="page-header">
        <h1>Volunteer Reviews & Stories</h1>
        <p>Real experiences from our global community of change-makers in Sri Lanka</p>
      </div>

      <main className="reviews-layout">
        {/* Sidebar Controls */}
        <aside>
          <div className="stats-card">
            <h3>Community Rating</h3>
            <div className="stats-large">
              <span className="stats-number">{stats.average || "0.0"}</span>
              <div>
                <div className="stats-stars">
                  {"★".repeat(Math.round(stats.average)) + "☆".repeat(5 - Math.round(stats.average))}
                </div>
                <span style={{ fontSize: "0.8rem", color: "var(--gray-600)" }}>
                  Based on {stats.total} reviews
                </span>
              </div>
            </div>

            {/* Ratings bars */}
            {[5, 4, 3, 2, 1].map((stars) => {
              const count = stats.counts[stars - 1] || 0;
              const percentage = stats.total > 0 ? (count / stats.total) * 100 : 0;
              return (
                <div key={stars} className="stats-bar-container">
                  <span style={{ width: "40px" }}>{stars} Star</span>
                  <div className="stats-bar-bg">
                    <div className="stats-bar-fill" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <span style={{ width: "25px", textAlign: "right" }}>{count}</span>
                </div>
              );
            })}
          </div>

          <div className="filter-section">
            <h3 className="filter-title">Filter & Search</h3>
            
            <div className="filter-group">
              <label htmlFor="search">Search Keywords</label>
              <input
                type="text"
                id="search"
                className="filter-input"
                placeholder="Name, country, comments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="filter-group">
              <label htmlFor="track">Volunteer Track</label>
              <select
                id="track"
                className="filter-select"
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value)}
              >
                <option value="all">All Project Tracks</option>
                {Object.entries(TRACK_NAMES).map(([id, name]) => (
                  <option key={id} value={id}>{name}</option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="rating">Star Rating</label>
              <select
                id="rating"
                className="filter-select"
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
              >
                <option value="all">All Ratings</option>
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            <button
              className="btn-outline"
              style={{ width: "100%", marginTop: "10px", padding: "10px" }}
              onClick={() => {
                setSearchQuery("");
                setSelectedTrack("all");
                setSelectedRating("all");
              }}
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Content area */}
        <section>
          {/* Write review callout */}
          <div className="write-review-hero">
            <h2 style={{ fontSize: "1.3rem", fontWeight: "700", color: "var(--dark)" }}>
              Did you volunteer with Diwasi Sri Lanka?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--gray-600)", maxWidth: "550px" }}>
              Your feedback helps us refine our community projects and guides future volunteers on their journeys. Share your story with us today!
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "5px" }}>
              <button className="btn-primary" onClick={() => setIsModalOpen(true)}>
                Write a Review
              </button>
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <div className="loading-spinner" style={{
                width: "40px",
                height: "40px",
                border: "4px solid var(--gray-200)",
                borderTopColor: "var(--primary)",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
                margin: "0 auto 15px auto"
              }}></div>
              <p>Loading approved reviews...</p>
              <style>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : filteredReviews.length > 0 ? (
            <div className="reviews-grid">
              {filteredReviews.map((rev) => (
                <article key={rev.id} className="review-card">
                  <div className="review-header">
                    <div className="review-avatar" style={{ background: getAvatarGradient(rev.name) }}>
                      {getInitials(rev.name)}
                    </div>
                    <div className="review-user-info">
                      <h3>{rev.name}</h3>
                      <p>Volunteer from {rev.country}</p>
                    </div>
                  </div>

                  <div className="review-rating-row">
                    <div className="review-stars">
                      {"★".repeat(rev.rating) + "☆".repeat(5 - rev.rating)}
                    </div>
                    <span className="review-date">{rev.date}</span>
                  </div>

                  <p className="review-text">"{rev.reviewText}"</p>

                  <div className="review-badges">
                    <span className="review-badge badge-track">
                      {TRACK_NAMES[rev.trackId] || rev.trackId}
                    </span>

                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No Reviews Found</h3>
              <p style={{ marginTop: "10px" }}>Try adjusting your keywords, project track filters, or star rating selectors to find what you are looking for.</p>
            </div>
          )}
        </section>
      </main>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="modal-overlay active" onClick={() => setIsModalOpen(false)}>
          <div className="modal-container" style={{ maxWidth: "600px", padding: "30px" }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close modal">×</button>
            
            <h2 style={{ marginBottom: "20px", borderBottom: "2px solid var(--gray-100)", paddingBottom: "10px" }}>
              Submit Volunteer Review
            </h2>

            <div style={{ minHeight: "450px" }}>
              <iframe 
                src={cleanGoogleFormUrl(DEFAULT_FORM_URL)}
                title="Submit Volunteer Review"
                style={{
                  width: "100%",
                  height: "550px",
                  border: "none",
                  borderRadius: "8px",
                  background: "var(--white)"
                }}
              >
                Loading form...
              </iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
