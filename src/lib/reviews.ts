import { VolunteerReview } from "@/types";

export const DEFAULT_REVIEWS: VolunteerReview[] = [
  {
    id: "rev-1",
    name: "Emma Watson",
    rating: 5,
    trackId: "school-dev",
    reviewText: "Teaching conversational English to kids at the local school was the highlight of my trip. The community was so welcoming, and Diwasi Herath and his team made sure we had everything we needed to succeed. The smiles on the kids' faces are something I will never forget!",
    date: "2026-05-15",
    approved: true,
    country: "United Kingdom"
  },
  {
    id: "rev-2",
    name: "James Smith",
    rating: 5,
    trackId: "paddy-field",
    reviewText: "Getting into the mud and learning traditional rice cultivation was challenging but incredibly rewarding. The local farming families taught us centuries-old techniques. The premium homestay food was absolute heaven after a hard day of work!",
    date: "2026-06-02",
    approved: true,
    country: "United States"
  },
  {
    id: "rev-3",
    name: "Sophia Loren",
    rating: 4,
    trackId: "bakery-food",
    reviewText: "Loved working in the community micro-bakery! The wood-fired ovens and local recipes are fascinating. It was great to support small local entrepreneurs. I recommend the Ultimate package for the extra comfort and transport.",
    date: "2026-04-20",
    approved: true,
    country: "Italy"
  },
  {
    id: "rev-4",
    name: "Aravind Nair",
    rating: 5,
    trackId: "monk-english",
    reviewText: "Teaching English to the Buddhist monks at the monastic school was a deeply spiritual and peaceful experience. The monks are eager learners and highly respectful. I gained a lot of perspective on mindfulness and local culture.",
    date: "2026-05-30",
    approved: true,
    country: "India"
  },
  {
    id: "rev-5",
    name: "Mia Johnson",
    rating: 4,
    trackId: "adult-care",
    reviewText: "Spending time with the elderly at the care home was a touching experience. We organized arts and crafts, physical exercises, and shared stories. The project was well-organized, and the staff are incredibly dedicated.",
    date: "2026-06-10",
    approved: true,
    country: "Canada"
  },
  {
    id: "rev-6",
    name: "Lukas Müller",
    rating: 5,
    trackId: "cultural-exploration",
    reviewText: "The cultural exploration track was a fantastic dive into Sri Lanka's heritage. From learning local cooking to exploring ancient temples, every day was a new adventure. The ultimate package was worth every cent for the custom tours.",
    date: "2026-05-01",
    approved: true,
    country: "Germany"
  }
];

export const TRACK_NAMES: Record<string, string> = {
  "school-dev": "School Development Project",
  "preschool-dev": "Preschool Development Initiative",
  "adult-care": "Adult Care Home Wellness",
  "monk-english": "English for Buddhist Monks",
  "paddy-field": "Paddy Field & Rural Heritage",
  "cultural-exploration": "Social & Cultural Exploration",
  "industrial-tour": "Industrial, Craft & Education Tour",
  "ayurveda-wellness": "Ayurvedic Medicine & Wellness",
  "bakery-food": "Bakery & Traditional Food Sharing"
};

// Client-safe helper to parse CSV data
export function parseCSV(csvText: string): Record<string, string>[] {
  const lines = csvText.split(/\r?\n/);
  if (lines.length === 0 || !lines[0]) return [];

  // Parse header line
  const headers = parseCSVLine(lines[0]);
  const results: Record<string, string>[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;

    const row = parseCSVLine(line);
    const obj: Record<string, string> = {};

    headers.forEach((header, index) => {
      let val = row[index] || "";
      obj[header.trim()] = val.trim();
    });

    results.push(obj);
  }

  return results;
}

function parseCSVLine(line: string): string[] {
  const row: string[] = [];
  let insideQuote = false;
  let entry = "";

  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    if (char === '"') {
      // Toggle quote state
      insideQuote = !insideQuote;
    } else if (char === "," && !insideQuote) {
      // Field separator
      row.push(entry);
      entry = "";
    } else {
      entry += char;
    }
  }
  row.push(entry);

  // Clean enclosing quotes
  return row.map(val => val.replace(/^"|"$/g, "").replace(/""/g, '"'));
}

