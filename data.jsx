// data.jsx — content + image refs + single-source brand config
//
// CONFIG is the canonical place for business identity (name, contact, hours,
// service area). Any component that needs to display the phone number,
// address, or service-area cities should read from window.CONFIG instead of
// hardcoding the value. Updating one entry here is meant to ripple through
// the whole site on the next deploy.

const CONFIG = {
  brand: {
    name:    "Kitch & Klozets",
    short:   "Kitch & Klozets",
    tagline: "Wholesale Cabinets · Sudbury ON",
    sinceYear: 2025,
  },
  contact: {
    phone:        "(548) 333-1419",
    phoneTel:     "tel:+15483331419",
    email:        "sales@kitchandklozets.com",
    emailMailto:  "mailto:sales@kitchandklozets.com",
  },
  address: {
    street:  "100 Lasalle Boulevard",
    city:    "Sudbury",
    region:  "ON",
    postal:  "P3A 0A1",
    country: "CA",
  },
  hours: {
    summary: "Open 7 days a week, 9am–5pm",
    weekdayOpens:  "09:00",
    weekdayCloses: "17:00",
  },
  domain: "kitchandklozets.com",
  url:    "https://kitchandklozets.com",
  serviceArea: [
    "Sudbury", "Cambridge", "Newton", "Brookline",
    "Belmont", "Wellesley", "Arlington", "Somerville"
  ],
};

// Unsplash photo IDs (cabinet / closet / interior / workshop). The .ph parent
// always carries a gradient so a failed load still reads as a tinted placeholder.
const IMG = {
  heroA: "1556909114-f6e7ad7d3136", // wood-trim kitchen
  heroB: "1600585154340-be6161a56a0c", // light interior
  heroC: "1556910010-aa9b3d50bf08", // kitchen detail

  svc_kitchen:  "1556909114-f6e7ad7d3136",
  svc_closet:   "1565538810643-b5bdb714032a",
  svc_pantry:   "1556909195-4d33aa56a8e6",
  svc_vanity:   "1584622650111-993a426fbf0a",
  svc_builtin:  "1505691938895-1758d7feb511",
  svc_mudroom:  "1582268611958-ebfd161ef9cf",

  wk_visit:     "1556761175-5973dc0f32e7",
  wk_drawings:  "1505691938895-1758d7feb511",
  wk_materials: "1581539250439-c96689b516dd",
  wk_build:     "1572297566717-c2e57bcb1fe1",
  wk_install:   "1565182999561-18d7dc61c393",

  tA: "1556909114-f6e7ad7d3136",
  tB: "1565538810643-b5bdb714032a",
  tC: "1556910010-aa9b3d50bf08",

  pol1: "1556909114-f6e7ad7d3136",
  pol2: "1582268611958-ebfd161ef9cf",
  pol3: "1556909195-4d33aa56a8e6",
};

const WOODS = [
  { n: "Black Walnut",       latin: "Juglans nigra",      c: "#3B2A1E", g: "#1c130a", finish: "Hand-rubbed oil",   janka: 1010, lead: "10–14 wks" },
  { n: "Rift White Oak",     latin: "Quercus alba",       c: "#c9a874", g: "#8d6b40", finish: "Cerused",            janka: 1290, lead: "12–14 wks" },
  { n: "Cherry",             latin: "Prunus serotina",    c: "#7a3a23", g: "#42180b", finish: "Aged oil",           janka:  950, lead: "10–12 wks" },
  { n: "Hard Maple",         latin: "Acer saccharum",     c: "#e6cf9b", g: "#a98a52", finish: "Natural wax",        janka: 1450, lead: "10–12 wks" },
  { n: "Ebonized Ash",       latin: "Fraxinus americana", c: "#26211c", g: "#0a0907", finish: "India-ink wash",     janka: 1320, lead: "12–16 wks" },
  { n: "Reclaimed Chestnut", latin: "Castanea dentata",   c: "#5a3a22", g: "#2c1a0e", finish: "Wire-brushed",       janka: 1100, lead: "14–18 wks" },
];

