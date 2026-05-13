// catalog.jsx — shared layout components for category, section, and product pages.
// Each catalog HTML file picks one of: CategoryLayout, SectionLayout, ProductLayout.

// ── product attributes (style, color, finish, layout, material) ──────────
// Inferred from the product's category, section, and text. Lets us filter
// without bloating catalog-data.jsx. When real product data lands, swap to
// explicit attrs per product entry.
const STYLE_OPTIONS    = ["Modern", "Traditional", "Transitional"];
const COLOR_OPTIONS    = ["Black", "White", "Gray", "Beige", "Brown", "Wood Tones", "Metallic", "Green"];
const FINISH_OPTIONS   = ["Matte", "Glossy"];
const LAYOUT_OPTIONS   = ["L-shape", "U-shape", "Single-Wall", "Galley", "With Island", "Irregular & Mix"];
const MATERIAL_OPTIONS = ["Solid Wood", "Wood Veneer", "Lacquer", "Thermofoil / PVC", "Stainless Steel", "Sintered Stone", "Others"];

function productAttrs(catSlug, secSlug, product) {
  const text = `${product.title} ${product.blurb}`.toLowerCase();
  const has = (w) => text.includes(w);

  // Style — most specific to least.
  let style = "Transitional";
  if      (catSlug === "whole-house"  && secSlug === "modern")     style = "Modern";
  else if (catSlug === "whole-house"  && secSlug === "classical")  style = "Traditional";
  else if (catSlug === "whole-house"  && secSlug === "industrial") style = "Modern";
  else if (catSlug === "whole-house"  && secSlug === "regional")   style = "Traditional";
  else if (catSlug === "kitchens"     && secSlug === "modern")     style = "Modern";
  else if (catSlug === "kitchens"     && secSlug === "shaker")     style = "Transitional";
  else if (catSlug === "bathroom"     && secSlug === "modern-vanities")       style = "Modern";
  else if (catSlug === "bathroom"     && secSlug === "traditional-vanities")  style = "Traditional";
  else if (catSlug === "bathroom"     && secSlug === "transitional-vanities") style = "Transitional";
  else if (catSlug === "aluminum")    style = "Modern";
  else if (has("modern") || has("slab") || has("flush") || has("floating") || has("loft")) style = "Modern";
  else if (has("classical") || has("raised") || has("beaded") || has("farmhouse") || has("shingle") || has("traditional") || has("victorian") || has("colonial")) style = "Traditional";

  // Color — section signal first, then text scan.
  let color = "Wood Tones";
  if      (catSlug === "kitchens" && secSlug === "white")  color = "White";
  else if (catSlug === "kitchens" && secSlug === "black")  color = "Black";
  else if (catSlug === "kitchens" && secSlug === "grey")   color = "Gray";
  else if (has("ebonized") || has("blackened") || has("inky") || has("matte black") || has("black painted") || has("india-ink")) color = "Black";
  else if (has("painted white") || has("painted maple") || has("cream") || has("bone") || has("soft white") || has("chalk-white")) color = "White";
  else if (has("walnut") || has("cherry") || has("chestnut")) color = "Brown";
  else if (has("gray") || has("grey") || has("charcoal") || has("fog"))      color = "Gray";
  else if (has("sage") || has("green"))                   color = "Green";
  else if (has("beige") || has("tobacco"))                color = "Beige";
  else if (has("brass") || has("bronze") || has("steel") || has("aluminum") || has("metallic")) color = "Metallic";
  else if (has("white oak") || has("oak"))                color = "Wood Tones";

  // Finish.
  let finish = "Matte";
  if (has("lacquer") || has("glaz") || has("gloss") || has("polished")) finish = "Glossy";

  // Material.
  let material = "Solid Wood";
  if      (catSlug === "aluminum")            material = "Stainless Steel";
  else if (catSlug === "wpc-doors")           material = "Wood Veneer";
  else if (secSlug === "wpc-interior")        material = "Wood Veneer";
  else if (has("veneer"))                     material = "Wood Veneer";
  else if (has("quartz") || has("marble") || has("soapstone") || has("sintered")) material = "Sintered Stone";
  else if (has("teak"))                       material = "Solid Wood";
  else if (catSlug === "rta-cabinets")        material = "Solid Wood";

  const attrs = { style, color, finish, material };

  if (catSlug === "kitchens") {
    let layout = "Irregular & Mix";
    if      (catSlug === "kitchens" && secSlug === "u-shape")   layout = "U-shape";
    else if (catSlug === "kitchens" && secSlug === "l-shape")   layout = "L-shape";
    else if (catSlug === "kitchens" && secSlug === "one-wall")  layout = "Single-Wall";
    else if (has("u-shape") || has("u shape"))                   layout = "U-shape";
    else if (has("l-shape") || has("l shape"))                   layout = "L-shape";
    else if (has("one-wall") || has("single-wall") || has("single wall")) layout = "Single-Wall";
    else if (has("galley"))                                      layout = "Galley";
    else if (has("island"))                                      layout = "With Island";
    attrs.layout = layout;
  }
  return attrs;
}

