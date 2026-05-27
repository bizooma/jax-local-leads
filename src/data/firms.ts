export type PracticeAreaSlug =
  | "car-accidents"
  | "truck-accidents"
  | "motorcycle-accidents"
  | "slip-and-fall"
  | "wrongful-death"
  | "workers-compensation"
  | "medical-malpractice"
  | "premises-liability"
  | "product-liability";

export interface PracticeArea {
  id: string;
  name: string;
  slug: PracticeAreaSlug;
  description: string;
}

export interface Attorney {
  name: string;
  title: string;
}

export interface Firm {
  id: string;
  firm_name: string;
  slug: string;
  logo_url: string | null;
  short_description: string;
  full_description: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  website_url: string;
  practice_areas: PracticeAreaSlug[];
  neighborhoods_served: string[];
  attorneys: Attorney[];
  latitude: number | null;
  longitude: number | null;
  is_verified: boolean;
  created_at: string;
  updated_at: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  { id: "1", name: "Car Accidents", slug: "car-accidents", description: "Representation for drivers, passengers, and pedestrians injured in Jacksonville auto collisions." },
  { id: "2", name: "Truck Accidents", slug: "truck-accidents", description: "Claims involving commercial trucks, 18-wheelers, and freight carriers on I-95, I-10, and I-295." },
  { id: "3", name: "Motorcycle Accidents", slug: "motorcycle-accidents", description: "Injury claims for riders involved in crashes across Duval County roads and highways." },
  { id: "4", name: "Slip and Fall", slug: "slip-and-fall", description: "Premises injury claims in stores, restaurants, hotels, and public spaces." },
  { id: "5", name: "Wrongful Death", slug: "wrongful-death", description: "Civil claims pursued by surviving family members after a fatal accident." },
  { id: "6", name: "Workers' Compensation", slug: "workers-compensation", description: "Workplace injury benefits and disputes under Florida workers' comp law." },
  { id: "7", name: "Medical Malpractice", slug: "medical-malpractice", description: "Claims involving negligent medical care, misdiagnosis, or surgical errors." },
  { id: "8", name: "Premises Liability", slug: "premises-liability", description: "Injuries caused by unsafe conditions on residential, commercial, or public property." },
  { id: "9", name: "Product Liability", slug: "product-liability", description: "Injuries caused by defective products, vehicles, or consumer goods." },
];

/**
 * SAMPLE / PLACEHOLDER FIRMS — NOT REAL.
 * Verify and replace with real Jacksonville firm data before publishing.
 * Schema mirrors the suggested Supabase `firms` table.
 */
