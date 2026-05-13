// catalog-data.jsx — full product taxonomy
// 8 categories · 5 sections each · 2 starter products per section
// All copy is original; categories follow industry-standard product groupings.

const CATALOG = {
  "whole-house": {
    slug: "whole-house",
    title: "Whole-House Customization",
    short: "Full-home cabinetry, one shop, one vision.",
    blurb: "Cabinetry designed across every room as one project. One designer, one wood library, one install window. The kitchen, the closets, the baths, the mudroom all share the same crew and the same warranty.",
    keywords: "whole house cabinetry, full home custom millwork, design build cabinetry, Watertown MA",
    sections: {
      "modern": {
        slug: "modern",
        title: "Modern",
        blurb: "Integrated pulls, slab and flush-inset doors, matte and mineral finishes. Built for new construction and gut renovations across Greater Boston.",
        products: [
          { slug: "walnut-modern-suite", title: "Walnut Modern Whole-House Suite",
            blurb: "Slab walnut throughout the home, bronze inset pulls, and honed-marble counters carried from kitchen island to primary bath." },
          { slug: "white-oak-modern-suite", title: "White Oak Modern Whole-House Suite",
            blurb: "Rift-cut white oak with a cerused finish, brushed-brass touch latches, and a single quartzite slab shared between kitchen and powder room." }
        ]
      },
      "classical": {
        slug: "classical",
        title: "Classical",
        blurb: "Beaded inset doors, raised panels, traditional crown, and brass hardware. For Federal, Colonial, and Victorian-era homes from Cambridge to Wellesley.",
        products: [
          { slug: "painted-classical-suite", title: "Painted Classical Whole-House Suite",
            blurb: "Hand-painted maple in a soft white, beaded inset doors, unlacquered brass cup pulls, and stepped crown carried across all rooms." },
          { slug: "cherry-classical-suite", title: "Cherry Classical Whole-House Suite",
            blurb: "Solid cherry with a hand-rubbed oil finish, raised panel doors, integrated plate racks, and turned table legs at the island." }
        ]
      },
      "industrial": {
        slug: "industrial",
        title: "Industrial",
        blurb: "Steel-framed glass doors, blackened oak, exposed bracketry, and warehouse-spec hardware. Loft and live-work conversions.",
        products: [
          { slug: "blackened-oak-loft-suite", title: "Blackened Oak Loft Suite",
            blurb: "Ebonized white oak throughout, steel-framed display cases over the kitchen wall, and a soapstone island with a forged-iron foot rail." },
          { slug: "reclaimed-chestnut-mill-suite", title: "Reclaimed Chestnut Mill Suite",
            blurb: "Reclaimed New England chestnut cabinetry, riveted black-steel cabinet pulls, and a butcher-block island with a salvaged maple top." }
        ]
      },
      "regional": {
        slug: "regional",
        title: "Regional",
        blurb: "New England farmhouse, Shingle Style, and Coastal vernaculars. Beadboard, painted finishes, and antique-cast hardware that fits the architecture.",
        products: [
          { slug: "shingle-coastal-suite", title: "Shingle Coastal Whole-House Suite",
            blurb: "Sage and bone painted maple, beadboard wainscot in the mudroom and pantry, antique-bronze bin pulls, and an oversized farmhouse sink." },
          { slug: "cape-farmhouse-suite", title: "Cape Farmhouse Whole-House Suite",
            blurb: "Hand-painted poplar, raised panels with a flat-stock cap, hammered black-iron strap hardware, and a soapstone hearth surround." }
        ]
      },
      "full-guidance": {
        slug: "full-guidance",
        title: "Full House Guidance",
        blurb: "Beyond cabinetry: floor plans, finish selections, lighting layouts, and material reviews. We coordinate with your architect and contractor from drawing to handover.",
        products: [
          { slug: "design-only-package", title: "Design-Only Package",
            blurb: "Hand-drawn elevations for all millwork rooms, two rounds of revisions, a finish board, and a procurement list. You take it from there." },
          { slug: "full-build-package", title: "Full Build & Coordination Package",
            blurb: "Design, build, install, and on-site coordination with electricians, plumbers, and stone fabricators. One project manager from drawing to walk-through." }
        ]
      }
    }
  },

  "kitchens": {
    slug: "kitchens",
    title: "Kitchen Cabinets",
    short: "Cabinets built as a room, not a kit.",
    blurb: "Custom kitchen cabinetry, islands, ranges, and hoods in solid hardwood. Shaker, slab, and inset doors, painted or stained. Every kitchen leaves the shop assembled, photographed, and hand-installed by the team that built it.",
    keywords: "custom kitchen cabinets Watertown MA, shaker kitchen Boston, walnut kitchen Cambridge, white kitchen design, L-shape U-shape one-wall kitchen",
    sections: {
      "modern": {
        slug: "modern",
        title: "Modern Kitchens",
        blurb: "Flush-inset and slab doors, integrated push-to-open hardware, and a single material carried across cabinets, island, and appliance panels.",
        products: [
          { slug: "walnut-slab-kitchen", title: "Walnut Slab Kitchen",
            blurb: "Edge-banded walnut slab doors, push-to-open drawers, paneled refrigerator and dishwasher, and a 10-foot honed-quartzite island." },
          { slug: "white-oak-flush-inset-kitchen", title: "White Oak Flush-Inset Kitchen",
            blurb: "Rift-cut white oak with a fumed finish, brushed-bronze finger pulls, integrated hood, and a single-slab marble countertop." }
        ]
      },
      "shaker": {
        slug: "shaker",
        title: "Shaker Kitchens",
        blurb: "The most-requested style we build. Five-piece doors with a flat center panel; painted, stained, or natural-oiled.",
        products: [
          { slug: "painted-shaker-island-kitchen", title: "Painted Shaker Island Kitchen",
            blurb: "Hand-painted maple in a soft white, shaker doors with a 2-inch stile, unlacquered brass bar pulls, and a contrasting painted island." },
          { slug: "stained-white-oak-shaker-kitchen", title: "Stained White Oak Shaker Kitchen",
            blurb: "Quarter-sawn white oak shakers with a warm-tobacco stain, blackened-iron knobs, and a soapstone perimeter with a butcher-block island." }
        ]
      },
      "white": {
        slug: "white",
        title: "White Kitchens",
        blurb: "Painted maple and bleached oak in chalk, cream, and bone whites. Classical or modern, depending on which door style you pick.",
        products: [
          { slug: "white-painted-island-kitchen", title: "White Painted Island Kitchen",
            blurb: "Hand-painted maple in a soft chalk-white shaker, a contrasting walnut island with a marble waterfall edge, and brushed-brass cup pulls." },
          { slug: "bleached-oak-flush-kitchen", title: "Bleached Oak Flush Kitchen",
            blurb: "Bleached rift-cut white oak with a cerused finish, flush-inset doors, recessed finger pulls, and a paneled refrigerator wall." }
        ]
      },
      "black": {
        slug: "black",
        title: "Black Kitchens",
        blurb: "Inky painted maple and ebonized oak. Read as moody and modern; pair with brass or blackened-steel hardware.",
        products: [
          { slug: "matte-black-painted-shaker-kitchen", title: "Matte Black Painted Shaker Kitchen",
            blurb: "Hand-painted maple in a deep matte black, shaker doors, antique-brass cup pulls, and a soapstone counter with a polished bullnose edge." },
          { slug: "ebonized-oak-slab-kitchen", title: "Ebonized Oak Slab Kitchen",
            blurb: "Ebonized rift-cut oak in a slab style, blackened-steel bar pulls, and a single-slab honed-marble island with a brass foot rail." }
        ]
      },
      "grey": {
        slug: "grey",
        title: "Grey Kitchens",
        blurb: "Fog, charcoal, and graphite painted finishes. Two-tone layouts with a contrasting island also live here.",
        products: [
          { slug: "charcoal-island-two-tone-kitchen", title: "Charcoal Island Two-Tone Kitchen",
            blurb: "Cream-painted perimeter with a deep-charcoal island, brushed-nickel hardware throughout, and stained-oak open shelving above the range." },
          { slug: "fog-grey-shaker-kitchen", title: "Fog Grey Shaker Kitchen",
            blurb: "Fog-grey painted maple shaker, unlacquered-brass hardware, white-oak open shelving, and a soapstone backsplash carried to the underside of the upper cabinets." }
        ]
      },
      "l-shape": {
        slug: "l-shape",
        title: "L-shape Kitchens",
        blurb: "Two-wall cabinet runs that meet in a corner. The most common layout for family kitchens with an adjacent dining area.",
        products: [
          { slug: "l-shape-painted-shaker-kitchen", title: "L-shape Painted Shaker Kitchen",
            blurb: "L-shaped run in painted-maple shaker with a corner pantry tower, a tambour appliance garage, and an island anchored along the long wall." },
          { slug: "l-shape-walnut-flat-kitchen", title: "L-shape Walnut Flat-Panel Kitchen",
            blurb: "Walnut flat-panel L-shape with a built-in coffee bar at the short return, an appliance garage at the corner, and brass push-to-open hardware." }
        ]
      },
      "u-shape": {
        slug: "u-shape",
        title: "U-shape Kitchens",
        blurb: "Three-wall layouts with paneled appliances and uninterrupted counter runs. Best in rooms that don't need the kitchen to flow into a separate dining space.",
        products: [
          { slug: "u-shape-galley-kitchen", title: "U-shape Galley Kitchen",
            blurb: "Three-wall cabinet run with paneled appliances, a corner pantry tower, and an integrated booth at the window between the cabinet legs." },
          { slug: "u-shape-white-oak-kitchen", title: "U-shape White Oak Kitchen",
            blurb: "Three-wall white-oak run with an integrated stone backsplash carried around all three walls, paneled appliances, and a window banquette." }
        ]
      },
      "one-wall": {
        slug: "one-wall",
        title: "One-wall Kitchens",
        blurb: "Single-run kitchens for apartments, pied-à-terres, and ADUs. Maximize the wall, conceal the appliances, hide the pantry at the end.",
        products: [
          { slug: "one-wall-pied-a-terre-kitchen", title: "One-wall Pied-à-Terre Kitchen",
            blurb: "Single-wall walnut run for a Beacon Hill townhouse, full-height pantry tower, and a hidden bar at the end of the run." },
          { slug: "one-wall-painted-galley-kitchen", title: "One-wall Painted Galley Kitchen",
            blurb: "Single-wall painted-white shaker for a studio kitchen, concealed appliances behind paneled fronts, marble backsplash to the ceiling, and a pull-out pantry." }
        ]
      }
    }
  },

  "bedroom": {
    slug: "bedroom",
    title: "Bedroom Cabinetry",
    short: "Wardrobes, dressers, beds, and storage built in.",
    blurb: "Custom bedroom millwork: walk-in closets with islands, fitted wardrobes, integrated dressers, and headboard walls. Made to your room's exact dimensions in the same shop as our kitchens.",
    keywords: "custom wardrobes Boston, walk-in closet design Watertown, built-in bedroom storage, custom bed frame MA",
    sections: {
      "wardrobes": {
        slug: "wardrobes",
        title: "Wardrobes & Walk-In Closets",
        blurb: "Walk-ins with islands and seating, reach-ins with finished interiors, and free-standing wardrobes for older homes without closet space.",
        products: [
          { slug: "his-and-hers-walk-in", title: "His-and-Hers Walk-In Closet",
            blurb: "Symmetric pair of walk-ins flanking a central island with a stone top, integrated drawer fronts, and brass valet rods at both ends." },
          { slug: "white-oak-fitted-wardrobe", title: "White Oak Fitted Wardrobe",
            blurb: "Floor-to-ceiling wardrobe wall in rift-cut oak, push-to-open doors hiding hanging space, and a long shoe drawer at the kick." }
        ]
      },
      "kids": {
        slug: "kids",
        title: "Kid's Rooms",
        blurb: "Built-in beds, ladder lofts, homework nooks, and toy storage that grows with the room. All edges rounded; no exposed hinges.",
        products: [
          { slug: "loft-bunk-with-desk", title: "Loft Bunk with Built-In Desk",
            blurb: "Twin-over-twin loft bunk in painted poplar with an integrated desk, bookshelf, and a hidden reading nook under the upper bunk." },
          { slug: "twin-built-in-with-trundle", title: "Twin Built-In with Trundle",
            blurb: "Captain's bed with a pull-out trundle, three drawers underneath, and a paneled headboard wall with reading lights wired in." }
        ]
      },
      "nightstands": {
        slug: "nightstands",
        title: "Nightstands",
        blurb: "Free-standing or wall-floated, with concealed power, USB, and a soft-close drawer. Sold as a pair or built into the surrounding cabinetry.",
        products: [
          { slug: "walnut-floating-nightstand", title: "Walnut Floating Nightstand",
            blurb: "Wall-floated walnut nightstand with a single soft-close drawer, integrated USB-C ports, and an LED under-glow on a dimmer switch." },
          { slug: "painted-three-drawer-nightstand", title: "Painted Three-Drawer Nightstand",
            blurb: "Painted-poplar nightstand with three drawers, unlacquered-brass knobs, and a stone top tied to the room's vanity." }
        ]
      },
      "dressers": {
        slug: "dressers",
        title: "Dressers & Chests",
        blurb: "Six-drawer dressers, tall chests, and built-in dressing tables. Drawer boxes are dovetailed solid maple with full-extension undermount slides.",
        products: [
          { slug: "six-drawer-walnut-dresser", title: "Six-Drawer Walnut Dresser",
            blurb: "Solid walnut, six dovetailed drawers, tapered legs, and brushed-bronze bar pulls. Sized to take a 60-inch wall." },
          { slug: "tall-chest-with-jewelry-drawer", title: "Tall Chest with Jewelry Drawer",
            blurb: "Painted-poplar tall chest with a felt-lined top drawer divided for jewelry, four wide drawers below, and a turned base." }
        ]
      },
      "beds": {
        slug: "beds",
        title: "Beds",
        blurb: "Custom platform and panel beds, headboard walls with integrated lighting, and four-poster frames in solid hardwood. Standard mattress sizes and custom.",
        products: [
          { slug: "panel-bed-with-headboard-wall", title: "Panel Bed with Headboard Wall",
            blurb: "King panel bed integrated into a full headboard wall in white oak, with reading lights, USB charging, and a built-in dresser at each side." },
          { slug: "four-poster-walnut-bed", title: "Four-Poster Walnut Bed",
            blurb: "Solid-walnut four-poster with turned posts, a paneled headboard, and a rail-mounted phone shelf on the inside of each side rail." }
        ]
      }
    }
  },

  "bathroom": {
    slug: "bathroom",
    title: "Bathroom Cabinetry",
    short: "Vanities, shower rooms, and bath storage.",
    blurb: "Bathroom millwork built to the room: single and double vanities with integrated stone, wet-room and shower paneling, soaking tub surrounds, and water-closet enclosures.",
    keywords: "custom bathroom vanity Watertown MA, modern traditional transitional vanity, double vanity Boston, custom shower paneling",
    sections: {
      "vanities": {
        slug: "vanities",
        title: "Bathroom Vanities",
        blurb: "Single and double vanities in solid hardwood with integrated stone tops, concealed outlets, and undermount full-extension drawers.",
        products: [
          { slug: "single-walnut-floating-vanity", title: "Single Walnut Floating Vanity",
            blurb: "48-inch wall-floated walnut vanity with a single integrated quartz sink, concealed under-mount outlets, and brushed-brass tip-out trays." },
          { slug: "double-painted-shaker-vanity", title: "Double Painted Shaker Vanity",
            blurb: "Hand-painted maple double vanity, marble top with two integrated basins, beaded inset doors, and a pair of stacked drawer towers." }
        ]
      },
      "modern-vanities": {
        slug: "modern-vanities",
        title: "Modern Bathroom Vanities",
        blurb: "Slab and flush-inset fronts, integrated stone tops, push-to-open hardware, and concealed power.",
        products: [
          { slug: "floating-walnut-modern-vanity", title: "Floating Walnut Modern Vanity",
            blurb: "Wall-floated walnut vanity with a single integrated quartz sink, push-to-open drawers, and concealed under-mount outlets behind a hinged kick panel." },
          { slug: "white-oak-edge-banded-modern-vanity", title: "White Oak Edge-Banded Modern Vanity",
            blurb: "Rift-cut white oak in an edge-banded slab style, brushed-bronze touch latches, and a single-slab honed quartzite top with an integrated trough basin." }
        ]
      },
      "traditional-vanities": {
        slug: "traditional-vanities",
        title: "Traditional Bathroom Vanities",
        blurb: "Beaded inset and raised-panel doors in painted maple, poplar, and cherry. Brass cup pulls and turned bun feet.",
        products: [
          { slug: "beaded-inset-painted-traditional-vanity", title: "Beaded Inset Painted Traditional Vanity",
            blurb: "Hand-painted maple with beaded-inset doors, a marble top with an integrated under-mount basin, antique-brass bin pulls, and turned bun feet." },
          { slug: "cherry-raised-panel-traditional-vanity", title: "Cherry Raised Panel Traditional Vanity",
            blurb: "Solid cherry raised-panel vanity, soapstone top with a polished bullnose edge, and antique-brass cup pulls on the drawers." }
        ]
      },
      "transitional-vanities": {
        slug: "transitional-vanities",
        title: "Transitional Bathroom Vanities",
        blurb: "Shaker doors with mixed hardware metals. Bridges modern and traditional; the most flexible style across most homes.",
        products: [
          { slug: "shaker-double-transitional-vanity", title: "Shaker Double Transitional Vanity",
            blurb: "Painted-shaker double vanity, mixed brass-and-nickel hardware, single-slab quartzite top, and two open lower towers for rolled towels." },
          { slug: "two-tone-transitional-vanity", title: "Two-Tone Transitional Vanity",
            blurb: "Two-tone cream perimeter and walnut drawer bank, shaker doors, marble top with concealed plumbing, and brushed-brass towel rails." }
        ]
      },
      "shower-rooms": {
        slug: "shower-rooms",
        title: "Shower Rooms",
        blurb: "Custom wet-room paneling, niche cabinetry, and bench seating in moisture-cured hardwood and waterproof veneer.",
        products: [
          { slug: "teak-wet-room-bench", title: "Teak Wet-Room Bench & Niches",
            blurb: "Solid-teak fold-up bench, three integrated niches with hidden drainage channels, and a stainless-trimmed soap shelf." },
          { slug: "marble-clad-shower-cabinet", title: "Marble-Clad Shower Cabinet",
            blurb: "Recessed shower cabinet with a single push-to-open marble-faced door concealing a full toiletry caddy and a robe hook." }
        ]
      },
      "bathtubs": {
        slug: "bathtubs",
        title: "Bathtubs",
        blurb: "Custom surrounds for free-standing and drop-in tubs, integrated overflow channels, and paneled fronts that match the vanity.",
        products: [
          { slug: "free-standing-tub-deck", title: "Free-Standing Tub Deck",
            blurb: "Solid white-oak tub deck with a concealed access hatch, integrated towel ladder, and a stone-clad faucet riser." },
          { slug: "paneled-drop-in-tub-surround", title: "Paneled Drop-In Tub Surround",
            blurb: "Painted-poplar paneled surround with raised panels, an integrated step, and a hinged seat lid concealing storage for towels." }
        ]
      },
      "toilets": {
        slug: "toilets",
        title: "Toilets",
        blurb: "Water-closet doors, half-walls, and integrated paper and storage niches that hide the necessary in a finished room.",
        products: [
          { slug: "water-closet-pocket-door", title: "Water-Closet Pocket Door",
            blurb: "Solid white-oak pocket door with a flush-set occupancy indicator, paneled head jamb, and a brushed-bronze pull at hand height." },
          { slug: "wc-half-wall-storage", title: "Half-Wall WC with Storage",
            blurb: "Three-foot painted half-wall enclosing the WC, with three open niches for paper and reading material and a hinged top cap for cleaning access." }
        ]
      }
    }
  },

  "interior-doors": {
    slug: "interior-doors",
    title: "Interior Doors",
    short: "Hand-built interior doors in solid hardwood.",
    blurb: "Interior passage, pocket, and bypass doors built in our shop. Five-piece raised and flat panels, flush slabs, and divided-light styles. Pre-hung in our jambs or supplied as slabs to your existing openings.",
    keywords: "custom interior doors Massachusetts, solid wood passage door, pocket door installation Boston, raised panel door",
    sections: {
      "raised-panel": {
        slug: "raised-panel",
        title: "Raised Panel",
        blurb: "Traditional five-piece doors with raised center panels. Single, two-panel, and four-panel layouts.",
        products: [
          { slug: "two-panel-raised-cherry", title: "Two-Panel Raised Cherry Door",
            blurb: "Solid cherry two-panel raised door with applied molding, mortise-and-tenon joinery, and an oil-rubbed bronze mortise lock." },
          { slug: "four-panel-painted-poplar", title: "Four-Panel Painted Poplar Door",
            blurb: "Painted-poplar four-panel raised door with ovolo sticking, square corners, and an unlacquered-brass tubular latch." }
        ]
      },
      "flat-panel": {
        slug: "flat-panel",
        title: "Flat Panel",
        blurb: "Shaker-style flat-panel doors with square or chamfered sticking. The most-requested interior door we build.",
        products: [
          { slug: "shaker-five-panel-door", title: "Shaker Five-Panel Door",
            blurb: "Painted-maple five-panel shaker door with a 2-inch stile, square edges, and a satin-nickel privacy set." },
          { slug: "two-panel-flat-white-oak", title: "Two-Panel Flat White Oak Door",
            blurb: "Rift-cut white oak two-panel flat door with a horizontal mid-rail, soss hinges, and a brushed-bronze flush pull for a pocket application." }
        ]
      },
      "hinged": {
        slug: "hinged",
        title: "Hinged Passage",
        blurb: "Pre-hung hinged passage doors in our solid-hardwood jambs. Standard sizes and made-to-measure for older homes.",
        products: [
          { slug: "prehung-painted-shaker", title: "Pre-Hung Painted Shaker Passage Door",
            blurb: "30 by 80 painted-shaker passage door, pre-hung in a solid-poplar jamb with a matching head casing and butt hinges." },
          { slug: "prehung-walnut-two-panel", title: "Pre-Hung Walnut Two-Panel Passage Door",
            blurb: "30 by 84 solid-walnut two-panel door pre-hung in a walnut jamb with bronze ball-bearing hinges and a privacy set." }
        ]
      },
      "sliding": {
        slug: "sliding",
        title: "Sliding & Pocket",
        blurb: "Single and double pocket doors, barn-style sliders, and ceiling-mounted bypass doors for tight floor plans.",
        products: [
          { slug: "double-pocket-slab", title: "Double Pocket Slab Door",
            blurb: "Pair of flush-slab walnut pocket doors with soft-close hardware, recessed flush pulls, and a concealed overhead track in the header." },
          { slug: "barn-slider-painted", title: "Painted Barn Slider",
            blurb: "60-inch painted-poplar barn slider with a blackened-iron top track, ceiling-mounted stay rollers, and a forged ring pull." }
        ]
      },
      "wpc-interior": {
        slug: "wpc-interior",
        title: "WPC Interior",
        blurb: "Wood-plastic composite cores faced with hardwood veneer. Lighter than solid stock; better for laundry, bath, and damp-prone rooms.",
        products: [
          { slug: "wpc-flush-veneer", title: "WPC Flush Veneer Door",
            blurb: "Flush-slab WPC core door faced in book-matched white-oak veneer, with a moisture-sealed bottom edge and concealed European hinges." },
          { slug: "wpc-shaker-painted", title: "WPC Shaker Painted Door",
            blurb: "WPC-core shaker passage door with a painted MDF stile-and-rail face, suitable for steam-prone bathrooms and laundry rooms." }
        ]
      }
    }
  },

  "wpc-doors": {
    slug: "wpc-doors",
    title: "WPC Doors",
    short: "Wood-plastic composite doors faced in real wood.",
    blurb: "WPC-core doors for kitchens, baths, laundries, and high-humidity rooms. Lighter than solid stock, more dimensionally stable, and faced in real hardwood veneer for a furniture-grade finish.",
    keywords: "WPC doors Boston, wood plastic composite cabinetry, moisture-resistant doors MA",
    flat: true,
    products: [
      { slug: "standard-wpc-slab", title: "Standard WPC Flush Slab",
        blurb: "32 by 80 WPC slab door faced in painted MDF, sealed bottom edge, pre-bored for a standard 2-3/8-inch backset latch." },
      { slug: "standard-wpc-shaker", title: "Standard WPC Shaker",
        blurb: "30 by 80 WPC-core shaker passage door, painted MDF face with a 2-inch stile, supplied as a slab without hardware." },
      { slug: "decorative-applied-molding", title: "Applied-Molding WPC Door",
        blurb: "Flush WPC slab with field-applied painted molding in a six-panel layout. Finished as one piece in our spray booth." },
      { slug: "decorative-bead-board", title: "Beadboard WPC Door",
        blurb: "Painted WPC door with a beadboard center panel, square stile and rail, and a flat-stock cap. For pantries, mudrooms, and cottage baths." },
      { slug: "hd-laundry-passage", title: "Heavy-Duty Laundry Passage Door",
        blurb: "Reinforced WPC core with a moisture-sealed bottom, ball-bearing hinges, and a kickplate-rated bottom rail." },
      { slug: "hd-garage-entry", title: "Heavy-Duty Garage Entry Door",
        blurb: "WPC slab with a steel reinforcement plate at the strike, a self-closing hinge package, and a fire-rated seal." },
      { slug: "wpc-pocket-slab", title: "WPC Pocket Slab Door",
        blurb: "Flush WPC pocket slab faced in painted MDF with soft-close hardware, flush pull, and an integrated edge-seal at the strike jamb." },
      { slug: "wpc-barn-veneer", title: "WPC Barn Slider, Veneered",
        blurb: "60-inch WPC slider faced in walnut veneer, ceiling-mounted track concealed by a 1x4 trim cap, and a black-steel pull." },
      { slug: "custom-glazed-wpc", title: "Custom Glazed WPC Door",
        blurb: "Painted WPC door with a hand-applied glaze settled into the door's profile and a satin-conversion-varnish topcoat." },
      { slug: "custom-veneer-wpc", title: "Custom Veneer WPC Door",
        blurb: "WPC core with book-matched veneer of your choice (walnut, oak, cherry, or ash). Cataloged, sequenced, and finished as a set." }
    ]
  },

  "rta-cabinets": {
    slug: "rta-cabinets",
    title: "RTA Cabinets",
    short: "Ready-to-assemble cabinetry for the trade.",
    blurb: "For contractors, kitchen designers, and home flippers. Solid-hardwood face frames and doors shipped flat with a clear assembly sheet. Kitchen, bath, closet, pantry, and modular wall systems.",
    keywords: "RTA cabinets wholesale Boston, contractor cabinet supplier, flat pack solid wood cabinets, kitchen RTA Massachusetts",
    flat: true,
    products: [
      { slug: "rta-painted-shaker-kitchen", title: "Painted Shaker Kitchen RTA",
        blurb: "Painted-maple shaker doors, plywood box, soft-close hinges and slides, and a 30-minute assembly time per box with a cam-lock system." },
      { slug: "rta-stained-oak-kitchen", title: "Stained White Oak Kitchen RTA",
        blurb: "Quarter-sawn oak shaker doors in a warm-tobacco stain, plywood box, soft-close hardware, and matching plywood end panels." },
      { slug: "rta-30-vanity", title: "30-Inch RTA Vanity",
        blurb: "30-inch single-sink shaker vanity in painted maple, two doors and one false drawer front, sized for a 31-inch stone top." },
      { slug: "rta-60-double-vanity", title: "60-Inch RTA Double Vanity",
        blurb: "60-inch double-sink shaker vanity in painted maple, four doors and two false drawer fronts, sized for a 61-inch double-basin top." },
      { slug: "rta-walk-in-kit", title: "RTA Walk-In Closet Kit",
        blurb: "8x10 walk-in kit with two drawer towers, two hanging sections, one shoe ladder, and an optional island upgrade." },
      { slug: "rta-reach-in-kit", title: "RTA Reach-In Closet Kit",
        blurb: "6-foot reach-in kit with one drawer tower, a double-hang section, and a shelf bank. Trim and end caps included." },
      { slug: "rta-walk-in-pantry", title: "RTA Walk-In Pantry Kit",
        blurb: "4x6 walk-in pantry kit with three adjustable-shelf towers, a counter-height workstation, and an appliance garage with a tambour door." },
      { slug: "rta-shallow-pantry", title: "RTA Shallow Wall Pantry",
        blurb: "10-inch-deep wall pantry with five adjustable shelves, painted-maple shaker doors, and a baseboard return." },
      { slug: "modular-media-wall", title: "Modular Media Wall Kit",
        blurb: "Three-bay media wall kit with base cabinets, a center open run for a TV, and two tall side towers. Ships in five boxes." },
      { slug: "modular-home-office", title: "Modular Home Office Kit",
        blurb: "Wall-to-wall home office kit with a desk run, two file towers, a printer cabinet, and a stretch of open shelving above." }
    ]
  },

  "aluminum": {
    slug: "aluminum",
    title: "Aluminum Doors & Windows",
    short: "Aluminum exterior doors and windows.",
    blurb: "Thermally-broken aluminum entry doors, patio sliders, casement and slider windows. Sized to standard rough openings and made-to-measure for renovation work. Powder-coated in any color, with hardwood interior trim by our shop.",
    keywords: "aluminum entry doors Boston, casement windows Watertown MA, patio slider doors, thermally broken aluminum",
    sections: {
      "entry-doors": {
        slug: "doors",
        title: "Aluminum Doors",
        blurb: "Thermally-broken entry doors and sliding patio doors with multi-point locks, weather seals, and an option for an interior hardwood face.",
        products: [
          { slug: "aluminum-entry-with-sidelight", title: "Aluminum Entry with Sidelight",
            blurb: "36-inch thermally-broken aluminum entry door with one fixed sidelight, multi-point lock, and a painted exterior in your color." },
          { slug: "three-panel-aluminum-slider", title: "Three-Panel Aluminum Patio Slider",
            blurb: "9-foot three-panel aluminum patio slider with a center fixed panel, two operating panels, and a concealed bottom track flush to the floor." }
        ]
      },
      "windows": {
        slug: "windows",
        title: "Aluminum Windows",
        blurb: "Crank-out casements and horizontal sliders with concealed multi-point locks. Thermally-broken frames, low-E argon glazing.",
        products: [
          { slug: "single-casement-aluminum", title: "Single Aluminum Casement",
            blurb: "30 by 48-inch single casement with a concealed crank, multi-point lock, and a low-E argon-filled insulated glazing unit." },
          { slug: "three-panel-aluminum-slider-window", title: "Three-Panel Aluminum Sliding Window",
            blurb: "60 by 36-inch three-panel slider with a center fixed pane and two operating side sashes, low-E argon-filled glazing." }
        ]
      }
    }
  }
};

// Helpers
function getCategory(slug)            { return CATALOG[slug]; }
function getSection(catSlug, secSlug) { return CATALOG[catSlug]?.sections?.[secSlug]; }
function getProduct(catSlug, secSlug, prodSlug) {
  return CATALOG[catSlug]?.sections?.[secSlug]?.products?.find(p => p.slug === prodSlug);
}
function listCategories() { return Object.values(CATALOG); }
function listSections(catSlug) { return Object.values(CATALOG[catSlug]?.sections || {}); }

Object.assign(window, { CATALOG, getCategory, getSection, getProduct, listCategories, listSections });
