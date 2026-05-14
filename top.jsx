// top.jsx — Nav, MobileDrawer, Hero

function Nav({ onMenu }) {
  const scrolled = useScrolled(8);
  const [megaOpen, setMegaOpen]   = React.useState(false);
  const [dropOpen, setDropOpen]   = React.useState(null); // label of open child-dropdown
  const closeMega = () => setMegaOpen(false);
  const closeDrop = () => setDropOpen(null);
  const closeAll  = () => { closeMega(); closeDrop(); };
  // Lock body scroll while the mega panel is open so wheel events
  // don't fall through to the page underneath.
  useScrollLock(megaOpen);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") closeAll(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""} ${megaOpen ? "mega-open" : ""}`}
            onMouseLeave={closeAll}>
      <div className="container nav-inner">
        <a href="/" className="nav-logo" aria-label="Kitch and Klozets, home">
          <img className="nav-mark" src="/assets/logo.png" alt="" width="56" height="56"/>
          <div className="nav-title">
            <b>Kitch &amp; Klozets</b>
            <small>Cabinetmakers · Sudbury ON</small>
          </div>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((item) => {
            if (item.mega) {
              return (
                <button key={item.label}
                  className={`nav-mega-trigger link-underline ${megaOpen ? "active" : ""}`}
                  onMouseEnter={() => { setMegaOpen(true); closeDrop(); }}
                  onFocus={() => { setMegaOpen(true); closeDrop(); }}
                  onClick={() => setMegaOpen(o => !o)}
                  aria-haspopup="true" aria-expanded={megaOpen}>
                  {item.label}
                  <span className="nav-mega-caret" aria-hidden="true">▾</span>
                </button>
              );
            }
            if (item.children) {
              const isOpen = dropOpen === item.label;
              return (
                <div key={item.label} className={`nav-drop ${isOpen ? "open" : ""}`}
                     onMouseEnter={() => { setDropOpen(item.label); closeMega(); }}
                     onMouseLeave={closeDrop}>
                  <button className={`nav-mega-trigger link-underline ${isOpen ? "active" : ""}`}
                    onClick={() => setDropOpen(o => o === item.label ? null : item.label)}
                    aria-haspopup="true" aria-expanded={isOpen}>
                    {item.label}
                    <span className="nav-mega-caret" aria-hidden="true">▾</span>
                  </button>
                  <div className="nav-drop-panel" role="menu" aria-label={item.label}>
                    {item.children.map(child => (
                      <a key={child.label} href={child.href} role="menuitem" className="nav-drop-item">
                        <span className="nav-drop-label">{child.label}</span>
                        {child.hint && <span className="nav-drop-hint">{child.hint}</span>}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <a key={item.label} href={item.href} className="link-underline"
                 onMouseEnter={closeAll}>{item.label}</a>
            );
          })}
        </nav>
        <div className="nav-cta">
          <a href="/contact" className="btn btn-walnut nav-quote-btn">Request a quote</a>
          <button className="nav-toggle" onClick={onMenu} aria-label="Open menu">
            <svg width="22" height="14" viewBox="0 0 22 14"><path d="M0 1h22M0 7h22M0 13h22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
      {megaOpen && (
        <div className="mega-backdrop" onClick={closeMega} aria-hidden="true"/>
      )}
      <MegaMenu open={megaOpen} onClose={closeMega}/>
    </header>
  );
}

function MobileDrawer({ open, onClose }) {
  useScrollLock(open);
  const [openGroup, setOpenGroup] = React.useState(null); // label of expanded mega/children group
  const [openCat, setOpenCat]     = React.useState(null); // slug of expanded category
  const toggleGroup = (label) => setOpenGroup(prev => prev === label ? null : label);
  const toggleCat   = (slug)  => setOpenCat(prev => prev === slug ? null : slug);

  return (
    <>
      <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={onClose}/>
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-head">
          <a href="/" className="nav-logo" onClick={onClose}>
            <img className="nav-mark" src="/assets/logo.png" alt="" width="56" height="56"/>
            <div className="nav-title"><b>Kitch &amp; Klozets</b></div>
          </a>
          <button className="nav-toggle" onClick={onClose} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 20 20"><path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
          </button>
        </div>
        <div className="drawer-links">
          {NAV_LINKS.map((item) => {
            if (item.mega) {
              const isOpen = openGroup === item.label;
              return (
                <div key={item.label} className={`drawer-group ${isOpen ? "open" : ""}`}>
                  <button className="drawer-group-trigger"
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isOpen}>
                    <span>{item.label}</span>
                    <span className="drawer-group-caret" aria-hidden="true">▾</span>
                  </button>
                  {isOpen && (
                    <div className="drawer-group-list">
                      {(typeof CATALOG !== "undefined" ? Object.values(CATALOG) : []).map(cat => {
                        const catOpen = openCat === cat.slug;
                        const hasSubs = !!cat.sections;
                        return (
                          <div key={cat.slug} className={`drawer-subgroup ${catOpen ? "open" : ""}`}>
                            {hasSubs ? (
                              <button className="drawer-subgroup-trigger"
                                onClick={() => toggleCat(cat.slug)}
                                aria-expanded={catOpen}>
                                <span>{cat.title}</span>
                                <span className="drawer-subgroup-caret" aria-hidden="true">▾</span>
                              </button>
                            ) : (
                              <a className="drawer-subgroup-trigger" href={`/${cat.slug}`} onClick={onClose}>
                                <span>{cat.title}</span>
                                <span className="drawer-subgroup-caret" aria-hidden="true">›</span>
                              </a>
                            )}
                            {hasSubs && catOpen && (
                              <div className="drawer-subgroup-list">
                                <a href={`/${cat.slug}`} className="drawer-subgroup-all" onClick={onClose}>
                                  See all in {cat.title} →
                                </a>
                                {Object.values(cat.sections).map(sec => (
                                  <a key={sec.slug} href={`/${cat.slug}/${sec.slug}`} onClick={onClose}>
                                    {sec.title}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            if (item.children) {
              const isOpen = openGroup === item.label;
              return (
                <div key={item.label} className={`drawer-group ${isOpen ? "open" : ""}`}>
                  <button className="drawer-group-trigger"
                    onClick={() => toggleGroup(item.label)}
                    aria-expanded={isOpen}>
                    <span>{item.label}</span>
                    <span className="drawer-group-caret" aria-hidden="true">▾</span>
                  </button>
                  {isOpen && (
                    <div className="drawer-group-list">
                      {item.children.map(child => (
                        <a key={child.label} href={child.href} onClick={onClose}
                           className="drawer-child-link">
                          <span>{child.label}</span>
                          {child.hint && <small>{child.hint}</small>}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <a key={item.label} href={item.href} onClick={onClose}>{item.label}</a>
            );
          })}
        </div>
        <div className="drawer-bottom">
          <a className="btn btn-walnut" href="/contact" onClick={onClose}>Request a quote</a>
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
              <span className="eyebrow">Family-run · Sudbury, ON</span>
            </div>
            <h1 className="display hero-title">
              Custom cabinets your <span className="accent">grandkids</span> will still slam.
            </h1>
            <p className="hero-lede">
              A wholesale cabinet shop in Sudbury, Ontario. Ready-to-assemble kitchens in eight finishes, a matching closet program, and a built-to-measure Crafted line for the rooms that won't take a flat-pack kit.
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
            <span className="item">Sudbury Star</span>
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
