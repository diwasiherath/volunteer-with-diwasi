"use client";

import { useState } from "react";

const MAP_LOCATIONS = [
  {
    id: "coastal",
    label: "📍 Northwestern Province Tracks",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506742.75383501727!2d79.8459!3d7.9658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2d174780528ad%3A0x63351d4576307129!2sNorth%20Western%20Province%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1720445460000!5m2!1sen!2slk"
  },
  {
    id: "agricultural",
    label: "📍 Rural Agricultural & Monastic Settlement Hubs",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31697.55010648937!2d81.10091396860012!3d6.866687448834927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46595567b5e3d%3A0x618d3637e19199d2!2sElla%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
  },
  {
    id: "schools",
    label: "📍 Partner Preschools & Educational Facilities",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63475.29749174577!2d80.50570377042502!3d5.952959828456209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fcd3a82dfab%3A0x7d94943cd77bc6f2!2sMatara%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
  },
  {
    id: "hq",
    label: "🏡 DIWASI Project Headquarters & Volunteer Housing Base",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5185966453966!2d79.955945!3d7.3233917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e7a00c60dbb9%3A0xe6a0288775b6f3d4!2sVolunteer+Sri+Lanka+with+Diwasi!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
  }
];

export default function MapSection() {
  const [activeMapIndex, setActiveMapIndex] = useState(0);

  return (
    <div className="map-section-wrapper">
      <div className="section-container map-grid">
        <div className="map-text-content reveal is-visible">
          <h3>Our Field Operations</h3>
          <p>
            DIWASI projects are thoughtfully laid out across coastal zones, rural villages, and local community hubs. 
            Our volunteer accommodation base matches safety with complete cultural proximity.
          </p>
          
          <div className="location-badges" role="tablist" aria-label="Volunteer Operation Areas">
            {MAP_LOCATIONS.map((loc, idx) => (
              <button
                key={loc.id}
                className={`location-badge ${activeMapIndex === idx ? "active" : ""}`}
                onClick={() => setActiveMapIndex(idx)}
                role="tab"
                aria-selected={activeMapIndex === idx}
                aria-controls="operational-map"
                id={`badge-${loc.id}`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
        
        <div 
          className="map-display-container reveal is-visible" 
          id="operational-map" 
          role="tabpanel" 
          aria-labelledby={`badge-${MAP_LOCATIONS[activeMapIndex].id}`}
        >
          <iframe 
            src={MAP_LOCATIONS[activeMapIndex].embedUrl} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
            title="Interactive map showing DIWASI project locations in Sri Lanka"
            style={{ border: 0, width: "100%", height: "100%" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
