// catalog-data.jsx — taxonomy aligned to the Canadian-style RTA + Closet +
// Crafted catalog. Three top-level categories; the rest of the structure
// is generic industry product organization.
//
// All product titles, blurbs, and category copy below are original prose.

const CATALOG = {

  "rta-kitchen": {
    slug: "rta-kitchen",
    title: "RTA Kitchen",
    short: "Ready-to-assemble kitchen cabinets, dealer-direct.",
    blurb: "Flat-packed kitchen cabinets in seven finish lines, shipped to your shop or showroom on a three to five-week lead time. Solid-hardwood doors and drawer fronts, plywood boxes, all-wood dovetailed drawer boxes with soft-close undermount slides, and a five-year warranty on every line.",
    keywords: "RTA kitchen cabinets wholesale, dealer cabinets, shaker RTA, flat pack kitchen cabinets, white shaker navy shaker",
    sections: {
      "white-slim-shaker": {
        slug: "white-slim-shaker",
        title: "White Slim Shaker",
        blurb: "Painted maple shaker with a narrow 1.5-inch stile, in a soft chalk white. For condos, galleys, and any room where a wide stile would eat the visual frame.",
        products: [
          { slug: "white-slim-shaker-base-suite", title: "White Slim Shaker Base Suite",
            blurb: "Painted-maple base cabinets in 3-inch-increment widths from 9 to 42 inches, narrow shaker stile, soft-close hinges, and dovetailed drawer boxes on undermount slides." },
          { slug: "white-slim-shaker-wall-suite", title: "White Slim Shaker Wall Suite",
            blurb: "Matching wall cabinets in 30, 36, and 42-inch heights. Paint-grade plywood interior, adjustable shelves on shelf pins, and the same narrow shaker stile as the base run." }
        ]
      },
      "white-shaker": {
        slug: "white-shaker",
        title: "White Shaker",
        blurb: "The classic. Two-inch shaker stile, painted maple in a soft white. The most-ordered finish across our dealer network.",
        products: [
          { slug: "white-shaker-base-suite", title: "White Shaker Base Suite",
            blurb: "Two-inch painted-maple shaker stiles, plywood carcass with a maple interior, all-wood dovetailed drawer boxes with soft-close undermount slides." },
          { slug: "white-shaker-tall-suite", title: "White Shaker Tall Suite",
            blurb: "Pantry and oven towers in 84 and 96-inch heights, painted-shaker doors, adjustable interior shelves, and cut-outs ready for a single or double-oven appliance." }
        ]
      },
      "blue-shaker": {
        slug: "blue-shaker",
        title: "Blue Shaker",
        blurb: "Painted maple shaker in a deep navy. Reads moody and modern; pair with brass, chrome, or blackened-steel hardware. Works as a full run or as an island accent.",
        products: [
          { slug: "blue-shaker-island-suite", title: "Blue Shaker Island Suite",
            blurb: "Island and bar cabinets in deep navy shaker, sized to receive standard 6 to 10-foot island countertops. Includes one bookcase end panel as part of the run." },
          { slug: "blue-shaker-base-suite", title: "Blue Shaker Base Suite",
            blurb: "Deep navy painted-maple shaker base cabinets in 3-inch increments, plywood box, soft-close hardware, ready for stone or butcher-block tops." }
        ]
      },
      "grey-shaker": {
        slug: "grey-shaker",
        title: "Grey Shaker",
        blurb: "Mid-grey painted maple shaker. A confident alternative to white that pairs with both warm and cool stone tops.",
        products: [
          { slug: "grey-shaker-base-suite", title: "Grey Shaker Base Suite",
            blurb: "Mid-grey painted shaker base cabinets, plywood box, soft-close hardware. The most-flexible painted line across countertop palettes." },
          { slug: "grey-shaker-wall-suite", title: "Grey Shaker Wall Suite",
            blurb: "Matching grey wall cabinets in 30, 36, and 42-inch heights, paint-grade interior, adjustable shelves on shelf pins." }
        ]
      },
      "natural-wood": {
        slug: "natural-wood",
        title: "Natural Wood",
        blurb: "Quarter-sawn white oak shaker fronts with a clear oil finish. No stain. The grain reads tobacco-warm and deepens through the first year of use.",
        products: [
          { slug: "natural-wood-base-suite", title: "Natural Wood Base Suite",
            blurb: "Quarter-sawn oak shaker fronts in a clear oil finish, plywood box with a maple interior, dovetailed drawer boxes with soft-close undermount slides." },
          { slug: "natural-wood-wall-suite", title: "Natural Wood Wall Suite",
            blurb: "Matching natural-finish wall cabinets in 30, 36, and 42-inch heights. Clear oil on the fronts, adjustable shelves inside, and a paint-grade interior." }
        ]
      },
      "smoked-oak": {
        slug: "smoked-oak",
        title: "Smoked Oak",
        blurb: "Quarter-sawn oak shaker fronts with a fumed-smoke finish. Darker than natural, lighter than ebonized; the grain still reads.",
        products: [
          { slug: "smoked-oak-base-suite", title: "Smoked Oak Base Suite",
            blurb: "Quarter-sawn oak with a fumed-smoke finish, shaker doors, plywood box, soft-close hardware, and dovetailed drawer boxes." },
          { slug: "smoked-oak-tall-suite", title: "Smoked Oak Tall Suite",
            blurb: "Smoked-oak pantry and oven towers in 84 and 96-inch heights, adjustable interior shelves, and an optional tambour appliance-garage front." }
        ]
      },
      "high-gloss-white": {
        slug: "high-gloss-white",
        title: "High Gloss White",
        blurb: "Slab fronts in high-gloss polyester white. Reflective, modern, and the easiest finish to wipe clean — fingerprints come right off.",
        products: [
          { slug: "high-gloss-white-base-suite", title: "High Gloss White Base Suite",
            blurb: "Polyester high-gloss slab fronts in soft white, plywood box, integrated push-to-open hardware, paint-grade interior, and a 5-year finish warranty." },
          { slug: "high-gloss-white-island-suite", title: "High Gloss White Island Suite",
            blurb: "Matching high-gloss slab island and bar cabinets, optional integrated foot rail, and a 6 to 10-foot countertop deck." }
        ]
      },
      "accessories": {
        slug: "accessories",
        title: "Kitchen Accessories",
        blurb: "Roll-outs, drawer organizers, knife blocks, and pull-out bins in widths that match the cabinet program. Ship loose with the kit or installed at the dealer.",
        products: [
          { slug: "drawer-organizer-set", title: "Drawer Organizer Set",
            blurb: "Solid-maple drawer dividers and knife blocks sized for 12, 15, 18, 21, and 24-inch drawer boxes. Sold as a complete set per drawer width." },
          { slug: "recycling-pullout", title: "Recycling Pull-Out",
            blurb: "Soft-close pull-out with two 35-quart bins, designed for an 18-inch base cabinet. Single, double, and triple-bin configurations available." }
        ]
      }
    }
  },

  "closet-line": {
    slug: "closet-line",
    title: "Closet Line",
    short: "Walk-in and reach-in closet systems, dealer-direct.",
    blurb: "Flat-packed closet systems for the bedroom, entry, and bath. Drawer banks, hanging rails, shoe ladders, and island add-ons share hardware with the RTA kitchen line so a single delivery can cover both rooms.",
    keywords: "closet system wholesale, walk-in closet RTA, reach-in closet kit, wardrobe wholesale Watertown MA",
    flat: true,
    products: [
      { slug: "walk-in-closet-with-island",  title: "Walk-In Closet with Island",
        blurb: "Eight-by-ten walk-in kit with two drawer towers, two double-hang sections, one shoe ladder, and a center island with a stone-ready deck." },
      { slug: "reach-in-closet-kit",         title: "Reach-In Closet Kit",
        blurb: "Six-foot reach-in kit with one drawer tower, a double-hang section, and a top shelf bank. Trim and end caps included." },
      { slug: "wardrobe-wall",               title: "Wardrobe Wall",
        blurb: "Free-standing wardrobe wall in 10, 12, and 14-foot widths, fitted with hanging, drawer, and shoe sections for bedrooms without built-in closets." },
      { slug: "his-and-hers-walk-in",        title: "His and Hers Walk-In Kit",
        blurb: "Pair of mirrored walk-in kits flanking a central island. Two drawer towers per side, double-hang sections, and a shared shoe ladder at the back wall." },
      { slug: "dressing-room-island",        title: "Dressing Room Island",
        blurb: "Stand-alone island for an existing walk-in. Stone-ready top deck, two drawer banks, and a shared cabinet at the foot." },
      { slug: "pantry-closet-kit",           title: "Pantry Closet Kit",
        blurb: "Six-foot reach-in kit configured for pantry use: adjustable shelves, a counter-height workstation, and an appliance garage with a tambour door." }
    ]
  },

  "crafted-cabinets": {
    slug: "crafted-cabinets",
    title: "Crafted Cabinets",
    short: "Signature custom cabinetry, room by room.",
    blurb: "Our signature line: built-to-measure cabinetry for the kitchen, bath, mudroom, pantry, library, and bedroom. Sold direct to homeowners through our own installers, and sold to dealers as a fully-finished trade line.",
    keywords: "custom cabinets Watertown MA, kitchen vanity built-in mudroom, crafted cabinetry dealer trade line",
    flat: true,
    products: [
      { slug: "custom-kitchen",       title: "Custom Kitchen",
        blurb: "Built-to-measure kitchen cabinetry in solid hardwood, drawn to the room rather than picked from fixed widths. Shaker, inset, or slab doors; painted or stained." },
      { slug: "custom-bath-vanity",   title: "Custom Bath Vanity",
        blurb: "Single and double vanities in solid hardwood with integrated stone tops, concealed under-mount outlets, and undermount full-extension drawer slides." },
      { slug: "custom-mudroom",       title: "Custom Mudroom",
        blurb: "Lockers, bench seating, bootlines, dog showers, and the integrated coat hooks that make the back hall actually work for a family." },
      { slug: "custom-pantry",        title: "Custom Pantry",
        blurb: "Walk-in and butler's pantries with adjustable shelving, a counter-height workstation, and an appliance garage when there's a row of small appliances to hide." },
      { slug: "custom-built-ins",     title: "Custom Built-Ins",
        blurb: "Libraries, window seats, banquettes, and media walls. Floor to ceiling, drawn to the room and finished in the shop." },
      { slug: "custom-bedroom",       title: "Custom Bedroom",
        blurb: "Wardrobe walls, fitted dressers, headboard walls with integrated reading lights, and bed surrounds. Sold alongside the closet line as a single bedroom package." }
    ]
  }

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

Object.assign(window, { CATALOG, getCategory, getSection, getProduct, listCategories, listSections });
