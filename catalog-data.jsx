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

// Accessories & Hardware appears as a separate section beneath the cabinet
// browser on every board page. One rail, no SKU column — each row renders
// its diagram + Includes panel when available.
const ACCESSORY_ROWS = [
  { slug: "open-shelf", title: "Open Shelf",
    diagrams: ["/assets/accessories/open-shelf.png"],
    includes: [
      "One (1) cabinet box made of door material.",
      "No shelf.",
      "Screws, dowels and required hardware."
    ]
  },
  { slug: "wall-microwave", title: "Wall Microwave Cabinet",
    diagrams: ["/assets/accessories/wall-microwave.png"],
    includes: [
      "One (1) cabinet box made of door material.",
      "Screws, dowels and required hardware."
    ],
    notes: [
      "The bottom panel extends out for 6\" to hold the microwave."
    ]
  },
  { slug: "dishwasher-end", title: "Dishwasher End Panel",
    diagrams: ["/assets/accessories/dishwasher-end-panel.png"],
    includes: [
      "One (1) return panel 34 1/2\"H x 24\"D.",
      "One (1) filler 3\"W x 34 1/2\"H x 3/4\"D.",
      "Screws, dowels and required hardware."
    ],
    notes: [
      "The filler covers return panel."
    ],
    skus: [
      { code: "BSS-DWEP3" }
    ]
  },
  { slug: "panel-toe-kick", title: "Panel & Toe Kick",
    diagrams: ["/assets/accessories/panel-toe-kick.png"],
    includes: [
      "One (1) decorative panel."
    ],
    skus: [
      { code: "BSS-BEP24" },
      { code: "BSS-BEP26" },
      { code: "BSS-BEP36" },
      { code: "BSS-BEP48" },
      { code: "BSS-WEP1230" },
      { code: "BSS-WEP1236" },
      { code: "BSS-WEP1242" },
      { code: "BSS-REF2496" },
      { code: "BSS-REF3696" },
      { code: "BSS-PNL3696" },
      { code: "BSS-TK8" }
    ]
  },
  { slug: "filler", title: "Filler",
    diagrams: ["/assets/accessories/filler.png"],
    includes: [
      "One (1) filler.",
      "One (1) Carcass panel in same size to easier installation."
    ],
    skus: [
      { code: "BSS-WF330" },
      { code: "BSS-WF336" },
      { code: "BSS-WF342" },
      { code: "BSS-TF396" },
      { code: "BSS-WF630" },
      { code: "BSS-WF636" },
      { code: "BSS-WF642" },
      { code: "BSS-TF696" }
    ]
  },
  { slug: "shaker-end-panel", title: "Shaker Style End Panel",
    diagrams: ["/assets/accessories/shaker-end-panel.png"],
    includes: [
      "One (1) decorative panel."
    ],
    skus: [
      { code: "BSS-MWEP1230" },
      { code: "BSS-MWEP1236" },
      { code: "BSS-MWEP1242" },
      { code: "BSS-MBEP2430" },
      { code: "BSS-MTEP2484" },
      { code: "BSS-MTEP2490" },
      { code: "BSS-MTEP2496" }
    ]
  },
  { slug: "exclusive-shaker", title: "Exclusive for Shaker",
    diagrams: [
      "/assets/accessories/exclusive-shaker-1.png",
      "/assets/accessories/exclusive-shaker-2.png"
    ],
    includes: [
      "One (1) piece of moulding."
    ],
    notes: [
      "CVCM and CM4 should be used with RISER."
    ],
    skus: [
      { code: "BSS-CVCM" },
      { code: "BSS-CM4" },
      { code: "BSS-BM8" },
      { code: "BSS-RISER" },
      { code: "BSS-SM8" },
      { code: "BSS-LM8" },
      { code: "BSS-OCM8" },
      { code: "BSS-VAL36" },
      { code: "BSS-VAL48" }
    ]
  },
  { slug: "hardware", title: "Hardware",
    skus: [
      { code: "HW-BLS33-TRAY" },
      { code: "HW-BLS36-TRAY" },
      { code: "HW-DRAWER-HIGH" },
      { code: "HW-DRAWER-LOW" },
      { code: "HW-HINGE45" },
      { code: "HW-HINGE135" },
      { code: "HW-HINGE155" }
    ]
  },
  { slug: "glass-door", title: "Glass Door",
    diagrams: ["/assets/accessories/glass-door.png"],
    includes: [
      "One (1) decorative door."
    ]
  },
  { slug: "floating-shelf", title: "Floating Shelf",
    diagrams: ["/assets/accessories/floating-shelf.png"],
    includes: [
      "One (1) floating shelf.",
      "Two (2) T-supporter."
    ]
  }
];

