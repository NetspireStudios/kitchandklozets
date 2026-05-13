// top.jsx — Nav, MobileDrawer, Hero

function Nav({ onMenu }) {
  const scrolled = useScrolled(8);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const closeMega = () => setMegaOpen(false);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeMega(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${megaOpen ? "mega-open" : ""}`}
            onMouseLeave={closeMega}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label="Kitch and Klozets, home">
          <img className="nav-mark" src="/assets/logo.png" alt="" width="64" height="64"/>
          <div className="nav-title">
            <b>Kitch &amp; Klozets</b>
            <small>Cabinetmakers · Watertown MA</small>
          </div>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            item.mega ? (
              <button key={item.label}
                className={`nav-mega-trigger link-underline ${megaOpen ? "active" : ""}`}
                onMouseEnter={() => setMegaOpen(true)}
                onFocus={() => setMegaOpen(true)}
                onClick={() => setMegaOpen(o => !o)}
                aria-haspopup="true" aria-expanded={megaOpen}>
                {item.label}
                <span className="nav-mega-caret" aria-hidden="true">▾</span>
              </button>
            ) : (
              <a key={item.label} href={item.href} className="link-underline"
                 onMouseEnter={closeMega}>{item.label}</a>
            )
          ))}
        </nav>
        <div className="nav-cta">
          <a href="tel:+15483331419" className="nav-phone">(548) 333-1419</a>
          <a href="/contact" className="btn btn-walnut">Get a quote</a>
          <button className="nav-toggle" onClick={onMenu} aria-label="Open menu">
            <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      <MegaMenu open={megaOpen} onClose={closeMega}/>
    </header>
  );
}

function MobileDrawer({ open, onClose }) {
  useScrollLock(open);
  const [prodExpanded, setProdExpanded] = React.useState(false);
  return (
    <>
      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={onClose}/>
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <a href="/" className="nav-logo" onClick={onClose}>
            <img className="nav-mark" src="/assets/logo.png" alt="" width="64" height="64"/>
            <div className="nav-title"><b>Kitch &amp; Klozets</b></div>
          </a>
          <button className="nav-toggle" onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="drawer-links">
          {NAV_LINKS.map((item) => (
            item.mega ? (
              <div key={item.label} className={`drawer-group ${prodExpanded ? "open" : ""}`}>
                <button className="drawer-group-trigger"
                  onClick={() => setProdExpanded(v => !v)}
                  aria-expanded={prodExpanded}>
                  <span>{item.label}</span>
                  <span className="drawer-group-caret" aria-hidden="true">▾</span>
                </button>
                {prodExpanded && (
                  <div className="drawer-group-list">
                    {(typeof CATALOG !== "undefined" ? Object.values(CATALOG) : []).map(cat => (
                      <a key={cat.slug} href={`/${cat.slug}`} onClick={onClose}>
                        {cat.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={item.label} href={item.href} onClick={onClose}>{item.label}</a>
            )
          ))}
        </div>
        <div className="drawer-bottom">
          <a className="btn btn-clay" href="tel:+15483331419">(548) 333-1419</a>
          <a className="btn btn-walnut" href="/contact" onClick={onClose}>Get a quote</a>
        </div>
      </aside>
    </>
  );
}

// Reusable suggestive svg overlay drawn on top of placeholder/img
function CabinetOverlay({ stroke = "#FAF4E8", opacity = 0.4 }) {
  return (
    <svg className="grain-lines" width="100%" height="100%" viewBox="0 0 400 280" preserveAspectRatio="xMidYMid slice">
      <rect x="30" y="30" width="340" height="150" fill="none" stroke={stroke} strokeWidth="0.7" opacity={opacity}/>
      <line x1="138" y1="30" x2="138" y2="180" stroke={stroke} strokeWidth="0.5" opacity={opacity}/>
      <line x1="262" y1="30" x2="262" y2="180" stroke={stroke} strokeWidth="0.5" opacity={opacity}/>
      <line x1="30" y1="200" x2="370" y2="200" stroke={stroke} strokeWidth="0.8" opacity={opacity}/>
      <rect x="30" y="216" width="340" height="40" fill="none" stroke={stroke} strokeWidth="0.5" opacity={opacity}/>
    </svg>
  );
}

function Hero() {
  const [stackRef, m] = useMouseParallax(1);
  const polaroids = [
    { angle: -8, top: "5%",  left: "4%",  c: "#3B2A1E", g: "#1c130a", img: IMG.heroA, cap: "No. 0142 · walnut & marble", date: "Sept 2025", k: 1.4 },
    { angle:  6, top: "12%", left: "42%", c: "#7E8B6F", g: "#3f4836", img: IMG.heroB, cap: "Sage pantry in Newton",       date: "Jun 2025",  k: 1.0 },
    { angle: -3, top: "44%", left: "16%", c: "#B85A3F", g: "#6a2f1d", img: IMG.heroC, cap: "Mudroom locker, Cohasset",    date: "Apr 2025",  k: 1.7 },
  ];
  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero-grid">
          <div data-reveal>
            <div className="hero-eyebrow">
              <span className="dot"/>
              <span className="eyebrow">Family-run · Watertown, MA</span>
            </div>
            <h1 className="display hero-title">
              Custom cabinets your <span className="accent">grandkids</span> will still slam.
            </h1>
            <p className="hero-lede">
              A six-person cabinet shop in Watertown, MA, building furniture-grade custom kitchens, closets, and built-ins out of solid hardwood. Serving Cambridge, Newton, Brookline, Belmont, and Greater Boston since 2008.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-walnut" href="#cta">
                Start a project <span className="arrow">→</span>
              </a>
              <a className="video-link" href="#workshop">
                <span className="play">▶</span> Tour the workshop
              </a>
            </div>
          </div>

          <div className="polaroid-stack" ref={stackRef} data-reveal="scale">
            {polaroids.map((p, i) => (
              <figure key={i}
                className="polaroid"
                style={{
                  top: p.top, left: p.left, zIndex: i + 1,
                  transform: `translate(${m.x * p.k * 8}px, ${m.y * p.k * 6}px) rotate(${p.angle + m.x * p.k * 1.2}deg)`,
                  transition: "transform 0.5s var(--easing)",
                }}>
                <div className="ph" style={{ background: `linear-gradient(160deg, ${p.c}, ${p.g})` }}>
                  <Img src={p.img} alt={p.cap} w={600}/>
                  <CabinetOverlay opacity={0.32}/>
                </div>
                <figcaption className="polaroid-cap">
                  <span>{p.cap}</span>
                  <small>{p.date}</small>
                </figcaption>
              </figure>
            ))}
            <div className="tape"/>
          </div>
        </div>

        <div className="press" data-reveal="fade">
          <div className="press-row">
            <span className="label">As featured in</span>
            <span className="item">This Old House</span>
            <span className="item">Boston Globe</span>
            <span className="item">Houzz Pro</span>
            <span className="item">NKBA</span>
            <span className="item">Architectural Digest</span>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Nav, MobileDrawer, Hero, CabinetOverlay });
