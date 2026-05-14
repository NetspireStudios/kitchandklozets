# Kitch & Klozets

Production site for [kitchandklozets.com](https://kitchandklozets.com) — a custom cabinetmaker in Sudbury, Ontario.

Static HTML + shared JSX components, generated from a single catalog data file. 134 indexable routes. Hosted on **Firebase Hosting** with a Cloud Function relaying contact form leads through Resend.

---

## Architecture at a glance

```
┌─ visitor ─────────────────────────────────────────────────────┐
│                                                                │
│  kitchandklozets.com/...                                       │
│       │                                                        │
│       ▼                                                        │
│  Firebase Hosting (CDN)  ←──  static HTML/CSS/JSX served       │
│       │                                                        │
│       ├──  React + Babel (CDN)  +  /data.jsx /catalog.jsx ...  │
│       │       └─ render Nav, layouts, ContactForm              │
│       │                                                        │
│       └──  POST /api/contact                                   │
│                  │                                              │
│                  ▼  (rewrite)                                  │
│            Cloud Function `submitContact`  (Gen 2, us-east1)   │
│                  ├──  Firestore `contacts/{id}`  (archive)     │
│                  └──  Resend  →  sales@kitchandklozets.com     │
└────────────────────────────────────────────────────────────────┘
```

Two important calls out:

1. **JSX is compiled in the browser** today via `@babel/standalone`. That's a ~415 KB extra payload on every page load. It works but is the biggest remaining perf gap. Migration path is documented in [Roadmap](#roadmap).
2. **The catalog is generated**, not hand-written. Edit one data file (`catalog-data.jsx`), run one command (`npm run generate`), and 128 HTML files + `sitemap.xml` rebuild in <1 second.

---

## Directory layout

```
.
├── home.html · about.html · contact.html · faq.html        ← 5 standalone pages
│   projects.html  + 404.html
├── products/index.html                                     ← master catalog menu
│
├── <category>/index.html                                   ← 8 category pages
│   <category>/<section>/index.html                         ← 40 section pages
│   <category>/<section>/<product>/index.html               ← 80 product pages
│
├── data.jsx           ← CONFIG, IMG, WOODS, SERVICES, STATS, WORKSHOP,
│                        PINS, TESTIMONIALS, NAV_LINKS
├── catalog-data.jsx   ← CATALOG (8 cat × 5 sec × 2 prod = 80 product entries)
│
├── utils.jsx          ← useReveal, Counter, Img, useMouseParallax, useScrolled,
│                        useScrollLock
├── top.jsx            ← Nav, MobileDrawer, Hero, CabinetOverlay
├── middle.jsx         ← WoodLibrary, Services, ByTheBench (home sections)
├── bottom.jsx         ← Workshop, MapGallery, Testimonials, FAQ, CTA, Footer,
│                        FAQ_ITEMS
├── catalog.jsx        ← Breadcrumbs, CategoryLayout, SectionLayout, ProductLayout,
│                        ProductCard, CatalogProductCard, ProductFilters,
│                        CategoryTabs, MegaMenu, ContactForm, ProductsStrip,
│                        productAttrs (heuristic), flattenProducts
│
├── styles.css         ← single design system + all component CSS
├── assets/logo.png    ← K&K monogram (favicon, nav, footer)
│
├── scripts/
│   └── generate-catalog-pages.js  ← reads CATALOG, writes 128 HTML files + sitemap.xml
│
├── functions/         ← Cloud Function: submitContact (Resend + Firestore)
│   ├── index.js
│   ├── package.json
│   └── .gitignore
│
├── _wireframes/       ← original design exploration (royal/minimal/craftsman/mobile)
│                        kept as reference; excluded from hosting + robots
│
├── firebase.json      ← hosting + functions + firestore config
├── firestore.rules    ← contacts collection is server-only
├── vercel.json        ← preserved for fallback hosting
├── robots.txt · sitemap.xml
└── FIREBASE_SETUP.md  ← step-by-step migration guide
```

---

## Conventions

### Single source of truth: `CONFIG` (data.jsx)

Business identity lives in one place:

```js
window.CONFIG.contact.email        // "sales@kitchandklozets.com"
window.CONFIG.contact.emailMailto  // "mailto:sales@kitchandklozets.com"
window.CONFIG.address.city         // "Sudbury"
window.CONFIG.hours.summary        // "Open 7 days a week, 9am to 5pm"
window.CONFIG.serviceArea          // ["Sudbury", ...]
```

When you change a phone or address, change it here. Older hand-coded literals in some HTML schemas haven't been swapped yet — incremental cleanup.

### Global components are exposed via `window`

Each `.jsx` file ends with `Object.assign(window, { ComponentA, ComponentB, ... })`. Pre-build there is no module system, so global namespace is the contract. Names are component-cased and unique.

### Catalog data shape (catalog-data.jsx)

```js
CATALOG = {
  "<category-slug>": {
    slug, title, short, blurb, keywords,
    sections: {
      "<section-slug>": {
        slug, title, blurb,
        products: [
          { slug, title, blurb /*, attrs?: { style, color, finish, material, layout } */ }
        ]
      }
    }
  }
}
```

`attrs` is optional. When missing, `productAttrs(cat, sec, product)` in [catalog.jsx](catalog.jsx) infers `style / color / finish / material / layout` from the product's text. When real product data lands with explicit `attrs`, the inference is bypassed.

### URL structure (Firebase cleanUrls)

| URL | File |
|---|---|
| `/`                                   | `home.html` (via root rewrite) |
| `/products`                           | `products/index.html` |
| `/<category>`                         | `<category>/index.html` |
| `/<category>/<section>`               | `<category>/<section>/index.html` |
| `/<category>/<section>/<product>`     | `<category>/<section>/<product>/index.html` |
| `/about` · `/projects` · `/faq` · `/contact` | corresponding `.html` at root |

No `.html` extensions in the bar. Trailing slashes redirect off. 404s land on `/404.html`.

---

## Workflows

### Add a product to an existing section

1. Open `catalog-data.jsx` and add a product to the section's `products` array:
   ```js
   { slug: "walnut-island-galley-kitchen",
     title: "Walnut Island Galley Kitchen",
     blurb: "Solid walnut shaker fronts with a soapstone-topped island and …" }
   ```
2. `npm run generate`
3. `npm run deploy`

A new URL `/kitchens/shaker/walnut-island-galley-kitchen` exists. Sitemap updates.

### Add a whole new section to a category

1. Add a new section key to that category's `sections` object in `catalog-data.jsx`.
2. Run generate + deploy. Five new HTML files appear (1 section index + 2 products + the section auto-shows in the mega-menu and on the category page).

### Change contact info

Edit `CONFIG` at the top of `data.jsx`. Some legacy templates still have inline literals; those will need a follow-up sweep when convenient.

### Run locally before deploy

```bash
npm run preview    # Firebase emulators: http://localhost:5000
```

Catalog pages will render with all filters/mega-menu working. The contact form will fail (no `/api/contact` until functions are deployed) unless you also run the emulators with `--only hosting,functions,firestore`.

### Deploy

```bash
npm run generate
npm run deploy        # hosting + firestore (use this until you're on Blaze)
# or
npm run deploy:all    # adds functions; needs Blaze + RESEND_API_KEY secret
```

---

## Roadmap

In order of leverage:

| Item | Status | Notes |
|---|---|---|
| **Pre-compile JSX → bundle** | Planned | Replace `babel/standalone` (~415 KB) with an `esbuild`-built `dist/app.js` (~60 KB). Single biggest perf win remaining. Per-page Apps become small `dist/pages/<page>.js` files. |
| **Resend + Firebase Function** | Wired, not deployed | Function code is in `functions/index.js`. Needs Blaze plan + `firebase functions:secrets:set RESEND_API_KEY`. See [FIREBASE_SETUP.md](FIREBASE_SETUP.md). |
| **Real product images** | Pending content | Today every thumbnail is a tinted gradient. Drop files into `assets/products/<slug>.jpg`, wire `img` field into `catalog-data.jsx`, regenerate. |
| **Explicit product `attrs`** | Pending | `productAttrs()` heuristic is ~85% accurate. When real data lands, add `attrs: { style, color, finish, material, layout? }` per product. |
| **Sweep remaining hardcoded phone/email/address** | Pending | Some HTML schemas and a couple of inline pieces still hardcode contact info. Centralize all reads through `window.CONFIG`. |
| **Accessibility audit** | Pending | Keyboard-only nav of the mega-menu, drawer focus trap, `prefers-reduced-motion` honored across reveal animations. Skip-link is in place. |
| **Performance budget** | Pending | Lighthouse pass on three representative URLs (home, category, product) and set TTI/CLS budgets in `vercel.json` / Firebase headers. |

---

## What's where (quick reference)

| Task | File |
|---|---|
| Change brand/contact | `data.jsx → CONFIG` |
| Change a section/product blurb | `catalog-data.jsx` |
| Change navigation items | `data.jsx → NAV_LINKS` |
| Change home page section order | `home.html → <App>` |
| Change page header (nav) | `top.jsx → Nav, MobileDrawer` |
| Change footer | `bottom.jsx → Footer` |
| Change category/section/product layouts | `catalog.jsx → CategoryLayout / SectionLayout / ProductLayout` |
| Change filter facets | `catalog.jsx → STYLE_OPTIONS / COLOR_OPTIONS / ...` |
| Change contact form behavior | `catalog.jsx → ContactForm` + `functions/index.js → submitContact` |
| Add/edit FAQs | `bottom.jsx → FAQ_ITEMS` (home) and `faq.html → FAQ_ALL` (dedicated page) |
| Cache headers / rewrites | `firebase.json` (prod), `vercel.json` (fallback) |
| Firestore security | `firestore.rules` |

---

## Tech stack

- **Hosting**: Firebase Hosting (cleanUrls + rewrites)
- **Forms backend**: Firebase Cloud Functions (Gen 2, Node 20, us-east1) + Resend
- **Data store**: Firestore (single `contacts` collection, server-only access)
- **Rendering**: React 18.3 (UMD from unpkg) + Babel-standalone for client-side JSX
- **Fonts**: Space Grotesk + Caveat (Google Fonts via @import)
- **CSS**: Single `styles.css`, design-token-driven via CSS custom properties
- **Runtime**: Node 20 for the generator and the Cloud Function
- **No build step today** — JSX is transformed in the browser. Pre-compile is on the roadmap.

---

© 2026 Kitch & Klozets · custom cabinetmakers · Sudbury, ON