const SERVICES = [
  { n: 142, t: "Kitchens",      d: "Cabinets, islands, ranges, hoods. Built as one room, not a kit.", img: IMG.svc_kitchen },
  { n: 98,  t: "Closets",       d: "Walk-ins, reach-ins, dressing rooms with islands and lighting.",  img: IMG.svc_closet  },
  { n: 41,  t: "Pantries",      d: "Butler's pantries, sculleries, and beverage stations.",           img: IMG.svc_pantry  },
  { n: 64,  t: "Bath vanities", d: "Single and double, with integrated stone and concealed power.",   img: IMG.svc_vanity  },
  { n: 53,  t: "Built-ins",     d: "Libraries, window seats, media walls. Floor to ceiling.",         img: IMG.svc_builtin },
  { n: 37,  t: "Mudrooms",      d: "Lockers, bench seating, dog showers, bootlines.",                 img: IMG.svc_mudroom },
];

const STATS = [
  { v: 8,    suf: "",    l: "Finish lines",       s: "Stocked in Sudbury" },
  { v: 35,   suf: "",    l: "Days to ship",       s: "Three to five-week lead time" },
  { v: 6,    suf: "",    l: "Cabinetmakers",      s: "No subcontracted joinery" },
  { v: 5,    suf: " yr", l: "Warranty",           s: "On every joint we cut" },
];

const WORKSHOP = [
  { w: "Week 1",     t: "Site visit",     d: "Coffee, measurements, your wishlist on a yellow pad.",                              img: IMG.wk_visit,     tint: "#3B2A1E" },
  { w: "Week 2–3",   t: "Drawings",       d: "Hand-drawn elevations. We bring them by and mark them up together at the table.",  img: IMG.wk_drawings,  tint: "#5B4434" },
  { w: "Week 4",     t: "Material picks", d: "You hold the woods, the stones, the brass. We narrow down to three options.",      img: IMG.wk_materials, tint: "#7E8B6F" },
  { w: "Week 5–14",  t: "On the bench",   d: "Built in our Sudbury shop. Photographed weekly. Drop by Saturdays if you want.",   img: IMG.wk_build,     tint: "#B85A3F" },
  { w: "Week 15",    t: "Install",        d: "Two weeks on-site. Final adjustments after a month of real life with the room.",   img: IMG.wk_install,   tint: "#7a3a23" },
];

const PINS = [
  { x: 30, y: 38, t: "Sudbury shop", s: "Our workshop",        kind: "shop" },
  { x: 44, y: 42, t: "Beacon Hill",    s: "Townhouse kitchen" },
  { x: 50, y: 36, t: "Cambridge",      s: "Pantry conversion" },
  { x: 38, y: 28, t: "Belmont",        s: "Family kitchen" },
  { x: 28, y: 60, t: "Newton",         s: "Mudroom + bench" },
  { x: 62, y: 48, t: "South End",      s: "Closet system" },
  { x: 18, y: 70, t: "Wellesley",      s: "Library wall" },
  { x: 70, y: 64, t: "Quincy",         s: "Bath vanity" },
  { x: 82, y: 30, t: "North Shore",    s: "Beach-house kitchen" },
  { x: 76, y: 80, t: "Cohasset",       s: "Pantry + bar" },
];

const TESTIMONIALS = [
  { q: "They built us a kitchen the kids can't break. Three years and not a single drawer pull has come loose.",
    n: "The Hartleys",  loc: "Newton, MA",     rot: -4, img: IMG.tA, date: "Spring 2023" },
  { q: "I'm an architect. I've never had a millworker push back on my drawings like Tom did. He was right every time.",
    n: "L. Khoury, AIA", loc: "Cambridge, MA", rot:  5, img: IMG.tB, date: "Fall 2024" },
  { q: "They quoted four months. They finished in four months. I'm still in shock about that part.",
    n: "B. Olin",       loc: "Wellesley, MA", rot: -2, img: IMG.tC, date: "Winter 2023" },
];

// Top-level nav. RTA Kitchen opens a focused mega-menu of its 8 finish
// lines; Closet Line and Crafted Cabinets are direct links (flat
// categories, no dropdown to match the source IA). Advice, About, and
// Contact are all direct links.
const NAV_LINKS = [
  { label: "RTA Kitchen",      mega: true,                 href: "/rta-kitchen" },
  { label: "Closet Line",      href: "/closet-line" },
  { label: "Crafted Cabinets", href: "/crafted-cabinets" },
  { label: "Advice & Tips",    href: "/advice" },
  { label: "About",            href: "/about" },
  { label: "Contact",          href: "/contact" }
];

Object.assign(window, { CONFIG, IMG, WOODS, SERVICES, STATS, WORKSHOP, PINS, TESTIMONIALS, NAV_LINKS });
