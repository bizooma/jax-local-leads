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
 * Real Jacksonville personal injury law firms compiled from publicly available
 * information on each firm's website. This site is an independent directory and
 * is not affiliated with, endorsed by, or representing any listed firm. Logos
 * are loaded from each firm's public domain and remain the property of their
 * respective owners. Firms may request edits or removal via the contact page.
 */
const logo = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const FIRMS: Firm[] = [
  {
    id: "1",
    firm_name: "Farah & Farah",
    slug: "farah-and-farah",
    logo_url: logo("farahandfarah.com"),
    short_description:
      "Long-standing Jacksonville injury firm handling auto, truck, and workers' comp claims across Florida and Georgia.",
    full_description:
      "Founded in Jacksonville, Farah & Farah represents injury victims throughout Florida and Georgia in car, truck, motorcycle, workers' compensation, and wrongful death cases. The firm is headquartered downtown on Adams Street and is widely recognized as the exclusive injury law firm of the Jacksonville Jaguars.",
    address: "10 W Adams St",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 549-6434",
    website_url: "https://farahandfarah.com",
    practice_areas: [
      "car-accidents",
      "truck-accidents",
      "motorcycle-accidents",
      "workers-compensation",
      "wrongful-death",
      "slip-and-fall",
    ],
    neighborhoods_served: ["Downtown", "Riverside", "Springfield", "San Marco"],
    attorneys: [
      { name: "Eddie Farah", title: "Founding Partner" },
      { name: "Chuck Farah", title: "Partner" },
    ],
    latitude: 30.3293,
    longitude: -81.6611,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "2",
    firm_name: "Harrell & Harrell, P.A.",
    slug: "harrell-and-harrell",
    logo_url: logo("harrellandharrell.com"),
    short_description:
      "Jacksonville injury firm representing crash, wrongful death, and tractor-trailer victims for over 40 years.",
    full_description:
      "Harrell & Harrell, P.A. is the direct successor to Reinman and Harrell, P.A., which began practice in 1974. The firm focuses on personal injury, car and truck accidents, wrongful death, and Social Security disability matters from its Southside Jacksonville office.",
    address: "4735 Sunbeam Rd",
    city: "Jacksonville",
    state: "FL",
    zip: "32257",
    phone: "(904) 251-1111",
    website_url: "https://harrellandharrell.com",
    practice_areas: [
      "car-accidents",
      "truck-accidents",
      "wrongful-death",
      "motorcycle-accidents",
      "premises-liability",
    ],
    neighborhoods_served: ["Mandarin", "Southside", "Baymeadows", "San Jose"],
    attorneys: [
      { name: "Renee Daigle Harrell", title: "President" },
      { name: "Terrence Harrell", title: "Partner" },
    ],
    latitude: 30.1907,
    longitude: -81.6188,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "3",
    firm_name: "Edwards & Ragatz, P.A.",
    slug: "edwards-and-ragatz",
    logo_url: logo("edwardsragatz.com"),
    short_description:
      "Trial firm known for record-setting personal injury and medical malpractice verdicts in Florida.",
    full_description:
      "Edwards & Ragatz, P.A. is a Jacksonville trial practice focused on catastrophic personal injury, medical malpractice, and wrongful death cases. The firm has obtained some of the largest injury and malpractice verdicts in Florida history.",
    address: "501 Riverside Ave, Suite 601",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 399-1609",
    website_url: "https://www.edwardsragatz.com",
    practice_areas: [
      "medical-malpractice",
      "wrongful-death",
      "car-accidents",
      "truck-accidents",
      "product-liability",
    ],
    neighborhoods_served: ["Riverside", "Brooklyn", "Downtown", "Avondale"],
    attorneys: [
      { name: "Steven J. Edwards", title: "Founding Partner" },
      { name: "Bill Ragatz", title: "Partner" },
    ],
    latitude: 30.3217,
    longitude: -81.6789,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "4",
    firm_name: "Barnes Cohen & Sullivan",
    slug: "barnes-cohen-sullivan",
    logo_url: logo("barnescohenandsullivan.com"),
    short_description:
      "Jacksonville injury firm with 40+ years of experience in auto, motorcycle, and premises liability claims.",
    full_description:
      "Barnes Cohen & Sullivan has represented personal injury victims in Jacksonville for more than four decades, handling car and motorcycle accidents, slip and fall claims, and wrongful death cases throughout Northeast Florida and Southeast Georgia.",
    address: "10120 San Jose Blvd",
    city: "Jacksonville",
    state: "FL",
    zip: "32257",
    phone: "(904) 932-0572",
    website_url: "https://barnescohenandsullivan.com",
    practice_areas: [
      "car-accidents",
      "motorcycle-accidents",
      "slip-and-fall",
      "premises-liability",
      "wrongful-death",
    ],
    neighborhoods_served: ["Mandarin", "San Jose", "Southside", "Julington Creek"],
    attorneys: [
      { name: "Stephen J. Barnes", title: "Partner" },
      { name: "Brian S. Cohen", title: "Partner" },
      { name: "Sean B. Sullivan", title: "Partner" },
    ],
    latitude: 30.1735,
    longitude: -81.6396,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "5",
    firm_name: "Phillips, Hunt & Walker",
    slug: "phillips-hunt-walker",
    logo_url: logo("floridajustice.com"),
    short_description:
      "Board-certified civil trial attorneys handling catastrophic injury and wrongful death cases.",
    full_description:
      "Phillips, Hunt & Walker is a Jacksonville trial law firm representing individuals and families across Florida and Georgia in personal injury, wrongful death, and catastrophic accident matters. The firm's attorneys are board-certified in civil trial law and have secured significant verdicts including a noted $495 million result.",
    address: "8127 Point Meadows Dr",
    city: "Jacksonville",
    state: "FL",
    zip: "32256",
    phone: "(904) 444-4444",
    website_url: "https://floridajustice.com",
    practice_areas: [
      "car-accidents",
      "truck-accidents",
      "wrongful-death",
      "medical-malpractice",
      "product-liability",
    ],
    neighborhoods_served: ["Southside", "Baymeadows", "Deerwood", "Tinseltown"],
    attorneys: [
      { name: "John Phillips", title: "Partner" },
      { name: "Hunt", title: "Partner" },
      { name: "Walker", title: "Partner" },
    ],
    latitude: 30.2241,
    longitude: -81.5523,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "6",
    firm_name: "Abbott Law Group, P.A.",
    slug: "abbott-law-group",
    logo_url: logo("abbottlawgroup.com"),
    short_description:
      "Established Florida personal injury practice representing seriously injured clients since 1978.",
    full_description:
      "Abbott Law Group, P.A. is a Jacksonville-based personal injury firm that has been recovering compensation for seriously injured Floridians since 1978. The firm handles auto, motorcycle, slip and fall, medical malpractice, and wrongful death cases across the state.",
    address: "3 Independent Dr",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 354-8888",
    website_url: "https://www.abbottlawgroup.com",
    practice_areas: [
      "car-accidents",
      "motorcycle-accidents",
      "slip-and-fall",
      "medical-malpractice",
      "wrongful-death",
      "premises-liability",
    ],
    neighborhoods_served: ["Downtown", "Springfield", "Riverside", "San Marco"],
    attorneys: [
      { name: "John D. Abbott", title: "Founding Partner" },
    ],
    latitude: 30.3322,
    longitude: -81.6557,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "7",
    firm_name: "Pajcic & Pajcic",
    slug: "pajcic-and-pajcic",
    logo_url: logo("pajcic.com"),
    short_description:
      "Jacksonville trial firm focused on serious personal injury and wrongful death cases since 1974.",
    full_description:
      "The Law Firm of Pajcic & Pajcic specializes in serious personal injury and wrongful death cases. With 17 attorneys and more than 550 years of combined legal experience, the firm has handled some of the most complex injury matters in Northeast Florida since its founding in 1974.",
    address: "1 Independent Dr, Suite 1900",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 358-8881",
    website_url: "https://pajcic.com",
    practice_areas: [
      "car-accidents",
      "truck-accidents",
      "wrongful-death",
      "medical-malpractice",
      "product-liability",
      "motorcycle-accidents",
    ],
    neighborhoods_served: ["Downtown", "Riverside", "San Marco", "Southbank"],
    attorneys: [
      { name: "Steve Pajcic", title: "Partner" },
      { name: "Curtis Fallgatter", title: "Partner" },
    ],
    latitude: 30.3231,
    longitude: -81.6587,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "8",
    firm_name: "Coker Law",
    slug: "coker-law",
    logo_url: logo("cokerlaw.com"),
    short_description:
      "Catastrophic injury and wrongful death trial firm with more than 1,000 cases tried since 1976.",
    full_description:
      "Coker Law is a Jacksonville-based trial firm representing clients in catastrophic injury, wrongful death, negligent security, and product liability matters. Founded in 1976, the firm has tried more than 1,000 cases and recovered over $150 million for clients across Florida.",
    address: "136 E Bay St",
    city: "Jacksonville",
    state: "FL",
    zip: "32202",
    phone: "(904) 290-6237",
    website_url: "https://cokerlaw.com",
    practice_areas: [
      "car-accidents",
      "truck-accidents",
      "wrongful-death",
      "premises-liability",
      "product-liability",
      "medical-malpractice",
    ],
    neighborhoods_served: ["Downtown", "Riverside", "Springfield", "San Marco"],
    attorneys: [
      { name: "Howard C. Coker", title: "Shareholder" },
      { name: "John J. \"Jake\" Schickel", title: "Of Counsel" },
    ],
    latitude: 30.3266,
    longitude: -81.6531,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "9",
    firm_name: "Von Roenn Law",
    slug: "von-roenn-law",
    logo_url: logo("vonroennlaw.com"),
    short_description:
      "Boutique Jacksonville injury practice focused on auto, motorcycle, and catastrophic injury cases.",
    full_description:
      "Von Roenn Law is a Jacksonville personal injury practice handling auto, motorcycle, boating, dog bite, and catastrophic injury cases. The firm emphasizes personalized representation and direct attorney access for every client.",
    address: "1301 Riverplace Blvd, Suite 800",
    city: "Jacksonville",
    state: "FL",
    zip: "32207",
    phone: "(904) 999-9999",
    website_url: "https://vonroennlaw.com",
    practice_areas: [
      "car-accidents",
      "motorcycle-accidents",
      "premises-liability",
      "wrongful-death",
      "medical-malpractice",
    ],
    neighborhoods_served: ["Southbank", "San Marco", "Downtown", "St. Nicholas"],
    attorneys: [{ name: "Eric Von Roenn", title: "Founding Attorney" }],
    latitude: 30.3186,
    longitude: -81.6543,
    is_verified: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: "10",
    firm_name: "The Alexander Law Practice",
    slug: "alexander-law-practice",
    logo_url: logo("alexanderlawpractice.com"),
    short_description:
      "Jacksonville personal injury firm offering custom representation rooted in empathy and determination.",
    full_description:
      "The Alexander Law Practice is a Jacksonville personal injury firm providing custom representation for accident, premises, and wrongful death clients. The practice emphasizes attentive client service and aggressive advocacy.",
    address: "4651 Salisbury Rd, Suite 400",
    city: "Jacksonville",
    state: "FL",
    zip: "32256",
    phone: "(904) 619-7505",
    website_url: "https://www.alexanderlawpractice.com",
    practice_areas: [
      "car-accidents",
      "slip-and-fall",
      "premises-liability",
      "wrongful-death",
      "motorcycle-accidents",
    ],
    neighborhoods_served: ["Southside", "Deerwood", "Baymeadows", "Tinseltown"],
    attorneys: [{ name: "Alexander", title: "Founding Attorney" }],
    latitude: 30.2638,
    longitude: -81.5566,
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