export const FIRMS: Firm[] = [
  {
    id: "1",
    firm_name: "Downtown Accident Law Group",
    slug: "downtown-accident-law-group",
    logo_url: null,
    short_description: "Sample personal injury firm serving downtown Jacksonville and the urban core.",
    full_description:
      "Downtown Accident Law Group is a sample placeholder firm representing the type of practice that handles auto, motorcycle, and premises claims for residents of downtown Jacksonville, Riverside, and Springfield. Replace this profile with verified firm details before publishing.",
    address: "100 N Laura St, Suite 500",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 555-0101",
    website_url: "https://example.com",
    practice_areas: ["car-accidents", "motorcycle-accidents", "slip-and-fall", "premises-liability"],
    neighborhoods_served: ["Downtown", "Riverside", "Springfield", "San Marco"],
    attorneys: [
      { name: "Sample Attorney One", title: "Managing Partner" },
      { name: "Sample Attorney Two", title: "Senior Associate" },
    ],
    latitude: 30.3322,
    longitude: -81.6557,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    firm_name: "Jacksonville Personal Injury Firm",
    slug: "jacksonville-personal-injury-firm",
    logo_url: null,
    short_description: "Sample firm focused on serious injury and wrongful death claims across Duval County.",
    full_description:
      "Jacksonville Personal Injury Firm is a placeholder profile illustrating a full-service injury practice covering car, truck, and wrongful death matters across Duval and surrounding counties. This entry is sample data — verify before publishing.",
    address: "4651 Salisbury Rd",
    city: "Jacksonville",
    state: "FL",
    zip: "32256",
    phone: "(904) 555-0102",
    website_url: "https://example.com",
    practice_areas: ["car-accidents", "truck-accidents", "wrongful-death", "medical-malpractice"],
    neighborhoods_served: ["Southside", "Deerwood", "Baymeadows", "Mandarin"],
    attorneys: [
      { name: "Sample Attorney Three", title: "Founding Partner" },
    ],
    latitude: 30.2638,
    longitude: -81.5566,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    firm_name: "Beaches Injury Attorneys",
    slug: "beaches-injury-attorneys",
    logo_url: null,
    short_description: "Sample firm representing accident victims at the Jacksonville beaches and Intracoastal area.",
    full_description:
      "Beaches Injury Attorneys is a placeholder firm profile for a practice serving Atlantic Beach, Neptune Beach, Jacksonville Beach, and Ponte Vedra residents. Sample data only.",
    address: "1300 Beach Blvd",
    city: "Jacksonville Beach",
    state: "FL",
    zip: "32250",
    phone: "(904) 555-0103",
    website_url: "https://example.com",
    practice_areas: ["car-accidents", "motorcycle-accidents", "slip-and-fall", "product-liability"],
    neighborhoods_served: ["Jacksonville Beach", "Atlantic Beach", "Neptune Beach", "Ponte Vedra"],
    attorneys: [
      { name: "Sample Attorney Four", title: "Partner" },
      { name: "Sample Attorney Five", title: "Associate" },
    ],
    latitude: 30.2946,
    longitude: -81.3931,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    firm_name: "Northside Workers' Compensation Group",
    slug: "northside-workers-compensation-group",
    logo_url: null,
    short_description: "Sample workers' compensation and workplace injury practice in north Jacksonville.",
    full_description:
      "Northside Workers' Compensation Group is a placeholder firm representing workplace injury and comp claim practices serving the JaxPort corridor, Northside, and Oceanway. Sample data only — verify before publishing.",
    address: "9000 Lem Turner Rd",
    city: "Jacksonville",
    state: "FL",
    zip: "32208",
    phone: "(904) 555-0104",
    website_url: "https://example.com",
    practice_areas: ["workers-compensation", "premises-liability", "product-liability"],
    neighborhoods_served: ["Northside", "Oceanway", "JaxPort"],
    attorneys: [{ name: "Sample Attorney Six", title: "Managing Attorney" }],
    latitude: 30.4262,
    longitude: -81.6611,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    firm_name: "Westside Trial Lawyers",
    slug: "westside-trial-lawyers",
    logo_url: null,
    short_description: "Sample trial-focused firm representing accident and malpractice clients in west Jacksonville.",
    full_description:
      "Westside Trial Lawyers is a placeholder profile for a trial-oriented injury and malpractice firm serving Westside, Argyle, and Oakleaf communities. Verify before publishing.",
    address: "6800 103rd St",
    city: "Jacksonville",
    state: "FL",
    zip: "32210",
    phone: "(904) 555-0105",
    website_url: "https://example.com",
    practice_areas: ["medical-malpractice", "wrongful-death", "truck-accidents"],
    neighborhoods_served: ["Westside", "Argyle", "Oakleaf"],
    attorneys: [{ name: "Sample Attorney Seven", title: "Lead Trial Attorney" }],
    latitude: 30.2418,
    longitude: -81.7551,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    firm_name: "Riverside Injury Advocates",
    slug: "riverside-injury-advocates",
    logo_url: null,
    short_description: "Sample personal injury advocates in the historic Riverside and Avondale area.",
    full_description:
      "Riverside Injury Advocates is a sample firm profile representing a community-focused personal injury practice in Riverside, Avondale, and Murray Hill. Placeholder data only.",
    address: "2950 Park St",
    city: "Jacksonville",
    state: "FL",
    zip: "32205",
    phone: "(904) 555-0106",
    website_url: "https://example.com",
    practice_areas: ["car-accidents", "slip-and-fall", "premises-liability", "motorcycle-accidents"],
    neighborhoods_served: ["Riverside", "Avondale", "Murray Hill", "Ortega"],
    attorneys: [
      { name: "Sample Attorney Eight", title: "Partner" },
      { name: "Sample Attorney Nine", title: "Of Counsel" },
    ],
    latitude: 30.3147,
    longitude: -81.6892,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

export const getFirmBySlug = (slug: string) => FIRMS.find((f) => f.slug === slug);
export const getPracticeAreaBySlug = (slug: string) =>
  PRACTICE_AREAS.find((p) => p.slug === slug);
export const getPracticeAreaName = (slug: PracticeAreaSlug) =>
  PRACTICE_AREAS.find((p) => p.slug === slug)?.name ?? slug;
