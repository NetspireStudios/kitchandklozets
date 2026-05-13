// bottom.jsx — Workshop, Map, Testimonials, CTA, Footer

function Workshop() {
  const sectionRef = React.useRef(null);
  const itemRefs = React.useRef([]);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const items = itemRefs.current.filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in-view");
      });
      const passed = items.filter(el => el.classList.contains("in-view")).length;
      setProgress((passed / items.length) * 100);
    }, { threshold: 0.4, rootMargin: "0px 0px -10% 0px" });
    items.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className="workshop" id="workshop" ref={sectionRef}>
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">The process</span>
            <h2 className="display">From the workshop.</h2>
          </div>
          <p className="hint">How a typical 4-month project lays out, week by week.</p>
        </div>

        <div className="timeline" style={{ "--prog": `${progress}%` }}>
          {WORKSHOP.map((s, i) => (
            <div key={i}
              ref={(el) => itemRefs.current[i] = el}
              className="tl-item"
              data-reveal>
              <div className="tl-dot">{i + 1}</div>
              <div className="tl-week">{s.w}</div>
              <div className="tl-body">
                <h3 className="display">{s.t}</h3>
                <p>{s.d}</p>
              </div>
              <div className="ph tl-thumb" style={{ background: `linear-gradient(160deg, ${s.tint}, #2A1F15)` }}>
                <Img src={s.img} alt={`${s.t} stage of a custom cabinetry project by Kitch and Klozets`} w={600}/>
                <CabinetOverlay opacity={0.28}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapGallery() {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setActive(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="map-section" id="map">
      <div className="container">
        <div className="section-head map-head" data-reveal>
          <div>
            <span className="eyebrow">Where we've worked</span>
            <h2 className="display">340 rooms across<br/>New England.</h2>
          </div>
          <div className="legend">
            <span className="swatch"><span className="pin-mark"/>Completed project</span>
            <span className="swatch"><span className="shop-mark">K</span>Our workshop</span>
          </div>
        </div>

        <div className="map-frame" ref={ref} data-reveal="scale">
          <svg className="map-bg" width="100%" height="100%" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="topo" patternUnits="userSpaceOnUse" width="60" height="60">
                <path d="M 0 30 Q 30 12 60 30 Q 30 48 0 30" stroke="var(--walnut-soft)" strokeWidth="0.35" fill="none" opacity="0.2"/>
              </pattern>
              <linearGradient id="coast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7E8B6F" stopOpacity="0.16"/>
                <stop offset="1" stopColor="#7E8B6F" stopOpacity="0.08"/>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#topo)"/>
            <path d="M 1000 540 L 1200 540 L 1200 0 L 1000 0 Q 990 240 1000 540 Z" fill="url(#coast)"/>
            <path d="M 880 30 Q 920 140 940 240 Q 960 340 980 420 Q 990 480 1000 540"
                  stroke="#7E8B6F" strokeWidth="2.4" fill="none" opacity="0.75"/>
            <line x1="60" y1="240" x2="1080" y2="280" stroke="var(--walnut-soft)" strokeWidth="0.7" opacity="0.22" strokeDasharray="6 4"/>
            <line x1="400" y1="40" x2="540" y2="520" stroke="var(--walnut-soft)" strokeWidth="0.7" opacity="0.22" strokeDasharray="6 4"/>
            <line x1="80" y1="60" x2="1100" y2="500" stroke="var(--walnut-soft)" strokeWidth="0.6" opacity="0.15"/>
            <g transform="translate(1100,80)" opacity="0.55">
              <circle r="22" fill="none" stroke="var(--walnut)" strokeWidth="0.8"/>
              <text textAnchor="middle" y="-26" fontSize="10" fill="var(--walnut)" letterSpacing="2">N</text>
              <line x1="0" y1="-14" x2="0" y2="14" stroke="var(--clay)" strokeWidth="1.4"/>
              <polygon points="0,-14 -3,-8 3,-8" fill="var(--clay)"/>
            </g>
          </svg>

          {PINS.map((p, i) => (
            <button key={i}
              className={`map-pin ${p.kind === "shop" ? "shop" : ""} ${active ? "dropped" : ""}`}
              style={{ left: `${p.x}%`, top: `${p.y}%`, "--d": `${i * 70}ms` }}>
              {p.kind === "shop" ? (
                <div className="pin-shop">K</div>
              ) : (
                <div className="pin-body">
                  <div className="pin-circ"/>
                  <div className="pin-tail"/>
                </div>
              )}
              <div className="pin-tip">
                <strong>{p.t}</strong>
                <span>{p.s}</span>
              </div>
            </button>
          ))}

          <div className="map-legend-overlay">
            <b>Greater Boston</b>
            <div style={{ color: "var(--muted)", marginTop: 4 }}>9 of 340 projects shown.</div>
            <a className="more link-underline">See all on the map →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="polaroids" id="testimonials">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 className="display">The fridge<br/>scrapbook.</h2>
          <p className="hint">
            Notes and photos clients have sent us back, sometimes years after install.
          </p>
        </div>

        <div className="polaroid-row">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="testimonial" data-reveal style={{ "--rot": `${t.rot}deg`, "--delay": `${i * 80}ms` }}>
              <span className="tape"/>
              <div className="ph" style={{ background: `linear-gradient(160deg, ${["#3B2A1E","#7E8B6F","#B85A3F"][i]}, #1c130a)` }}>
                <Img src={t.img} alt={`Custom kitchen and closet project for ${t.n} in ${t.loc}`} w={500}/>
                <CabinetOverlay opacity={0.32}/>
              </div>
              <div className="testimonial-body">
                <p className="quote">"{t.q}"</p>
                <div className="testimonial-foot">
                  <b>{t.n}, {t.loc}</b>
                  <span>{t.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "How much do custom kitchen cabinets cost in Massachusetts?",
    a: "A custom solid-hardwood kitchen from us typically runs $45,000–$120,000 depending on size, wood species, and hardware. A free in-home consultation gives you a real number against your floor plan; we send a fixed quote within two weeks, not a moving estimate."
  },
  {
    q: "How long does a custom kitchen or closet project take?",
    a: "About four months end to end. One week of site measurement, two to three weeks of hand-drawn elevations, one week of material picks, eight to ten weeks on the bench in our Watertown shop, and two weeks of on-site install. We quote a date and hold it."
  },
  {
    q: "What's the difference between custom, semi-custom, and stock cabinets?",
    a: "Stock cabinets are pre-built in fixed sizes with stapled MDF carcasses. Semi-custom lets you pick a finish but still uses modular boxes. Custom (our entire product) is drawn to your exact room, joined in solid hardwood, and finished by hand in our shop. Different category, different lifespan."
  },
  {
    q: "What wood species and door styles do you offer?",
    a: "Six FSC-certified hardwoods, all sourced within 300 miles of the shop: black walnut, rift white oak, cherry, hard maple, ebonized ash, and reclaimed chestnut. Door styles include shaker, inset, beaded inset, and slab. Finishes are hand-applied; no stains or fillers."
  },
  {
    q: "Do you handle the full remodel or just build the cabinetry?",
    a: "We build, finish, and install all the cabinetry, vanities, built-ins, and millwork. For full remodels involving electrical, plumbing, flooring, or stonework, we coordinate with a short list of licensed Greater Boston contractors we've worked with for years."
  }
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Common questions</span>
            <h2 className="display">What homeowners ask us first.</h2>
          </div>
          <p className="hint">
            Pricing, lead time, materials, scope. Short answers; longer ones happen at the kitchen table.
          </p>
        </div>

        <div className="faq-list" data-reveal>
          {FAQ_ITEMS.map((item, i) => (
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
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-card" data-reveal="scale">
        <svg className="grain-bg" viewBox="0 0 1200 280" preserveAspectRatio="none">
          {Array.from({ length: 18 }).map((_, i) => (
            <path key={i} d={`M 0 ${8 + i * 16} Q 600 ${4 + i * 16 + (i % 2 ? 3 : -3)} 1200 ${10 + i * 16}`}
                  stroke="#FAF4E8" strokeWidth="0.6" fill="none"/>
          ))}
        </svg>
        <div className="cta-grid">
          <div>
            <h2 className="display">
              Bring us a wishlist,<br/>we'll bring the bench.
            </h2>
            <p>
              Pick up the phone. In-home consultations are free, usually 90 minutes, and end with a yellow pad full of notes and three material samples.
            </p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-walnut" href="tel:+15483331419">Call (548) 333-1419</a>
            <a className="btn btn-cream" href="mailto:sales@kitchandklozets.com">sales@kitchandklozets.com</a>
            <div className="cta-call">Sales hours · Open 7 days a week, 9am–5pm</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <div className="mark"><img src="assets/logo.png" alt=""/></div>
              <div className="display name">Kitch &amp; Klozets</div>
            </div>
            <div className="footer-about">
              84 Pleasant Street, Watertown MA 02472<br/>
              Sales hours: open 7 days a week, 9am–5pm.
            </div>
          </div>
          {[
            ["Build with us", ["What we build", "Wood library", "Get a quote", "Financing"]],
            ["The workshop",  ["About us", "The cabinetmakers", "Our process", "Press"]],
            ["Stay in touch", [
              { label: "(548) 333-1419",          href: "tel:+15483331419" },
              { label: "sales@kitchandklozets.com", href: "mailto:sales@kitchandklozets.com" },
              { label: "kitchandklozets.com",     href: "https://kitchandklozets.com" },
              { label: "Instagram",               href: "#" },
            ]],
          ].map(([t, links]) => (
            <div key={t} className="footer-col">
              <h4>{t}</h4>
              {links.map(l => (
                typeof l === "string"
                  ? <a key={l}>{l}</a>
                  : <a key={l.label} href={l.href}>{l.label}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© 2026 Kitch &amp; Klozets · Custom cabinetmakers · Watertown, MA</span>
          <span>10-year warranty on every joint we cut</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Workshop, MapGallery, Testimonials, FAQ, CTA, Footer });
