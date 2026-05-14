// scripts/generate-catalog-pages.js
//
// Reads catalog-data.jsx and emits an HTML file per category/section/product.
// Run from the repo root:   node scripts/generate-catalog-pages.js
//
// Resulting URL structure (with vercel.json cleanUrls):
//   /<cat>                       -> <cat>/index.html             (CategoryLayout)
//   /<cat>/<sec>                 -> <cat>/<sec>/index.html       (SectionLayout)
//   /<cat>/<sec>/<prod>          -> <cat>/<sec>/<prod>/index.html (ProductLayout)

const fs   = require("node:fs");
const path = require("node:path");
const vm   = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const BASE = "https://kitchandklozets.com";

// ─── load CATALOG ───────────────────────────────────────────────────────────
const src = fs.readFileSync(path.join(ROOT, "catalog-data.jsx"), "utf8");
const ctx = { window: {}, Object };
vm.runInNewContext(src, ctx);
const CATALOG = ctx.window.CATALOG;
if (!CATALOG) {
  console.error("Failed to load CATALOG from catalog-data.jsx");
  process.exit(1);
}

// ─── shared head fragment (same scripts/CSS/icon on every catalog page) ─────
const HEAD_COMMON = ({ title, description, canonical, keywords, ogTitle, ogDescription }) => `<meta charset="UTF-8"/>
<title>${title}</title>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<meta name="description" content="${description}"/>
${keywords ? `<meta name="keywords" content="${keywords}"/>\n` : ""}<meta name="theme-color" content="#3B2A1E"/>
<meta name="color-scheme" content="light"/>
<meta name="robots" content="index, follow, max-image-preview:large"/>
<meta name="geo.region" content="US-MA"/>
<meta name="geo.placename" content="Watertown"/>
<link rel="canonical" href="${canonical}"/>

<meta property="og:type" content="website"/>
<meta property="og:site_name" content="Kitch &amp; Klozets"/>
<meta property="og:title" content="${ogTitle || title}"/>
<meta property="og:description" content="${ogDescription || description}"/>
<meta property="og:url" content="${canonical}"/>
<meta property="og:locale" content="en_US"/>
<meta property="og:image" content="${BASE}/assets/logo.png"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${ogTitle || title}"/>
<meta name="twitter:description" content="${ogDescription || description}"/>
<meta name="twitter:image" content="${BASE}/assets/logo.png"/>

<link rel="icon" type="image/png" href="/assets/logo.png"/>
<link rel="apple-touch-icon" href="/assets/logo.png"/>

<link rel="preconnect" href="https://images.unsplash.com" crossorigin/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link rel="preconnect" href="https://unpkg.com" crossorigin/>

<link rel="stylesheet" href="/styles.css"/>

<script src="https://unpkg.com/react@18.3.1/umd/react.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js" crossorigin="anonymous"></script>
<script src="https://unpkg.com/@babel/standalone@7.29.0/babel.min.js" crossorigin="anonymous"></script>`;

const BODY_SCRIPTS = `<script type="text/babel" src="/data.jsx"></script>
<script type="text/babel" src="/catalog-data.jsx"></script>
<script type="text/babel" src="/utils.jsx"></script>
<script type="text/babel" src="/top.jsx"></script>
<script type="text/babel" src="/middle.jsx"></script>
<script type="text/babel" src="/bottom.jsx"></script>
<script type="text/babel" src="/catalog.jsx"></script>`;

const SKIP_LINK = `<a href="#top" class="skip-link" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">Skip to content</a>`;

const APP_BOILERPLATE = (renderInner) => `function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  React.useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in-view"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("[data-reveal]:not(.in-view)").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <>
      <Nav onMenu={() => setDrawerOpen(true)}/>
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}/>
      <main id="top">
        ${renderInner}
        <CTA/>
      </main>
      <Footer/>
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);`;

const wrap = (head, schemaBlocks, body) => `<!DOCTYPE html>
<html lang="en">
<head>
${head}
${schemaBlocks.join("\n\n")}
</head>
<body style="background-color: rgb(250, 238, 223)">
${SKIP_LINK}
<div id="root"></div>

${BODY_SCRIPTS}

<script type="text/babel" data-presets="react">
${body}
</script>
</body>
</html>
`;

