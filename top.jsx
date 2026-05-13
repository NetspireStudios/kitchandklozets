// top.jsx — Nav, MobileDrawer, Hero

function Nav({ onMenu }) {
  const scrolled = useScrolled(8);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" aria-label="Kitchen and Klosets, home">
          <img className="nav-mark" src="assets/logo.png" alt="" width="64" height="64"/>
          <div className="nav-title">
            <b>Kitchen &amp; Klosets</b>
            <small>Cabinetmakers · 2008</small>
          </div>
        </a>
        <nav className="nav-links">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} className="link-underline">{label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a href="tel:+15483331419" className="nav-phone">(548) 333-1419</a>
          <a href="#cta" className="btn btn-walnut">Get a quote</a>
          <button className="nav-toggle" onClick={onMenu} aria-label="Open menu">
            <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </header>
  );
}

function MobileDrawer({ open, onClose }) {
  useScrollLock(open);
  return (
    <>
      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={onClose}/>
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <div className="nav-logo">
            <img className="nav-mark" src="assets/logo.png" alt="" width="64" height="64"/>
            <div className="nav-title"><b>Kitchen &amp; Klosets</b></div>
          </div>
          <button className="nav-toggle" onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="drawer-links">
          {NAV_LINKS.map(([label, href]) => (
            <a key={href} href={href} onClick={onClose}>{label}</a>
          ))}
        </div>
        <div className="drawer-bottom">
          <a className="btn btn-clay" href="tel:+15483331419">(548) 333-1419</a>
          <a className="btn btn-walnut" href="#cta" onClick={onClose}>Get a quote</a>
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
              Cabinets your<br/>
              <span className="accent">grandkids</span> will<br/>
              still slam.
            </h1>
            <p className="hero-lede">
              A six-person shop in Watertown, building furniture-grade kitchens and closets out of solid hardwood. No flat-pack. No MDF carcasses. No flashy promises.
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