const CABINET_FAMILIES = [
  {
    slug: "base-cabinet", title: "Base Cabinet",
    subcategories: [
      { slug: "1d-1d",        title: "Base Cabinet", subtitle: "(1 Drawer + 1 Door)",
        diagrams: [
          "/assets/cabinets/base-1d1d-diagram.png",
          "/assets/cabinets/base-1d1d-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) drawer with metalbox & soft close slide.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "One (1) adjustable shelf with shelf pegs.",
          "Four (4) adjustable Legs 4 1/4\"–5 1/4\".",
          "One (1) trash can for BTC18.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "B12",   dims: "12\"W x 30\"H x 23 7/8\"D" },
          { code: "B15",   dims: "15\"W x 30\"H x 23 7/8\"D" },
          { code: "B18",   dims: "18\"W x 30\"H x 23 7/8\"D" },
          { code: "B21",   dims: "21\"W x 30\"H x 23 7/8\"D" },
          { code: "BTC18", dims: "18\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "1d-2d",        title: "Base Cabinet", subtitle: "(1 Drawer + 2 Door)",
        diagrams: [
          "/assets/cabinets/base-1d2d-diagram.png",
          "/assets/cabinets/base-1d2d-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) drawer with metalbox and soft close slide.",
          "Two (2) door with HINGE105° (6 ways & soft close).",
          "One (1) adjustable shelf with shelf pegs.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "B24", dims: "24\"W x 30\"H x 23 7/8\"D" },
          { code: "B27", dims: "27\"W x 30\"H x 23 7/8\"D" },
          { code: "B30", dims: "30\"W x 30\"H x 23 7/8\"D" },
          { code: "B33", dims: "33\"W x 30\"H x 23 7/8\"D" },
          { code: "B36", dims: "36\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "sink-base",    title: "Sink Base Cabinet", subtitle: "(1 FK Drawer + 2 Door)",
        diagrams: [
          "/assets/cabinets/sink-base-diagram.png",
          "/assets/cabinets/sink-base-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) fake drawer panel.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "SB30", dims: "30\"W x 30\"H x 23 7/8\"D" },
          { code: "SB33", dims: "33\"W x 30\"H x 23 7/8\"D" },
          { code: "SB36", dims: "36\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "blind-corner", title: "Base Cabinet", subtitle: "Base Blind Corner",
        diagrams: [
          "/assets/cabinets/blind-corner-diagram.png",
          "/assets/cabinets/blind-corner-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "One (1) adjustable shelf with shelf pegs.",
          "One (1) 6\" filler for adjusting the spacing.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "BBC42", dims: "42\"W x 30\"H x 23 7/8\"D" },
          { code: "BBC45", dims: "45\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "lazy-susan",   title: "Base Cabinet", subtitle: "Base Lazy Susan Cabinet",
        diagrams: [
          "/assets/cabinets/lazy-susan-diagram.png",
          "/assets/cabinets/lazy-susan-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "One (1) adjustable shelf with shelf pegs.",
          "One (1) 6\" filler for adjusting the spacing.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "BER33", dims: "33\"W x 30\"H x 23 7/8\"D" },
          { code: "BER36", dims: "36\"W x 30\"H x 23 7/8\"D" },
          { code: "BLS33", dims: "33\"W x 30\"H x 23 7/8\"D" },
          { code: "BLS36", dims: "36\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "drawers",      title: "Base Cabinet", subtitle: "Drawers Base Cabinet",
        diagrams: [
          "/assets/cabinets/drawers-base-diagram.png",
          "/assets/cabinets/drawers-base-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Three (3) drawers with metalbox and soft close slide.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "3DB12", dims: "12\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB15", dims: "15\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB18", dims: "18\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB21", dims: "21\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB24", dims: "24\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB30", dims: "30\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB33", dims: "33\"W x 30\"H x 23 7/8\"D" },
          { code: "3DB36", dims: "36\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "2-drawer",     title: "Base Cabinet", subtitle: "2 Drawer",
        diagrams: [
          "/assets/cabinets/2-drawer-diagram.png",
          "/assets/cabinets/2-drawer-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) drawers with metalbox and soft close slide.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "2DB30", dims: "30\"W x 30\"H x 23 7/8\"D" },
          { code: "2DB36", dims: "36\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "spice-rack",   title: "Base Cabinet", subtitle: "Base Spice Rack",
        diagrams: [
          "/assets/cabinets/spice-rack-diagram.png",
          "/assets/cabinets/spice-rack-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door and spice rack for BSR cabinet.",
          "One (1) door with HINGE105° (6 ways & soft close) for BFH cabinet.",
          "One (1) adjustable shelf with shelf pegs for BFH cabinet.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "BSR09", dims: "9\"W x 30\"H x 23 7/8\"D" },
          { code: "BSR12", dims: "12\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "full-height",  title: "Base Cabinet", subtitle: "Full Height",
        diagrams: [
          "/assets/cabinets/full-height-diagram.png",
          "/assets/cabinets/full-height-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door for BSR cabinet.",
          "One (1) door with HINGE105° (6 ways & soft close) for BFH cabinet.",
          "One (1) adjustable shelf with shelf pegs for BFH cabinet.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "B06FH", dims: "6\"W x 30\"H x 23 7/8\"D" },
          { code: "B09FH", dims: "9\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "microwave",    title: "Base Cabinet", subtitle: "Microwave Cabinet",
        diagrams: [
          "/assets/cabinets/microwave-diagram.png",
          "/assets/cabinets/microwave-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) drawer with metalbox and soft close slide.",
          "One (1) 2\" filler at the top to adjust the spacing.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\".",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use BEP/MBEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "BMC24", dims: "24\"W x 30\"H x 23 7/8\"D" },
          { code: "BMC30", dims: "30\"W x 30\"H x 23 7/8\"D" }
        ]
      }
    ]
  },
  {
    slug: "wall-cabinet", title: "Wall Cabinet",
    subcategories: [
      { slug: "wall-1d-30-36",        title: "Wall Cabinet", subtitle: "1 Full Door (30\" & 36\")",
        diagrams: [
          "/assets/cabinets/wall-1d-30-36-diagram.png",
          "/assets/cabinets/wall-1d-30-36-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W0930", dims: "9\"W x 30\"H x 12\"D" },
          { code: "W1230", dims: "12\"W x 30\"H x 12\"D" },
          { code: "W1530", dims: "15\"W x 30\"H x 12\"D" },
          { code: "W1830", dims: "18\"W x 30\"H x 12\"D" },
          { code: "W2130", dims: "21\"W x 30\"H x 12\"D" },
          { code: "W0936", dims: "9\"W x 36\"H x 12\"D" },
          { code: "W1236", dims: "12\"W x 36\"H x 12\"D" },
          { code: "W1536", dims: "15\"W x 36\"H x 12\"D" },
          { code: "W1836", dims: "18\"W x 36\"H x 12\"D" },
          { code: "W2136", dims: "21\"W x 36\"H x 12\"D" }
        ]
      },
      { slug: "wall-1d-42",           title: "Wall Cabinet", subtitle: "1 Full Door (42\")",
        diagrams: [
          "/assets/cabinets/wall-1d-42-diagram.png",
          "/assets/cabinets/wall-1d-42-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W0942", dims: "9\"W x 42\"H x 12\"D" },
          { code: "W1242", dims: "12\"W x 42\"H x 12\"D" },
          { code: "W1542", dims: "15\"W x 42\"H x 12\"D" },
          { code: "W1842", dims: "18\"W x 42\"H x 12\"D" },
          { code: "W2142", dims: "21\"W x 42\"H x 12\"D" }
        ]
      },
      { slug: "wall-2d-30-36",        title: "Wall Cabinet", subtitle: "2 Door (30\" & 36\")",
        diagrams: [
          "/assets/cabinets/wall-2d-30-36-diagram.png",
          "/assets/cabinets/wall-2d-30-36-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W2430", dims: "24\"W x 30\"H x 12\"D" },
          { code: "W2730", dims: "27\"W x 30\"H x 12\"D" },
          { code: "W3030", dims: "30\"W x 30\"H x 12\"D" },
          { code: "W3330", dims: "33\"W x 30\"H x 12\"D" },
          { code: "W3630", dims: "36\"W x 30\"H x 12\"D" },
          { code: "W2436", dims: "24\"W x 36\"H x 12\"D" },
          { code: "W2736", dims: "27\"W x 36\"H x 12\"D" },
          { code: "W3036", dims: "30\"W x 36\"H x 12\"D" },
          { code: "W3336", dims: "33\"W x 36\"H x 12\"D" },
          { code: "W3636", dims: "36\"W x 36\"H x 12\"D" }
        ]
      },
      { slug: "wall-2d-42",           title: "Wall Cabinet", subtitle: "2 Door (42\")",
        diagrams: [
          "/assets/cabinets/wall-2d-42-diagram.png",
          "/assets/cabinets/wall-2d-42-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W2442", dims: "24\"W x 42\"H x 12\"D" },
          { code: "W2742", dims: "27\"W x 42\"H x 12\"D" },
          { code: "W3042", dims: "30\"W x 42\"H x 12\"D" },
          { code: "W3342", dims: "33\"W x 42\"H x 12\"D" },
          { code: "W3642", dims: "36\"W x 42\"H x 12\"D" }
        ]
      },
      { slug: "wall-short-1d",        title: "Wall Cabinet", subtitle: "Short Cabinet 1 Full Door",
        diagrams: [
          "/assets/cabinets/wall-short-1d-diagram.png",
          "/assets/cabinets/wall-short-1d-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "No Shelf.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W1212",  dims: "12\"W x 12\"H x 12\"D" },
          { code: "W1512",  dims: "15\"W x 12\"H x 12\"D" },
          { code: "W1812",  dims: "18\"W x 12\"H x 12\"D" },
          { code: "W2112",  dims: "21\"W x 12\"H x 12\"D" },
          { code: "BTC18",  dims: "18\"W x 30\"H x 23 7/8\"D" }
        ]
      },
      { slug: "wall-short-2d-narrow", title: "Wall Cabinet", subtitle: "Short 2 Door (12\", 15\", 18\", 21\")",
        diagrams: [
          "/assets/cabinets/wall-short-2d-narrow-diagram.png",
          "/assets/cabinets/wall-short-2d-narrow-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "No shelf in 12\" & 15\", 18\" & 21\"H.",
          "One (1) adjustable shelf with shelf pegs for 24\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W2412", dims: "24\"W x 12\"H x 12\"D" },
          { code: "W2712", dims: "27\"W x 12\"H x 12\"D" },
          { code: "W3012", dims: "30\"W x 12\"H x 12\"D" },
          { code: "W3312", dims: "33\"W x 12\"H x 12\"D" },
          { code: "W3612", dims: "36\"W x 12\"H x 12\"D" },
          { code: "W3015", dims: "30\"W x 15\"H x 12\"D" },
          { code: "W3315", dims: "33\"W x 15\"H x 12\"D" },
          { code: "W3615", dims: "36\"W x 15\"H x 12\"D" },
          { code: "W3018", dims: "30\"W x 18\"H x 12\"D" },
          { code: "W3318", dims: "33\"W x 18\"H x 12\"D" },
          { code: "W3618", dims: "36\"W x 18\"H x 12\"D" },
          { code: "W3021", dims: "30\"W x 21\"H x 12\"D" },
          { code: "W3321", dims: "33\"W x 21\"H x 12\"D" }
        ]
      },
      { slug: "wall-short-2d-24",     title: "Wall Cabinet", subtitle: "Short 2 Door (24\")",
        diagrams: [
          "/assets/cabinets/wall-short-2d-24-diagram.png",
          "/assets/cabinets/wall-short-2d-24-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "No shelf in 12\" & 15\", 18\" & 21\"H.",
          "One (1) adjustable shelf with shelf pegs for 24\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W3024", dims: "30\"W x 24\"H x 12\"D" },
          { code: "W3324", dims: "33\"W x 24\"H x 12\"D" },
          { code: "W3624", dims: "36\"W x 24\"H x 12\"D" }
        ]
      },
      { slug: "wall-fridge-2d-narrow",title: "Wall Cabinet", subtitle: "Fridge 2 Door (12\", 15\", 18\")",
        diagrams: [
          "/assets/cabinets/wall-fridge-2d-narrow-diagram.png",
          "/assets/cabinets/wall-fridge-2d-narrow-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "No shelf in 12\" & 15\", 18\"H.",
          "One (1) adjustable shelf with shelf pegs for 24\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W301224", dims: "30\"W x 12\"H x 23 7/8\"D" },
          { code: "W331224", dims: "33\"W x 12\"H x 23 7/8\"D" },
          { code: "W361224", dims: "36\"W x 12\"H x 23 7/8\"D" },
          { code: "W301524", dims: "30\"W x 15\"H x 23 7/8\"D" },
          { code: "W331524", dims: "33\"W x 15\"H x 23 7/8\"D" },
          { code: "W361524", dims: "36\"W x 15\"H x 23 7/8\"D" },
          { code: "W331824", dims: "33\"W x 18\"H x 23 7/8\"D" },
          { code: "W361824", dims: "36\"W x 18\"H x 23 7/8\"D" }
        ]
      },
      { slug: "wall-fridge-2d-24",    title: "Wall Cabinet", subtitle: "Fridge 2 Door (24\")",
        diagrams: [
          "/assets/cabinets/wall-fridge-2d-24-diagram.png",
          "/assets/cabinets/wall-fridge-2d-24-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "No shelf in 12\" & 15\" & 18\"H.",
          "One (1) adjustable shelf with shelf pegs for 24\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "W362424", dims: "36\"W x 24\"H x 23 7/8\"D" }
        ]
      },
      { slug: "wall-easy-reach",      title: "Wall Cabinet", subtitle: "Easy Reach Cabinet",
        diagrams: [
          "/assets/cabinets/wall-easy-reach-diagram.png",
          "/assets/cabinets/wall-easy-reach-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) folding doors with HINGE135° (regular) and HINGE155° (soft close).",
          "No shelf in 12\"H.",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "WER2412", dims: "24\"W x 12\"H x 12\"D" },
          { code: "WER2430", dims: "24\"W x 30\"H x 12\"D" },
          { code: "WER2436", dims: "24\"W x 36\"H x 12\"D" },
          { code: "WER2442", dims: "24\"W x 42\"H x 12\"D" }
        ]
      },
      { slug: "wall-diagonal",        title: "Wall Cabinet", subtitle: "Diagonal Cabinet",
        diagrams: [
          "/assets/cabinets/wall-diagonal-diagram.png",
          "/assets/cabinets/wall-diagonal-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE45° (soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "WDC2430", dims: "24\"W x 30\"H x 12\"D" },
          { code: "WDC2436", dims: "24\"W x 36\"H x 12\"D" },
          { code: "WDC2442", dims: "24\"W x 42\"H x 12\"D" }
        ]
      },
      { slug: "wall-blind-corner",    title: "Wall Cabinet", subtitle: "Blind Corner",
        diagrams: [
          "/assets/cabinets/wall-blind-corner-diagram.png",
          "/assets/cabinets/wall-blind-corner-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with HINGE105° (6 ways & soft close).",
          "Two (2) adjustable shelves with shelf pegs for 30\" & 36\"H cabinet.",
          "Three (3) adjustable shelves with shelf pegs for 42\"H cabinet.",
          "One (1) 6\" filler for adjusting the spacing.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "WBC2730", dims: "27\"W x 30\"H x 12\"D" },
          { code: "WBC2736", dims: "27\"W x 36\"H x 12\"D" },
          { code: "WBC2742", dims: "27\"W x 42\"H x 12\"D" }
        ]
      },
      { slug: "wall-bi-fold",         title: "Wall Cabinet", subtitle: "Bi-Fold",
        diagrams: [
          "/assets/cabinets/wall-bi-fold-diagram.png",
          "/assets/cabinets/wall-bi-fold-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with BLUM fold lift and regular hinges.",
          "Two (2) adjustable shelves with shelf pegs.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "WBF3030", dims: "30\"W x 30\"H x 12\"D" },
          { code: "WBF3630", dims: "36\"W x 30\"H x 12\"D" }
        ]
      },
      { slug: "wall-stay-lift",       title: "Wall Cabinet", subtitle: "Stay Lift",
        diagrams: [
          "/assets/cabinets/wall-stay-lift-diagram.png",
          "/assets/cabinets/wall-stay-lift-front.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "One (1) door with BLUM stay lift HINGE105° (6 ways & soft close).",
          "No Shelf.",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Use WEP/MWEP panels to cover exterior sides if exposed."
        ],
        skus: [
          { code: "WSL3015", dims: "30\"W x 15\"H x 12\"D" },
          { code: "WSL3615", dims: "36\"W x 15\"H x 12\"D" },
          { code: "WSL3018", dims: "30\"W x 18\"H x 12\"D" },
          { code: "WSL3618", dims: "36\"W x 18\"H x 12\"D" }
        ]
      }
    ]
  },
  {
    slug: "pantry", title: "Pantry",
    subcategories: [
      { slug: "pantry-1-side-door", title: "Pantry Cabinet", subtitle: "1 Side Door",
        diagrams: [
          "/assets/cabinets/pantry-1-side-door.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "Three (3) adjustable shelves with shelf pegs and One (1) fixed shelf.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Height of cabinet includes feet's height.",
          "Use REF/MTEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "PC1884", dims: "18\"W x 84\"H x 23 7/8\"D" },
          { code: "PC1890", dims: "18\"W x 90\"H x 23 7/8\"D" },
          { code: "PC1896", dims: "18\"W x 96\"H x 23 7/8\"D" }
        ],
        noThumbnails: true
      },
      { slug: "pantry-2-full-door", title: "Pantry Cabinet", subtitle: "2 Full Door",
        diagrams: [
          "/assets/cabinets/pantry-2-full-door.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Four (4) doors with HINGE105° (6 ways & soft close).",
          "Three (3) adjustable shelves with shelf pegs and One (1) fixed shelf.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Height of cabinet includes feet's height.",
          "Use REF/MTEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "PC2484", dims: "24\"W x 84\"H x 23 7/8\"D" },
          { code: "PC3084", dims: "30\"W x 84\"H x 23 7/8\"D" },
          { code: "PC2490", dims: "24\"W x 90\"H x 23 7/8\"D" },
          { code: "PC3090", dims: "30\"W x 90\"H x 23 7/8\"D" },
          { code: "PC2496", dims: "24\"W x 96\"H x 23 7/8\"D" },
          { code: "PC3096", dims: "30\"W x 96\"H x 23 7/8\"D" }
        ],
        noThumbnails: true
      }
    ]
  },
  {
    slug: "double-oven", title: "Double Oven Cabinet",
    subcategories: [
      { slug: "oven-standard", title: "Cabinet", subtitle: "Double Oven Cabinet",
        diagrams: [
          "/assets/cabinets/double-oven-diagram.png"
        ],
        includes: [
          "One (1) universal cabinet box.",
          "Two (2) doors with HINGE105° (6 ways & soft close).",
          "One (1) drawer with metalbox and soft close slide.",
          "One (1) 2 1/2\" filler at the top and bottom of cut-out space.",
          "One (1) adjustable shelf with shelf pegs on the top for 96\" cabinet.",
          "Four (4) adjustable Legs 4 1/4\"~5 1/4\"",
          "Screws, dowels and required hardware."
        ],
        notes: [
          "Height of cabinet includes feet's height.",
          "Appliance cut-out height is 55 1/8\".",
          "Use REF/MTEP panels to cover exterior sides if exposed.",
          "Need to install TK8/A-TK10/B-TK10 at the bottom of the cabinet."
        ],
        skus: [
          { code: "DOC3084", dims: "30\"W x 84\"H x 23 7/8\"D" },
          { code: "DOC3090", dims: "30\"W x 90\"H x 23 7/8\"D" },
          { code: "DOC3096", dims: "30\"W x 96\"H x 23 7/8\"D" }
        ],
        noThumbnails: true
      }
    ]
  }
];