// Flatten the CATALOG into a list of products with their context for filtering.
function flattenProducts(catSlug) {
  const out = [];
  const cats = catSlug ? [CATALOG[catSlug]] : Object.values(CATALOG);
  for (const cat of cats) {
    if (!cat) continue;
    // Hierarchical: category has sections, each section has products.
    if (cat.sections) {
      for (const sec of Object.values(cat.sections)) {
        for (const prod of sec.products) {
          out.push({
            ...prod,
            catSlug: cat.slug, catTitle: cat.title,
            secSlug: sec.slug, secTitle: sec.title,
            attrs: productAttrs(cat.slug, sec.slug, prod),
          });
        }
      }
    }
    // Flat: category has products directly, no section level.
    if (cat.products) {
      for (const prod of cat.products) {
        out.push({
          ...prod,
          catSlug: cat.slug, catTitle: cat.title,
          secSlug: null, secTitle: cat.title,
          attrs: productAttrs(cat.slug, null, prod),
        });
      }
    }
  }
  return out;
}

// Build a product URL respecting flat vs hierarchical categories.
function productPath(catSlug, secSlug, prodSlug) {
  return secSlug ? `/${catSlug}/${secSlug}/${prodSlug}` : `/${catSlug}/${prodSlug}`;
}

// Build a section URL (only meaningful for hierarchical categories).
function sectionPath(catSlug, secSlug) {
  return secSlug ? `/${catSlug}/${secSlug}` : `/${catSlug}`;
}

function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={i}>
              {isLast
                ? <span aria-current="page">{it.label}</span>
                : <><a href={it.href}>{it.label}</a><span className="bc-sep">/</span></>
              }
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function CategoryTabs({ active }) {
  const cats = listCategories();
  return (
    <div className="cat-tabs" role="tablist" aria-label="Product categories">
      <div className="cat-tabs-inner">
        {cats.map(cat => (
          <a key={cat.slug} href={`/${cat.slug}`}
             className={`cat-tab ${active === cat.slug ? "active" : ""}`}
             role="tab" aria-selected={active === cat.slug}>
            {cat.title}
          </a>
        ))}
      </div>
    </div>
  );
}

