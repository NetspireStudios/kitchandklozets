// catalog.jsx — shared layout components for category, section, and product pages.
// Each catalog HTML file picks one of: CategoryLayout, SectionLayout, ProductLayout.

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

function CategoryLayout({ slug }) {
  const cat = CATALOG[slug];
  if (!cat) return <p className="container">Category not found.</p>;
  const sections = Object.values(cat.sections);
  return (
    <section className="catalog-page category-page">
      <div className="container">
        <Breadcrumbs items={[
          { label: "Home", href: "/" },
          { label: cat.title }
        ]}/>

        <header className="cat-hero" data-reveal>
          <span className="eyebrow">{cat.short}</span>
          <h1 className="display">{cat.title}</h1>
          <p className="cat-lede">{cat.blurb}</p>
        </header>

        <div className="cat-sections-grid">
          {sections.map((sec, i) => (
            <a key={sec.slug} href={`/${slug}/${sec.slug}`}
               className="cat-section-card" data-reveal
               style={{ "--delay": `${i * 60}ms` }}>
              <div className="cat-section-thumb ph"
                   style={{ background: `linear-gradient(160deg, ${["#3B2A1E","#5B4434","#7a3a23","#7E8B6F","#26211c"][i % 5]}, #1c130a)` }}>
                <CabinetOverlay opacity={0.28}/>
              </div>
              <div className="cat-section-meta">
                <span className="cat-section-num">0{i + 1}</span>
                <span className="cat-section-arrow">→</span>
              </div>
              <h3 className="display">{sec.title}</h3>
              <p>{sec.blurb}</p>
            </a>
          ))}
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

Object.assign(window, {
  Breadcrumbs,
  CategoryLayout, SectionLayout, ProductLayout,
  ProductCard, ContactForm, MegaMenu
});
