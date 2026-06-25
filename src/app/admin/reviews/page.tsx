"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { VolunteerReview } from "@/types";
import {
  getAllLocalReviews,
  updateReviewApproval,
  resetLocalReviews,
  getCustomSheetUrl,
  setCustomSheetUrl,
  parseCSV,
  mapRowToReview,
  TRACK_NAMES
} from "@/lib/reviews";

export default function AdminReviewsPage() {
  const [reviews, setReviews] = useState<VolunteerReview[]>([]);
  const [customUrl, setCustomUrl] = useState<string>("");
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  
  // Verification states
  const [verifying, setVerifying] = useState<boolean>(false);
  const [verifyStatus, setVerifyStatus] = useState<{
    success: boolean;
    message: string;
    rowCount?: number;
    headers?: string[];
  } | null>(null);

  useEffect(() => {
    // Load local reviews
    setReviews(getAllLocalReviews());
    
    // Load sheet URL config
    const url = getCustomSheetUrl();
    if (url) {
      setCustomUrl(url);
      setActiveUrl(url);
      testConnection(url, false);
    }
  }, []);

  const handleToggleApproval = (id: string, currentStatus: boolean) => {
    updateReviewApproval(id, !currentStatus);
    setReviews(getAllLocalReviews());
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the reviews database to defaults? This will erase any pending reviews you created.")) {
      resetLocalReviews();
      setReviews(getAllLocalReviews());
      alert("Local reviews database reset to default mock entries!");
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl.trim()) {
      setCustomSheetUrl(null);
      setActiveUrl(null);
      setVerifyStatus(null);
      setReviews(getAllLocalReviews());
      alert("Custom Google Sheets URL cleared. Reverted to local storage.");
      return;
    }
    
    setCustomSheetUrl(customUrl);
    setActiveUrl(customUrl);
    testConnection(customUrl, true);
  };

  const testConnection = async (url: string, showSuccessAlert: boolean) => {
    setVerifying(true);
    setVerifyStatus(null);
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Could not fetch CSV from the URL. Please verify it is published as a CSV.");
      
      const text = await res.text();
      const rows = parseCSV(text);
      
      if (rows.length === 0) {
        throw new Error("CSV was fetched but appears to be empty or contains no headers.");
      }

      // Check header mapping
      const headers = Object.keys(rows[0]);
      const mapped = rows.map((r, idx) => mapRowToReview(r, idx));
      const approvedCount = mapped.filter(r => r.approved).length;

      setVerifyStatus({
        success: true,
        message: `Successfully connected! Found ${rows.length} responses. ${approvedCount} are approved and will display on the reviews page.`,
        rowCount: rows.length,
        headers
      });

      if (showSuccessAlert) {
        alert("Google Sheet connection verified successfully!");
      }
    } catch (err: any) {
      let msg = err.message || "An error occurred during verification.";
      if (msg.includes("Failed to fetch") || err.name === "TypeError" || String(err).includes("fetch")) {
        msg = "Failed to fetch spreadsheet. This usually means the Google Sheet is Restricted. To fix this: Click 'Share' in the top-right of your Google Sheet, and change General Access from 'Restricted' to 'Anyone with the link can view'.";
      }
      setVerifyStatus({
        success: false,
        message: msg
      });
      if (showSuccessAlert) {
        alert("Verification failed:\n\n" + msg);
      }
    } finally {
      setVerifying(false);
    }
  };

  return (
    <>
      <Navbar currentPage="reviews" />
      
      <style dangerouslySetInnerHTML={{__html: `
        .admin-layout {
          max-width: 1200px;
          margin: 40px auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .workflow-diagram {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(135deg, #2C3E50 0%, #1A252F 100%);
          border-radius: 12px;
          padding: 25px 30px;
          color: white;
          overflow-x: auto;
          gap: 15px;
        }

        .wf-node {
          flex: 1;
          text-align: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          padding: 15px 10px;
          min-width: 150px;
          position: relative;
        }

        .wf-node.active {
          border-color: var(--accent);
          background: rgba(255, 191, 0, 0.08);
          box-shadow: 0 0 15px rgba(255, 191, 0, 0.15);
        }

        .wf-node h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 5px;
        }

        .wf-node.active h4 {
          color: #ffca28;
        }

        .wf-node p {
          font-size: 0.75rem;
          color: var(--gray-300);
        }

        .wf-arrow {
          color: var(--accent);
          font-size: 1.5rem;
          font-weight: bold;
        }

        .admin-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
        }

        @media (max-width: 900px) {
          .admin-grid {
            grid-template-columns: 1fr;
          }
        }

        .admin-card {
          background: var(--white);
          border-radius: 12px;
          padding: 24px;
          border: 1px solid var(--gray-200);
          box-shadow: var(--shadow-sm);
          margin-bottom: 25px;
        }

        .admin-card h2 {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 15px;
          border-bottom: 2px solid var(--gray-100);
          padding-bottom: 10px;
        }

        .config-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .help-box {
          background: var(--gray-50);
          border-left: 4px solid var(--primary);
          padding: 15px;
          border-radius: 0 8px 8px 0;
          font-size: 0.85rem;
          color: var(--gray-700);
          line-height: 1.5;
        }

        .help-box ol {
          margin-left: 18px;
          margin-top: 8px;
        }

        .help-box li {
          margin-bottom: 6px;
        }

        .reviews-table-container {
          overflow-x: auto;
        }

        .reviews-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          text-align: left;
        }

        .reviews-table th, .reviews-table td {
          padding: 12px 15px;
          border-bottom: 1px solid var(--gray-200);
        }

        .reviews-table th {
          background: var(--gray-50);
          font-weight: 700;
          color: var(--dark);
        }

        .status-pill {
          display: inline-block;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .status-approved {
          background: var(--success-bg);
          color: var(--success);
        }

        .status-pending {
          background: var(--error-bg);
          color: var(--error);
        }

        .verify-badge {
          padding: 10px;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-top: 15px;
        }

        .verify-success {
          background: #e6f4ea;
          color: #137333;
          border: 1px solid #c2e7c9;
        }

        .verify-fail {
          background: #fce8e6;
          color: #c5221f;
          border: 1px solid #f9d2cd;
        }

        .btn-sm {
          padding: 6px 12px;
          font-size: 0.8rem;
          border-radius: 6px;
          cursor: pointer;
        }
      `}} />

      <div className="page-header">
        <h1>Admin Approvals Dashboard</h1>
        <p>Manage volunteer reviews and configure Google Forms & Sheets integrations</p>
      </div>

      <main className="admin-layout">
        {/* Workflow Diagram */}
        <div className="workflow-diagram">
          <div className="wf-node">
            <h4>1. Volunteer</h4>
            <p>Fills Google Form review details</p>
          </div>
          <div className="wf-arrow">➔</div>
          <div className="wf-node">
            <h4>2. Google Sheets</h4>
            <p>Receives response row instantly</p>
          </div>
          <div className="wf-arrow">➔</div>
          <div className="wf-node active">
            <h4>3. Admin Approves</h4>
            <p>Sets 'Approved' column value to 'Yes'</p>
          </div>
          <div className="wf-arrow">➔</div>
          <div className="wf-node">
            <h4>4. Reviews Page</h4>
            <p>Displays approved reviews live</p>
          </div>
        </div>

        <div className="admin-grid">
          {/* Main workspace */}
          <section>
            {activeUrl ? (
              <div className="admin-card">
                <h2>Live Google Sheets Feed</h2>
                <div className="help-box" style={{ marginBottom: "20px" }}>
                  <p>
                    <strong>Connected Sheet Mode:</strong> Reviews are currently being pulled live from your Google Sheet. To approve or reject reviews, <strong>edit the Google Sheet directly</strong>.
                  </p>
                  <p style={{ marginTop: "6px" }}>
                    Ensure your spreadsheet has a column named <code>Approved</code> or <code>Status</code>. For a review to display on the public page, type <strong>Yes</strong> or <strong>True</strong> in that column for the corresponding row.
                  </p>
                </div>

                {verifyStatus?.success ? (
                  <div>
                    <p style={{ fontSize: "0.95rem", fontWeight: "600", marginBottom: "15px" }}>
                      Connected CSV URL: <code style={{ fontSize: "0.85rem", background: "var(--gray-50)", padding: "4px" }}>{activeUrl.substring(0, 70)}...</code>
                    </p>
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                      <button className="btn-outline btn-sm" onClick={() => testConnection(activeUrl, true)}>
                        🔄 Refresh Sheet Data
                      </button>
                      <button className="btn-outline btn-sm" style={{ borderColor: "var(--error)", color: "var(--error)" }} onClick={() => {
                        setCustomSheetUrl(null);
                        setActiveUrl(null);
                        setVerifyStatus(null);
                        setReviews(getAllLocalReviews());
                      }}>
                        🔌 Disconnect Sheet
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="verify-badge verify-fail">
                    <p><strong>Connection Warning:</strong> Failed to retrieve data from the URL. Reverting display to local reviews. Check the sidebar for detailed connection errors.</p>
                  </div>
                )}
              </div>
            ) : null}

            <div className="admin-card">
              <h2>
                {activeUrl ? "Active Feed Preview (Mock / Local Storage)" : "Review Approval Manager (Local Mock Database)"}
              </h2>
              
              {!activeUrl ? (
                <div className="help-box" style={{ marginBottom: "20px" }}>
                  <p>
                    <strong>Local Sandbox Mode:</strong> Use this interface to test the approval workflow immediately. When a volunteer submits a review via the "Write a Review" form on the public page, it will appear here as <strong>Pending</strong>.
                  </p>
                  <p style={{ marginTop: "6px" }}>
                    Toggle the approval status below, and watch how it instantly appears or disappears on the public <a href="/reviews" style={{ color: "var(--primary)", fontWeight: "700" }}>Reviews Page</a>!
                  </p>
                </div>
              ) : null}

              <div className="reviews-table-container">
                <table className="reviews-table">
                  <thead>
                    <tr>
                      <th>Volunteer</th>
                      <th>Rating</th>
                      <th>Track</th>
                      <th>Snippet</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.length > 0 ? (
                      reviews.map((rev) => (
                        <tr key={rev.id}>
                          <td style={{ whiteSpace: "nowrap" }}>
                            <strong>{rev.name}</strong>
                            <div style={{ fontSize: "0.75rem", color: "var(--gray-600)" }}>{rev.country}</div>
                          </td>
                          <td style={{ color: "var(--accent)" }}>
                            {"★".repeat(rev.rating)}
                          </td>
                          <td style={{ fontSize: "0.8rem", maxWidth: "150px" }}>
                            {TRACK_NAMES[rev.trackId] || rev.trackId}
                          </td>
                          <td style={{ fontSize: "0.8rem", color: "var(--gray-700)" }}>
                            {rev.reviewText.substring(0, 50)}...
                          </td>
                          <td>
                            <span className={`status-pill ${rev.approved ? "status-approved" : "status-pending"}`}>
                              {rev.approved ? "Approved" : "Pending"}
                            </span>
                          </td>
                          <td>
                            {activeUrl ? (
                              <span style={{ fontSize: "0.75rem", color: "var(--gray-600)", fontStyle: "italic" }}>
                                Manage in Sheet
                              </span>
                            ) : (
                              <button
                                className={`btn ${rev.approved ? "btn-secondary" : "btn-primary"} btn-sm`}
                                style={{ padding: "4px 8px" }}
                                onClick={() => handleToggleApproval(rev.id, rev.approved)}
                              >
                                {rev.approved ? "Reject" : "Approve"}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center", padding: "30px", color: "var(--gray-600)" }}>
                          No reviews found in localStorage database. Submit a review from the public page to test.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {!activeUrl && (
                <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
                  <button className="btn-outline btn-sm" onClick={handleReset}>
                    ⚠️ Reset Database to Defaults
                  </button>
                  <a href="/reviews" className="btn-primary btn-sm" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}>
                    Go to Reviews Page →
                  </a>
                </div>
              )}
            </div>
          </section>

          {/* Config Sidebar */}
          <aside>
            <div className="admin-card">
              <h2>Spreadsheet Config</h2>
              <form onSubmit={handleSaveUrl} className="config-form">
                <div className="filter-group">
                  <label htmlFor="csv-url">Google Sheet CSV URL</label>
                  <textarea
                    id="csv-url"
                    className="filter-input"
                    rows={4}
                    placeholder="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"
                    value={customUrl}
                    onChange={(e) => setCustomUrl(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%" }} disabled={verifying}>
                  {verifying ? "Connecting..." : activeUrl ? "Update Connection" : "Connect Spreadsheet"}
                </button>
              </form>

              {verifyStatus && (
                <div className={`verify-badge ${verifyStatus.success ? "verify-success" : "verify-fail"}`}>
                  <h4>{verifyStatus.success ? "Connection Verified" : "Connection Failed"}</h4>
                  <p style={{ marginTop: "5px", fontSize: "0.8rem", lineHeight: "1.4" }}>
                    {verifyStatus.message}
                  </p>
                  {verifyStatus.headers && (
                    <div style={{ marginTop: "8px", borderTop: "1px dashed rgba(0,0,0,0.1)", paddingTop: "8px" }}>
                      <strong>Mapped Headers:</strong>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginTop: "4px" }}>
                        {verifyStatus.headers.map((h, i) => (
                          <span key={i} style={{ fontSize: "0.7rem", background: "rgba(0,0,0,0.06)", padding: "2px 6px", borderRadius: "4px" }}>
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="admin-card">
              <h2>Setup Instructions</h2>
              <div className="help-box" style={{ borderLeftColor: "var(--accent)", background: "none", padding: "0" }}>
                <p>Follow these steps to connect your own Google Sheet:</p>
                <ol>
                  <li>Create a <strong>Google Form</strong> matching your review fields (Name, Rating, Track, Country, Review).</li>
                  <li>Link the Form to a <strong>Google Sheet</strong> (Responses tab &rarr; Link to Sheets).</li>
                  <li>Inside Google Sheets, add an extra column named <code>Approved</code> or <code>Status</code>.</li>
                  <li>Go to <strong>File &rarr; Share &rarr; Publish to web</strong>.</li>
                  <li>Select the Form Responses sheet, select <strong>Comma-separated values (.csv)</strong>, and click Publish.</li>
                  <li>Copy the published CSV URL and paste it into the form above!</li>
                </ol>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
