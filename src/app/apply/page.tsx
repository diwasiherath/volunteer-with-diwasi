"use client";

import { useState, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Configure your Google Form URL here. 
// If it contains the placeholder 'example_apply_form_id', the page will display the native Application Wizard instead.
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf2bUQMkMiUrqE1VTApG7E-w1_rDJ-5eE7Y1JvNeKH3ibad6Q/viewform?embedded=true";

const TRACKS = [
  { id: "school-dev", name: "School Development Project", desc: "Support public schools with classroom improvements, teaching English, and leading recreation." },
  { id: "preschool-dev", name: "Preschool Development Initiative", desc: "Work with early childhood education centers, developing creative teaching aids and games." },
  { id: "adult-care", name: "Adult Care Home Wellness", desc: "Assist elder care homes, engaging in social activities, basic care, and facility maintenance." },
  { id: "monk-english", name: "English for Buddhist Monks", desc: "Teach conversational English at monastic temples, supporting local monks in their educational tracks." },
  { id: "paddy-field", name: "Paddy Field & Rural Heritage", desc: "Participate in traditional agricultural practices, rice cultivation, and rural community life." },
  { id: "cultural-exploration", name: "Social & Cultural Exploration", desc: "Immerse in local customs, language studies, culinary traditions, and heritage exploration." },
  { id: "industrial-tour", name: "Industrial, Craft & Education Tour", desc: "Volunteer with traditional cottage industries like pottery, weaving, and local craftsmanship." },
  { id: "ayurveda-wellness", name: "Ayurvedic Medicine & Wellness", desc: "Assist at wellness centers, learning traditional herb applications and supporting therapy spaces (Requires 3+ yrs medical studies)." },
  { id: "bakery-food", name: "Bakery & Traditional Food Sharing", desc: "Support community micro-bakeries, learning local recipes while strengthening local enterprise." }
];

const PACKAGES = [
  {
    id: "standard",
    name: "Standard",
    price: 250,
    badgeClass: "standard",
    features: [
      "Clean local homestay lodging (shared)",
      "Daily breakfast & dinner (local cuisine)",
      "Daily project coordination & guidance",
      "One local cultural integration session"
    ],
    desc: "Perfect for budget-conscious travelers focused on making a direct local impact."
  },
  {
    id: "premium",
    name: "Premium",
    price: 400,
    badgeClass: "premium",
    features: [
      "Enhanced local housing (private room options)",
      "Full daily board (3 meals/day)",
      "Guided weekend trips to Galle/Hikkaduwa",
      "Full local logistics and airport transfer"
    ],
    desc: "Our most popular track. Combines impactful work with weekend cultural excursions."
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 600,
    badgeClass: "ultimate",
    features: [
      "Exclusive private villa accommodations",
      "Premium dining (custom chef meal plans)",
      "All-inclusive weekend excursions (Yala, Sigiriya)",
      "Personal transport & dedicated logistics coordinator"
    ],
    desc: "For those seeking complete comfort, tailored routing, and full-service coordination."
  }
];

export default function ApplicationWizard() {
  const [viewMode, setViewMode] = useState<"dashboard" | "application">("dashboard");
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>("");

  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    nationality: "",
    email: "",
    phone: "",
    passport: "",
    primaryTrack: "school-dev",
    secondaryTrack: "paddy-field",
    startDate: "",
    duration: 2,
    packageTier: "standard",
    occupation: "student",
    skills: "",
    medicalAcknowledge: false,
    motivation: ""
  });

  const [touchedSteps, setTouchedSteps] = useState({
    1: false,
    2: false,
    3: false,
    4: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handlePackageSelect = (packageId: string) => {
    setFormData(prev => ({
      ...prev,
      packageTier: packageId
    }));
  };

  // Validates current step inputs before moving to next step
  const validateStep = (currentStep: number): boolean => {
    setTouchedSteps(prev => ({ ...prev, [currentStep]: true }));
    
    // Find all inputs in the current visible area
    const stepContainer = document.querySelector(`#step-${currentStep}`);
    if (!stepContainer) return true;

    const inputs = stepContainer.querySelectorAll("input, select, textarea");
    let isStepValid = true;

    inputs.forEach(input => {
      const inputEl = input as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      
      // Check validation constraints
      if (!inputEl.checkValidity()) {
        isStepValid = false;
        // Trigger visual validation classes
        inputEl.classList.add("user-invalid-fallback");
        inputEl.setAttribute("aria-invalid", "true");
      } else {
        inputEl.classList.remove("user-invalid-fallback");
        inputEl.removeAttribute("aria-invalid");
      }
    });

    // Special verification rules:
    if (currentStep === 4) {
      const requiresMedicalCheck = formData.primaryTrack === "ayurveda-wellness" || formData.secondaryTrack === "ayurveda-wellness";
      if (requiresMedicalCheck && !formData.medicalAcknowledge) {
        alert("Please confirm the medical studies verification checkbox to submit your application.");
        isStepValid = false;
      }
    }

    if (!isStepValid) {
      // Find first invalid input and focus it, triggering default report
      const firstInvalid = stepContainer.querySelector(":invalid") as HTMLInputElement | null;
      if (firstInvalid) {
        firstInvalid.focus();
        // Trigger standard browser reporting
        (stepContainer.closest("form") as HTMLFormElement)?.reportValidity();
      }
    }

    return isStepValid;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsLoading(true);

    // Simulate API submission
    setTimeout(() => {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const generatedId = `DIWASI-2026-${randNum}`;
      setApplicationId(generatedId);

      setIsLoading(false);
      setIsSubmitted(true);
    }, 1800);
  };

  // Helper properties
  const selectedTrackData = TRACKS.find(t => t.id === formData.primaryTrack);
  const selectedSecondaryTrackData = TRACKS.find(t => t.id === formData.secondaryTrack);
  const selectedPackageData = PACKAGES.find(p => p.id === formData.packageTier) || PACKAGES[0];
  const weeklyRate = selectedPackageData.price;
  const estimatedCost = weeklyRate * formData.duration;

  const requiresMedicalVerification = formData.primaryTrack === "ayurveda-wellness" || formData.secondaryTrack === "ayurveda-wellness";

  const isPlaceholderUrl = GOOGLE_FORM_URL.includes("example_apply_form_id");

  if (viewMode === "dashboard") {
    return (
      <>
        <Navbar currentPage="apply" />
        
        {/* Style Tag containing CSS animations & interactive states */}
        <style dangerouslySetInnerHTML={{__html: `
          .dashboard-card {
            transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease;
            cursor: pointer;
          }
          .dashboard-card:hover {
            transform: translateY(-8px) scale(1.015);
            box-shadow: 0 25px 50px rgba(0, 86, 179, 0.12), 0 1px 3px rgba(0, 86, 179, 0.04) !important;
            border-color: #0056b3 !important;
          }
          .dashboard-card.primary-card {
            border-color: #0056b3 !important;
          }
          .dashboard-card.primary-card:hover {
            box-shadow: 0 25px 50px rgba(0, 86, 179, 0.18), 0 1px 3px rgba(0, 86, 179, 0.06) !important;
          }
          .action-btn {
            transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
          }
          .action-btn:hover {
            background-color: #004085 !important;
            transform: translateY(-2px);
            box-shadow: 0 6px 18px rgba(0, 86, 179, 0.3) !important;
          }
          .action-btn:active {
            transform: translateY(0);
          }
          .action-btn svg {
            transition: transform 0.2s ease;
          }
          .action-btn:hover svg {
            transform: translate(3px, -3px);
          }
          .download-btn svg {
            transition: transform 0.2s ease;
          }
          .download-btn:hover svg {
            transform: translateY(3px);
          }
          .badge-gradient {
            background: linear-gradient(135deg, #10B981, #059669) !important;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          .badge-pulse {
            animation: pulse-border 2s infinite;
          }
          @keyframes pulse-border {
            0% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            }
            70% {
              box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
            }
            100% {
              box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
            }
          }
          .glow-text {
            background: linear-gradient(135deg, var(--dark) 30%, #0056b3 90%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .header-label {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 2px;
            color: #0056b3;
            text-transform: uppercase;
            margin-bottom: 8px;
            display: inline-block;
          }
        `}} />

        <div style={{ position: "relative", overflow: "hidden" }}>
          {/* Decorative background blobs */}
          <div style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "450px",
            height: "450px",
            background: "radial-gradient(circle, rgba(0, 86, 179, 0.06) 0%, rgba(255, 255, 255, 0) 70%)",
            zIndex: -1,
            pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "550px",
            height: "550px",
            background: "radial-gradient(circle, rgba(0, 128, 128, 0.05) 0%, rgba(255, 255, 255, 0) 70%)",
            zIndex: -1,
            pointerEvents: "none"
          }} />

          {/* Header Block */}
          <div className="page-header" style={{ textAlign: "center", padding: "80px 20px 40px", position: "relative" }}>
            <span className="header-label">DIWASI Application Portal</span>
            <h1 className="glow-text" style={{ fontSize: "2.8rem", fontWeight: "800", marginBottom: "16px", letterSpacing: "-0.5px" }}>
              Available Applications
            </h1>
            <p style={{ maxWidth: "780px", margin: "0 auto", color: "var(--gray-600)", fontSize: "1.15rem", lineHeight: "1.65", fontWeight: "400" }}>
              Download the necessary application forms and access important resources for your volunteer journey. Our streamlined application process makes it easy to start making a difference in Sri Lanka.
            </p>
          </div>

          {/* Dashboard Grid Container */}
          <main className="app-container" style={{ maxWidth: "1200px", margin: "0 auto 100px", padding: "0 20px", display: "block" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "40px",
              width: "100%"
            }}>
              {/* CARD 1: Volunteer Application Form */}
              <div 
                className="dashboard-card primary-card reveal is-visible"
                onClick={() => setViewMode("application")}
                style={{
                  position: "relative",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "3px solid #0056b3",
                  borderRadius: "20px",
                  padding: "48px 36px",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "390px",
                }}
              >
                {/* Badge */}
                <div 
                  className="badge-gradient badge-pulse"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "var(--white)",
                    padding: "8px 20px",
                    fontSize: "11px",
                    fontWeight: "800",
                    borderBottomLeftRadius: "14px",
                    borderTopRightRadius: "16px",
                    letterSpacing: "0.8px"
                  }}
                >
                  FREE APPLICATION
                </div>

                <div>
                  {/* Header Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px", marginTop: "10px" }}>
                    {/* Icon */}
                    <div style={{
                      background: "linear-gradient(135deg, #0056b3, #0088ff)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 8px 20px rgba(0, 86, 179, 0.25)"
                    }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "var(--dark)", margin: 0, lineHeight: "1.3", letterSpacing: "-0.2px" }}>
                      Volunteer Application Form
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ color: "var(--gray-700)", fontSize: "1rem", lineHeight: "1.65", marginBottom: "30px" }}>
                    Access our online form to submit your volunteer application digitally. Quick and convenient way to start your journey with us.
                  </p>
                </div>

                {/* Action Button */}
                <div>
                  <button
                    className="action-btn"
                    onClick={(e) => {
                      e.stopPropagation(); // Avoid double toggle
                      setViewMode("application");
                    }}
                    style={{
                      backgroundColor: "#0056b3",
                      color: "var(--white)",
                      border: "none",
                      padding: "14px 32px",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      borderRadius: "50px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      boxShadow: "0 4px 15px rgba(0, 86, 179, 0.25)"
                    }}
                  >
                    Access Link
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* CARD 2: Next Of Kin Contact Details */}
              <div 
                className="dashboard-card primary-card reveal is-visible"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/downloads/Volunteer_Next_of_Kin_Form.docx";
                  link.download = "Volunteer_Next_of_Kin_Form.docx";
                  link.click();
                }}
                style={{
                  position: "relative",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "3px solid #0056b3",
                  borderRadius: "20px",
                  padding: "48px 36px",
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "390px",
                }}
              >
                {/* Badge */}
                <div 
                  className="badge-gradient badge-pulse"
                  style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    color: "var(--white)",
                    padding: "8px 20px",
                    fontSize: "11px",
                    fontWeight: "800",
                    borderBottomLeftRadius: "14px",
                    borderTopRightRadius: "16px",
                    letterSpacing: "0.8px"
                  }}
                >
                  FREE APPLICATION
                </div>

                <div>
                  {/* Header Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px", marginTop: "10px" }}>
                    {/* Icon */}
                    <div style={{
                      background: "linear-gradient(135deg, #0056b3, #0088ff)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      boxShadow: "0 8px 20px rgba(0, 86, 179, 0.25)"
                    }}>
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <line x1="10" y1="9" x2="8" y2="9"/>
                      </svg>
                    </div>
                    {/* Title */}
                    <h3 style={{ fontSize: "1.45rem", fontWeight: "800", color: "var(--dark)", margin: 0, lineHeight: "1.3", letterSpacing: "-0.2px" }}>
                      Emergency Contacts & Next of Kin
                    </h3>
                  </div>

                  {/* Description */}
                  <p style={{ color: "var(--gray-700)", fontSize: "1rem", lineHeight: "1.65", marginBottom: "30px" }}>
                    In case of accident or emergency, Volunteer Sri Lanka Project needs to have the contact names and addresses of your next of kin.
                  </p>
                </div>

                {/* Action Button */}
                <div>
                  <a
                    className="action-btn download-btn"
                    href="/downloads/Volunteer_Next_of_Kin_Form.docx"
                    download="Volunteer_Next_of_Kin_Form.docx"
                    onClick={(e) => e.stopPropagation()} // Avoid triggering parent div click download twice
                    style={{
                      backgroundColor: "#0056b3",
                      color: "var(--white)",
                      padding: "14px 32px",
                      fontSize: "0.95rem",
                      fontWeight: "700",
                      borderRadius: "50px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(0, 86, 179, 0.25)"
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#004085"}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0056b3"}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download Form
                  </a>
                </div>
              </div>            </div>
          </main>
        </div>

        <Footer />
      </>
    );
  }

  if (!isPlaceholderUrl) {
    return (
      <>
        <Navbar currentPage="apply" />
        
        <div style={{ maxWidth: "900px", margin: "40px auto 0 auto", padding: "0 20px" }}>
          <button
            onClick={() => setViewMode("dashboard")}
            style={{
              background: "none",
              border: "none",
              color: "#0056b3",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
              transition: "transform 0.2s ease, color 0.2s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateX(-4px)";
              e.currentTarget.style.color = "#004085";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateX(0)";
              e.currentTarget.style.color = "#0056b3";
            }}
          >
            ← Back to Available Applications
          </button>
        </div>

        <div className="page-header" style={{ marginTop: 0 }}>
          <h1>Volunteer Application</h1>
          <p>Complete your formal enrollment process for the DIWASI program in Sri Lanka.</p>
        </div>

        <main className="app-container" style={{ maxWidth: "900px", marginTop: "20px" }}>
          <div className="reveal is-visible" style={{
            backgroundColor: "var(--white)",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            border: "1px solid var(--gray-200)",
            overflow: "hidden"
          }}>
            <iframe 
              src={GOOGLE_FORM_URL}
              title="DIWASI Volunteer Application Form"
              style={{
                width: "100%",
                height: "1400px",
                border: "none",
                borderRadius: "8px",
                display: "block"
              }}
            >
              Loading Application Form…
            </iframe>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar currentPage="apply" />
      <div className="app-container">
        
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setViewMode("dashboard")}
            style={{
              background: "none",
              border: "none",
              color: "#0056b3",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            ← Back to Available Applications
          </button>
        </div>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} noValidate>
          <div className="wizard-grid">
            {/* Steps Sidebar Progress Indicators */}
            <aside className="progress-sidebar">
              <nav aria-label="Progress Tracker">
                <ol className="steps-list">
                  <li className={`step-item ${step === 1 ? "active" : step > 1 ? "completed" : ""}`}>
                    <span className="step-number">1</span>
                    <span className="step-label">Personal Details</span>
                  </li>
                  <li className={`step-item ${step === 2 ? "active" : step > 2 ? "completed" : ""}`}>
                    <span className="step-number">2</span>
                    <span className="step-label">Volunteer Tracks</span>
                  </li>
                  <li className={`step-item ${step === 3 ? "active" : step > 3 ? "completed" : ""}`}>
                    <span className="step-number">3</span>
                    <span className="step-label">Package Tier</span>
                  </li>
                  <li className={`step-item ${step === 4 ? "active" : step > 4 ? "completed" : ""}`}>
                    <span className="step-number">4</span>
                    <span className="step-label">Motivation & Submit</span>
                  </li>
                </ol>
              </nav>

              {/* Dynamic Fee Sidebar Estimator Card */}
              {step > 1 && (
                <div className="cost-summary-card">
                  <h4>Fee Estimation</h4>
                  <div className="cost-row">
                    <span>Package Tier:</span>
                    <span className="cost-price">{selectedPackageData.name}</span>
                  </div>
                  <div className="cost-row">
                    <span>Weekly Rate:</span>
                    <span className="cost-price">${weeklyRate} / wk</span>
                  </div>
                  <div className="cost-row">
                    <span>Stay Duration:</span>
                    <span className="cost-price">{formData.duration} {formData.duration === 1 ? "week" : "weeks"}</span>
                  </div>
                  <div className="cost-row total">
                    <span>Total Fee:</span>
                    <span className="cost-price">${estimatedCost} USD</span>
                  </div>
                  <p style={{ fontSize: "11px", color: "var(--gray-600)", marginTop: "8px", lineHeight: "1.3" }}>
                    *Estimates cover accommodation, board, and project coordination. Transport and visa fees separate.
                  </p>
                </div>
              )}
            </aside>

            {/* Form Wizard Pages */}
            <main className="wizard-card" id="form-wizard">
              
              {/* STEP 1: PERSONAL DETAILS */}
              {step === 1 && (
                <div className="step-content" id="step-1">
                  <h2 className="step-title">Personal Details</h2>
                  <p className="step-desc">Tell us about yourself. Ensure your email and details match your travel documents.</p>
                  
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label htmlFor="fullName">Full Name <span className="required-dot">*</span></label>
                      <span className="hint">As shown on your passport / state ID</span>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Emily Watson"
                        autoComplete="name"
                      />
                      <span className="error-msg">⚠️ Please enter your full name.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address <span className="required-dot">*</span></label>
                      <span className="hint">For program communication</span>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="emily@example.com"
                        autoComplete="email"
                      />
                      <span className="error-msg">⚠️ Please enter a valid email address.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number <span className="required-dot">*</span></label>
                      <span className="hint">Including international dialing code</span>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +1 (555) 019-2834"
                        autoComplete="tel"
                      />
                      <span className="error-msg">⚠️ Please enter a valid phone number.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth <span className="required-dot">*</span></label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        required
                        value={formData.dob}
                        onChange={handleInputChange}
                        max="2008-06-19" // Must be 18 or older
                      />
                      <span className="error-msg">⚠️ Date of birth is required. Minimum volunteer age is 18.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="gender">Gender Identity <span className="required-dot">*</span></label>
                      <select
                        id="gender"
                        name="gender"
                        required
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="nonbinary">Non-Binary</option>
                        <option value="prefer-not-say">Prefer not to say</option>
                      </select>
                      <span className="error-msg">⚠️ Please select your gender identity.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="nationality">Nationality <span className="required-dot">*</span></label>
                      <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        required
                        value={formData.nationality}
                        onChange={handleInputChange}
                        placeholder="e.g. United Kingdom"
                      />
                      <span className="error-msg">⚠️ Please specify your nationality.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="passport">Passport / ID Number <span className="required-dot">*</span></label>
                      <span className="hint">Required for program safety clearance</span>
                      <input
                        type="text"
                        id="passport"
                        name="passport"
                        required
                        value={formData.passport}
                        onChange={handleInputChange}
                        placeholder="e.g. N12345678"
                      />
                      <span className="error-msg">⚠️ Passport or national ID number is required.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: VOLUNTEER TRACKS & TIMING */}
              {step === 2 && (
                <div className="step-content" id="step-2">
                  <h2 className="step-title">Select Program Tracks</h2>
                  <p className="step-desc">Pick your primary field of service and preferred scheduling timing.</p>
                  
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="primaryTrack">Primary Field Focus <span className="required-dot">*</span></label>
                      <span className="hint">Your main project assignment</span>
                      <select
                        id="primaryTrack"
                        name="primaryTrack"
                        required
                        value={formData.primaryTrack}
                        onChange={handleInputChange}
                      >
                        {TRACKS.map(t => (
                          <option key={t.id} value={t.id}>{t.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="secondaryTrack">Backup Field Focus <span className="required-dot">*</span></label>
                      <span className="hint">In case primary track is filled</span>
                      <select
                        id="secondaryTrack"
                        name="secondaryTrack"
                        required
                        value={formData.secondaryTrack}
                        onChange={handleInputChange}
                      >
                        {TRACKS.map(t => (
                          <option key={t.id} value={t.id} disabled={t.id === formData.primaryTrack}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dynamic track descriptions */}
                    <div className="form-group full-width" style={{ backgroundColor: "var(--gray-50)", padding: "16px", borderRadius: "8px", border: "1px solid var(--gray-200)" }}>
                      <h4 style={{ fontSize: "14px", fontWeight: "700", color: "var(--primary)", marginBottom: "4px" }}>Selected Primary Focus:</h4>
                      <p style={{ fontSize: "13px", color: "var(--dark)" }}>
                        <strong>{selectedTrackData?.name}</strong>: {selectedTrackData?.desc}
                      </p>
                      <p style={{ fontSize: "12px", color: "var(--gray-600)", marginTop: "8px" }}>
                        Backup: <em>{selectedSecondaryTrackData?.name}</em>
                      </p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="startDate">Target Start Date <span className="required-dot">*</span></label>
                      <span className="hint">Projects intake every Monday</span>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        required
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min="2026-06-22" // Start date must be in the future (Monday onwards)
                      />
                      <span className="error-msg">⚠️ Please select a valid target start date.</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="duration">Length of Program <span className="required-dot">*</span></label>
                      <span className="hint">Stay duration in Sri Lanka</span>
                      <select
                        id="duration"
                        name="duration"
                        required
                        value={formData.duration}
                        onChange={(e) => setFormData(prev => ({ ...prev, duration: parseInt(e.target.value) }))}
                      >
                        <option value={1}>1 Week</option>
                        <option value={2}>2 Weeks</option>
                        <option value={3}>3 Weeks</option>
                        <option value={4}>4 Weeks</option>
                        <option value={6}>6 Weeks</option>
                        <option value={8}>8 Weeks</option>
                        <option value={12}>12 Weeks</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: PACKAGE TIER SELECTION */}
              {step === 3 && (
                <div className="step-content" id="step-3">
                  <h2 className="step-title">Choose Lodging & Support Tier</h2>
                  <p className="step-desc">Select the accommodation, board, and coordination package matching your budget.</p>
                  
                  <div className="options-grid">
                    {PACKAGES.map(pkg => (
                      <button
                        key={pkg.id}
                        type="button"
                        className={`option-card ${formData.packageTier === pkg.id ? "selected" : ""}`}
                        onClick={() => handlePackageSelect(pkg.id)}
                      >
                        <span className={`tier-badge ${pkg.badgeClass}`}>{pkg.name}</span>
                        <h3 className="option-title">{pkg.name} Package</h3>
                        <p className="option-desc">{pkg.desc}</p>
                        
                        <ul style={{ listStyle: "none", fontSize: "12px", color: "var(--gray-600)", margin: "16px 0 0 0", padding: 0 }}>
                          {pkg.features.map((f, i) => (
                            <li key={i} style={{ marginBottom: "6px", display: "flex", gap: "6px" }}>
                              <span style={{ color: "var(--primary)" }}>✓</span> {f}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="option-price">${pkg.price} <span style={{ fontSize: "12px", color: "var(--gray-600)", fontWeight: "normal" }}>/ week</span></div>
                        <input
                          type="radio"
                          name="packageTier"
                          value={pkg.id}
                          checked={formData.packageTier === pkg.id}
                          onChange={() => handlePackageSelect(pkg.id)}
                          aria-label={`${pkg.name} package`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: MOTIVATION & CONFIRMATION SUBMIT */}
              {step === 4 && (
                <div className="step-content" id="step-4">
                  <h2 className="step-title">Motivation & Qualifications</h2>
                  <p className="step-desc">Help us align your experience with local partner requirements.</p>

                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="occupation">Current Activity / Background</label>
                      <select
                        id="occupation"
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleInputChange}
                      >
                        <option value="student">Student</option>
                        <option value="employed">Employed Professional</option>
                        <option value="unemployed">Career Break</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="skills">Key Skills & Experience</label>
                      <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        placeholder="e.g. Teaching English, First Aid, Gardening, Bakery background"
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="motivation">Why Volunteer with DIWASI? <span className="required-dot">*</span></label>
                      <span className="hint">Share your motivation and goals (minimum 30 characters)</span>
                      <textarea
                        id="motivation"
                        name="motivation"
                        required
                        minLength={30}
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Explain why you want to travel to Sri Lanka and participate in sustainable community development..."
                      />
                      <span className="error-msg">⚠️ Please share your motivation (minimum 30 characters).</span>
                    </div>

                    {requiresMedicalVerification && (
                      <div className="form-group full-width notice-box">
                        <h5>⚕️ Medical Track Verification Required</h5>
                        <p style={{ marginBottom: "12px", fontSize: "13px" }}>
                          As part of the **Ayurvedic Wellness & Medicine** project, you will collaborate with practitioners. As per DIWASI's policy, you must have completed at least 3 years of study in medical, pharmacy, nursing, or physical therapy tracks.
                        </p>
                        
                        <label style={{ display: "flex", gap: "10px", alignItems: "flex-start", cursor: "pointer", fontSize: "13px", color: "var(--dark)" }}>
                          <input
                            type="checkbox"
                            name="medicalAcknowledge"
                            required
                            checked={formData.medicalAcknowledge}
                            onChange={handleCheckboxChange}
                            style={{ marginTop: "3px", width: "16px", height: "16px", accentColor: "var(--primary)" }}
                          />
                          <span>
                            I confirm that I have completed at least 3 years of medical-related studies and will submit formal verification from my School of Medicine upon requests from the director.
                          </span>
                        </label>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Navigation Actions Footer */}
              <div className="wizard-footer">
                {step > 1 ? (
                  <button type="button" className="btn-secondary" onClick={handleBack}>
                    Back
                  </button>
                ) : (
                  <div></div> /* Place holder for alignment */
                )}

                {step < 4 ? (
                  <button type="button" className="btn-primary" onClick={handleNext}>
                    Next Step
                  </button>
                ) : (
                  <button type="submit" className="btn-primary" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <span style={{ display: "inline-block", width: "16px", height: "16px", border: "2px solid #fff", borderTopColor: "transparent", borderRadius: "50%", animation: "fadeIn 1s infinite linear" }}></span>
                        Submitting...
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                )}
              </div>

            </main>
          </div>
        </form>
      ) : (
        /* Gorgeous Success Confirmation Screen */
        <main className="wizard-card success-card">
          <div className="success-icon" aria-hidden="true">
            ✓
          </div>
          <h2 className="step-title">Application Submitted!</h2>
          <p className="step-desc" style={{ maxWidth: "600px", margin: "0 auto 30px auto" }}>
            Ayu-bowan! Thank you, <strong>{formData.fullName}</strong>. Your volunteer application has been successfully routed to our field directors. We look forward to hearing your story.
          </p>

          <div className="success-details">
            <div className="success-title-line">Application Summary</div>
            <div className="detail-row">
              <span className="detail-label">Application ID:</span>
              <span className="detail-value">{applicationId}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Volunteer Name:</span>
              <span className="detail-value">{formData.fullName}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Primary Field Focus:</span>
              <span className="detail-value">{selectedTrackData?.name}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Target Start Date:</span>
              <span className="detail-value">{formData.startDate}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Lodging Package:</span>
              <span className="detail-value">{selectedPackageData.name} Package</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Estimated Program Fee:</span>
              <span className="detail-value" style={{ color: "var(--primary)" }}>${estimatedCost} USD</span>
            </div>
          </div>

          <div style={{ backgroundColor: "#EBF5F5", padding: "20px", borderRadius: "8px", maxWidth: "600px", margin: "0 auto 40px auto", textAlign: "left", fontSize: "14px", borderLeft: "4px solid var(--primary)" }}>
            <h4 style={{ color: "var(--primary)", fontWeight: "700", marginBottom: "8px" }}>Next Steps:</h4>
            <ol style={{ paddingLeft: "20px", margin: 0, color: "var(--gray-700)" }}>
              <li style={{ marginBottom: "8px" }}>Our program director, <strong>Diwasi Herath</strong>, will review your skills and credentials within 48 hours.</li>
              <li style={{ marginBottom: "8px" }}>We will email you at <strong>{formData.email}</strong> to schedule a 15-minute Zoom placement consultation.</li>
              <li>Once accepted, we will issue your formal visa support letter for Sri Lanka.</li>
            </ol>
          </div>

          <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <button type="button" className="btn-secondary" onClick={() => window.print()}>
              🖨️ Print Receipt
            </button>
            <a href="/" className="btn-primary" style={{ textDecoration: "none" }}>
              Return to Homepage
            </a>
          </div>
        </main>
      )}

      </div>
      <Footer />
    </>
  );
}
