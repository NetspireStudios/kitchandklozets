// craftsman.jsx — Warm Craftsman wireframe
// bone + walnut + clay, tactile & friendly

function CraftNav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30,
      display: "grid", gridTemplateColumns: "auto 1fr auto",
      alignItems: "center", padding: "18px 56px",
      background: "rgba(239,231,215,0.9)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--rule)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 6,
          background: "var(--walnut)", color: "var(--cream)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 16,
        }}>k&amp;</div>
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontWeight: 700, fontSize: 14, color: "var(--walnut)" }}>Kitchen &amp; Klosets</div>
          <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>Cabinetmakers · 2008</div>
        </div>
      </div>
      <nav style={{ display: "flex", gap: 36, justifyContent: "center", fontSize: 13, color: "var(--walnut)", fontWeight: 500 }}>
        <a>What we build</a><a>Wood library</a><a>The workshop</a><a>Where we've worked</a><a>Visit us</a>
      </nav>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <span style={{ fontSize: 13, color: "var(--clay)", fontWeight: 600 }}>(617) 555-0142</span>
        <a style={{
          padding: "10px 18px", background: "var(--walnut)", color: "var(--cream)",
          borderRadius: 999, fontSize: 12, fontWeight: 600,
        }}>Get a quote</a>
      </div>
    </header>
  );
}

function CraftHero() {
  return (
    <section style={{ padding: "70px 56px 90px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--clay)" }}/>
            <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--clay)", fontWeight: 600 }}>
              Family-run · Watertown, MA
            </span>
          </div>
          <h1 className="display" style={{ fontSize: 116, margin: 0, color: "var(--walnut)" }}>
            Cabinets your<br/>
            <span style={{ color: "var(--clay)" }}>grandkids</span> will<br/>
            still slam.
          </h1>
          <p style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.55, marginTop: 32, maxWidth: 480 }}>
            We're a six-person shop building furniture-grade kitchens and closets out of solid hardwood. No flat-pack, no MDF carcasses, no flashy promises.
          </p>
          <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center" }}>
            <a style={{
              padding: "16px 24px", background: "var(--walnut)", color: "var(--cream)",
              borderRadius: 10, fontSize: 14, fontWeight: 600,
              display: "inline-flex", alignItems: "center", gap: 10,
            }}>
              Start a project
              <span style={{ display: "inline-block", transition: "transform .2s" }}>→</span>
            </a>
            <a style={{ fontSize: 14, color: "var(--walnut)", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 28, height: 28, borderRadius: 999, background: "var(--clay)", color: "var(--cream)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>▶</span>
              Tour the workshop
            </a>
          </div>
        </div>

        {/* polaroid stack */}
        <div style={{ position: "relative", height: 560 }}>
          {[
            { angle: -8,  top: 30,  left: 20,  c: "#3B2A1E", g: "#1c130a", caption: "No. 0142 — walnut & marble",  date: "Sept 2025" },
            { angle: 6,   top: 90,  left: 220, c: "#7E8B6F", g: "#3f4836", caption: "Sage pantry in Newton",        date: "Jun 2025"  },
            { angle: -3,  top: 240, left: 80,  c: "#B85A3F", g: "#6a2f1d", caption: "Mudroom locker, Cohasset",     date: "Apr 2025"  },
          ].map((p, i) => (
            <figure key={i} style={{
              position: "absolute", top: p.top, left: p.left,
              transform: `rotate(${p.angle}deg)`,
              background: "var(--cream)", padding: "14px 14px 56px",
              boxShadow: "0 18px 40px rgba(42, 31, 21, 0.18), 0 2px 8px rgba(0,0,0,0.06)",
              borderRadius: 2, width: 280, margin: 0,
              animation: `drift ${5 + i}s ease-in-out ${i * 0.4}s infinite`,
              zIndex: i + 1,
            }}>
              <div className="ph" style={{
                width: "100%", height: 260,
                background: `linear-gradient(160deg, ${p.c}, ${p.g})`,
              }}>
                <svg width="100%" height="100%" viewBox="0 0 280 260" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.5 }}>
                  <rect x="24" y="30" width="232" height="120" fill="none" stroke="#FAF4E8" strokeWidth="0.8"/>
                  <rect x="24" y="160" width="232" height="80" fill="none" stroke="#FAF4E8" strokeWidth="0.8"/>
                  <line x1="100" y1="30" x2="100" y2="150" stroke="#FAF4E8" strokeWidth="0.4"/>
                  <line x1="180" y1="30" x2="180" y2="150" stroke="#FAF4E8" strokeWidth="0.4"/>
                </svg>
              </div>
              <figcaption style={{
                position: "absolute", left: 14, right: 14, bottom: 14,
                display: "flex", justifyContent: "space-between", alignItems: "baseline",
                fontFamily: "'Caveat', 'Bradley Hand', cursive", fontSize: 18, color: "var(--walnut)",
              }}>
                <span>{p.caption}</span>
                <span style={{ fontSize: 12, color: "var(--muted)" }}>{p.date}</span>
              </figcaption>
            </figure>
          ))}
          {/* tape pieces */}
          <div className="deco" style={{
            position: "absolute", top: 14, left: 120, width: 70, height: 18,
            background: "rgba(184,90,63,0.4)", transform: "rotate(-3deg)",
            border: "1px dashed rgba(184,90,63,0.6)",
          }}/>
        </div>
      </div>

      {/* trust strip */}
      <div className="ornament" style={{ marginTop: 72, display: "flex", gap: 32, alignItems: "center", padding: "18px 0", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>As featured in</span>
        {["This Old House", "Boston Globe", "Houzz Pro", "NKBA", "Architectural Digest"].map(x => (
          <span key={x} style={{ fontSize: 16, fontWeight: 600, color: "var(--walnut-soft)", opacity: 0.6 }}>{x}</span>
        ))}
      </div>
    </section>
  );
}