// ─── escape helper for json-ld strings ─────────────────────────────────────
const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');

// ─── breadcrumb json-ld helper ─────────────────────────────────────────────
const breadcrumbSchema = (items) => `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((it, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": it.name,
    ...(it.url ? { "item": it.url } : {})
  }))
}, null, 2)}
</script>`;

// ─── category page ─────────────────────────────────────────────────────────
function buildCategoryPage(catSlug) {
  const cat = CATALOG[catSlug];
  const canonical = `${BASE}/${catSlug}`;
  const title = `${cat.title} | Kitch & Klozets · Watertown MA`;
  const desc  = `${cat.short} ${cat.blurb}`.replace(/\s+/g, " ").slice(0, 158);

  const head = HEAD_COMMON({
    title: title.replace(/&/g, "&amp;"),
    description: desc.replace(/"/g, "&quot;"),
    canonical,
    keywords: cat.keywords || ""
  });

  // Schema item list uses sections for hierarchical categories, products for flat.
  const itemList = cat.sections
    ? Object.values(cat.sections).map((sec, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": sec.title,
        "url": `${BASE}/${catSlug}/${sec.slug}`
      }))
    : (cat.products || []).map((prod, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": prod.title,
        "url": `${BASE}/${catSlug}/${prod.slug}`
      }));

  const collectionSchema = `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": canonical,
  "name": cat.title,
  "description": cat.blurb,
  "mainEntity": { "@type": "ItemList", "itemListElement": itemList },
  "isPartOf": { "@id": `${BASE}/#business` }
}, null, 2)}
</script>`;

  const bc = breadcrumbSchema([
    { name: "Home", url: `${BASE}/` },
    { name: cat.title }
  ]);

  const inner = `<CategoryLayout slug="${catSlug}"/>`;
  return wrap(head, [collectionSchema, bc], APP_BOILERPLATE(inner));
}

// ─── section page ──────────────────────────────────────────────────────────
function buildSectionPage(catSlug, secSlug) {
  const cat = CATALOG[catSlug];
  const sec = cat.sections[secSlug];
  const canonical = `${BASE}/${catSlug}/${secSlug}`;
  const title = `${sec.title} · ${cat.title} | Kitch & Klozets`;
  const desc  = sec.blurb.replace(/\s+/g, " ").slice(0, 158);

  const head = HEAD_COMMON({
    title: title.replace(/&/g, "&amp;"),
    description: desc.replace(/"/g, "&quot;"),
    canonical,
    keywords: cat.keywords || ""
  });

  const productList = sec.products.map((p, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": p.title,
    "url": `${BASE}/${catSlug}/${secSlug}/${p.slug}`
  }));

  const collectionSchema = `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": canonical,
  "name": sec.title,
  "description": sec.blurb,
  "isPartOf": { "@id": `${BASE}/${catSlug}` },
  "mainEntity": { "@type": "ItemList", "itemListElement": productList }
}, null, 2)}
</script>`;

  const bc = breadcrumbSchema([
    { name: "Home", url: `${BASE}/` },
    { name: cat.title, url: `${BASE}/${catSlug}` },
    { name: sec.title }
  ]);

  const inner = `<SectionLayout category="${catSlug}" section="${secSlug}"/>`;
  return wrap(head, [collectionSchema, bc], APP_BOILERPLATE(inner));
}

// ─── product page (handles flat and hierarchical) ──────────────────────────
function buildProductPage(catSlug, secSlug, prodSlug) {
  const cat = CATALOG[catSlug];
  let prod, secTitle, urlBase;
  if (secSlug) {
    const sec = cat.sections[secSlug];
    prod = sec.products.find(p => p.slug === prodSlug);
    secTitle = sec.title;
    urlBase = `${BASE}/${catSlug}/${secSlug}`;
  } else {
    prod = cat.products.find(p => p.slug === prodSlug);
    secTitle = null;
    urlBase = `${BASE}/${catSlug}`;
  }
  const canonical = `${urlBase}/${prodSlug}`;
  const title = `${prod.title} | Kitch & Klozets`;
  const desc  = prod.blurb.replace(/\s+/g, " ").slice(0, 158);

  const head = HEAD_COMMON({
    title: title.replace(/&/g, "&amp;"),
    description: desc.replace(/"/g, "&quot;"),
    canonical,
    keywords: cat.keywords || ""
  });

  const productSchema = `<script type="application/ld+json">
