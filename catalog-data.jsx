// catalog-data.jsx — taxonomy aligned to the Canadian-style RTA + Closet +
// Crafted catalog. Three top-level categories; the rest of the structure
// is generic industry product organization.
//
// All product titles, blurbs, and category copy below are original prose.
//
// `img` values are Unsplash photo IDs (the long alphanumeric strings).
// Section img inherits to its products via flattenProducts() unless a
// product overrides it.

const CATALOG = {

  "rta-kitchen": {
    slug: "rta-kitchen",
    title: "RTA Kitchen",
    short: "Ready-to-assemble kitchen cabinets, dealer-direct.",
    blurb: "Flat-packed kitchen cabinets in eight finish lines, shipped to your shop or showroom on a three to five-week lead time. Solid-hardwood doors and drawer fronts, plywood boxes, all-wood dovetailed drawer boxes with soft-close undermount slides, and a five-year warranty on every line.",
    keywords: "RTA kitchen cabinets wholesale, dealer cabinets, shaker RTA, flat pack kitchen cabinets, white shaker navy shaker",
    img: "1556909114-f6e7ad7d3136",
    flat: true,
    products: [
      { slug: "white-slim-shaker", title: "White Slim Shaker",
        img: "1600585154340-be6161a56a0c",
        blurb: "Painted maple shaker with a narrow 1.5-inch stile, in a soft chalk white. For condos, galleys, and any room where a wide stile would eat the visual frame. Plywood carcass, dovetailed drawer boxes on soft-close undermount slides." },
      { slug: "white-shaker", title: "White Single Shaker",
        img: "1556909114-f6e7ad7d3136",
        blurb: "The classic. Two-inch single-shaker stile, painted maple in a soft white. The most-ordered finish across our dealer network. Plywood carcass with a maple interior; pantry, base, and wall cabinets in 3-inch increments." },
      { slug: "blue-shaker", title: "Blue Single Shaker",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Painted maple single-shaker in a deep navy. Reads moody and modern; pair with brass, chrome, or blackened-steel hardware. Works as a full run or as an island accent against a lighter perimeter." },
      { slug: "grey-shaker", title: "Grey Single Shaker",
        img: "1505691938895-1758d7feb511",
        blurb: "Mid-grey painted maple single-shaker. A confident alternative to white that pairs with both warm and cool stone tops. Same hardware and carcass spec as the rest of the line." },
      { slug: "natural-wood", title: "Natural Wood",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Quarter-sawn white oak shaker fronts with a clear oil finish. No stain. The grain reads tobacco-warm and deepens through the first year of use. Plywood carcass; dovetailed drawer boxes; soft-close undermounts." },
      { slug: "smoked-oak", title: "Smoked Oak",
        img: "1505691938895-1758d7feb511",
        blurb: "Quarter-sawn oak shaker fronts with a fumed-smoke finish. Darker than natural, lighter than ebonized; the grain still reads. Pairs cleanly with brass or blackened-steel pulls." },
      { slug: "high-gloss-white", title: "White High Gloss",
        img: "1600585154340-be6161a56a0c",
        blurb: "Slab fronts in a high-gloss polyester white. Reflective, modern, and the easiest finish to wipe clean — fingerprints come right off. Plywood box, integrated push-to-open hardware, 5-year finish warranty." },
      { slug: "accessories", title: "Kitchen Accessories",
        img: "1556909114-f6e7ad7d3136",
        blurb: "Roll-outs, drawer organizers, knife blocks, and pull-out bins in widths that match the cabinet program. Ship loose with the kit or installed at the dealer." }
    ]
  },

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

Object.assign(window, { CATALOG, getCategory, getSection, getProduct, listCategories, listSections });
