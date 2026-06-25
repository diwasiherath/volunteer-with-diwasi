"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Complete detailed project data mapped from legacy projectData
const PROJECT_DETAILS: Record<string, {
  title: string;
  tag: string;
  imageSrc: string;
  shortDesc: string;
  overview: string;
  objectives: string[];
  activities: string[];
  outcomes: string[];
  impact: string;
}> = {
  "school": {
    title: "School Development and Volunteer Engagement Project",
    tag: "Education & Infrastructure",
    imageSrc: "/images/DSC04478.JPG",
    shortDesc: "Support partner schools through classroom renovation, infrastructure upgrades, conversational English lessons, and inclusive recreational activities for students with special needs.",
    overview: "This project aims to support the educational and social development of partner schools through volunteer engagement, infrastructure improvements, educational programs, and inclusive activities for all students. By bringing together local communities, schools, and international volunteers, the project seeks to create a positive learning environment while promoting cultural exchange and community empowerment.",
    objectives: [
      "Improve school facilities and learning environments.",
      "Support students through educational and extracurricular activities.",
      "Promote inclusive education for students with special needs.",
      "Enhance cultural awareness and global understanding.",
      "Encourage community participation and sustainable development."
    ],
    activities: [
      "School Renovation: Classroom painting, repairs, school garden beautification, educational murals, and playground updates.",
      "Educational Support: Conversational English practice, mathematics, science, and ICT sessions; reading programs and creative workshops.",
      "Special Needs Support: Arts, crafts, music, sensory workshops, interactive adaptation games, and one-on-one adaptive interaction panels.",
      "Cultural Programs: Regional traditions sharing, dance exhibitions, and heritage awareness assemblies.",
      "Life Skills: Team-building exercises, public speaking workshops, and environmental responsibility modules."
    ],
    outcomes: [
      "Improved school infrastructure and learning spaces.",
      "Enhanced educational opportunities for students.",
      "Greater inclusion and support for students with special needs.",
      "Increased cultural understanding and global awareness.",
      "Stronger partnerships between schools, communities, and volunteers."
    ],
    impact: "This project aims to build a strong foundation for lifelong learning and sustainable community development. By improving school environments and introducing inclusive, creative learning methods, the initiative supports the development of confident, globally aware, and well-rounded students who are better prepared for future education and life challenges."
  },
  "preschool": {
    title: "Preschool Development and Early Childhood Education Project",
    tag: "Early Childhood",
    imageSrc: "/images/DSC04492.JPG",
    shortDesc: "Enhance early learning environments by assisting local teachers, preparing creative materials, teaching foundational English through music, and guiding basic health and hygiene routines.",
    overview: "The Preschool Development and Early Childhood Education Project is designed to support early learning environments by enhancing educational quality, improving facilities, and providing engaging learning experiences for young children. The project focuses on creating a safe, creative, and nurturing space where children can develop foundational skills in education, communication, creativity, and social interaction.",
    objectives: [
      "Enhance early childhood learning and development.",
      "Improve preschool learning environments and facilities.",
      "Support teachers with educational activities and resources.",
      "Encourage creativity, communication, and social skills in children.",
      "Promote inclusive and engaging learning experiences."
    ],
    activities: [
      "Early Learning and Teaching: English language introduction through songs/games, basic literacy, numeracy exercises, and storytelling loops.",
      "Developmental Actions: Drawing, coloring, painting, rhythm coordination sets, role-plays, and group collaboration dynamics.",
      "Teacher Support: Material preparations, classroom organizing maps, and specialized dynamic learning setups.",
      "Hygiene Protocols: Handwashing guidance, active clean routines, and nutritional daily lifestyle practices.",
      "Cultural Frameworks: International volunteer interaction schemes and cultural miniature events."
    ],
    outcomes: [
      "Improved early childhood learning experiences.",
      "Enhanced communication and social skills in children.",
      "More engaging and creative classroom environments.",
      "Stronger support system for preschool teachers.",
      "Better prepared children for primary education structures."
    ],
    impact: "This project aims to build a strong foundation for lifelong learning by investing in early childhood education. By improving preschool environments and introducing innovative learning methods, the initiative supports the development of confident, creative, and socially aware children who are better prepared for future education and life challenges."
  },
  "adult-care": {
    title: "Adult Care Home Support and Wellness Project",
    tag: "Social Welfare",
    imageSrc: "/images/Adult Care Home Support and Wellness Project.jpeg",
    shortDesc: "Provide physical mobility support, gentle exercises, companionship, and memory-sharing activities to elderly residents while improving living facilities and care home gardens.",
    overview: "The Adult Care Home Support and Wellness Project is designed to enhance the quality of life of elderly residents through health support services, social engagement, environmental improvement, and compassionate volunteer assistance. The project aims to promote physical well-being, emotional support, dignity, and social inclusion for older adults living in care homes.",
    objectives: [
      "Improve the physical and emotional well-being of elderly residents.",
      "Provide support through physiotherapy and wellness activities.",
      "Foster meaningful social interaction and companionship.",
      "Improve living conditions through cleaning and maintenance initiatives.",
      "Promote dignity, respect, and quality care for older adults."
    ],
    activities: [
      "Health and Wellness: Basic professional physiotherapy execution, gentle flexibility loops, and relaxation therapies.",
      "Caregiving Assistance: Supporting safe non-medical movement protocols and supervisor personal care tasks.",
      "Social Companionship: Memory-sharing circles, conversational exchange blocks, birthday festivals, and artistic expression classes.",
      "Environmental Improvement: Clean facility gardens, recreational layout optimization, and green landscaping projects.",
      "Recreational Integration: Interactive games, crafting clubs, and cross-cultural music interaction models."
    ],
    outcomes: [
      "Improved physical mobility and overall well-being of residents.",
      "Increased social interaction and reduced feelings of loneliness.",
      "Enhanced living conditions and cleaner facilities.",
      "Greater community involvement in elderly care and support.",
      "Stronger emotional well-being and quality of life for residents."
    ],
    impact: "The project seeks to create a caring and inclusive environment where elderly individuals feel valued, respected, and connected to society. Through ongoing volunteer engagement and community partnerships, the initiative aims to contribute to healthy aging, social inclusion, and improved quality of life for all residents."
  },
  "monks-edu": {
    title: "English Education for Buddhist Monks Project",
    tag: "Language Exchange",
    imageSrc: "/images/English Education for Buddhist Monks Project.jpeg",
    shortDesc: "Empower monastic communities by teaching conversational grammar, pronunciation, and English terminology related to Buddhist philosophy to help them communicate with global visitors.",
    overview: "The English Education for Buddhist Monks Project is designed to support the English language development of Buddhist monks, enabling them to communicate effectively with international visitors, participate in global religious and cultural exchanges, and share Buddhist teachings with a wider audience. This initiative aims to bridge language barriers while respecting and preserving monastic traditions.",
    objectives: [
      "Improve English communication skills among Buddhist monks.",
      "Enable effective communication with international visitors and volunteers.",
      "Support the sharing of Buddhist teachings globally.",
      "Enhance access to educational and religious resources in English.",
      "Promote cultural exchange between monks and international communities."
    ],
    activities: [
      "Basic Training: Structural conversational grammar blocks, pronunciation correction drills, and basic text processing rules.",
      "Public Performance: Dialogues simulating welcoming foreign guests, temple guiding roleplays, and general layout speech sets.",
      "Religious Terminology: Translating philosophical Buddhist loops, learning textual terminologies, and explaining meditation practices.",
      "Volunteer Collaboration: Group communication panels, mutual knowledge swaps, and strategic language interactive tasks.",
      "Digital Media Tools: Language learning applications processing and educational multi-media configurations."
    ],
    outcomes: [
      "Improved English communication skills among participating monks.",
      "Increased ability to interact with international visitors confidently.",
      "Enhanced understanding of global Buddhist networks.",
      "Greater confidence in sharing teachings in English.",
      "Strengthened cultural exchange between monks and global communities."
    ],
    impact: "This project aims to empower Buddhist monks with English language skills that support both religious and educational development. By improving communication abilities, monks will be better equipped to share Buddhist teachings internationally, engage with global communities, and contribute to cultural understanding and spiritual exchange across borders."
  },
  "paddy-field": {
    title: "Agricultural Heritage and Paddy Field Experience Project",
    tag: "Sustainable Agriculture",
    imageSrc: "/images/IMG_1841.jpg",
    shortDesc: "Immerse yourself directly into traditional Sri Lankan farming. Participate in hands-on rice planting, water management, harvesting, and authentic village cooking sessions.",
    overview: "The Agricultural Heritage and Paddy Field Experience Project offers visitors a unique opportunity to immerse themselves in traditional farming practices while experiencing the rich agricultural culture of the local community. This initiative is designed to provide tourists with hands-on experiences in paddy cultivation, rural lifestyles, and sustainable agricultural practices rather than a conventional volunteer structure.",
    objectives: [
      "Promote cultural and agricultural tourism options.",
      "Provide authentic rural experiences for visitors.",
      "Preserve and showcase traditional farming practices.",
      "Increase awareness of sustainable agriculture and food production.",
      "Create meaningful interactions between tourists and local farming communities."
    ],
    activities: [
      "Paddy Field Immersive Tasking: Rice seedling planting, traditional terrain clearing, irrigation mechanics, and traditional threshing practices.",
      "Farming Analytics: Organic farming workshops, traditional regional cycling timelines, and sustainable preservation guidelines.",
      "Village Lifestyle Immersive: Local home culinary workshops, community story circles, and cross-cultural village path walks.",
      "Eco-Tourism Tracks: Guided farming photography loops, regional landscape cycling loops, and biodiversity exploration tracks.",
      "Industrial Operations: Mill infrastructure tours, market tracking reviews, and interaction blocks with expert regional farm entrepreneurs."
    ],
    outcomes: [
      "Enhanced understanding of local agricultural heritage and traditions.",
      "Increased appreciation for sustainable food production systems.",
      "Meaningful cultural exchange between visitors and local communities.",
      "Memorable hands-on experiences in traditional farming activities.",
      "Promotion of rural tourism and agricultural awareness."
    ],
    impact: "This project aims to preserve and celebrate the region's agricultural heritage while creating sustainable tourism opportunities that benefit local farming communities. By connecting visitors with authentic rural experiences, the initiative encourages cultural appreciation, environmental awareness, and support for traditional agricultural practices that continue to play a vital role in local livelihoods."
  },
  "social-cultural": {
    title: "Social & Cultural Experience Activities Track",
    tag: "Responsible Tourism",
    imageSrc: "/images/social and cultural.jpeg",
    shortDesc: "Engage in active beach cleaning and marine conservation efforts, take part in temple restoration, learn local crafts, and participate in traditional ceremonies.",
    overview: "The Social & Cultural Experience Activities component of the program is designed to offer participants immersive, meaningful, and memorable experiences through engagement in local cultural life and environmental activities. Rather than focusing solely on community service, this section emphasizes experiential learning, cultural appreciation, and responsible tourism.",
    objectives: [
      "Promote cultural understanding through direct participation in traditions.",
      "Encourage responsible tourism and environmental awareness models.",
      "Provide immersive experiences connecting visitors with regional heritage.",
      "Support appreciation of natural and cultural spaces.",
      "Foster positive interaction between visitors and local communities."
    ],
    activities: [
      "Coastal Cleanup: Guided active coastal marine clearing, pollution distribution panels, and ecosystems protection analysis.",
      "Temple Upkeep Maintenance: Structural temple restoration maintenance, ritual tracking patterns, and mindfulness reflection circles.",
      "Artistic Workshops: Artisan craft training sessions, traditional dance execution systems, and folklore assemblies.",
      "Local Networking Events: Unstructured storytelling sessions with senior community hosts and shared traditional hospitality dining tables."
    ],
    outcomes: [
      "Enhanced cultural awareness and appreciation among participants.",
      "Meaningful experiential learning beyond traditional tourism.",
      "Increased respect for local customs, traditions, and environments.",
      "Stronger connection between visitors and host communities.",
      "Promotion of sustainable and responsible tourism practices."
    ],
    impact: "This initiative aims to redefine tourism as a meaningful cultural exchange experience rather than passive observation. By integrating environmental awareness and cultural participation, the project encourages respectful engagement, lifelong learning, and a deeper appreciation of heritage, nature, and community life."
  },
  "industrial-craft": {
    title: "Industrial, Craft & Educational Experience Project",
    tag: "Industrial & Experiential",
    imageSrc: "/images/indsutrial craft.jpeg",
    shortDesc: "Explore leading production facilities—including porcelain, apparel, and coconut industries—interact with local university campuses, and join hands-on pottery workshops.",
    overview: "The Industrial, Craft & Educational Experience Project is designed to provide participants with an immersive journey into Sri Lanka’s world-class manufacturing industries, traditional craftsmanship, and academic environments. This program blends educational tourism, cultural learning, and hands-on creative experiences to offer a unique understanding of both modern industry and traditional heritage.",
    objectives: [
      "Introduce participants to Sri Lanka’s industrial and manufacturing sectors.",
      "Promote understanding of traditional and modern production systems.",
      "Encourage educational exchange with universities and students.",
      "Preserve and promote traditional craftsmanship such as pottery.",
      "Provide immersive and educational tourism experiences."
    ],
    activities: [
      "Manufacturing Field Exploration: Quality control observation loops inside ceramic tile factories, porcelain processing setups, garment units, and coconut manufacturing facilities.",
      "Academic Networking: Campus tours across partner local university complexes, lecture panels, and project design discussions with native student networks.",
      "Pottery Craft Workshops: Working alongside master potters to shape raw clay bodies, testing kiln heating networks, and creating personal artwork items.",
      "Traditional Costume Exploration: Wearing regional styles (Saree, Osari, National dress), understanding textile history symbols, and photography documentation setups.",
      "Ethical Elephant Care: Wildlife conservation facility reviews, monitoring cleaning and nourishment blocks overseen by handlers, and tracking eco-preservation models."
    ],
    outcomes: [
      "Increased understanding of Sri Lanka’s industrial and craft sectors.",
      "Meaningful educational exchange between visitors and local institutions.",
      "Appreciation of traditional pottery and artisan skills.",
      "Insight into global manufacturing and export industries.",
      "Enhanced cultural awareness through hands-on learning experiences."
    ],
    impact: "This project aims to position Sri Lanka as a destination for educational and experiential tourism that bridges industry, culture, and academia. By connecting visitors with both modern factories and traditional craftsmanship, the initiative promotes innovation, cultural preservation, and global knowledge exchange."
  },
  "ayurvedic-wellness": {
    title: "Ayurvedic Medicine, Wellness & Educational Experience Project",
    tag: "Ayurveda & Wellness",
    imageSrc: "/images/ayurvedic.jpeg",
    shortDesc: "Discover Sri Lanka's rich healing traditions. Learn core Ayurvedic remedies, identify indigenous medicinal plants, and assist in local therapeutic wellness centers.",
    overview: "The Ayurvedic Medicine, Wellness & Educational Experience Project is designed to provide international visitors with an immersive introduction to Sri Lanka’s rich Ayurvedic heritage. The program combines wellness tourism, traditional medical education, cultural exchange, and community engagement, allowing participants to learn the principles of Ayurveda while actively supporting the daily operations of an Ayurvedic clinic.",
    objectives: [
      "Introduce participants to the philosophy and principles of Ayurveda.",
      "Provide hands-on learning experiences in traditional Sri Lankan Ayurvedic medicine.",
      "Promote wellness tourism and cultural exchange.",
      "Support Ayurvedic clinics through educational volunteer activities.",
      "Increase awareness of medicinal plants, natural healing, and holistic health practices."
    ],
    activities: [
      "Clinical Operations Exposure: Observation of diagnosis procedures, clinic consultation monitoring, and system management tracking.",
      "Remedy Compounding Sessions: Hands-on extraction setups for therapeutic essential oils, powder processing loops, and ingredient sourcing tasks.",
      "Botanical Herb Farm Operations: Managing identification fields, soil care operations inside herbal garden plots, and tracking biodiversity conservation strategies.",
      "Holistic Health Classes: Learning nutrition systems, attending massage demonstration loops, and daily morning yoga/mindfulness classes.",
      "Educational Clinic Support: Assisting staff with non-medical administrative tasks, workshop setup coordination, and community wellness presentations."
    ],
    outcomes: [
      "Increased understanding of Ayurvedic medicine and holistic healthcare.",
      "Practical knowledge of medicinal plants and herbal remedies.",
      "Enhanced awareness of wellness, nutrition, and preventive health practices.",
      "Meaningful cultural exchange between visitors and local practitioners.",
      "Support for local Ayurvedic clinics and educational initiatives."
    ],
    impact: "This project aims to position Sri Lanka as a leading destination for Ayurvedic educational tourism and wellness experiences. By connecting visitors with authentic Ayurvedic practitioners, herbal medicine traditions, and community-based healthcare initiatives, the program promotes cultural preservation, sustainable tourism, and global awareness of holistic health practices."
  },
  "bakery-share": {
    title: "Sri Lankan Bakery, Traditional Food & Community Sharing Experience Project",
    tag: "Bakery & Culinary",
    imageSrc: "/images/Bakery & Culinary.jpeg",
    shortDesc: "Work alongside local community bakeries to master traditional Sri Lankan bread and pastry preparation methods while helping develop local micro-entrepreneurship models.",
    overview: "The Sri Lankan Bakery, Traditional Food & Community Sharing Experience Project is designed to provide visitors with an authentic culinary journey into Sri Lanka’s rich food heritage. The program combines traditional home baking, local food preparation, cultural learning, and community engagement, allowing participants to learn recipes passed down through generations while connecting with local families and communities.",
    objectives: [
      "Introduce participants to traditional Sri Lankan baking and culinary practices.",
      "Preserve and promote local food traditions and recipes.",
      "Create meaningful cultural exchange between visitors and local communities.",
      "Support local home-based food producers and small bakeries.",
      "Encourage sustainable food practices using local ingredients."
    ],
    activities: [
      "Traditional Baking Masterclasses: Preparing wood-fired coconut buns, specialized fish buns, roast paan varieties, and ethnic sweets alongside small enterprise bakeries.",
      "Cultural Meal Compounding: Kitchen operations assembling authentic rice & curry variations, string hoppers, pittu, and celebration dishes.",
      "Farm-to-Table Supply Tracking: Spice assembly field excursions, market pricing reviews, and checking organic produce processing loops.",
      "Community Food Swaps: Designing food sharing banquets for village clusters, schools, or senior home layouts to drive interpersonal connection.",
      "Micro-business Development: Reviewing community marketing systems, wrapping designs, and tracking eco-sustainable food development models."
    ],
    outcomes: [
      "Increased understanding of Sri Lankan culinary heritage and baking traditions.",
      "Practical skills in traditional baking and food preparation.",
      "Meaningful cultural exchange between visitors and local communities.",
      "Support for local bakers, home cooks, and small food enterprises.",
      "Greater appreciation for sustainable and community-centered food systems."
    ],
    impact: "This project aims to position Sri Lanka as a leading destination for culinary and cultural tourism by connecting visitors with authentic local food traditions and community experiences. Through hands-on baking, traditional cooking, and community food-sharing activities, the initiative promotes cultural preservation, supports local livelihoods, and strengthens intercultural understanding."
  }
};

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Setup scroll animations observer
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

  // ESC key listener for modal closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeProject = selectedId ? PROJECT_DETAILS[selectedId] : null;

  return (
    <>
      <Navbar currentPage="projects" />

      <div className="page-header">
        <h1>Our Volunteer Projects</h1>
        <p>Choose the project that aligns with your passions and skills to create a positive impact.</p>
      </div>

      <main className="projects-grid" style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
        {Object.entries(PROJECT_DETAILS).map(([id, proj]) => (
          <div key={id} className="project-card reveal is-visible" data-project={id}>
            <div className="project-img-wrapper">
              <img className="project-img" src={proj.imageSrc} alt={proj.title} loading="lazy" />
            </div>
            <div className="project-content">
              <span className="project-tag">{proj.tag}</span>
              <h3>{proj.title}</h3>
              <p>{proj.shortDesc}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "15px" }}>
                <button 
                  className="project-btn" 
                  onClick={() => setSelectedId(id)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  Learn More &rarr;
                </button>
                <Link href="/apply" className="btn">
                  Select Track
                </Link>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Modal system */}
      <div 
        className={`modal-overlay ${selectedId ? "active" : ""}`} 
        id="projectModal"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedId(null);
        }}
      >
        {activeProject && (
          <div className="modal-container">
            <button 
              className="modal-close" 
              onClick={() => setSelectedId(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <img className="modal-header-img" src={activeProject.imageSrc} alt={activeProject.title} />
            <div className="modal-body">
              <h2 className="modal-title">{activeProject.title}</h2>
              <span className="project-tag" style={{ display: "inline-block", marginBottom: "20px" }}>{activeProject.tag}</span>
              
              <div className="modal-text">
                <h3 className="modal-section-title">Project Overview</h3>
                <p>{activeProject.overview}</p>

                <h3 className="modal-section-title">Project Objectives</h3>
                <ul className="modal-list">
                  {activeProject.objectives.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h3 className="modal-section-title">Key Volunteer Activities</h3>
                <ul className="modal-list">
                  {activeProject.activities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h3 className="modal-section-title">Expected Outcomes</h3>
                <ul className="modal-list">
                  {activeProject.outcomes.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <h3 className="modal-section-title">Long-Term Impact</h3>
                <p>{activeProject.impact}</p>
              </div>

              <div className="modal-footer">
                <Link href="/apply" className="btn-primary" style={{ textDecoration: "none" }}>
                  Apply for this Project Track
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
