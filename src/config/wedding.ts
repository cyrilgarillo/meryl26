/**
 * Wedding Configuration & Constants
 * Centralized source of truth for wedding details
 */

import { WEDDING_MAP_EMBED_URL } from "../app/api/googleMaps";

export const WEDDING_CONFIG = {
  // Couple & Event Info
  coupleNames: {
    firstPerson: "Melanie",
    secondPerson: "Cyril",
    display: "Melanie & Cyril",
  },

  // Wedding Date & Location
  weddingDate: new Date("2026-06-06T15:00:00+02:00"),
  weddingDateISO: "2026-06-06",
  weddingTime: "15:00",
  location: {
    destination: "Mallorca",
    country: "Spain",
    venue: "Restaurant with sea view",
    coordinates: {
      lat: 39.5494,
      lng: 2.7581,
    },
  },

  // Metadata
  website: {
    title: "Melanie & Cyril – Wedding 06.06.2026",
    titleDE: "Melanie & Cyril – Hochzeit 06.06.2026",
    description: "Our wedding website in Mallorca – all information at a glance.",
    descriptionDE: "Unsere Hochzeitswebsite in Mallorca – alle Infos auf einen Blick.",
    language: "de",
  },

  // Contact
  contactEmail: "oka@julia-martin-heiraten.ch",

  // Navigation Sections
  sections: [
    { id: "about", label: "Startseite" },
    { id: "countdown", label: "Countdown" },
    { id: "story", label: "Unsere Geschichte" },
    { id: "destination", label: "Destination & Ort" },
    { id: "accommodation", label: "Unterkunft & Anreise" },
    { id: "schedule", label: "Ablauf" },
    { id: "abc", label: "Hochzeits-ABC" },
    { id: "rsvp", label: "Anmeldung" },
    { id: "gifts", label: "Geschenke" },
  ],

  // Event Timeline
  schedule: {
    friday: {
      title: "Friday – Arrival & Welcome",
      titleDE: "Freitag – Ankommen & Welcome",
      items: [
        { time: "16:00", event: "Arrival & Check-in" },
        { time: "19:00", event: "Casual Get-together / Aperitif" },
        { time: "open end", event: "Toast, arrival, vacation mode activated" },
      ],
    },
    saturday: {
      title: "Saturday – The Big Day",
      titleDE: "Samstag – Der grosse Tag",
      items: [
        { time: "14:30", event: "Guest arrival at ceremony location" },
        { time: "15:00", event: "Ceremony" },
        { time: "17:00", event: "Aperitif & Photos" },
        { time: "19:00", event: "Dinner & Party" },
        { time: "open end", event: "Dancing, drinks and lots of love" },
      ],
    },
    sunday: {
      title: "Sunday – Joint Breakfast",
      titleDE: "Sonntag – Gemeinsames Fruehstueck",
      items: [
        { time: "09:30–11:30", event: "Joint Breakfast / Brunch" },
        { time: "after", event: "Farewell & individual departure" },
      ],
    },
  },
};

/**
 * Get section by ID
 */
export function getSectionById(id: string) {
  return WEDDING_CONFIG.sections.find((s) => s.id === id);
}

/**
 * Get all section IDs for navigation
 */
export function getAllSectionIds() {
  return WEDDING_CONFIG.sections.map((s) => s.id);
}

/**
 * Get Google Maps embed URL
 *
 * IMPORTANT:
 * We use a real Google Maps "embed" URL stored centrally in src/api/googleMaps.ts.
 * Normal /maps/place/... URLs or vague query strings often show only "Mallorca" and not the exact venue.
 */
export function getMapEmbedURL(_location: typeof WEDDING_CONFIG.location) {
  return WEDDING_MAP_EMBED_URL;
}