// Map parsed CSV row fields to VolunteerReview
export function mapRowToReview(row: Record<string, string>, index: number): VolunteerReview {
  const keys = Object.keys(row);
  
  // Find case-insensitive keys that match our fields
  const findVal = (possibleHeaders: string[]): string => {
    const foundKey = keys.find(k => 
      possibleHeaders.some(ph => k.toLowerCase().includes(ph.toLowerCase()))
    );
    return foundKey ? row[foundKey] : "";
  };

  const name = findVal(["name", "who", "volunteer", "author"]) || "Anonymous Volunteer";
  const ratingStr = findVal(["rating", "score", "star", "grade", "rate"]);
  const rating = Math.min(5, Math.max(1, parseInt(ratingStr) || 5));
  
  const rawTrack = findVal(["track", "project", "program", "module"]);
  // Try to match track name or track ID
  let trackId = "school-dev";
  const lowerTrack = rawTrack.toLowerCase();
  for (const [id, name] of Object.entries(TRACK_NAMES)) {
    if (lowerTrack.includes(id) || lowerTrack.includes(name.toLowerCase())) {
      trackId = id;
      break;
    }
  }

  const reviewText = findVal(["review", "text", "comment", "testimonial", "experience", "story"]) || "No review content provided.";
  const dateRaw = findVal(["timestamp", "date", "time"]);
  let date = "2026-06-23";
  if (dateRaw) {
    try {
      // Just extract YYYY-MM-DD from timestamp
      const match = dateRaw.match(/^(\d{4}[-/]\d{1,2}[-/]\d{1,2})|(\d{1,2}[-/]\d{1,2}[-/]\d{4})/);
      if (match) {
        date = match[0].replace(/\//g, "-");
      } else {
        // Fallback to simpler parse or just date
        const d = new Date(dateRaw);
        if (!isNaN(d.getTime())) {
          date = d.toISOString().split("T")[0];
        }
      }
    } catch {
      // use fallback
    }
  }

  const approvedStr = findVal(["approved", "status", "approve", "publish"]);
  // If spreadsheet doesn't have an "approved" column, default to true!
  // Otherwise, check if it starts with 'y', 't', 'a' (yes, true, approved)
  const hasApprovedColumn = keys.some(k => 
    ["approved", "status", "approve", "publish"].some(ph => k.toLowerCase().includes(ph))
  );
  const approved = hasApprovedColumn
    ? ["yes", "true", "approved", "y", "t", "1"].includes(approvedStr.toLowerCase().trim())
    : true;

  const country = findVal(["country", "nation", "origin", "home"]) || "Global Citizen";

  return {
    id: `gs-${index}`,
    name,
    rating,
    trackId,
    reviewText,
    date,
    approved,
    country
  };
}

// Browser localStorage key names
const LKEY_REVIEWS = "diwasi_local_reviews";
const LKEY_SHEET_URL = "diwasi_gs_csv_url";

export const DEFAULT_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfZ2URziLgNaCYF_Cs9HugI6f7CCdfLFDOyA2n0llIgPucO8A/viewform?usp=header";
export const DEFAULT_SHEET_URL = "https://docs.google.com/spreadsheets/d/18EGTsIrBD51XQpJWUSiwjQX_V30w43vFbFnzJH8g9pw/edit?usp=sharing";

// Automatically cleans Google Sheet URLs to export as CSV
export function cleanGoogleSheetUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  const match = trimmed.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match && match[1]) {
    return `https://docs.google.com/spreadsheets/d/${match[1]}/export?format=csv`;
  }
  return trimmed;
}

// Cleans Google Form URL for iframe embedding
export function cleanGoogleFormUrl(url: string): string {
  if (!url) return "";
  const trimmed = url.trim();
  if (trimmed.includes("embedded=true")) return trimmed;
  const baseUrl = trimmed.split("?")[0];
  return `${baseUrl}?embedded=true`;
}

export function getCustomSheetUrl(): string | null {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem(LKEY_SHEET_URL);
  if (saved) return cleanGoogleSheetUrl(saved);
  
  const envUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_CSV_URL;
  if (envUrl) return cleanGoogleSheetUrl(envUrl);
  
  return cleanGoogleSheetUrl(DEFAULT_SHEET_URL);
}

export function setCustomSheetUrl(url: string | null) {
  if (typeof window === "undefined") return;
  if (url) {
    localStorage.setItem(LKEY_SHEET_URL, url);
  } else {
    localStorage.removeItem(LKEY_SHEET_URL);
  }
}

export function initializeLocalReviews() {
  if (typeof window === "undefined") return;
  if (!localStorage.getItem(LKEY_REVIEWS)) {
    localStorage.setItem(LKEY_REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
  }
}

export function getAllLocalReviews(): VolunteerReview[] {
  if (typeof window === "undefined") return DEFAULT_REVIEWS;
  initializeLocalReviews();
  try {
    const raw = localStorage.getItem(LKEY_REVIEWS);
    return raw ? JSON.parse(raw) : DEFAULT_REVIEWS;
  } catch {
    return DEFAULT_REVIEWS;
  }
}

export function saveLocalReview(review: VolunteerReview) {
  if (typeof window === "undefined") return;
  initializeLocalReviews();
  const current = getAllLocalReviews();
  // Prevent duplicate IDs
  const filtered = current.filter(r => r.id !== review.id);
  const updated = [review, ...filtered];
  localStorage.setItem(LKEY_REVIEWS, JSON.stringify(updated));
}

export function updateReviewApproval(id: string, approved: boolean) {
  if (typeof window === "undefined") return;
  initializeLocalReviews();
  const current = getAllLocalReviews();
  const updated = current.map(r => r.id === id ? { ...r, approved } : r);
  localStorage.setItem(LKEY_REVIEWS, JSON.stringify(updated));
}

export function resetLocalReviews() {
  if (typeof window === "undefined") return;
  localStorage.setItem(LKEY_REVIEWS, JSON.stringify(DEFAULT_REVIEWS));
}

// Main function to fetch approved reviews
export async function fetchApprovedReviews(): Promise<VolunteerReview[]> {
  const sheetUrl = getCustomSheetUrl();
  
  if (sheetUrl) {
    try {
      // Use CORS proxy if needed, but Google Sheets published CSV supports direct CORS requests from anywhere!
      const res = await fetch(sheetUrl, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch Google Sheets CSV data");
      
      const csvText = await res.text();
      const parsedRows = parseCSV(csvText);
      
      const reviews = parsedRows.map((row, idx) => mapRowToReview(row, idx));
      return reviews.filter(r => r.approved);
    } catch (err) {
      console.error("Error fetching reviews from Google Sheets:", err);
      // Fall back to local reviews on failure
      const local = getAllLocalReviews();
      return local.filter(r => r.approved);
    }
  }
  
  // Default to localStorage
  const local = getAllLocalReviews();
  return local.filter(r => r.approved);
}