// ── Wood library: clickable door samples ─────────
function CraftWoodLibrary() {
  const woods = [
    { n: "Black Walnut",        nm: "Juglans nigra",       c: "#3B2A1E", g: "#1c130a", finish: "Hand-rubbed oil" },
    { n: "White Oak (Rift)",    nm: "Quercus alba",        c: "#c9a874", g: "#8d6b40", finish: "Cerused" },
    { n: "Cherry",              nm: "Prunus serotina",     c: "#7a3a23", g: "#42180b", finish: "Aged oil"  },
    { n: "Hard Maple",          nm: "Acer saccharum",      c: "#e6cf9b", g: "#a98a52", finish: "Natural wax" },
    { n: "Ash (Ebonized)",      nm: "Fraxinus americana",  c: "#26211c", g: "#0a0907", finish: "India-ink" },
    { n: "Reclaimed Chestnut",  nm: "Castanea dentata",    c: "#5a3a22", g: "#2c1a0e", finish: "Wire-brushed" },
  ];
  const [pick, setPick] = React.useState(woods[0]);
  return (
    <section style={{ padding: "100px 56px 110px", background: "var(--paper)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", marginBottom: 56, alignItems: "end", gap: 32 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ width: 32, height: 1, background: "var(--clay)" }}/>
            <span style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--clay)", fontWeight: 600 }}>Step 02 · Pick your wood</span>
          </div>
          <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--walnut)" }}>The wood library.</h2>
        </div>
        <div style={{ maxWidth: 320, fontSize: 14, color: "var(--muted)", lineHeight: 1.55 }}>
          Tap a door to feel out the finish. All six species come from FSC-certified mills within 300 miles of the shop.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "0.55fr 0.45fr", gap: 48 }}>
        {/* door row */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14,
        }}>
          {woods.map(w => {
            const active = pick.n === w.n;
            return (
              <button key={w.n} onClick={() => setPick(w)} style={{
                background: `linear-gradient(160deg, ${w.c}, ${w.g})`,
                border: "none", padding: 0, cursor: "pointer",
                borderRadius: 6, aspectRatio: "3 / 4", position: "relative",
                boxShadow: active
                  ? "0 0 0 3px var(--clay), 0 18px 32px rgba(42,31,21,0.3)"
                  : "0 6px 14px rgba(42,31,21,0.18)",
                transform: active ? "translateY(-6px)" : "translateY(0)",
                transition: "transform .25s ease, box-shadow .25s ease",
                overflow: "hidden",
              }}>
                {/* grain lines */}
                <svg width="100%" height="100%" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.25 }}>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <path key={i} d={`M 0 ${15 + i * 16} Q 50 ${12 + i * 16} 100 ${17 + i * 16}`} stroke="#FAF4E8" strokeWidth="0.4" fill="none"/>
                  ))}
                </svg>
                {/* panel */}
                <div style={{ position: "absolute", inset: "8% 10%", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3 }}/>
                {/* handle */}
                <div style={{ position: "absolute", top: "46%", right: 8, width: 3, height: 30, background: "var(--cream)", opacity: 0.85, borderRadius: 2 }}/>
                {/* label */}
                <div style={{
                  position: "absolute", left: 8, right: 8, bottom: 8,
                  background: "rgba(255, 244, 232, 0.92)", color: "var(--walnut)",
                  fontSize: 10, padding: "5px 8px", borderRadius: 2,
                  display: "flex", justifyContent: "space-between",
                  letterSpacing: "0.06em",
                }}>
                  <span style={{ fontWeight: 600 }}>{w.n}</span>
                  {active && <span style={{ color: "var(--clay)" }}>●</span>}
                </div>
              </button>
            );
          })}
        </div>

        {/* spec card */}
        <div style={{ background: "var(--cream)", border: "1px solid var(--rule)", borderRadius: 10, padding: 32, position: "relative" }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 11, color: "var(--clay)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>Selected · solid hardwood</div>
              <h3 className="display" style={{ fontSize: 48, margin: "8px 0 4px", color: "var(--walnut)" }}>{pick.n}</h3>
              <div style={{ fontStyle: "italic", color: "var(--muted)", fontSize: 14 }}>{pick.nm}</div>
            </div>
            <div style={{
              width: 70, height: 70, borderRadius: 8,
              background: `linear-gradient(135deg, ${pick.c}, ${pick.g})`,
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
            }}/>
          </div>

          <p style={{ fontSize: 14, color: "var(--ink)", lineHeight: 1.6, marginBottom: 24 }}>
            Finished in {pick.finish.toLowerCase()}, no fillers or stains used. The species' natural color deepens with use — most of our clients keep the wood unconditioned for the first two years.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              ["Hardness",   ["1100", "1290", "950", "1450", "1320", "1100"][woods.indexOf(pick)] + " (Janka)"],
              ["Source",     "FSC certified · NE Atlantic"],
              ["Finish",     pick.finish],
              ["Lead time",  "10–14 weeks"],
            ].map(([k, v]) => (
              <div key={k} style={{ borderTop: "1px solid var(--rule)", paddingTop: 10 }}>
                <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{k}</div>
                <div style={{ fontSize: 14, marginTop: 2, color: "var(--walnut)", fontWeight: 500 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 28, display: "flex", gap: 10 }}>
            <a style={{ flex: 1, padding: "12px 16px", background: "var(--walnut)", color: "var(--cream)", borderRadius: 8, fontSize: 13, textAlign: "center", fontWeight: 600 }}>
              Mail me a sample
            </a>
            <a style={{ padding: "12px 16px", border: "1px solid var(--walnut)", color: "var(--walnut)", borderRadius: 8, fontSize: 13, fontWeight: 500 }}>
              See it built
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── What we build (services) ─────────────────────
function CraftWhatWeBuild() {
  const items = [
    { t: "Kitchens",       d: "Cabinets, islands, ranges, hoods.",       n: 142 },
    { t: "Closets",        d: "Walk-ins, reach-ins, dressing rooms.",    n: 98  },
    { t: "Pantries",       d: "Butler's, scullery, beverage.",           n: 41  },
    { t: "Bath vanities",  d: "Single & double with integrated stone.",  n: 64  },
    { t: "Built-ins",      d: "Libraries, window seats, media walls.",   n: 53  },
    { t: "Mudrooms",       d: "Lockers, benches, dog showers.",          n: 37  },
  ];
  return (
    <section style={{ padding: "100px 56px 80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--walnut)" }}>What we build.</h2>
        <div style={{ fontSize: 13, color: "var(--muted)" }}>Six rooms, one bench.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
        {items.map((it, i) => (
          <article key={it.t} style={{
            background: "var(--cream)", border: "1px solid var(--rule)", borderRadius: 12,
            padding: "32px 28px 28px", position: "relative", overflow: "hidden",
            transition: "transform .25s, box-shadow .25s",
          }}>
            {/* grain texture */}
            <svg width="100%" height="80" viewBox="0 0 400 80" preserveAspectRatio="none" style={{ position: "absolute", left: 0, right: 0, top: 0, opacity: 0.07 }}>
              {Array.from({ length: 5 }).map((_, k) => (
                <path key={k} d={`M 0 ${10 + k * 16} Q 200 ${5 + k * 16} 400 ${12 + k * 16}`} stroke="var(--walnut)" strokeWidth="0.6" fill="none"/>
              ))}
            </svg>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 28 }}>
              <span style={{ fontSize: 12, color: "var(--clay)", letterSpacing: "0.14em", fontWeight: 600 }}>0{i+1}</span>
              <span style={{ fontSize: 11, color: "var(--muted)" }}>{it.n} built</span>
            </div>
            <h3 className="display" style={{ fontSize: 36, color: "var(--walnut)", margin: "0 0 8px" }}>{it.t}</h3>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, marginBottom: 24 }}>{it.d}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16, borderTop: "1px solid var(--rule)" }}>
              <span style={{ fontSize: 13, color: "var(--walnut)", fontWeight: 600 }}>See projects</span>
              <span style={{
                width: 36, height: 36, borderRadius: 999, background: "var(--walnut)", color: "var(--cream)",
                display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 14,
              }}>→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── By the numbers ───────────────────────────────
function CraftNumbers() {
  const stats = [
    { v: "18",   l: "Years on the bench", s: "since 2008" },
    { v: "340+", l: "Rooms built",        s: "homes across New England" },
    { v: "6",    l: "Cabinetmakers",      s: "no subcontracted joinery" },
    { v: "10yr", l: "Warranty",           s: "on every joint we cut" },
  ];
  return (
    <section style={{ padding: "100px 56px 110px", background: "var(--walnut)", color: "var(--cream)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56, alignItems: "end", marginBottom: 56 }}>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--cream)" }}>By the bench.</h2>
        <div style={{ fontSize: 15, color: "rgba(250,244,232,0.7)", maxWidth: 500, lineHeight: 1.55 }}>
          A small shop, on purpose. Every cabinet that leaves the door has been cut, glued, and finished by someone whose name is on the wall.
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(250,244,232,0.18)" }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: "var(--walnut)", padding: "40px 28px 32px", display: "flex", flexDirection: "column", gap: 8 }}>
            <div className="display" style={{ fontSize: 96, color: "var(--clay)", lineHeight: 0.95 }}>{s.v}</div>
            <div style={{ fontSize: 16, color: "var(--cream)", fontWeight: 600 }}>{s.l}</div>
            <div style={{ fontSize: 12, color: "rgba(250,244,232,0.55)", letterSpacing: "0.04em" }}>{s.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Workshop / process — story timeline ──────────
function CraftWorkshop() {
  const steps = [
    { w: "Week 1",   t: "Site visit",      d: "Coffee, measurements, your wishlist on a yellow pad." },
    { w: "Week 2–3", t: "Drawings",        d: "Hand-drawn elevations. We bring them by, mark them up together." },
    { w: "Week 4",   t: "Material picks",  d: "You hold the woods, the stones, the brass. We narrow to three." },
    { w: "Week 5–14",t: "On the bench",    d: "Photographed weekly from the shop floor. You can drop by any Saturday." },
    { w: "Week 15",  t: "Install",         d: "Two weeks on-site. Final adjustments after a month of real use." },
  ];
  return (
    <section style={{ padding: "100px 56px 100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--walnut)" }}>From the workshop.</h2>
        <div style={{ fontSize: 13, color: "var(--muted)", maxWidth: 300, textAlign: "right", lineHeight: 1.5 }}>How a typical 4-month project lays out, week by week.</div>
      </div>

      <div style={{ position: "relative", paddingLeft: 56 }}>
        {/* timeline line */}
        <div style={{ position: "absolute", left: 16, top: 12, bottom: 12, width: 2, background: "var(--rule)" }}/>
        <div style={{ position: "absolute", left: 15, top: 12, width: 4, height: "40%", background: "var(--clay)", borderRadius: 4 }}/>

        {steps.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr 280px", gap: 32, marginBottom: 36, position: "relative", alignItems: "flex-start" }}>
            <div style={{
              position: "absolute", left: -50, top: 8,
              width: 32, height: 32, borderRadius: 999,
              background: i === 0 ? "var(--clay)" : "var(--cream)",
              color: i === 0 ? "var(--cream)" : "var(--walnut)",
              border: "2px solid var(--walnut)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13, fontWeight: 700,
            }}>{i + 1}</div>
            <div style={{ fontSize: 12, color: "var(--clay)", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 700, paddingTop: 14 }}>{s.w}</div>
            <div>
              <h3 className="display" style={{ fontSize: 38, color: "var(--walnut)", margin: "0 0 10px" }}>{s.t}</h3>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{s.d}</p>
            </div>
            <div className="ph" style={{
              height: 140, borderRadius: 8,
              background: `linear-gradient(160deg, ${["#3B2A1E","#5B4434","#7E8B6F","#B85A3F","#7a3a23"][i]}, #2A1F15)`,
            }}>
              <svg width="100%" height="100%" viewBox="0 0 280 140" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.35 }}>
                <rect x="20" y="20" width="240" height="100" fill="none" stroke="#FAF4E8" strokeWidth="0.6"/>
                <line x1="140" y1="20" x2="140" y2="120" stroke="#FAF4E8" strokeWidth="0.4"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Map gallery ──────────────────────────────────
function CraftMap() {
  // approximate map of greater Boston
  const pins = [
    { x: 30, y: 38, t: "Watertown shop",    s: "Workshop",        kind: "shop" },
    { x: 44, y: 42, t: "Beacon Hill",       s: "Townhouse kitchen" },
    { x: 50, y: 36, t: "Cambridge",         s: "Pantry conversion" },
    { x: 38, y: 28, t: "Belmont",           s: "Family kitchen" },
    { x: 28, y: 60, t: "Newton",            s: "Mudroom + bench" },
    { x: 62, y: 48, t: "South End",         s: "Closet system" },
    { x: 18, y: 70, t: "Wellesley",         s: "Library wall" },
    { x: 70, y: 64, t: "Quincy",            s: "Bath vanity" },
    { x: 82, y: 30, t: "North Shore",       s: "Beach-house kitchen" },
    { x: 76, y: 80, t: "Cohasset",          s: "Pantry + bar" },
  ];
  const [hover, setHover] = React.useState(null);
  return (
    <section style={{ padding: "100px 56px 100px", borderTop: "1px solid var(--rule)", background: "var(--paper)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--clay)", fontWeight: 600, marginBottom: 14 }}>Where we've worked</div>
          <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--walnut)" }}>340 rooms<br/>across New England.</h2>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center", fontSize: 12, color: "var(--muted)" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--clay)" }}/>
            Completed project
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 14, height: 14, background: "var(--walnut)", color: "var(--cream)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, borderRadius: 3 }}>K</span>
            Our workshop
          </span>
        </div>
      </div>

      <div style={{
        position: "relative", height: 540,
        background: "var(--cream)",
        border: "1px solid var(--rule)", borderRadius: 8,
        overflow: "hidden",
      }}>
        {/* topo-ish background */}
        <svg width="100%" height="100%" viewBox="0 0 1200 540" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0 }}>
          <defs>
            <pattern id="topo" patternUnits="userSpaceOnUse" width="60" height="60">
              <path d="M 0 30 Q 30 10 60 30 Q 30 50 0 30" stroke="var(--walnut-soft)" strokeWidth="0.3" fill="none" opacity="0.18"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
          {/* coast line */}
          <path d="M 880 60 Q 920 140 940 240 Q 960 340 980 420 Q 990 480 1000 540" stroke="var(--sage)" strokeWidth="2.5" fill="none" opacity="0.7"/>
          <path d="M 1000 540 L 1200 540 L 1200 60 L 1000 60 Q 990 240 1000 540" fill="var(--sage)" opacity="0.15"/>
          {/* roads */}
          <line x1="60" y1="240" x2="1080" y2="280" stroke="var(--walnut-soft)" strokeWidth="0.8" opacity="0.22" strokeDasharray="6 4"/>
          <line x1="400" y1="40" x2="540" y2="520" stroke="var(--walnut-soft)" strokeWidth="0.8" opacity="0.22" strokeDasharray="6 4"/>
          <line x1="80" y1="60" x2="1100" y2="500" stroke="var(--walnut-soft)" strokeWidth="0.6" opacity="0.15"/>
          {/* compass */}
          <g transform="translate(1100,80)" opacity="0.5">
            <circle r="22" fill="none" stroke="var(--walnut)" strokeWidth="0.8"/>
            <text textAnchor="middle" y="-26" fontSize="10" fill="var(--walnut)" letterSpacing="0.2em">N</text>
            <line x1="0" y1="-14" x2="0" y2="14" stroke="var(--clay)" strokeWidth="1"/>
          </g>
        </svg>

        {/* pins */}
        {pins.map((p, i) => {
          const isShop = p.kind === "shop";
          return (
            <button key={i}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
              style={{
              position: "absolute",
              left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -100%)",
              background: "transparent", border: "none", padding: 0, cursor: "pointer",
              zIndex: hover === i ? 5 : isShop ? 4 : 3,
            }}>
              {isShop ? (
                <div style={{ width: 28, height: 28, background: "var(--walnut)", color: "var(--cream)", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, boxShadow: "0 4px 12px rgba(42,31,21,0.3)" }}>K</div>
              ) : (
                <div style={{ position: "relative", width: 20, height: 26 }}>
                  <div style={{
                    width: 16, height: 16, borderRadius: 999, background: "var(--clay)", border: "2px solid var(--cream)",
                    boxShadow: "0 4px 8px rgba(42,31,21,0.25)",
                    transition: "transform .2s",
                    transform: hover === i ? "scale(1.3)" : "scale(1)",
                  }}/>
                  <div style={{
                    position: "absolute", left: "50%", top: 12,
                    width: 0, height: 0, transform: "translateX(-50%)",
                    borderLeft: "6px solid transparent", borderRight: "6px solid transparent",
                    borderTop: "10px solid var(--clay)",
                  }}/>
                </div>
              )}
              {hover === i && (
                <div style={{
                  position: "absolute", left: "50%", bottom: "calc(100% + 8px)",
                  transform: "translateX(-50%)",
                  background: "var(--walnut)", color: "var(--cream)",
                  padding: "10px 14px", borderRadius: 6, fontSize: 12, whiteSpace: "nowrap",
                  boxShadow: "0 12px 24px rgba(42,31,21,0.3)",
                }}>
                  <div style={{ fontWeight: 700, fontSize: 13 }}>{p.t}</div>
                  <div style={{ color: "rgba(250,244,232,0.7)" }}>{p.s}</div>
                </div>
              )}
            </button>
          );
        })}

        {/* legend in corner */}
        <div style={{ position: "absolute", left: 20, bottom: 20, background: "rgba(250,244,232,0.92)", padding: "14px 18px", borderRadius: 6, fontSize: 12, color: "var(--walnut)", lineHeight: 1.5 }}>
          <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>Greater Boston</div>
          <div style={{ color: "var(--muted)" }}>9 of 340 projects shown.</div>
          <a style={{ color: "var(--clay)", fontWeight: 600, marginTop: 6, display: "inline-block" }}>See all on the map →</a>
        </div>
      </div>
    </section>
  );
}

