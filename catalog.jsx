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

  let style = "Transitional";
  if (catSlug === "whole-house" && secSlug === "modern")     style = "Modern";
  else if (catSlug === "whole-house" && secSlug === "classical") style = "Traditional";
  else if (catSlug === "whole-house" && secSlug === "industrial") style = "Modern";
  else if (catSlug === "whole-house" && secSlug === "regional")   style = "Traditional";
  else if (catSlug === "kitchens"    && secSlug === "modern")     style = "Modern";
  else if (catSlug === "kitchens"    && secSlug === "shaker")     style = "Transitional";
  else if (catSlug === "kitchens"    && secSlug === "inset")      style = "Traditional";
  else if (has("modern") || has("slab") || has("flush") || has("floating") || has("loft")) style = "Modern";
  else if (has("classical") || has("raised") || has("beaded") || has("farmhouse") || has("shingle") || has("traditional") || has("victorian") || has("colonial")) style = "Traditional";

  let color = "Wood Tones";
  if      (has("ebonized") || has("blackened") || has("inky") || has("black painted") || has("india-ink")) color = "Black";
  else if (has("white oak"))                              color = "Wood Tones";
  else if (has("painted white") || has("painted maple") || has("cream") || has("bone") || has("soft white")) color = "White";
  else if (has("walnut"))                                 color = "Brown";
  else if (has("cherry") || has("chestnut"))              color = "Brown";
  else if (has("ash") && has("ebonized"))                 color = "Black";
  else if (has("gray") || has("grey") || has("charcoal")) color = "Gray";
  else if (has("sage") || has("green"))                   color = "Green";
  else if (has("beige") || has("tobacco"))                color = "Beige";
  else if (has("brass") || has("bronze") || has("steel") || has("aluminum") || has("metallic")) color = "Metallic";

  let finish = "Matte";
  if (has("lacquer") || has("glaz") || has("gloss") || has("polished")) finish = "Glossy";

  let material = "Solid Wood";
  if      (catSlug === "aluminum")            material = "Stainless Steel";
  else if (catSlug === "wpc-doors")           material = "Wood Veneer";
  else if (secSlug === "wpc-interior")        material = "Wood Veneer";
  else if (has("veneer"))                     material = "Wood Veneer";
  else if (has("stone") || has("quartz") || has("marble") || has("soapstone")) material = "Sintered Stone";
  else if (has("teak"))                       material = "Solid Wood";
  else if (catSlug === "rta-cabinets")        material = "Solid Wood";

  const attrs = { style, color, finish, material };

  if (catSlug === "kitchens") {
    let layout = "Irregular & Mix";
    if      (has("u-shape") || has("u shape"))                   layout = "U-shape";
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
  return out;
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
  return (
    <div className="filters-bar" role="region" aria-label="Filter products">
      <div className="filter-count" aria-live="polite">
        <b>Filter ({count})</b>
        {(value.style || value.color || value.finish || value.layout || value.material || value.q) && (
          <button type="button" className="filter-reset"
            onClick={() => onChange({ style: "", color: "", finish: "", layout: "", material: "", q: "" })}>
            Reset ×
          </button>
        )}
      </div>
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
    <a href={`/${product.catSlug}/${product.secSlug}/${product.slug}`}
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
    </a>
  );
}

function CategoryLayout({ slug }) {
  const cat = CATALOG[slug];
  if (!cat) return <p className="container">Category not found.</p>;

  const all = React.useMemo(() => flattenProducts(slug), [slug]);
  const [filters, setFilters] = React.useState({ style: "", color: "", finish: "", layout: "", material: "", q: "" });

  const filtered = React.useMemo(() => {
    const q = filters.q.trim().toLowerCase();
    return all.filter(p => {
      if (filters.style    && p.attrs.style    !== filters.style)    return false;
      if (filters.color    && p.attrs.color    !== filters.color)    return false;
      if (filters.finish   && p.attrs.finish   !== filters.finish)   return false;
      if (filters.layout   && p.attrs.layout   !== filters.layout)   return false;
      if (filters.material && p.attrs.material !== filters.material) return false;
      if (q && !(p.title.toLowerCase().includes(q) || p.blurb.toLowerCase().includes(q) || p.secTitle.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [all, filters]);

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
            <p>No products match these filters. <button type="button" className="link-underline"
              onClick={() => setFilters({ style: "", color: "", finish: "", layout: "", material: "", q: "" })}>Reset filters →</button></p>
          </div>
        ) : (
          <div className="catalog-products-grid">
            {filtered.map((p, i) => <CatalogProductCard key={`${p.catSlug}-${p.secSlug}-${p.slug}`} product={p} index={i}/>)}
          </div>
        )}

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
    <a href={`/${cat}/${sec}/${product.slug}`} className="product-card" data-reveal
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
    </a>
  );
}

function ProductLayout({ category, section, product }) {
  const cat = CATALOG[category];
  const sec = cat?.sections?.[section];
  const p = sec?.products?.find(x => x.slug === product);
  if (!p) return <p className="container">Product not found.</p>;
  const sibling = sec.products.find(x => x.slug !== product);
  return (
    <section className="catalog-page product-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: cat.title, href: `/${category}` },
          { label: sec.title, href: `/${category}/${section}` },
          { label: p.title }
        ]}/>

        <div className="product-hero-grid" data-reveal>
          <div className="product-hero-img ph"
               style={{ background: "linear-gradient(160deg, #3B2A1E, #1c130a)" }}>
            <CabinetOverlay opacity={0.3}/>
          </div>
          <div className="product-hero-body">
            <span className="eyebrow">{sec.title}</span>
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

        <div className="product-form-section" id="inquire" data-reveal>
          <div className="product-form-head">
            <span className="eyebrow">Inquire · no obligation</span>
            <h2 className="display">Tell us about your project.</h2>
            <p>Reply within one business day. The first conversation usually lasts ten minutes; the in-home consult is about ninety.</p>
          </div>
          <ContactForm product={p.title} category={cat.title}/>
        </div>

        {sibling && (
          <div className="product-sibling" data-reveal>
            <a href={`/${category}/${section}/${sibling.slug}`} className="link-underline">
              Also in {sec.title}: {sibling.title} →
            </a>
          </div>
        )}
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

          {/* Middle: sections of the currently-active category. */}
          <div className="mm-col mm-col-secs" aria-label={activeCat ? `${activeCat.title} sections` : ""}>
            {activeCat && Object.values(activeCat.sections).map(sec => (
              <a key={sec.slug} href={`/${active}/${sec.slug}`} className="mm-sec" role="menuitem">
                {sec.title}
              </a>
            ))}
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
  // picks: [{ cat: "kitchens", sec: "shaker", slug: "painted-shaker-island-kitchen" }, ...]
  const items = picks
    .map(p => {
      const product = CATALOG[p.cat]?.sections?.[p.sec]?.products?.find(x => x.slug === p.slug);
      if (!product) return null;
      return { ...product, catSlug: p.cat, secSlug: p.sec, catTitle: CATALOG[p.cat].title, secTitle: CATALOG[p.cat].sections[p.sec].title };
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
               href={`/${p.catSlug}/${p.secSlug}/${p.slug}`}
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
  productAttrs, flattenProducts,
  STYLE_OPTIONS, COLOR_OPTIONS, FINISH_OPTIONS, LAYOUT_OPTIONS, MATERIAL_OPTIONS
});
