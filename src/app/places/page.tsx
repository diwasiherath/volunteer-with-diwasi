"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PLACES_DATA = [
  {
    id: "galle",
    category: "Coastal",
    catClass: "cat-coastal",
    imageSrc: "/images/Fortress in Galle.jpeg",
    title: "Galle Historic Fort",
    description: "Located right next to our volunteer base. Walk along ancient ramparts, visit colonial buildings, and enjoy beautiful coastal views."
  },
  {
    id: "sigiriya",
    category: "Cultural",
    catClass: "cat-cultural",
    imageSrc: "/images/Sigiriya.JPG",
    title: "Sigiriya Ancient Citadel",
    description: "An amazing ancient palace complex perched high on a massive 200-meter rock column, surrounded by extensive landscaped gardens."
  },
  {
    id: "ella",
    category: "Hill Country",
    catClass: "cat-hillcountry",
    imageSrc: "/images/Ella Nine Arch Bridge.jpeg",
    title: "Ella & Nine Arch Bridge",
    description: "Take the world-famous iconic blue train trip into misty hills, hike up Ella Rock, and photograph majestic colonial railway tracks."
  },
  {
    id: "mirissa",
    category: "Coastal",
    catClass: "cat-coastal",
    imageSrc: "/images/Mirissa Srilanka.jpeg",
    title: "Mirissa Beach",
    description: "Relax on golden sands, catch a sunrise whale-watching tour, and enjoy fresh seafood at this laid-back southern coastal escape."
  },
  {
    id: "yala",
    category: "Wildlife",
    catClass: "cat-wildlife",
    imageSrc: "/images/yala srilanka.jpeg",
    title: "Yala National Park",
    description: "Go on a safari to spot leopards, elephants, and exotic birdlife in one of Sri Lanka's most celebrated wildlife reserves."
  },
  {
    id: "kandy",
    category: "Cultural",
    catClass: "cat-cultural",
    imageSrc: "/images/kandy.jpeg",
    title: "Kandy & The Temple of the Tooth",
    description: "Visit the sacred Temple of the Tooth Relic, explore the scenic lake, and experience the cultural heart of the hill capital."
  },
  {
    id: "nuwara-eliya",
    category: "Hill Country",
    catClass: "cat-hillcountry",
    imageSrc: "/images/Sri Lanka Tea Country Guide Nuwara Eliya.jpeg",
    title: "Nuwara Eliya Tea Country",
    description: "Wander through emerald tea plantations, enjoy the cool climate, and sample world-famous Ceylon tea straight from the source."
  },
  {
    id: "hikkaduwa",
    category: "Coastal",
    catClass: "cat-coastal",
    imageSrc: "/images/Hikkaduwa.jpeg",
    title: "Hikkaduwa Coral Sanctuary",
    description: "Snorkel above vibrant coral reefs, spot sea turtles, and enjoy the laid-back surf-town vibe of this coastal gem."
  }
];

export default function PlacesPage() {
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

  return (
    <>
      <Navbar currentPage="places" />

      <div className="page-header">
        <h1>Places to Visit</h1>
        <p>Explore the stunning beaches, ancient historical citadels, and beautiful tea plantations of Sri Lanka during your weekend excursions.</p>
      </div>

      <main className="places-container">
        {PLACES_DATA.map((place) => (
          <div key={place.id} className="place-item reveal is-visible">
            <span className={`place-category ${place.catClass}`}>{place.category}</span>
            <img className="place-img" src={place.imageSrc} alt={place.title} loading="lazy" />
            <div className="place-overlay">
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </main>

      <Footer />
    </>
  );
}