function ProductFilters({ showLayout, value, onChange, count }) {
  const update = (key) => (e) => onChange({ ...value, [key]: e.target.value });
  const likes = useLikes();
  const likedCount = Object.keys(likes).length;
  const anyActive = value.style || value.color || value.finish || value.layout || value.material || value.q || value.favoritesOnly;
  return (
    <div className="filters-bar" role="region" aria-label="Filter products">
      <div className="filter-count" aria-live="polite">
        <b>Filter ({count})</b>
        {anyActive && (
          <button type="button" className="filter-reset"
            onClick={() => onChange(EMPTY_FILTERS)}>
            Reset ×
          </button>
        )}
      </div>
      <button type="button"
        className={`filter-fav ${value.favoritesOnly ? "active" : ""}`}
        onClick={() => onChange({ ...value, favoritesOnly: !value.favoritesOnly })}
        aria-pressed={!!value.favoritesOnly}
        title={likedCount === 0 ? "No favorites yet — tap the heart on any product to add it" : `Show your ${likedCount} favorite${likedCount === 1 ? "" : "s"}`}>
        <svg viewBox="0 0 24 24" width="14" height="14"
             fill={value.favoritesOnly ? "currentColor" : "none"}
             stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        Favorites{likedCount ? ` (${likedCount})` : ""}
      </button>
      <select className="filter-select" value={value.style} onChange={update("style")} aria-label="Filter by style">
        <option value="">By Style</option>
        {STYLE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <select className="filter-select" value={value.color} onChange={update("color")} aria-label="Filter by color">
        <option value="">By Color</option>
        {COLOR_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <select className="filter-select" value={value.finish} onChange={update("finish")} aria-label="Filter by finish effect">
        <option value="">By Finish Effect</option>
        {FINISH_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      {showLayout && (
        <select className="filter-select" value={value.layout} onChange={update("layout")} aria-label="Filter by layout">
          <option value="">By Layout</option>
          {LAYOUT_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
      )}
      <select className="filter-select" value={value.material} onChange={update("material")} aria-label="Filter by material">
        <option value="">By Material</option>
        {MATERIAL_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
      <div className="filter-search">
        <svg width="14" height="14" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" strokeWidth="1.6"/>
          <line x1="13" y1="13" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>
        <input type="search" placeholder="Search the catalog…"
          value={value.q} onChange={update("q")} aria-label="Search products"/>
      </div>
    </div>
  );
}

function CatalogProductCard({ product, index }) {
  const colors = ["#3B2A1E","#7a3a23","#5B4434","#7E8B6F","#26211c","#B85A3F"];
  return (
    <a href={productPath(product.catSlug, product.secSlug, product.slug)}
       className="product-card" data-reveal
       style={{ "--delay": `${(index % 8) * 50}ms` }}>
      <div className="product-thumb ph"
           style={{ background: `linear-gradient(160deg, ${colors[index % colors.length]}, #1c130a)` }}>
        <CabinetOverlay opacity={0.28}/>
      </div>
      <div className="product-meta">
        <span className="product-num">{product.secTitle}</span>
        <span className="product-arrow">→</span>
      </div>
      <h3 className="display">{product.title}</h3>
      <p>{product.blurb}</p>
      <LikeButton productKey={`${product.catSlug}/${product.secSlug || ""}/${product.slug}`} variant="card"/>
    </a>
  );
}

const EMPTY_FILTERS = { style: "", color: "", finish: "", layout: "", material: "", q: "", favoritesOnly: false };

// ── per-device favorites (localStorage) ─────────────────────────────────
// Each device tracks the products it has liked. Cross-tab sync via "storage";
// in-tab sync via a custom event so multiple LikeButton instances stay in
// sync without re-reading localStorage on every render.
const LIKES_KEY   = "kk_likes_v1";
const LIKES_EVENT = "kk_likes_changed";

function readLikes() {
  try { return JSON.parse(localStorage.getItem(LIKES_KEY) || "{}"); }
  catch (_) { return {}; }
}
function writeLikes(map) {
  try {
    localStorage.setItem(LIKES_KEY, JSON.stringify(map));
    window.dispatchEvent(new Event(LIKES_EVENT));
  } catch (_) { /* private mode / quota: ignore */ }
}
function toggleLikeFor(key) {
  const map = readLikes();
  if (map[key]) delete map[key];
  else map[key] = Date.now();
  writeLikes(map);
  return !!map[key];
}
function useLikes() {
  const [likes, setLikes] = React.useState({});
  React.useEffect(() => {
    const read = () => setLikes(readLikes());
    read();
    window.addEventListener(LIKES_EVENT, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(LIKES_EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);
  return likes;
}
function productLikeKey(catSlug, secSlug, prodSlug) {
  return `${catSlug}/${secSlug || "_"}/${prodSlug}`;
}

function LikeButton({ productKey, variant = "default" }) {
  const likes = useLikes();
  const liked = !!likes[productKey];
  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleLikeFor(productKey);
  };
  return (
    <button type="button"
      className={`like-btn ${liked ? "liked" : ""} like-btn-${variant}`}
      onClick={onClick}
      aria-label={liked ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={liked}>
      <svg viewBox="0 0 24 24" width="18" height="18"
           fill={liked ? "currentColor" : "none"}
           stroke="currentColor" strokeWidth="2"
           strokeLinejoin="round" strokeLinecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    </button>
  );
}

function CategoryLayout({ slug }) {
  // Hooks must run unconditionally; do all of them before any early return.
  const cat = CATALOG[slug];
  const all = React.useMemo(() => (cat ? flattenProducts(slug) : []), [slug, cat]);
  const [filters, setFilters] = React.useState(EMPTY_FILTERS);
  const likes = useLikes();
  const filtered = React.useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return all.filter(p => {
      if (filters.style    && p.attrs.style    !== filters.style)    return false;
      if (filters.color    && p.attrs.color    !== filters.color)    return false;
      if (filters.finish   && p.attrs.finish   !== filters.finish)   return false;
      if (filters.layout   && p.attrs.layout   !== filters.layout)   return false;
      if (filters.material && p.attrs.material !== filters.material) return false;
      if (q && !(p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q) || (p.secTitle || "").toLowerCase().includes(q))) return false;
      if (filters.favoritesOnly && !likes[productLikeKey(p.catSlug, p.secSlug, p.slug)]) return false;
      return true;
    });
  }, [all, filters, likes]);

  if (!cat) return <p className="container">Category not found.</p>;

  const hasSections = !!cat.sections;

  return (
    <section className="catalog-page category-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: cat.title }
        ]}/>

        <header className="cat-hero" data-reveal>
          <span className="eyebrow">{cat.short}</span>
          <h1 className="display">{cat.title}</h1>
          <p className="cat-lede">{cat.blurb}</p>
        </header>
      </div>

      <CategoryTabs active={slug}/>

      <div className="container">
        <ProductFilters showLayout={slug === "kitchens"}
          value={filters} onChange={setFilters} count={filtered.length}/>

        {filtered.length === 0 ? (
          <div className="no-results">
            <p>{filters.favoritesOnly
                ? "No favorites in this category yet. Tap the heart on any product to add it."
                : "No products match these filters."} <button type="button" className="link-underline"
              onClick={() => setFilters(EMPTY_FILTERS)}>Reset filters →</button></p>
          </div>
        ) : (
          <div className="catalog-products-grid">
            {filtered.map((p, i) => <CatalogProductCard key={`${p.catSlug}-${p.secSlug}-${p.slug}`} product={p} index={i}/>)}
          </div>
        )}

        {hasSections && (
          <div className="cat-sections-shortlist" data-reveal>
            <span className="eyebrow">Browse by section</span>
            <div className="cat-sections-shortlist-row">
              {Object.values(cat.sections).map(sec => (
                <a key={sec.slug} href={`/${slug}/${sec.slug}`} className="link-underline">
                  {sec.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SectionLayout({ category, section }) {
  const cat = CATALOG[category];
  const sec = cat?.sections?.[section];
  if (!sec) return <p className="container">Section not found.</p>;
  const others = Object.values(cat.sections).filter(s => s.slug !== section);
  return (
    <section className="catalog-page section-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: cat.title, href: `/${category}` },
          { label: sec.title }
        ]}/>

        <header className="sec-hero" data-reveal>
          <span className="eyebrow">{cat.title}</span>
          <h1 className="display">{sec.title}</h1>
          <p className="sec-lede">{sec.blurb}</p>
        </header>

        <div className="sec-products-grid">
          {sec.products.map((p, i) => (
            <ProductCard key={p.slug}
              cat={category} sec={section} product={p} index={i}/>
          ))}
        </div>

        <div className="sec-explorer" data-reveal>
          <span className="eyebrow">Other in {cat.title}</span>
          <div className="sec-explorer-row">
            {others.map(s => (
              <a key={s.slug} href={`/${category}/${s.slug}`} className="link-underline">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ cat, sec, product, index }) {
  const colors = ["#3B2A1E","#7a3a23","#5B4434","#7E8B6F","#26211c","#B85A3F"];
  return (
    <a href={productPath(cat, sec, product.slug)} className="product-card" data-reveal
       style={{ "--delay": `${index * 80}ms` }}>
      <div className="product-thumb ph"
           style={{ background: `linear-gradient(160deg, ${colors[index % colors.length]}, #1c130a)` }}>
        <CabinetOverlay opacity={0.28}/>
      </div>
      <div className="product-meta">
        <span className="product-num">0{index + 1}</span>
        <span className="product-arrow">→</span>
      </div>
      <h3 className="display">{product.title}</h3>
      <p>{product.blurb}</p>
      <LikeButton productKey={productLikeKey(cat, sec, product.slug)} variant="card"/>
    </a>
  );
}

function ProductLayout({ category, section, product }) {
  const cat = CATALOG[category];
  // section may be null/undefined for flat categories (wpc-doors, rta-cabinets).
  const sec = section ? cat?.sections?.[section] : null;
  const productList = sec ? sec.products : (cat?.products || []);
  const p = productList.find(x => x.slug === product);

  if (!cat || !p) return <p className="container">Product not found.</p>;

  const sectionTitle = sec ? sec.title : cat.title;
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: cat.title, href: `/${category}` },
    ...(sec ? [{ label: sec.title, href: `/${category}/${section}` }] : []),
    { label: p.title }
  ];

  return (
    <section className="catalog-page product-page">
      <div className="container">
        <Breadcrumbs items={breadcrumbItems}/>

        <div className="product-hero-grid" data-reveal>
          <div className="product-hero-img ph"
               style={{ background: "linear-gradient(160deg, #3B2A1E, #1c130a)" }}>
            <CabinetOverlay opacity={0.3}/>
            <LikeButton productKey={productLikeKey(category, section, product)} variant="hero"/>
          </div>
          <div className="product-hero-body">
            <span className="eyebrow">{sectionTitle}</span>
            <h1 className="display product-title">{p.title}</h1>
            <p className="product-blurb">{p.blurb}</p>
            <div className="product-cta-row">
              <a className="btn btn-walnut" href="#inquire">
                Inquire about this <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="tel:+15483331419">
                Call (548) 333-1419
              </a>
            </div>
          </div>
        </div>

        <div className="product-detail-grid" data-reveal>
          <div>
            <h2 className="display">What to expect</h2>
            <ul className="product-detail-list">
              <li>Hand-built in our Watertown, MA shop.</li>
              <li>Solid hardwood throughout; no MDF carcass.</li>
              <li>10-year warranty on every joint we cut.</li>
              <li>Free in-home consultation; fixed quote within two weeks.</li>
              <li>Delivered, installed, and adjusted after a month of real use.</li>
            </ul>
          </div>
          <div>
            <h2 className="display">Process</h2>
            <ol className="product-process-list">
              <li><b>Site visit.</b> Coffee, measurements, your wishlist on a yellow pad.</li>
              <li><b>Drawings.</b> Hand-drawn elevations reviewed at your table.</li>
              <li><b>Materials.</b> You hold the wood, stone, and hardware in your hand.</li>
              <li><b>Build.</b> Eight to ten weeks on the bench. Photographed weekly.</li>
              <li><b>Install.</b> Two weeks on site. Adjustments a month later.</li>
            </ol>
          </div>
        </div>

        <ProductFAQ/>

        <div className="product-form-section" id="inquire" data-reveal>
          <div className="product-form-head">
            <span className="eyebrow">Inquire · no obligation</span>
            <h2 className="display">Tell us about your project.</h2>
            <p>Reply within one business day. The first conversation usually lasts ten minutes; the in-home consult is about ninety.</p>
          </div>
          <ContactForm product={p.title} category={cat.title}/>
        </div>

        <SimilarProducts catSlug={category} secSlug={section || null} currentSlug={product}/>
      </div>
    </section>
  );
}

// Short FAQ shown on every product page. Original copy.
const PRODUCT_FAQ = [
  { q: "How long does a build like this take?",
    a: "About four months end to end. One week to measure, two to three weeks to draw, one week of material picks, eight to ten weeks on the bench, and two weeks of on-site install. Adjustments are scheduled a month after the room sees real use." },
  { q: "What ballpark does this cost?",
    a: "We don't publish a list price because every project is drawn to your room and your material picks. A free in-home consultation gives you a real number against your floor plan; the fixed quote arrives within two weeks." },
  { q: "Do you install or just deliver?",
    a: "We design, build, finish, and install in-house. For broader remodels involving electrical, plumbing, flooring, or stonework, we coordinate with a short list of licensed Greater Boston contractors we've worked with for years." },
  { q: "Can the materials be swapped?",
    a: "Yes. The page shows a representative finish, but every species, hardware, and stone pick is up to you. Six FSC-certified hardwoods, four door styles, and an open hardware catalog." }
];

function ProductFAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="product-faq faq" data-reveal>
      <header className="product-faq-head">
        <span className="eyebrow">Common questions</span>
        <h2 className="display">Before you ask.</h2>
      </header>
      <div className="faq-list">
        {PRODUCT_FAQ.map((item, i) => (
          <details key={i} className="faq-item" open={open === i}
            onToggle={(e) => { if (e.currentTarget.open) setOpen(i); }}>
            <summary>
              <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="faq-q">{item.q}</span>
              <span className="faq-mark">＋</span>
            </summary>
            <div className="faq-a">{item.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

function SimilarProducts({ catSlug, secSlug, currentSlug }) {
  const all = React.useMemo(() => flattenProducts(catSlug), [catSlug]);
  const candidates = all.filter(p => p.slug !== currentSlug);
  // Prefer same section first, then anything else in the category.
  const inSection  = secSlug ? candidates.filter(p => p.secSlug === secSlug) : [];
  const elsewhere  = candidates.filter(p => !inSection.includes(p));
  const picks = [...inSection, ...elsewhere].slice(0, 3);
  if (picks.length === 0) return null;
  const cat = CATALOG[catSlug];
  return (
    <section className="similar-products" data-reveal>
      <header className="similar-head">
        <div>
          <span className="eyebrow">You might also like</span>
          <h2 className="display">More in {cat.title}.</h2>
        </div>
        <a href={`/${catSlug}`} className="link-underline">See all {cat.title} →</a>
      </header>
      <div className="similar-grid">
        {picks.map((p, i) => <CatalogProductCard key={`${p.catSlug}-${p.secSlug}-${p.slug}`} product={p} index={i}/>)}
      </div>
    </section>
  );
}

function ContactForm({ product, category }) {
  const [state, setState] = React.useState({ name: "", email: "", phone: "", message: "", company: "" });
  const [sent, setSent]   = React.useState(false);
  const [busy, setBusy]   = React.useState(false);
  const [err,  setErr]    = React.useState(null);

  const update = (k) => (e) => setState({ ...state, [k]: e.target.value });

  const endpoint = (typeof window !== "undefined" && window.CONTACT_ENDPOINT) || "/api/contact";

  const onSubmit = async (e) => {
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      const r = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, product, category })
      });
      if (!r.ok) {
        let msg = "Submission failed.";
        try { const j = await r.json(); if (j && j.error) msg = j.error; } catch (_) {}
        throw new Error(msg);
      }
      setSent(true);
    } catch (e2) {
      setErr(e2.message + " Please call (548) 333-1419 or email sales@kitchandklozets.com.");
    } finally {
      setBusy(false);
    }
  };

  if (sent) {
    return (
      <div className="contact-form-thanks">
        <h3 className="display">Thanks. We'll be in touch.</h3>
        <p>We received your inquiry about <b>{product}</b>. Expect a reply within one business day from sales@kitchandklozets.com or by phone at (548) 333-1419.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <input type="hidden" name="product" value={product || ""}/>
      <input type="hidden" name="category" value={category || ""}/>
      {/* Honeypot: invisible to users, bots fill it. Server drops these submissions. */}
      <input type="text" name="company" autoComplete="off" tabIndex="-1" aria-hidden="true"
        value={state.company} onChange={update("company")}
        style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}/>

      <div className="cf-row">
        <label className="cf-field">
          <span>Your name</span>
          <input required type="text" autoComplete="name"
            value={state.name} onChange={update("name")}/>
        </label>
        <label className="cf-field">
          <span>Email</span>
          <input required type="email" autoComplete="email"
            value={state.email} onChange={update("email")}/>
        </label>
      </div>

      <label className="cf-field">
        <span>Phone <small>(optional)</small></span>
        <input type="tel" autoComplete="tel"
          value={state.phone} onChange={update("phone")}/>
      </label>

      <label className="cf-field">
        <span>Tell us about the project</span>
        <textarea rows="4"
          placeholder="Room, rough timeline, ideas, anything we should know..."
          value={state.message} onChange={update("message")}/>
      </label>

      <div className="cf-submit-row">
        <button type="submit" className="btn btn-walnut" disabled={busy}>
          {busy ? "Sending..." : (<>Send inquiry <span className="arrow">→</span></>)}
        </button>
        <p className="cf-tiny">We never share your details. Replies come from sales@kitchandklozets.com.</p>
      </div>

      {err && <p className="cf-error">{err}</p>}
    </form>
  );
}

function MegaMenu({ open, onClose }) {
  const cats = listCategories();
  const [active, setActive] = React.useState(cats[0]?.slug || null);
  if (!open) return null;
  const activeCat = active ? CATALOG[active] : null;
  return (
    <div className="mega-menu" onMouseLeave={onClose} role="menu" aria-label="Products">
      <div className="mega-menu-inner">
        <div className="mega-menu-cols">

          {/* Left: 8 categories. Hover or focus reveals their sections on the right.
              Click navigates to the category page itself. */}
          <nav className="mm-col mm-col-cats" aria-label="Product categories">
            {cats.map(cat => (
              <a key={cat.slug} href={`/${cat.slug}`}
                 className={`mm-cat ${active === cat.slug ? "active" : ""}`}
                 onMouseEnter={() => setActive(cat.slug)}
                 onFocus={() => setActive(cat.slug)}
                 role="menuitem">
                <span className="mm-cat-title">{cat.title}</span>
                <span className="mm-cat-arrow" aria-hidden="true">›</span>
              </a>
            ))}
          </nav>

          {/* Middle: sections of the currently-active category. Flat
              categories (no sections) show their products directly. */}
          <div className="mm-col mm-col-secs" aria-label={activeCat ? `${activeCat.title} items` : ""}>
            {activeCat && activeCat.sections && Object.values(activeCat.sections).map(sec => (
              <a key={sec.slug} href={`/${active}/${sec.slug}`} className="mm-sec" role="menuitem">
                {sec.title}
              </a>
            ))}
            {activeCat && !activeCat.sections && activeCat.products && activeCat.products.slice(0, 8).map(prod => (
              <a key={prod.slug} href={`/${active}/${prod.slug}`} className="mm-sec" role="menuitem">
                {prod.title}
              </a>
            ))}
            {activeCat && !activeCat.sections && activeCat.products && activeCat.products.length > 8 && (
              <a href={`/${active}`} className="mm-sec mm-sec-more" role="menuitem">
                See all {activeCat.products.length} {activeCat.title} →
              </a>
            )}
          </div>

          {/* Right: small promo / quick action for the active category. */}
          <aside className="mm-col mm-col-promo" aria-hidden="true">
            {activeCat && (
              <div className="mm-promo">
                <span className="eyebrow">Browse the full set</span>
                <h4 className="display">{activeCat.title}</h4>
                <p>{activeCat.short}</p>
                <a className="link-underline mm-promo-cta" href={`/${active}`}>
                  See all in {activeCat.title} <span aria-hidden="true">→</span>
                </a>
              </div>
            )}
          </aside>

        </div>
      </div>
    </div>
  );
}

function ProductsStrip({ eyebrow, title, hint, picks, allHref }) {
  // picks: [{ cat, sec?, slug }, ...]  — sec is optional for flat categories
  const items = picks
    .map(p => {
      const cat = CATALOG[p.cat];
      if (!cat) return null;
      let product, secTitle;
      if (p.sec && cat.sections?.[p.sec]) {
        product = cat.sections[p.sec].products.find(x => x.slug === p.slug);
        secTitle = cat.sections[p.sec].title;
      } else if (cat.products) {
        product = cat.products.find(x => x.slug === p.slug);
        secTitle = cat.title;
      }
      if (!product) return null;
      return { ...product, catSlug: p.cat, secSlug: p.sec || null, catTitle: cat.title, secTitle };
    })
    .filter(Boolean);

  return (
    <section className="products-strip">
      <div className="container">
        <div className="products-strip-head" data-reveal>
          <div>
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="display">{title}</h2>
          </div>
          {hint && <p className="hint">{hint}</p>}
        </div>

        <div className="products-strip-row">
          {items.map((p, i) => (
            <a key={`${p.catSlug}-${p.slug}`}
               href={productPath(p.catSlug, p.secSlug, p.slug)}
               className="strip-card" data-reveal
               style={{ "--delay": `${i * 60}ms` }}>
              <div className="strip-thumb ph"
                   style={{ background: `linear-gradient(160deg, ${["#3B2A1E","#7a3a23","#5B4434","#7E8B6F","#26211c","#B85A3F"][i % 6]}, #1c130a)` }}>
                <CabinetOverlay opacity={0.28}/>
              </div>
              <div className="strip-card-meta">
                <span className="strip-cat">{p.catTitle}</span>
                <span className="strip-arrow">→</span>
              </div>
              <h3 className="display">{p.title}</h3>
              <p>{p.blurb}</p>
              <LikeButton productKey={productLikeKey(p.catSlug, p.secSlug, p.slug)} variant="card"/>
            </a>
          ))}
        </div>

        {allHref && (
          <div className="products-strip-foot" data-reveal>
            <a href={allHref} className="link-underline">See the full catalog →</a>
          </div>
        )}
      </div>
    </section>
  );
}

Object.assign(window, {
  Breadcrumbs,
  CategoryLayout, SectionLayout, ProductLayout,
  CategoryTabs, ProductFilters, CatalogProductCard,
  ProductCard, ContactForm, MegaMenu, ProductsStrip,
  LikeButton, SimilarProducts, ProductFAQ,
  useLikes, readLikes, writeLikes, toggleLikeFor, productLikeKey,
  productAttrs, flattenProducts, productPath, sectionPath,
  STYLE_OPTIONS, COLOR_OPTIONS, FINISH_OPTIONS, LAYOUT_OPTIONS, MATERIAL_OPTIONS, EMPTY_FILTERS
});
