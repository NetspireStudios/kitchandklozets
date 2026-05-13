// royal.jsx — Royal Atelier homepage wireframe
// navy + champagne, editorial serif-display feel via Fraunces

const royalStyles = {
  wrap: { width: 1440, background: "var(--bg)", color: "var(--ink)" },
};

function RoyalNav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30,
      display: "grid", gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "22px 56px",
      background: "rgba(244,239,227,0.88)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--rule)",
      fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
    }}>
      <nav style={{ display: "flex", gap: 28, color: "var(--navy)" }}>
        <a>Atelier</a><a>Commissions</a><a>Lookbook</a><a>Journal</a>
      </nav>
      <div className="display" style={{ fontSize: 22, letterSpacing: "-0.02em", color: "var(--navy)", fontWeight: 500, textTransform: "none" }}>
        Kitchen <span style={{ fontStyle: "italic", color: "var(--gold)" }}>&amp;</span> Klosets
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 18, alignItems: "center", color: "var(--navy)" }}>
        <span>Boston · NY</span>
        <a style={{
          padding: "9px 18px", border: "1px solid var(--navy)",
          color: "var(--navy)", borderRadius: 999, fontSize: 11,
        }}>Begin a commission →</a>
      </div>
    </header>
  );
}

function RoyalHero() {
  return (
    <section style={{ padding: "60px 56px 90px", position: "relative" }}>
      {/* overline */}
      <div style={{ display: "flex", justifyContent: "space-between", color: "var(--muted)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 36 }}>
        <span>Established 2008 · Massachusetts</span>
        <span className="deco">No. 047 / Vol. XVII</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 56, alignItems: "end" }}>
        <div>
          <h1 className="display" style={{ fontSize: 132, margin: 0, color: "var(--navy)" }}>
            Heirloom<br/>
            kitchens<br/>
            <span style={{ fontStyle: "italic", color: "var(--gold)" }}>&amp;</span> dressing<br/>
            rooms.
          </h1>
          <div style={{ marginTop: 40, display: "flex", gap: 28, alignItems: "center" }}>
            <a style={{
              padding: "16px 28px", borderRadius: 999,
              background: "var(--navy)", color: "var(--champagne)",
              fontSize: 13, letterSpacing: "0.06em", display: "inline-flex", alignItems: "center", gap: 12,
            }}>
              Begin a commission
              <span style={{ width: 22, height: 22, borderRadius: 999, background: "var(--champagne)", color: "var(--navy)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>→</span>
            </a>
            <div style={{ fontSize: 12, color: "var(--muted)", maxWidth: 200, lineHeight: 1.4 }}>
              Private consultations by appointment. 6–8 month lead time.
            </div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="ph" style={{
            width: "100%", height: 580, borderRadius: 4,
            background: "linear-gradient(160deg,#16264a 0%,#0E1E3A 50%,#0a1428 100%)",
          }}>
            {/* Suggested cabinetry silhouette */}
            <svg width="100%" height="100%" viewBox="0 0 600 580" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.7 }}>
              <defs>
                <linearGradient id="rgold" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#D9B97A"/><stop offset="1" stopColor="#8C6A2E"/>
                </linearGradient>
              </defs>
              {/* upper cabinets */}
              <rect x="60" y="60" width="120" height="180" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <rect x="190" y="60" width="120" height="180" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <rect x="320" y="60" width="120" height="180" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <rect x="450" y="60" width="90" height="180" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              {/* inner panels */}
              <rect x="74" y="74" width="92" height="152" fill="none" stroke="url(#rgold)" strokeWidth="0.6"/>
              <rect x="204" y="74" width="92" height="152" fill="none" stroke="url(#rgold)" strokeWidth="0.6"/>
              <rect x="334" y="74" width="92" height="152" fill="none" stroke="url(#rgold)" strokeWidth="0.6"/>
              <rect x="464" y="74" width="62" height="152" fill="none" stroke="url(#rgold)" strokeWidth="0.6"/>
              {/* counter */}
              <line x1="40" y1="280" x2="560" y2="280" stroke="url(#rgold)" strokeWidth="2"/>
              {/* lower cabinets */}
              <rect x="60" y="300" width="240" height="220" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <rect x="310" y="300" width="160" height="220" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <rect x="480" y="300" width="60" height="220" fill="none" stroke="url(#rgold)" strokeWidth="1.2"/>
              <line x1="180" y1="300" x2="180" y2="520" stroke="url(#rgold)" strokeWidth="0.6"/>
              {/* hardware dots */}
              <circle cx="170" cy="150" r="2.5" fill="url(#rgold)"/>
              <circle cx="300" cy="150" r="2.5" fill="url(#rgold)"/>
              <circle cx="430" cy="150" r="2.5" fill="url(#rgold)"/>
              <circle cx="530" cy="150" r="2.5" fill="url(#rgold)"/>
              <circle cx="170" cy="410" r="3" fill="url(#rgold)"/>
              <circle cx="390" cy="410" r="3" fill="url(#rgold)"/>
            </svg>
            <span className="lbl">No. 047 · Brookline residence · walnut &amp; brass</span>
          </div>
          {/* tag */}
          <div className="deco" style={{
            position: "absolute", top: -16, right: -16,
            width: 76, height: 76, borderRadius: "50%",
            background: "var(--champagne)", color: "var(--navy)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
            textAlign: "center", lineHeight: 1.3, fontWeight: 600,
            animation: "drift 6s ease-in-out infinite",
          }}>
            Bespoke<br/>since<br/>2008
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="ornament" style={{ marginTop: 88, overflow: "hidden", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)", padding: "18px 0" }}>
        <div style={{ display: "flex", gap: 60, animation: "marquee 40s linear infinite", whiteSpace: "nowrap", color: "var(--navy)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {Array.from({ length: 2 }).map((_, i) => (
            <React.Fragment key={i}>
              <span>Featured in Architectural Digest</span><span style={{color:"var(--gold)"}}>✦</span>
              <span>Boston Home — Best of 2024</span><span style={{color:"var(--gold)"}}>✦</span>
              <span>NKBA Member</span><span style={{color:"var(--gold)"}}>✦</span>
              <span>House Beautiful Next Wave</span><span style={{color:"var(--gold)"}}>✦</span>
              <span>Dwell · Featured Studio</span><span style={{color:"var(--gold)"}}>✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Material Atelier — swatch picker ─────────────
function RoyalAtelier() {
  const materials = {
    Wood: [
      { name: "American Walnut", c: "#5b3a22", grain: "#3a2414" },
      { name: "White Oak / Rift", c: "#c9a874", grain: "#9a7d50" },
      { name: "Ebonized Ash",   c: "#26211c", grain: "#10100f" },
      { name: "Cherry / Aged",  c: "#7a3a23", grain: "#4a2010" },
    ],
    Lacquer: [
      { name: "Bone White",     c: "#efe9dc", grain: "#cfc7b3" },
      { name: "Library Navy",   c: "#0E1E3A", grain: "#08122a" },
      { name: "Sage Verdure",   c: "#7E8B6F", grain: "#566048" },
      { name: "Carbon Matte",   c: "#1a1a1a", grain: "#000" },
    ],
    Stone: [
      { name: "Calacatta Oro",  c: "#f2ecdf", grain: "#b8965a" },
      { name: "Verde Alpi",     c: "#2a3c34", grain: "#cdb074" },
      { name: "Belgian Bluestone", c: "#3e4347", grain: "#1e2226" },
      { name: "Bianco Avorio",  c: "#e9e2ce", grain: "#a89c7a" },
    ],
    Hardware: [
      { name: "Champagne Brass", c: "#D9B97A", grain: "#a48142" },
      { name: "Antique Bronze",  c: "#6f5536", grain: "#3a2c1c" },
      { name: "Polished Nickel", c: "#cfd2d4", grain: "#8a8f93" },
      { name: "Blackened Steel", c: "#1a1916", grain: "#000" },
    ],
  };
  const cats = Object.keys(materials);
  const [cat, setCat] = React.useState("Wood");
  const [pick, setPick] = React.useState(materials.Wood[0]);
  const setBoth = (c, m) => { setCat(c); setPick(materials[c][0]); if (m) setPick(m); };

  return (
    <section style={{ padding: "80px 56px 90px", borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", alignItems: "baseline", marginBottom: 48, gap: 32 }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>02 · The Atelier</div>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--navy)" }}>
          Compose your <span style={{ fontStyle: "italic", color: "var(--gold)" }}>specification</span>.
        </h2>
        <div style={{ fontSize: 12, color: "var(--muted)", maxWidth: 220, textAlign: "right", lineHeight: 1.5 }}>
          Tap a sample to preview it on the door panel. Specifications saved to your private project file at consultation.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "0.42fr 0.58fr", gap: 48 }}>
        {/* Picker */}
        <div>
          {/* category tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 28, borderBottom: "1px solid var(--rule)" }}>
            {cats.map(c => (
              <button key={c} onClick={() => setBoth(c)} style={{
                background: "transparent", border: "none",
                padding: "12px 20px 14px",
                color: c === cat ? "var(--navy)" : "var(--muted)",
                fontFamily: "inherit", fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase",
                cursor: "pointer", position: "relative",
                borderBottom: c === cat ? "2px solid var(--gold)" : "2px solid transparent",
                marginBottom: -1,
              }}>{c}</button>
            ))}
          </div>
          {/* swatches */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {materials[cat].map(m => (
              <button key={m.name} onClick={() => setPick(m)} style={{
                padding: 10, border: pick.name === m.name ? "1.5px solid var(--navy)" : "1px solid var(--rule)",
                background: "var(--paper)", borderRadius: 4, textAlign: "left", cursor: "pointer",
                display: "flex", gap: 12, alignItems: "center", transition: "all .2s ease",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 2,
                  background: `linear-gradient(135deg, ${m.c} 0%, ${m.grain} 100%)`,
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.08)",
                }}/>
                <div>
                  <div style={{ fontSize: 12, color: "var(--navy)", fontWeight: 500 }}>{m.name}</div>
                  <div style={{ fontSize: 10, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>{cat}</div>
                </div>
                {pick.name === m.name && (
                  <span style={{ marginLeft: "auto", color: "var(--gold)", fontSize: 16 }}>✓</span>
                )}
              </button>
            ))}
          </div>

          {/* spec summary */}
          <div style={{ marginTop: 32, padding: 20, borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>Current specification</div>
            <div style={{ fontSize: 14, color: "var(--navy)", lineHeight: 1.7 }}>
              <div><span style={{ color: "var(--muted)", display: "inline-block", width: 90 }}>Material</span>{pick.name}</div>
              <div><span style={{ color: "var(--muted)", display: "inline-block", width: 90 }}>Category</span>{cat}</div>
              <div><span style={{ color: "var(--muted)", display: "inline-block", width: 90 }}>Finish</span>Hand-rubbed satin</div>
            </div>
          </div>
        </div>

        {/* Preview cabinet */}
        <div className="ph" style={{ height: 520, borderRadius: 4, background: "linear-gradient(170deg,#161e36,#0b1226)", position: "relative" }}>
          {/* stage */}
          <div style={{
            position: "absolute", inset: "10% 12%",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10,
            transition: "background .35s ease",
          }}>
            {[0,1].map(i => (
              <div key={i} style={{
                background: `linear-gradient(${i === 0 ? "135deg" : "215deg"}, ${pick.c} 0%, ${pick.grain} 100%)`,
                borderRadius: 2, position: "relative",
                boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06), 0 14px 36px rgba(0,0,0,0.45)",
                transition: "background .45s ease",
              }}>
                <div style={{ position: "absolute", inset: "8% 6%", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 2 }}/>
                {/* handle */}
                <div style={{
                  position: "absolute",
                  top: "46%",
                  [i === 0 ? "right" : "left"]: 14,
                  width: 4, height: 56,
                  background: cat === "Hardware" ? `linear-gradient(180deg,${pick.c},${pick.grain})` : "linear-gradient(180deg,#D9B97A,#8C6A2E)",
                  borderRadius: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
                }}/>
              </div>
            ))}
          </div>
          {/* floor reflection */}
          <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "12%", background: "linear-gradient(180deg, rgba(0,0,0,0.4), rgba(0,0,0,0.7))" }}/>
          <span className="lbl">Live preview · {pick.name}</span>
          {/* corner badge */}
          <div className="ornament" style={{
            position: "absolute", top: 18, right: 18,
            padding: "6px 12px", border: "1px solid var(--champagne)", color: "var(--champagne)",
            fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", borderRadius: 999,
          }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 999, background: "var(--champagne)", marginRight: 8, verticalAlign: "middle", animation: "pulse-dot 1.6s ease-in-out infinite" }}/>
            Live
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Commissions (services) ───────────────────────
function RoyalCommissions() {
  const items = [
    { n: "01", t: "Kitchens", d: "Furniture-grade cabinetry, integrated appliances, and stone composition." },
    { n: "02", t: "Dressing Rooms", d: "Walk-in wardrobes with bespoke island, lighting, and jewelry drawers." },
    { n: "03", t: "Pantries", d: "Butler's pantries, scullery layouts, and concealed prep galleys." },
    { n: "04", t: "Vanities", d: "Primary baths and powder rooms — stone-topped, fluted, paneled." },
    { n: "05", t: "Libraries & Built-ins", d: "Floor-to-ceiling millwork, media walls, and reading nooks." },
    { n: "06", t: "Mudrooms", d: "Bench seating, locker stations, and tailored storage for daily ritual." },
  ];
  return (
    <section style={{ padding: "90px 56px 80px", background: "var(--paper)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>03 · Commissions</div>
        <div style={{ fontSize: 12, color: "var(--muted)" }}>Six rooms, one studio.</div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)" }}>
        {items.map(it => (
          <div key={it.n} style={{ background: "var(--paper)", padding: "44px 32px 36px", minHeight: 280, position: "relative", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <span className="display" style={{ fontStyle: "italic", color: "var(--gold)", fontSize: 18 }}>{it.n}</span>
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--navy)" }}/>
            </div>
            <h3 className="display" style={{ fontSize: 36, margin: "0 0 14px", color: "var(--navy)" }}>{it.t}</h3>
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, margin: 0 }}>{it.d}</p>
            <div style={{ marginTop: "auto", paddingTop: 24, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--navy)" }}>View commission →</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Process ──────────────────────────────────────
function RoyalProcess() {
  const steps = [
    { n: "I",   t: "Acquaint",  d: "A private consultation at your home or our atelier. We listen to how you live." },
    { n: "II",  t: "Compose",   d: "Hand-drawn elevations, material samples, and a written commission letter." },
    { n: "III", t: "Refine",    d: "Two rounds of revision. Every joint, profile and hardware piece confirmed on paper." },
    { n: "IV",  t: "Build",     d: "Cabinetmaker assigned. Photographed milestones from the bench, sent monthly." },
    { n: "V",   t: "Install",   d: "A two-week white-glove install. Final adjustment, polish, and walk-through." },
  ];
  return (
    <section style={{ padding: "100px 56px 100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64 }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>04 · The Process</div>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--navy)", textAlign: "right" }}>
          Five movements,<br/>
          <span style={{ fontStyle: "italic", color: "var(--gold)" }}>one</span> commission.
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}>
        {steps.map((s, i) => (
          <div key={s.n} style={{
            display: "grid",
            gridTemplateColumns: "80px 220px 1fr 280px",
            gap: 32, padding: "32px 0",
            borderTop: "1px solid var(--rule)",
            borderBottom: i === steps.length - 1 ? "1px solid var(--rule)" : "none",
            alignItems: "center",
          }}>
            <div className="display" style={{ fontSize: 22, color: "var(--gold)", fontStyle: "italic" }}>{s.n}</div>
            <div className="display" style={{ fontSize: 38, color: "var(--navy)" }}>{s.t}</div>
            <div style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.55, maxWidth: 540 }}>{s.d}</div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {steps.map((_, j) => (
                  <div key={j} style={{
                    width: 22, height: 2,
                    background: j <= i ? "var(--gold)" : "var(--rule)",
                  }}/>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Lookbook ─────────────────────────────────────
function RoyalLookbook() {
  const shots = [
    { t: "Beacon Hill Townhouse", loc: "Boston", w: 420 },
    { t: "Long Island Conservatory", loc: "Oyster Bay", w: 340 },
    { t: "Aspen Lodge Pantry", loc: "Colorado", w: 480 },
    { t: "Tribeca Loft Wardrobe", loc: "Manhattan", w: 380 },
    { t: "Chestnut Hill Library", loc: "Brookline", w: 440 },
  ];
  const tints = ["#1f2a44","#0E1E3A","#2a2014","#13202e","#2a1f1a"];
  return (
    <section style={{ padding: "90px 0 100px", background: "var(--navy)", color: "var(--paper)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40, padding: "0 56px" }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champagne)" }}>05 · Lookbook</div>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--paper)" }}>
          A <span style={{ fontStyle: "italic", color: "var(--champagne)" }}>portfolio</span> of recent commissions.
        </h2>
        <div style={{ display: "flex", gap: 12, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          <a style={{ padding: "10px 16px", border: "1px solid var(--champagne)", color: "var(--champagne)", borderRadius: 999 }}>← prev</a>
          <a style={{ padding: "10px 16px", border: "1px solid var(--champagne)", color: "var(--champagne)", borderRadius: 999 }}>next →</a>
        </div>
      </div>
      <div style={{
        display: "flex", gap: 24, overflowX: "auto",
        padding: "20px 56px 40px", scrollSnapType: "x mandatory",
      }}>
        {shots.map((s, i) => (
          <figure key={i} style={{ margin: 0, scrollSnapAlign: "start", flex: "0 0 auto" }}>
            <div className="ph" style={{
              width: s.w, height: 520, borderRadius: 2,
              background: `linear-gradient(160deg, ${tints[i % tints.length]} 0%, #050a18 100%)`,
              position: "relative",
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 520" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.45 }}>
                <rect x="40" y="50" width="320" height="240" fill="none" stroke="#D9B97A" strokeWidth="0.6"/>
                <rect x="40" y="300" width="320" height="180" fill="none" stroke="#D9B97A" strokeWidth="0.6"/>
                <line x1="120" y1="50" x2="120" y2="290" stroke="#D9B97A" strokeWidth="0.4"/>
                <line x1="200" y1="50" x2="200" y2="290" stroke="#D9B97A" strokeWidth="0.4"/>
                <line x1="280" y1="50" x2="280" y2="290" stroke="#D9B97A" strokeWidth="0.4"/>
                <line x1="200" y1="300" x2="200" y2="480" stroke="#D9B97A" strokeWidth="0.4"/>
              </svg>
              <div className="filmstrip-meta-overlay" style={{ position: "absolute", left: 18, bottom: 18, right: 18, color: "var(--paper)" }}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--champagne)" }}>No. 0{40 + i} · {s.loc}</div>
                <div className="display" style={{ fontSize: 22, marginTop: 6, color: "var(--paper)" }}>{s.t}</div>
              </div>
            </div>
          </figure>
        ))}
      </div>
      <div style={{ padding: "0 56px", display: "flex", gap: 4, marginTop: 8 }}>
        {shots.map((_, i) => <div key={i} style={{ flex: 1, height: 1, background: i === 0 ? "var(--champagne)" : "rgba(217,185,122,0.25)" }}/>)}
      </div>
    </section>
  );
}

// ── Letters (testimonials) ───────────────────────
function RoyalLetters() {
  const letters = [
    {
      body: "We have lived with our kitchen for two winters now, and it still feels as though we are guests in a beautifully appointed room — every drawer placed exactly where we reach for it.",
      sig: "M. & C. Whitman",
      loc: "Beacon Hill, MA",
      ref: "Commission No. 041",
    },
    {
      body: "What I expected: a renovation. What we received: an heirloom. The walnut island has the gravity of an antique already.",
      sig: "Dr. R. Aslan",
      loc: "Greenwich, CT",
      ref: "Commission No. 038",
    },
    {
      body: "They listened more than they spoke during our first visit. Six months later the dressing room was finished, and it answered questions we had not yet thought to ask.",
      sig: "J. Park",
      loc: "Tribeca, NY",
      ref: "Commission No. 044",
    },
  ];
  return (
    <section style={{ padding: "100px 56px 110px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 64 }}>
        <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)" }}>06 · Letters</div>
        <h2 className="display" style={{ fontSize: 76, margin: 0, color: "var(--navy)" }}>
          From our <span style={{ fontStyle: "italic", color: "var(--gold)" }}>clients</span>.
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
        {letters.map((l, i) => (
          <article key={i} style={{
            background: "var(--paper)", border: "1px solid var(--rule)", padding: "40px 32px 28px",
            position: "relative", borderRadius: 2,
            transform: i === 1 ? "translateY(12px)" : undefined,
          }}>
            <div className="display ornament" style={{ fontSize: 64, lineHeight: 0.6, color: "var(--gold)", fontStyle: "italic", marginBottom: 18 }}>“</div>
            <p className="display" style={{ fontSize: 22, color: "var(--navy)", lineHeight: 1.35, margin: 0, fontWeight: 400 }}>
              {l.body}
            </p>
            <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid var(--rule)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontFamily: "Fraunces, serif", fontStyle: "italic", fontSize: 22, color: "var(--navy)" }}>{l.sig}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{l.loc}</div>
              </div>
              <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", textAlign: "right" }}>{l.ref}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// ── CTA ──────────────────────────────────────────
function RoyalCTA() {
  return (
    <section style={{ background: "var(--navy)", color: "var(--paper)", padding: "120px 56px 110px", position: "relative", overflow: "hidden" }}>
      <div className="ornament" style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 80% 50%, var(--champagne), transparent 50%)" }}/>
      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champagne)", marginBottom: 28 }}>07 · An invitation</div>
          <h2 className="display" style={{ fontSize: 108, margin: 0, color: "var(--paper)", lineHeight: 0.92 }}>
            Begin your<br/>
            <span style={{ fontStyle: "italic", color: "var(--champagne)" }}>commission</span>.
          </h2>
        </div>
        <div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.55, marginBottom: 28, maxWidth: 460 }}>
            Private consultations are held at our Boston atelier or at your residence. Allow ninety minutes; we will arrive with samples.
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a style={{ padding: "18px 28px", background: "var(--champagne)", color: "var(--navy)", borderRadius: 999, fontSize: 14, letterSpacing: "0.06em", fontWeight: 500 }}>Request a consultation →</a>
            <a style={{ padding: "18px 28px", border: "1px solid var(--champagne)", color: "var(--champagne)", borderRadius: 999, fontSize: 14, letterSpacing: "0.06em" }}>Visit the atelier</a>
          </div>
          <div style={{ marginTop: 32, fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em" }}>
            14 Commerce Wharf · Boston, MA 02109 · By appointment
          </div>
        </div>
      </div>
    </section>
  );
}

function RoyalFooter() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,0.7)", padding: "60px 56px 40px", borderTop: "1px solid rgba(217,185,122,0.18)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div className="display" style={{ fontSize: 28, color: "var(--paper)" }}>Kitchen <span style={{fontStyle:"italic",color:"var(--champagne)"}}>&amp;</span> Klosets</div>
          <div style={{ fontSize: 12, marginTop: 14, lineHeight: 1.7 }}>Bespoke cabinetry & dressing rooms.<br/>Designed in Boston · made in Massachusetts.</div>
        </div>
        {["Atelier", "Commissions", "Contact"].map(t => (
          <div key={t}>
            <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--champagne)", marginBottom: 14 }}>{t}</div>
            <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
              <a>About the studio</a><a>Our craftsmen</a><a>Press</a><a>Journal</a>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", fontSize: 11, letterSpacing: "0.06em" }}>
        <span>© 2026 Kitchen &amp; Klosets · All commissions warranted ten years.</span>
        <span>Made by hand in Massachusetts</span>
      </div>
    </footer>
  );
}

function RoyalHomepage() {
  return (
    <div className="theme-royal" style={royalStyles.wrap}>
      <RoyalNav/>
      <RoyalHero/>
      <RoyalAtelier/>
      <RoyalCommissions/>
      <RoyalProcess/>
      <RoyalLookbook/>
      <RoyalLetters/>
      <RoyalCTA/>
      <RoyalFooter/>
    </div>
  );
}

window.RoyalHomepage = RoyalHomepage;