// ── Polaroid testimonials ────────────────────────
function CraftPolaroids() {
  const items = [
    {
      q: "They built us a kitchen the kids can't break. Three years and not a single drawer pull has come loose.",
      n: "The Hartleys", loc: "Newton, MA",
      angle: -4, c: "#3B2A1E", g: "#1c130a", date: "Spring 2023",
    },
    {
      q: "I'm an architect. I've never had a millworker push back on my drawings like Tom did. He was right every time.",
      n: "L. Khoury, AIA", loc: "Cambridge, MA",
      angle: 5, c: "#7E8B6F", g: "#3f4836", date: "Fall 2024",
    },
    {
      q: "They quoted four months. They finished in four months. I'm still in shock about that part.",
      n: "B. Olin", loc: "Wellesley, MA",
      angle: -2, c: "#B85A3F", g: "#6a2f1d", date: "Winter 2023",
    },
  ];
  return (
    <section style={{ padding: "100px 56px 120px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--walnut)" }}>
          The fridge<br/>scrapbook.
        </h2>
        <div style={{ fontSize: 13, color: "var(--muted)", maxWidth: 320, textAlign: "right", lineHeight: 1.5 }}>
          Notes and photos clients have sent us back, sometimes years after install.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, paddingTop: 24 }}>
        {items.map((it, i) => (
          <article key={i} style={{
            background: "var(--cream)",
            padding: "16px 16px 22px",
            transform: `rotate(${it.angle}deg)`,
            boxShadow: "0 16px 32px rgba(42,31,21,0.16), 0 2px 6px rgba(0,0,0,0.06)",
            position: "relative",
          }}>
            <div className="deco" style={{
              position: "absolute", top: -10, left: "50%", transform: "translateX(-50%) rotate(-2deg)",
              width: 90, height: 18, background: "rgba(184,90,63,0.35)",
              border: "1px dashed rgba(184,90,63,0.55)",
            }}/>
            <div className="ph" style={{
              width: "100%", height: 200,
              background: `linear-gradient(160deg, ${it.c}, ${it.g})`,
            }}>
              <svg width="100%" height="100%" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.5 }}>
                <rect x="30" y="30" width="300" height="100" fill="none" stroke="#FAF4E8" strokeWidth="0.6"/>
                <rect x="30" y="140" width="300" height="40" fill="none" stroke="#FAF4E8" strokeWidth="0.6"/>
              </svg>
            </div>
            <div style={{ padding: "20px 12px 4px" }}>
              <p style={{
                fontFamily: "'Caveat', 'Bradley Hand', cursive",
                fontSize: 22, color: "var(--walnut)", lineHeight: 1.4,
                margin: 0,
              }}>"{it.q}"</p>
              <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline", fontSize: 12, color: "var(--muted)" }}>
                <span style={{ fontWeight: 700, color: "var(--walnut)" }}>— {it.n}, {it.loc}</span>
                <span>{it.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CraftCTA() {
  return (
    <section style={{ padding: "0 56px 56px" }}>
      <div style={{
        background: "var(--clay)", color: "var(--cream)",
        padding: "70px 60px", borderRadius: 16, position: "relative", overflow: "hidden",
      }}>
        <svg width="100%" height="100%" viewBox="0 0 1200 280" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, opacity: 0.18 }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <path key={i} d={`M 0 ${10 + i * 18} Q 600 ${5 + i * 18} 1200 ${12 + i * 18}`} stroke="#FAF4E8" strokeWidth="0.6" fill="none"/>
          ))}
        </svg>
        <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 56, alignItems: "center" }}>
          <div>
            <h2 className="display" style={{ fontSize: 88, margin: 0, lineHeight: 0.95, color: "var(--cream)" }}>
              Bring us a wishlist,<br/>we'll bring the bench.
            </h2>
            <p style={{ fontSize: 16, color: "rgba(250,244,232,0.85)", marginTop: 24, maxWidth: 540, lineHeight: 1.55 }}>
              In-home consultations are free, usually 90 minutes, and end with a yellow pad full of notes and three material samples.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <a style={{ padding: "18px 24px", background: "var(--walnut)", color: "var(--cream)", borderRadius: 12, fontSize: 15, fontWeight: 700, textAlign: "center" }}>Book a consultation</a>
            <a style={{ padding: "18px 24px", background: "var(--cream)", color: "var(--walnut)", borderRadius: 12, fontSize: 15, fontWeight: 700, textAlign: "center" }}>Visit the workshop</a>
            <div style={{ marginTop: 8, fontSize: 12, color: "rgba(250,244,232,0.75)", textAlign: "center" }}>or call us · (617) 555-0142</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CraftFooter() {
  return (
    <footer style={{ padding: "60px 56px 40px", background: "var(--walnut)", color: "var(--cream)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 6, background: "var(--clay)", color: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>k&amp;</div>
            <div className="display" style={{ fontSize: 28, color: "var(--cream)" }}>Kitchen &amp; Klosets</div>
          </div>
          <div style={{ marginTop: 14, fontSize: 13, color: "rgba(250,244,232,0.65)", lineHeight: 1.6 }}>
            84 Pleasant Street, Watertown MA 02472<br/>
            Open Thursday &amp; Friday, 10–4. Saturday by appointment.
          </div>
        </div>
        {[
          ["Build with us", ["What we build", "Wood library", "Get a quote"]],
          ["The workshop",  ["About us", "The cabinetmakers", "Our process"]],
          ["Stay in touch", ["(617) 555-0142", "hello@k-k.studio", "Instagram"]],
        ].map(([t, links]) => (
          <div key={t}>
            <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--clay)", marginBottom: 14, fontWeight: 700 }}>{t}</div>
            <div style={{ display: "grid", gap: 10, fontSize: 13, color: "rgba(250,244,232,0.85)" }}>
              {links.map(l => <a key={l}>{l}</a>)}
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 48, paddingTop: 24, borderTop: "1px solid rgba(250,244,232,0.12)", display: "flex", justifyContent: "space-between", fontSize: 11, color: "rgba(250,244,232,0.5)" }}>
        <span>© 2026 Kitchen &amp; Klosets · Made in Watertown</span>
        <span>10-year warranty on every joint</span>
      </div>
    </footer>
  );
}

function CraftHomepage() {
  return (
    <div className="theme-craft" style={{ width: 1440 }}>
      <CraftNav/>
      <CraftHero/>
      <CraftWoodLibrary/>
      <CraftWhatWeBuild/>
      <CraftNumbers/>
      <CraftWorkshop/>
      <CraftMap/>
      <CraftPolaroids/>
      <CraftCTA/>
      <CraftFooter/>
    </div>
  );
}

window.CraftHomepage = CraftHomepage;
