// catalog-data.jsx — RTA Kitchen with two-tier finish/board structure.
//
// Shape:
//   rta-kitchen (category)
//     ├── sections          // each section = a finish line (Blue Single Shaker, etc.)
//     │     └── products    // two per section: { slug: "plywood" } and { slug: "particle" }
//     └── products          // flat extras (accessories) outside the finish program
//
// The generator emits a finish landing page at /rta-kitchen/<finish>/ (with two
// CTAs for board type) and a board browser page at /rta-kitchen/<finish>/<board>/
// (tabbed cabinet families, subcategory rail, SKU list).
//
// CABINET_FAMILIES describes the shared structure of every board browser page.
// Base Cabinet rows are seeded from the reference site; Wall, Pantry, and
// Double Oven get placeholder rows until copy lands.

const CABINET_FAMILIES = [
  {
    slug: "base-cabinet", title: "Base Cabinet",
    subcategories: [
      { slug: "1d-1d",        title: "Base Cabinet", subtitle: "(1 Drawer + 1 Door)" },
      { slug: "1d-2d",        title: "Base Cabinet", subtitle: "(1 Drawer + 2 Door)" },
      { slug: "sink-base",    title: "Sink Base Cabinet", subtitle: "(1 FK Drawer + 2 Door)" },
      { slug: "blind-corner", title: "Base Cabinet", subtitle: "Base Blind Corner" },
      { slug: "lazy-susan",   title: "Base Cabinet", subtitle: "Base Lazy Susan Cabinet" },
      { slug: "drawers",      title: "Base Cabinet", subtitle: "Drawers Base Cabinet" },
      { slug: "2-drawer",     title: "Base Cabinet", subtitle: "2 Drawer" },
      { slug: "spice-rack",   title: "Base Cabinet", subtitle: "Base Spice Rack" },
      { slug: "full-height",  title: "Base Cabinet", subtitle: "Full Height" },
      { slug: "microwave",    title: "Base Cabinet", subtitle: "Microwave Cabinet" }
    ]
  },
  {
    slug: "wall-cabinet", title: "Wall Cabinet",
    subcategories: [
      { slug: "wall-1d",       title: "Wall Cabinet", subtitle: "(1 Door)" },
      { slug: "wall-2d",       title: "Wall Cabinet", subtitle: "(2 Door)" },
      { slug: "wall-corner",   title: "Wall Cabinet", subtitle: "Corner" }
    ]
  },
  {
    slug: "pantry", title: "Pantry",
    subcategories: [
      { slug: "pantry-tall",   title: "Pantry Cabinet", subtitle: "Tall, 4 Door" },
      { slug: "pantry-utility",title: "Pantry Cabinet", subtitle: "Utility" }
    ]
  },
  {
    slug: "double-oven", title: "Double Oven Cabinet",
    subcategories: [
      { slug: "oven-standard", title: "Double Oven Cabinet", subtitle: "Standard" }
    ]
  }
];

const BOARD_OPTIONS = [
  { slug: "plywood",  title: "Plywood Cabinets",  board: "Plywood",
    blurb: "Three-quarter-inch furniture-grade plywood carcass with a hardwood interior. The premium box for moisture, weight, and long-term run integrity." },
  { slug: "particle", title: "Particle Cabinets", board: "Particle",
    blurb: "High-density particleboard carcass with a hardwood face frame and the same door, drawer, and hardware spec as the plywood line. The value tier." }
];

const CATALOG = {

  "rta-kitchen": {
    slug: "rta-kitchen",
    title: "RTA Kitchen",
    short: "Ready-to-assemble kitchen cabinets, dealer-direct.",
    blurb: "Flat-packed kitchen cabinets in seven finish lines, each offered in plywood or particle board construction. Solid-hardwood doors and drawer fronts, dovetailed drawer boxes on soft-close undermount slides, and a five-year warranty on every line. Three to five-week lead time from the Sudbury warehouse.",
    keywords: "RTA kitchen cabinets wholesale, dealer cabinets, shaker RTA, plywood RTA cabinets, particle board cabinets, white shaker navy shaker",
    img: "1556909114-f6e7ad7d3136",
    sections: {
      "white-slim-shaker": {
        slug: "white-slim-shaker", title: "White Slim Shaker", code: "WSS",
        img: "1600585154340-be6161a56a0c",
        blurb: "Painted maple shaker with a narrow 1.5-inch stile in a soft chalk white. For condos, galleys, and any room where a wide stile would eat the visual frame.",
        products: BOARD_OPTIONS
      },
      "white-shaker": {
        slug: "white-shaker", title: "White Single Shaker", code: "WSH",
        img: "1556909114-f6e7ad7d3136",
        blurb: "The classic. Two-inch single-shaker stile, painted maple in a soft white. The most-ordered finish across the dealer network.",
        products: BOARD_OPTIONS
      },
      "blue-shaker": {
        slug: "blue-shaker", title: "Blue Single Shaker", code: "BSS",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Painted maple single-shaker in a deep navy. Reads moody and modern; pair with brass, chrome, or blackened-steel hardware.",
        products: BOARD_OPTIONS
      },
      "grey-shaker": {
        slug: "grey-shaker", title: "Grey Single Shaker", code: "GSS",
        img: "1505691938895-1758d7feb511",
        blurb: "Mid-grey painted maple single-shaker. A confident alternative to white that pairs with both warm and cool stone tops.",
        products: BOARD_OPTIONS
      },
      "natural-wood": {
        slug: "natural-wood", title: "Natural Wood", code: "NTW",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Quarter-sawn white oak shaker fronts with a clear oil finish. No stain. The grain reads tobacco-warm and deepens through the first year of use.",
        products: BOARD_OPTIONS
      },
      "smoked-oak": {
        slug: "smoked-oak", title: "Smoked Oak", code: "MSO",
        img: "1505691938895-1758d7feb511",
        blurb: "Quarter-sawn oak shaker fronts with a fumed-smoke finish. Darker than natural, lighter than ebonized; the grain still reads.",
        products: BOARD_OPTIONS
      },
      "high-gloss-white": {
        slug: "high-gloss-white", title: "White High Gloss", code: "HGW",
        img: "1600585154340-be6161a56a0c",
        blurb: "Slab fronts in a high-gloss polyester white. Reflective, modern, and the easiest finish to wipe clean.",
        products: BOARD_OPTIONS
      }
    },
    products: [
      { slug: "accessories", title: "Kitchen Accessories",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Roll-outs, drawer organizers, knife blocks, and pull-out bins in widths that match the cabinet program. Ship loose with the kit or installed at the dealer." }
    ]
  }

  // closet-line and crafted-cabinets are standalone content pages, not catalog
  // entries (no product grid on the source site). Their HTML files live at
  // /closet-line/index.html and /crafted-cabinets/index.html and are written
  // by hand; the generator skips them.

};

// Helpers
function getCategory(slug)            { return CATALOG[slug]; }
function getSection(catSlug, secSlug) { return CATALOG[catSlug]?.sections?.[secSlug]; }
function getProduct(catSlug, secSlug, prodSlug) {
  const sec = CATALOG[catSlug]?.sections?.[secSlug];
  if (sec) return sec.products?.find(p => p.slug === prodSlug);
  return CATALOG[catSlug]?.products?.find(p => p.slug === prodSlug);
}
function listCategories() { return Object.values(CATALOG); }
function listSections(catSlug) { return Object.values(CATALOG[catSlug]?.sections || {}); }

Object.assign(window, {
  CATALOG, CABINET_FAMILIES, BOARD_OPTIONS,
  getCategory, getSection, getProduct, listCategories, listSections
});