const BOARD_OPTIONS = [
  { slug: "plywood",  title: "Plywood Cabinets",  board: "Plywood",  code: "PLY",
    blurb: "Three-quarter-inch furniture-grade plywood carcass with a hardwood interior. The premium box for moisture, weight, and long-term run integrity." },
  { slug: "particle", title: "Particle Cabinets", board: "Particle", code: "PAR",
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
        slug: "white-slim-shaker", title: "White Slim Shaker", code: "SSW",
        img: "/assets/finishes/card-white-slim-shaker.jpg",
        cardImg: "/assets/finishes/card-white-slim-shaker.jpg",
        heroPhoto: "/assets/finishes/white-slim-shaker-hero.jpg",
        aboutImg: "/assets/finishes/white-slim-shaker-about-v2.jpg",
        features: [
          { title: "Slim Shaker", img: "/assets/finishes/wss-feature-1.jpg",
            blurb: "Narrower stiles and rails compared to traditional shaker cabinets. Cleaner visual frame, more door panel showing, and a quieter line on a tight wall." },
          { title: "Slim Profile", img: "/assets/finishes/wss-feature-2.jpg",
            blurb: "The slim profile also opens up the room. Works in modern, transitional, and minimalist farmhouse kitchens without ever competing with the rest of the layout." },
          { title: "Functionality", img: "/assets/finishes/wss-feature-3.jpg",
            blurb: "Plenty of storage where it counts. Adjustable shelves, drawer banks, and accessory programs keep the kitchen organized at the install and every year after." }
        ],
        blurb: "Painted maple shaker with a narrow 1.5-inch stile in a soft chalk white. For condos, galleys, and any room where a wide stile would eat the visual frame.",
        about: [
          "White slim shaker is the slim-stile take on the classic painted shaker. A 1.5-inch frame in place of the standard 2-inch reads cleaner in tight rooms, lets the door panel do more of the visual work, and pairs naturally with modern, transitional, and farmhouse layouts.",
          "Doors and drawer fronts are painted maple in a soft chalk white. The plywood option uses a furniture-grade ply carcass with a maple interior; the particle option uses a high-density particleboard box with the same door and hardware spec. Both ship with dovetailed drawer boxes on soft-close undermount slides."
        ],
        faq: [
          { q: "Is the 1.5-inch slim stile as strong as the standard 2-inch shaker?",
            a: "Yes. The frame is the same painted maple, glued and pinned to the same tolerance; the door panel handles most of the load. The narrower stile is purely a visual choice, not a structural compromise." },
          { q: "Will slim shaker read correctly in a traditional kitchen?",
            a: "It leans transitional. If the room is strictly traditional (raised-panel doors, deep crown, beaded inset), the standard single shaker is the more obvious pick. Slim shaker reads best with flat trim, simple crown, and contemporary hardware." },
          { q: "Does the painted white yellow over time?",
            a: "No. The topcoat is a UV-stable conversion-varnish lacquer. Painted maple doors are far more colour-stable than oiled or stained wood; the white you order is the white you live with." }
        ],
        products: BOARD_OPTIONS
      },
      "white-shaker": {
        slug: "white-shaker", title: "White Single Shaker", code: "WSH",
        img: "/assets/finishes/card-white-shaker.jpg",
        cardImg: "/assets/finishes/card-white-shaker.jpg",
        heroPhoto: "/assets/finishes/white-shaker-hero.jpg",
        aboutImg: "/assets/finishes/white-shaker-about.jpg",
        features: [
          { title: "Painted Maple", img: "/assets/finishes/wsh-feature-1.jpg",
            blurb: "Solid-maple doors and drawer fronts painted in a soft, warm white. The most-ordered finish across the dealer network for a reason: it reads correctly almost anywhere." },
          { title: "Single Shaker Frame", img: "/assets/finishes/wsh-feature-2.jpg",
            blurb: "Standard 2-inch single-shaker stile and rail. Familiar, grounded, and easy to spec next to almost any door style in the rest of the home." },
          { title: "Stone Pairing", img: "/assets/finishes/wsh-feature-3.jpg",
            blurb: "Works with calacatta marble, white quartz, soapstone, butcher block, and any of the darker stones. The neutral white never dictates the rest of the palette." }
        ],
        about: [
          "White single shaker is the most-ordered finish across the dealer network. A standard 2-inch shaker stile, painted maple in a warm soft white. Reads correctly in farmhouse, transitional, and modern rooms; pairs cleanly with quartz, marble, and natural stone counters.",
          "Both the plywood and the particle option use the same painted-maple front spec, the same soft-close hinges, and the same dovetailed drawer box. The carcass material is the only difference between the two."
        ],
        faq: [
          { q: "How is this different from White Slim Shaker?",
            a: "Same paint, same maple, same construction. The only difference is the stile width — 2 inches on the single shaker, 1.5 inches on the slim. Single shaker reads more traditional; slim reads more transitional." },
          { q: "Can I touch up nicks and scratches on site?",
            a: "Yes. A small touch-up bottle of the conversion-varnish lacquer ships with every kitchen order. For deeper damage, a replacement door front ships from stock the same week it's requested." },
          { q: "What counter tops pair best with white single shaker?",
            a: "Almost anything — calacatta marble, white quartz, soapstone, butcher block, and any of the darker stones. The neutral white doesn't dictate the rest of the palette." }
        ],
        products: BOARD_OPTIONS
      },
      "blue-shaker": {
        slug: "blue-shaker", title: "Blue Single Shaker", code: "BSS",
        img: "/assets/finishes/card-blue-shaker.jpg",
        cardImg: "/assets/finishes/card-blue-shaker.jpg",
        heroPhoto: "/assets/finishes/blue-shaker-hero.png",
        aboutImg: "/assets/finishes/blue-shaker-about.png",
        features: [
          { title: "Deep Navy", img: "/assets/finishes/bss-feature-1.png",
            blurb: "Painted maple in a deep navy that reads almost-black in low light and registers as navy under daylight. Holds its colour across morning, afternoon, and dusk." },
          { title: "Shaker Frame", img: "/assets/finishes/bss-feature-2.png",
            blurb: "Standard 2-inch single-shaker stile and rail, joined on the bench and pinned in the shop. The frame keeps the cabinetry grounded even when the colour pushes modern." },
          { title: "Hardware Pairing", img: "/assets/finishes/bss-feature-3.png",
            blurb: "Brass, antique brass, and polished chrome read best against the navy. Matte black sinks the cabinet into the wall in low light, which some rooms want." }
        ],
        blurb: "Painted maple single-shaker in a deep navy. Reads moody and modern; pair with brass, chrome, or blackened-steel hardware.",
        about: [
          "Blue single shaker is the moodier choice for kitchens that want to read modern without giving up the shaker frame. A deep navy painted on maple, the kind of color that holds up to natural light and reads almost-black in the evening.",
          "Looks particularly good as a perimeter color against a lighter island, or as a full run with stone counters and brass pulls. Five-year warranty on the joint, the finish, and the hardware on both the plywood and particle options."
        ],
        faq: [
          { q: "How dark is the navy in real light?",
            a: "Roughly Hale Navy in tone — deep enough to read almost-black at dusk, blue enough to register as navy in direct sunlight. A hand-painted sample swatch ships on request before the order goes in." },
          { q: "Should I run a full kitchen in navy, or just the island?",
            a: "Either works. Full perimeter reads moody and modern; island-only reads classic against a white or grey perimeter. Most dealer orders pair navy uppers with a white-painted base, or run navy as a feature island." },
          { q: "What hardware reads best with the navy?",
            a: "Brass and antique brass are the most-ordered pairing. Polished chrome works for a more contemporary read; matte black tends to sink the cabinet into the wall in low light." }
        ],
        products: BOARD_OPTIONS
      },
      "grey-shaker": {
        slug: "grey-shaker", title: "Grey Single Shaker", code: "GSS",
        img: "/assets/finishes/card-grey-shaker.jpg",
        cardImg: "/assets/finishes/card-grey-shaker.jpg",
        heroPhoto: "/assets/finishes/grey-shaker-hero.png",
        aboutImg: "/assets/finishes/grey-shaker-about.png",
        features: [
          { title: "Mid-Grey Tone", img: "/assets/finishes/gss-feature-1.png",
            blurb: "Painted maple in a balanced mid-grey. Reads as taupe in incandescent light and as cool charcoal under daylight, never fully cool or warm." },
          { title: "Single Shaker Frame", img: "/assets/finishes/gss-feature-2.png",
            blurb: "Standard 2-inch single-shaker stile and rail. The frame holds the line whether the room runs traditional, transitional, or modern." },
          { title: "Easy Pairings", img: "/assets/finishes/gss-feature-3.png",
            blurb: "Pairs with warm and cool stone counters, brass or chrome hardware, oak or walnut floors. The most flexible colour in the program for designers who want options." }
        ],
        about: [
          "Grey single shaker is the quieter alternative to white. A mid-grey painted on maple, neutral enough to read as taupe in warm light and as cool charcoal at dusk. The most flexible color in the program for designers who don't want to commit to a strong perimeter.",
          "Pairs with both warm-toned and cool-toned stone counters, and with both brass and chrome hardware. Construction and slide spec are identical to the rest of the line; both plywood and particle options carry the same warranty."
        ],
        faq: [
          { q: "Is the grey warm or cool?",
            a: "Mid-grey with a slight warm bias. Reads as taupe under incandescent light and as a cool charcoal under daylight. Not a true neutral, so designers tend to pair it with warm-toned brass or chrome rather than gold." },
          { q: "Will mid-grey date faster than white?",
            a: "Less than navy and less than the painted whites, in our experience. Mid-grey has been a stable kitchen colour for over a decade and shows no sign of dropping out of favour. It's the safest pick in the program if resale is on your mind." },
          { q: "Does grey hide fingerprints better than white?",
            a: "Yes, considerably. The mid-tone hides finger oils and minor smudging in a way white doesn't. The conversion-varnish topcoat is smudge-resistant on both colours." }
        ],
        products: BOARD_OPTIONS
      },
      "natural-wood": {
        slug: "natural-wood", title: "Natural Wood", code: "NTW",
        img: "/assets/finishes/card-natural-wood.jpg",
        cardImg: "/assets/finishes/card-natural-wood.jpg",
        heroPhoto: "/assets/finishes/natural-wood-hero.jpg",
        aboutImg: "/assets/finishes/natural-wood-about.png",
        features: [
          { title: "Quarter-Sawn Oak", img: "/assets/finishes/ntw-feature-1.jpg",
            blurb: "Quarter-sawn white oak doors and drawer fronts. The grain runs straight, the figure stays consistent, and the wood holds its shape better than flat-sawn through humidity swings." },
          { title: "Clear Oil Finish", img: "/assets/finishes/ntw-feature-2.jpg",
            blurb: "No stain, no tinted topcoat. A hand-rubbed penetrating oil that lets the wood read tobacco-warm and deepens through the first year of use as oxidation sets in." },
          { title: "Reads as Millwork", img: "/assets/finishes/ntw-feature-3.jpg",
            blurb: "For rooms that want the cabinetry to read like millwork rather than painted casework. Pairs with stone, plaster walls, and natural-fiber rugs without competing." }
        ],
        about: [
          "Natural wood is quarter-sawn white oak shaker, finished with a clear oil only. No stain, no tinted topcoat. The grain runs straight, the wood reads tobacco-warm, and the surface deepens slowly through the first year of use as oxidation sets in.",
          "For rooms that want the cabinetry to read like millwork rather than painted casework. Plywood option carries a hardwood interior to match the front; particle option uses a paper-foil interior with the same hardwood face frame."
        ],
        faq: [
          { q: "Will the wood darken over time?",
            a: "Yes. Quarter-sawn white oak deepens through the first year of use, especially in rooms that get direct sun. The change is gradual; the wood reads tobacco-warmer at six months and a touch warmer still at a year." },
          { q: "Is the clear oil finish durable?",
            a: "Yes. The oil is a hand-rubbed, hard-curing penetrating oil rather than a surface film. Drink rings and small marks can be re-oiled rather than refinished, which means the cabinetry actually improves with age." },
          { q: "Can I add a stain later if I change my mind?",
            a: "Yes. White oak takes stain well. A sample oak panel ships with three or four stain options on request, so you can test the colour before committing." }
        ],
        products: BOARD_OPTIONS
      },
      "smoked-oak": {
        slug: "smoked-oak", title: "Smoked Oak", code: "MSO",
        img: "/assets/finishes/card-smoked-oak.jpg",
        cardImg: "/assets/finishes/card-smoked-oak.jpg",
        heroPhoto: "/assets/finishes/smoked-oak-hero.jpg",
        aboutImg: "/assets/finishes/smoked-oak-about.jpg",
        features: [
          { title: "Fumed, Not Stained", img: "/assets/finishes/mso-feature-1.jpg",
            blurb: "Quarter-sawn oak fumed with ammonia to draw the tannins out and darken the wood from the inside. The grain still reads through, the way a surface stain never lets it." },
          { title: "Between Natural and Ebonized", img: "/assets/finishes/mso-feature-2.jpg",
            blurb: "Darker than natural oak, lighter than full ebonized. A useful middle tone for rooms with a lot of stone, plaster, or dark trim that need a wood note without going black." },
          { title: "Brass and Blackened Steel", img: "/assets/finishes/mso-feature-3.jpg",
            blurb: "Brass, antique brass, and blackened steel all read clean against the smoked surface. Matte black tends to wash out at this depth; polished nickel works but reads cool." }
        ],
        about: [
          "Smoked oak is quarter-sawn oak fumed with ammonia to draw the tannins out and darken the wood from the inside, rather than with a surface stain. The result is darker than natural oak and lighter than ebonized; the grain still reads through.",
          "A natural pair with brass or blackened-steel hardware, and a strong cabinet color for rooms that have a lot of stone or tile. Sealed with a hand-applied conversion-varnish topcoat; both plywood and particle options ship with the same finish."
        ],
        faq: [
          { q: "Is the smoked oak actually smoked, or just stained?",
            a: "Fumed with ammonia, not smoked or stained. The ammonia draws tannins out of the wood, darkening it from the inside rather than coating the surface. The grain reads through; a stain would obscure it." },
          { q: "Will smoked oak look different five years from now?",
            a: "Some gradual lightening over a long timescale (years, not months). The conversion-varnish topcoat slows oxidation; even after a decade the colour stays close to what we shipped." },
          { q: "What hardware works best with smoked oak?",
            a: "Brass, blackened steel, and antique brass. Matte black reads slightly washed-out against the smoked wood; polished nickel works but reads cooler than most rooms want." }
        ],
        products: BOARD_OPTIONS
      },
      "high-gloss-white": {
        slug: "high-gloss-white", title: "White High Gloss", code: "HGW",
        img: "/assets/finishes/card-high-gloss-white.jpg",
        cardImg: "/assets/finishes/card-high-gloss-white.jpg",
        heroPhoto: "/assets/finishes/high-gloss-white-hero.jpg",
        aboutImg: "/assets/finishes/high-gloss-white-about.jpg",
        features: [
          { title: "Slab Fronts", img: "/assets/finishes/hgw-feature-1.jpg",
            blurb: "No shaker frame, no door panel, no profile. A flat slab face with concealed soft-close hinges and integrated push-to-open hardware on the drawer fronts." },
          { title: "Polyester Topcoat", img: "/assets/finishes/hgw-feature-2.jpg",
            blurb: "High-gloss polyester finish cured to a hardness closer to car paint than to kitchen paint. Reflective on the surface, durable in daily use." },
          { title: "Wipes Clean", img: "/assets/finishes/hgw-feature-3.jpg",
            blurb: "Fingerprints come right off with a microfibre cloth. No grain or shaker corner to dust around, so the visible surface stays clean between deep cleans." }
        ],
        about: [
          "White high gloss is the slab line. Polyester-coated MDF fronts in a high-gloss white, reflective and modern, sized for European-style kitchens. There's no shaker frame or grain to dust around, and fingerprints come right off the surface.",
          "Carcass options carry concealed soft-close hinges and integrated push-to-open hardware on the drawer fronts. Plywood option uses a furniture-grade ply box; particle option uses a high-density particleboard box with the same gloss finish across the run."
        ],
        faq: [
          { q: "How do I clean the gloss surface?",
            a: "Microfibre cloth and warm water. Avoid abrasive cleaners and any solvent stronger than mild dish soap. The polyester topcoat resists fingerprints far better than painted shaker; smudges come right off." },
          { q: "Does the high gloss scratch easily?",
            a: "It's harder than most painted finishes — cured polyester is closer to car-paint hardness than to kitchen-paint hardness. Surface scratches do show in direct light, but the panel itself is more durable than it looks." },
          { q: "Can I order slab fronts in a non-white gloss?",
            a: "Yes, on special order. A small set of high-gloss greys and navy are available with a six-to-eight-week lead time. Talk to your dealer; we'll quote against the specific colour." }
        ],
        products: BOARD_OPTIONS
      }
    },
    products: [
      { slug: "accessories", title: "Kitchen Accessories",
        img: "/assets/finishes/card-accessories.png",
        cardImg: "/assets/finishes/card-accessories.png",
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
  CATALOG, CABINET_FAMILIES, ACCESSORY_ROWS, BOARD_OPTIONS, FINISH_FEATURES,
  getCategory, getSection, getProduct, listCategories, listSections
});