${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": prod.title,
  "description": prod.blurb,
  "url": canonical,
  "image": `${BASE}/assets/logo.png`,
  "category": cat.title,
  "brand": { "@type": "Brand", "name": "Kitch & Klozets" },
  "manufacturer": { "@id": `${BASE}/#business` },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "url": canonical,
    "seller": { "@id": `${BASE}/#business` }
  }
}, null, 2)}
</script>`;

  const bc = breadcrumbSchema([
    { name: "Home",      url: `${BASE}/` },
    { name: cat.title,   url: `${BASE}/${catSlug}` },
    ...(secTitle ? [{ name: secTitle, url: urlBase }] : []),
    { name: prod.title }
  ]);

  const secAttr = secSlug ? ` section="${secSlug}"` : "";
  const inner = `<ProductLayout category="${catSlug}"${secAttr} product="${prodSlug}"/>`;
  return wrap(head, [productSchema, bc], APP_BOILERPLATE(inner));
}

// ─── write helper ──────────────────────────────────────────────────────────
function writeFile(relPath, content) {
  const full = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content);
  console.log("  wrote", relPath);
}

// ─── generate everything ───────────────────────────────────────────────────
let cats = 0, secs = 0, prods = 0, flatCats = 0;

Object.keys(CATALOG).forEach((catSlug) => {
  const cat = CATALOG[catSlug];
  writeFile(`${catSlug}/index.html`, buildCategoryPage(catSlug));
  cats++;

  if (cat.sections) {
    Object.keys(cat.sections).forEach((secSlug) => {
      writeFile(`${catSlug}/${secSlug}/index.html`, buildSectionPage(catSlug, secSlug));
      secs++;
      cat.sections[secSlug].products.forEach((prod) => {
        writeFile(`${catSlug}/${secSlug}/${prod.slug}/index.html`, buildProductPage(catSlug, secSlug, prod.slug));
        prods++;
      });
    });
  }

  if (cat.products) {
    flatCats++;
    cat.products.forEach((prod) => {
      writeFile(`${catSlug}/${prod.slug}/index.html`, buildProductPage(catSlug, null, prod.slug));
      prods++;
    });
  }
});

console.log(`\nDone. ${cats} categories, ${secs} sections, ${prods} products = ${cats + secs + prods} files written.`);

// ─── sitemap.xml ───────────────────────────────────────────────────────────
const TODAY = new Date().toISOString().slice(0, 10);
const urls = [];
const pushUrl = (loc, priority, changefreq) => urls.push({ loc, priority, changefreq });

pushUrl(`${BASE}/`,         "1.0", "monthly");
pushUrl(`${BASE}/about`,    "0.7", "monthly");
pushUrl(`${BASE}/advice`,   "0.6", "monthly");
pushUrl(`${BASE}/projects`, "0.5", "monthly");
pushUrl(`${BASE}/faq`,      "0.7", "monthly");
pushUrl(`${BASE}/contact`,  "0.8", "monthly");

Object.keys(CATALOG).forEach((catSlug) => {
  const cat = CATALOG[catSlug];
  pushUrl(`${BASE}/${catSlug}`, "0.9", "monthly");
  if (cat.sections) {
    Object.keys(cat.sections).forEach((secSlug) => {
      pushUrl(`${BASE}/${catSlug}/${secSlug}`, "0.7", "monthly");
      cat.sections[secSlug].products.forEach((prod) => {
        pushUrl(`${BASE}/${catSlug}/${secSlug}/${prod.slug}`, "0.6", "monthly");
      });
    });
  }
  if (cat.products) {
    cat.products.forEach((prod) => {
      pushUrl(`${BASE}/${catSlug}/${prod.slug}`, "0.6", "monthly");
    });
  }
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap-0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);
console.log(`Wrote sitemap.xml with ${urls.length} URLs.`);
