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

// Shared feature cards rendered on every finish landing + board browser page.
// The construction spec is identical across the program; what changes between
// finishes is the door material and the painted/oiled topcoat.
const FINISH_FEATURES = [
  { title: "Solid-hardwood fronts",
    img: "1600585154340-be6161a56a0c",
    blurb: "Doors and drawer fronts joined in solid hardwood. Painted maple on the shaker lines, oiled oak on the natural and smoked lines, and a polyester-coated slab on the high-gloss line." },
  { title: "Furniture-grade plywood",
    img: "1505691938895-1758d7feb511",
    blurb: "Three-quarter-inch ply carcass with a hardwood interior. No MDF box, no stapled corners. Cam-lock construction so the box can be re-tightened on site after a year of use." },
  { title: "Soft-close everything",
    img: "1556909114-f6e7ad7d3136",
    blurb: "Dovetailed drawer boxes on undermount full-extension soft-close slides. Soft-close hinges on every door. Same hardware spec on every finish in the line." }
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
        about: [
          "White slim shaker is the slim-stile take on the classic painted shaker. A 1.5-inch frame in place of the standard 2-inch reads cleaner in tight rooms, lets the door panel do more of the visual work, and pairs naturally with modern, transitional, and farmhouse layouts.",
          "Doors and drawer fronts are painted maple in a soft chalk white. The plywood option uses a furniture-grade ply carcass with a maple interior; the particle option uses a high-density particleboard box with the same door and hardware spec. Both ship with dovetailed drawer boxes on soft-close undermount slides."
        ],
        products: BOARD_OPTIONS
      },
      "white-shaker": {
        slug: "white-shaker", title: "White Single Shaker", code: "WSH",
        img: "1556909114-f6e7ad7d3136",
        blurb: "The classic. Two-inch single-shaker stile, painted maple in a soft white. The most-ordered finish across the dealer network.",
        about: [
          "White single shaker is the most-ordered finish across the dealer network. A standard 2-inch shaker stile, painted maple in a warm soft white. Reads correctly in farmhouse, transitional, and modern rooms; pairs cleanly with quartz, marble, and natural stone counters.",
          "Both the plywood and the particle option use the same painted-maple front spec, the same soft-close hinges, and the same dovetailed drawer box. The carcass material is the only difference between the two."
        ],
        products: BOARD_OPTIONS
      },
      "blue-shaker": {
        slug: "blue-shaker", title: "Blue Single Shaker", code: "BSS",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Painted maple single-shaker in a deep navy. Reads moody and modern; pair with brass, chrome, or blackened-steel hardware.",
        about: [
          "Blue single shaker is the moodier choice for kitchens that want to read modern without giving up the shaker frame. A deep navy painted on maple, the kind of color that holds up to natural light and reads almost-black in the evening.",
          "Looks particularly good as a perimeter color against a lighter island, or as a full run with stone counters and brass pulls. Five-year warranty on the joint, the finish, and the hardware on both the plywood and particle options."
        ],
        products: BOARD_OPTIONS
      },
      "grey-shaker": {
        slug: "grey-shaker", title: "Grey Single Shaker", code: "GSS",
        img: "1505691938895-1758d7feb511",
        blurb: "Mid-grey painted maple single-shaker. A confident alternative to white that pairs with both warm and cool stone tops.",
        about: [
          "Grey single shaker is the quieter alternative to white. A mid-grey painted on maple, neutral enough to read as taupe in warm light and as cool charcoal at dusk. The most flexible color in the program for designers who don't want to commit to a strong perimeter.",
          "Pairs with both warm-toned and cool-toned stone counters, and with both brass and chrome hardware. Construction and slide spec are identical to the rest of the line; both plywood and particle options carry the same warranty."
        ],
        products: BOARD_OPTIONS
      },
      "natural-wood": {
        slug: "natural-wood", title: "Natural Wood", code: "NTW",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Quarter-sawn white oak shaker fronts with a clear oil finish. No stain. The grain reads tobacco-warm and deepens through the first year of use.",
        about: [
          "Natural wood is quarter-sawn white oak shaker, finished with a clear oil only. No stain, no tinted topcoat. The grain runs straight, the wood reads tobacco-warm, and the surface deepens slowly through the first year of use as oxidation sets in.",
          "For rooms that want the cabinetry to read like millwork rather than painted casework. Plywood option carries a hardwood interior to match the front; particle option uses a paper-foil interior with the same hardwood face frame."
        ],
        products: BOARD_OPTIONS
      },
      "smoked-oak": {
        slug: "smoked-oak", title: "Smoked Oak", code: "MSO",
        img: "1505691938895-1758d7feb511",
        blurb: "Quarter-sawn oak shaker fronts with a fumed-smoke finish. Darker than natural, lighter than ebonized; the grain still reads.",
        about: [
          "Smoked oak is quarter-sawn oak fumed with ammonia to draw the tannins out and darken the wood from the inside, rather than with a surface stain. The result is darker than natural oak and lighter than ebonized; the grain still reads through.",
          "A natural pair with brass or blackened-steel hardware, and a strong cabinet color for rooms that have a lot of stone or tile. Sealed with a hand-applied conversion-varnish topcoat; both plywood and particle options ship with the same finish."
        ],
        products: BOARD_OPTIONS
      },
      "high-gloss-white": {
        slug: "high-gloss-white", title: "White High Gloss", code: "HGW",
        img: "1600585154340-be6161a56a0c",
        blurb: "Slab fronts in a high-gloss polyester white. Reflective, modern, and the easiest finish to wipe clean.",
        about: [
          "White high gloss is the slab line. Polyester-coated MDF fronts in a high-gloss white, reflective and modern, sized for European-style kitchens. There's no shaker frame or grain to dust around, and fingerprints come right off the surface.",
          "Carcass options carry concealed soft-close hinges and integrated push-to-open hardware on the drawer fronts. Plywood option uses a furniture-grade ply box; particle option uses a high-density particleboard box with the same gloss finish across the run."
        ],
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
  CATALOG, CABINET_FAMILIES, BOARD_OPTIONS, FINISH_FEATURES,
  getCategory, getSection, getProduct, listCategories, listSections
});
