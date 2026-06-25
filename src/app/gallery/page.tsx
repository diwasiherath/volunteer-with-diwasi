"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GALLERY_DATA = [
  {
    id: 1,
    imgSrc: "/images/DSC04518.JPG",
    title: "Smiles All Around",
    category: "Partner school visit",
    description: "Children at a partner school sharing a joyful moment with volunteers."
  },
  {
    id: 2,
    imgSrc: "/images/DSC04484.JPG",
    title: "Learning Together",
    category: "Classroom activities",
    description: "Volunteers leading interactive English lessons with local students."
  },
  {
    id: 3,
    imgSrc: "/images/DSC04528.JPG",
    title: "Community Project Launch",
    category: "Kickoff celebration",
    description: "Local community members and volunteers celebrating a new project kickoff."
  },
  {
    id: 4,
    imgSrc: "/images/DSC04490.JPG",
    title: "Rural Classrooms",
    category: "Rural school visit",
    description: "A glimpse inside one of our partner rural schools in Sri Lanka."
  },
  {
    id: 5,
    imgSrc: "/images/IMG_1841.jpg",
    title: "Paddy Field Days",
    category: "Rural heritage experience",
    description: "Volunteers experiencing traditional rice cultivation in the paddy fields."
  },
  {
    id: 6,
    imgSrc: "/images/DSC04515.JPG",
    title: "Special Needs Unit",
    category: "Inclusive education support",
    description: "Supporting inclusive education at our partner special needs unit."
  }
];

export default function GalleryPage() {
  const [activeItem, setActiveItem] = useState<typeof GALLERY_DATA[0] | null>(null);

  useEffect(() => {
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
      { threshold: 0.15 }
    );
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ESC key binder for closing lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <Navbar currentPage="gallery" />

      <div className="page-header">
        <h1>Moments From the Field</h1>
        <p>A visual journey of our volunteers working, learning, and sharing stories across Sri Lankan communities.</p>
      </div>

      <main className="gallery-container">
        {GALLERY_DATA.map((item) => (
          <button 
            key={item.id} 
            className="gallery-card reveal is-visible"
            onClick={() => setActiveItem(item)}
            aria-label={`Open image details for ${item.title}`}
          >
            <img src={item.imgSrc} alt={item.title} loading="lazy" />
            <div className="gallery-caption">
              <h3>{item.title}</h3>
              <p>{item.category}</p>
            </div>
          </button>
        ))}
      </main>

      {/* Lightbox Modal */}
      <div 
        className={`lightbox ${activeItem ? "open" : ""}`} 
        id="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label="Image preview"
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveItem(null);
        }}
      >
        {activeItem && (
          <div className="lightbox-content">
            <img src={activeItem.imgSrc} alt={activeItem.title} />
            <div className="lightbox-caption">
              <h3>{activeItem.title}</h3>
              <p>{activeItem.description}</p>
            </div>
            <button 
              className="lightbox-close" 
              onClick={() => setActiveItem(null)}
              aria-label="Close image preview"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
