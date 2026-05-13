// minimal.jsx — Architectural Gallery wireframe
// off-white + charcoal + brass, gallery-quiet

function ArchNav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 30,
      display: "grid", gridTemplateColumns: "auto 1fr auto",
      alignItems: "center", gap: 60,
      padding: "20px 60px",
      background: "rgba(244,242,236,0.85)",
      backdropFilter: "blur(12px)",
      fontSize: 13,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 10, height: 10, borderRadius: 999, background: "var(--brass)" }}/>
        <span style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>k&amp;k studio</span>
      </div>
      <nav style={{ display: "flex", gap: 36, justifyContent: "center" }}>
        <a>Work</a><a>Materials</a><a>Studio</a><a>Press</a><a>Index</a>
      </nav>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <span style={{ color: "var(--muted)" }}>+1 617 555 0142</span>
        <a style={{
          padding: "10px 16px", background: "var(--charcoal)", color: "var(--bg)",
          fontSize: 12, letterSpacing: "0.02em", fontWeight: 500,
        }}>Book a studio visit</a>
      </div>
    </header>
  );
}

function ArchHero() {
  return (
    <section style={{ padding: "120px 60px 140px", position: "relative" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 12, color: "var(--muted)", marginBottom: 56, letterSpacing: "0.02em" }}>
            <span style={{ width: 24, height: 1, background: "var(--brass)" }}/>
            <span>Index 001 — A cabinetry &amp; closet studio. Boston, est. 2008.</span>
          </div>
          <h1 className="display" style={{ fontSize: 220, margin: 0, color: "var(--charcoal)" }}>
            Built-in.<br/>Built right.
          </h1>
        </div>
        <div style={{ paddingBottom: 24, maxWidth: 280, textAlign: "right" }}>
          <div className="ph" style={{ width: 280, height: 200, marginBottom: 18, background: "linear-gradient(160deg,#e8e3d8,#cdc7b6)" }}>
            <svg width="100%" height="100%" viewBox="0 0 280 200" style={{ position: "absolute", inset: 0 }}>
              <rect x="20" y="20" width="240" height="120" fill="none" stroke="#1B1B1B" strokeWidth="1" opacity="0.4"/>
              <line x1="100" y1="20" x2="100" y2="140" stroke="#1B1B1B" strokeWidth="0.6" opacity="0.4"/>
              <line x1="180" y1="20" x2="180" y2="140" stroke="#1B1B1B" strokeWidth="0.6" opacity="0.4"/>
              <line x1="20" y1="155" x2="260" y2="155" stroke="#A87A3C" strokeWidth="1"/>
              <rect x="20" y="160" width="240" height="30" fill="none" stroke="#1B1B1B" strokeWidth="0.6" opacity="0.4"/>
            </svg>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink)", lineHeight: 1.55 }}>
            We make cabinetry and closets you wouldn't dismantle.<br/>
            <span style={{ color: "var(--muted)" }}>Whole-home millwork on a six-month calendar.</span>
          </div>
        </div>
      </div>

      {/* meta strip */}
      <div style={{
        marginTop: 100, display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}>
        {[
          ["18 yrs", "in practice"],
          ["340+", "completed rooms"],
          ["6 mo.", "average build"],
          ["10 yr", "craftsmanship warranty"],
        ].map(([k, v], i) => (
          <div key={i} style={{
            padding: "28px 24px",
            borderRight: i < 3 ? "1px solid var(--rule)" : "none",
            display: "flex", flexDirection: "column", gap: 6,
          }}>
            <div className="display" style={{ fontSize: 44, color: "var(--charcoal)" }}>{k}</div>
            <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.04em" }}>{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArchIndex() {
  const rows = [
    { n: "01", t: "Kitchens",          d: "Floor-to-ceiling, integrated, fully tailored.",   meta: "↗ 142 built" },
    { n: "02", t: "Closets",           d: "Walk-ins, reach-ins, dressing rooms.",            meta: "↗ 98 built" },
    { n: "03", t: "Pantries",          d: "Butler's pantries & sculleries.",                  meta: "↗ 41 built" },
    { n: "04", t: "Bath vanities",     d: "Solid stone tops, integrated lighting.",           meta: "↗ 64 built" },
    { n: "05", t: "Built-ins",         d: "Libraries, media walls, window seats.",            meta: "↗ 53 built" },
    { n: "06", t: "Mudrooms",          d: "Lockers, benches, dog stations.",                  meta: "↗ 37 built" },
  ];
  const [hover, setHover] = React.useState(null);
  return (
    <section style={{ padding: "100px 60px 100px", borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 56 }}>
        <h2 className="display" style={{ fontSize: 84, margin: 0 }}>What we make.</h2>
        <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Index 002 / Services</div>
      </div>
      <div style={{ position: "relative" }}>
        {rows.map(r => (
          <div key={r.n}
            onMouseEnter={() => setHover(r.n)}
            onMouseLeave={() => setHover(null)}
            style={{
            display: "grid",
            gridTemplateColumns: "80px 1.2fr 2fr 1fr 40px",
            gap: 24, alignItems: "center",
            padding: "28px 12px",
            borderTop: "1px solid var(--rule)",
            position: "relative",
            transition: "background .2s, padding-left .25s",
            background: hover === r.n ? "var(--paper)" : "transparent",
            paddingLeft: hover === r.n ? 28 : 12,
          }}>
            <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.12em" }}>{r.n}</div>
            <div className="display" style={{ fontSize: 40, color: "var(--charcoal)" }}>{r.t}</div>
            <div style={{ fontSize: 15, color: "var(--muted)" }}>{r.d}</div>
            <div style={{ fontSize: 12, color: "var(--brass)", letterSpacing: "0.04em" }}>{r.meta}</div>
            <div style={{ fontSize: 18, color: hover === r.n ? "var(--brass)" : "var(--muted)", transition: "transform .25s, color .2s", transform: hover === r.n ? "translateX(4px)" : undefined }}>→</div>
          </div>
        ))}
        <div style={{ borderTop: "1px solid var(--rule)" }}/>
      </div>
    </section>
  );
}

// ── Material Lab — vertical strip ─────────────────
function ArchMaterialLab() {
  const mats = [
    { code: "OAK-04", n: "Quartersawn White Oak", c: "#c9a874", g: "#9a7d50" },
    { code: "WAL-02", n: "American Black Walnut",  c: "#5b3a22", g: "#3a2414" },
    { code: "ASH-09", n: "Ebonized Ash",            c: "#26211c", g: "#10100f" },
    { code: "LAC-01", n: "Bone Lacquer · Matte",    c: "#efe9dc", g: "#cfc7b3" },
    { code: "LAC-12", n: "Graphite Lacquer · Satin",c: "#272727", g: "#0d0d0d" },
    { code: "STN-06", n: "Calacatta Oro",           c: "#f2ecdf", g: "#b8965a" },
    { code: "MTL-03", n: "Polished Brass",          c: "#cba35b", g: "#7a5b27" },
  ];
  const [i, setI] = React.useState(1);
  const m = mats[i];
  return (
    <section style={{ padding: "100px 0 120px", borderTop: "1px solid var(--rule)", background: "var(--paper)" }}>
      <div style={{ padding: "0 60px 56px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <div>
          <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Index 003 / Material lab</div>
          <h2 className="display" style={{ fontSize: 84, margin: 0 }}>Try on a finish.</h2>
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)", maxWidth: 320, textAlign: "right" }}>
          Hover or click a sample to apply it to the cabinet at right. All samples can be ordered as physical 4×4″ chips at no cost.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr 320px", padding: "0 60px", gap: 40, alignItems: "stretch" }}>
        {/* strip */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {mats.map((mat, idx) => (
            <button key={mat.code} onClick={() => setI(idx)} onMouseEnter={() => setI(idx)} style={{
              display: "grid", gridTemplateColumns: "60px 1fr auto", gap: 16,
              alignItems: "center",
              padding: "12px 14px",
              background: "var(--bg)",
              border: i === idx ? "1px solid var(--charcoal)" : "1px solid var(--rule)",
              cursor: "pointer", fontFamily: "inherit", textAlign: "left",
              transition: "all .2s ease",
            }}>
              <div style={{
                width: 60, height: 60,
                background: `linear-gradient(135deg, ${mat.c}, ${mat.g})`,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.06)",
              }}/>
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.12em" }}>{mat.code}</div>
                <div style={{ fontSize: 13, color: "var(--ink)", marginTop: 2 }}>{mat.n}</div>
              </div>
              <div style={{ fontSize: 14, color: i === idx ? "var(--brass)" : "var(--muted)" }}>{i === idx ? "●" : "○"}</div>
            </button>
          ))}
        </div>

        {/* preview */}
        <div className="ph" style={{
          minHeight: 600, position: "relative",
          background: "linear-gradient(180deg,#f4f2ec 0%,#e8e5dc 100%)",
          border: "1px solid var(--rule)",
        }}>
          {/* cabinet stage — 3 doors with rule line */}
          <div style={{ position: "absolute", inset: "10% 12% 18% 12%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[0,1,2].map(k => (
              <div key={k} style={{
                background: `linear-gradient(${[140, 200, 160][k]}deg, ${m.c} 0%, ${m.g} 100%)`,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1), 0 12px 30px rgba(0,0,0,0.18)",
                position: "relative",
                transition: "background .45s ease",
              }}>
                <div style={{ position: "absolute", inset: "5% 5%", border: "1px solid rgba(255,255,255,0.05)" }}/>
                {/* slim brass handle */}
                <div style={{
                  position: "absolute", top: "50%", transform: "translateY(-50%)",
                  [k === 1 ? "left" : k === 0 ? "right" : "left"]: 10,
                  width: 3, height: 80, background: "linear-gradient(180deg,#A87A3C,#6e4e26)",
                }}/>
              </div>
            ))}
          </div>
          {/* base */}
          <div style={{ position: "absolute", left: "12%", right: "12%", bottom: "12%", height: 4, background: "var(--brass)" }}/>
          {/* shadow on floor */}
          <div style={{ position: "absolute", left: "8%", right: "8%", bottom: "6%", height: 12, background: "radial-gradient(ellipse, rgba(0,0,0,0.18), transparent 70%)" }}/>
          {/* meta corner */}
          <div style={{ position: "absolute", top: 20, left: 20, fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase" }}>
            Preview · {m.code}
          </div>
          <div style={{ position: "absolute", bottom: 20, right: 20, fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>
            <span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 999, background: "var(--brass)", marginRight: 8, animation: "pulse-dot 1.6s ease-in-out infinite" }}/>
            Live render
          </div>
        </div>

        {/* spec column */}
        <div style={{ background: "var(--bg)", border: "1px solid var(--rule)", padding: 28, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 16 }}>Specification</div>
          <div className="display" style={{ fontSize: 36, color: "var(--charcoal)", lineHeight: 1.05 }}>{m.n}</div>
          <div style={{ fontSize: 11, color: "var(--brass)", letterSpacing: "0.12em", marginTop: 6 }}>{m.code}</div>

          <div style={{ marginTop: 28, fontSize: 13, color: "var(--muted)", lineHeight: 1.55 }}>
            Finished in a hand-rubbed satin sealer.<br/>
            Available on doors, drawer fronts, and integrated panels. Pairs with all hardware lines.
          </div>

          <div style={{ marginTop: "auto", display: "grid", gap: 10, paddingTop: 24 }}>
            {[
              ["Application", "Doors · Drawers · Panels"],
              ["Finish",      "Hand-rubbed satin"],
              ["Origin",      "FSC-certified, NE Atlantic"],
              ["Lead time",   "12–14 weeks"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink)", paddingBottom: 8, borderBottom: "1px dashed var(--rule)" }}>
                <span style={{ color: "var(--muted)" }}>{k}</span><span>{v}</span>
              </div>
            ))}
            <a style={{ marginTop: 12, padding: "12px 16px", background: "var(--charcoal)", color: "var(--bg)", textAlign: "center", fontSize: 12, letterSpacing: "0.04em" }}>
              Order physical sample →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Drag-to-compare ──────────────────────────────
function ArchCompare() {
  const [pos, setPos] = React.useState(52);
  const ref = React.useRef(null);
  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, x)));
  };
  const [drag, setDrag] = React.useState(false);
  return (
    <section style={{ padding: "100px 60px 110px", borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48 }}>
        <div>
          <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Index 004 / Before &amp; after</div>
          <h2 className="display" style={{ fontSize: 84, margin: 0 }}>The renovation, slid.</h2>
        </div>
        <div style={{ fontSize: 13, color: "var(--muted)", maxWidth: 300, textAlign: "right" }}>
          A pantry conversion in Cambridge. Drag the handle to wipe between the existing condition and the installed work.
        </div>
      </div>
      <div ref={ref} onMouseMove={drag ? onMove : undefined} onMouseUp={() => setDrag(false)} onMouseLeave={() => setDrag(false)}
        style={{
          position: "relative", height: 560, userSelect: "none",
          overflow: "hidden", cursor: drag ? "grabbing" : "ew-resize",
          border: "1px solid var(--rule)",
        }}>
        {/* before — desaturated, simpler */}
        <div className="ph" style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#bdb7a8,#8c8678)" }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.55 }}>
            <rect x="80" y="40" width="1040" height="420" fill="none" stroke="#1B1B1B" strokeWidth="1"/>
            <line x1="80" y1="280" x2="1120" y2="280" stroke="#1B1B1B" strokeWidth="0.8"/>
            <line x1="600" y1="40" x2="600" y2="460" stroke="#1B1B1B" strokeWidth="0.6"/>
            <text x="100" y="500" fill="#1B1B1B" fontSize="11" letterSpacing="2" fontFamily="Space Grotesk" opacity="0.6">EXISTING — 1924 BUILDER GRADE</text>
          </svg>
          <div style={{ position: "absolute", top: 22, left: 22, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--charcoal)", background: "rgba(255,255,255,0.7)", padding: "6px 12px" }}>Before</div>
        </div>
        {/* after */}
        <div className="ph" style={{
          position: "absolute", inset: 0,
          clipPath: `polygon(0 0, ${pos}% 0, ${pos}% 100%, 0 100%)`,
          background: "linear-gradient(160deg,#f1ecdf,#cdb074)",
        }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" style={{ position: "absolute", inset: 0, opacity: 0.6 }}>
            <rect x="80" y="40" width="280" height="420" fill="none" stroke="#1B1B1B" strokeWidth="1"/>
            <rect x="380" y="40" width="280" height="420" fill="none" stroke="#1B1B1B" strokeWidth="1"/>
            <rect x="680" y="40" width="280" height="420" fill="none" stroke="#1B1B1B" strokeWidth="1"/>
            <rect x="980" y="40" width="140" height="420" fill="none" stroke="#1B1B1B" strokeWidth="1"/>
            <line x1="80" y1="220" x2="1120" y2="220" stroke="#A87A3C" strokeWidth="1.4"/>
            <circle cx="220" cy="280" r="3" fill="#A87A3C"/>
            <circle cx="520" cy="280" r="3" fill="#A87A3C"/>
            <circle cx="820" cy="280" r="3" fill="#A87A3C"/>
            <circle cx="1050" cy="280" r="3" fill="#A87A3C"/>
            <text x="100" y="500" fill="#1B1B1B" fontSize="11" letterSpacing="2" fontFamily="Space Grotesk" opacity="0.7">INSTALLED — RIFT WHITE OAK · BRASS</text>
          </svg>
          <div style={{ position: "absolute", top: 22, right: 22, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--bg)", background: "var(--charcoal)", padding: "6px 12px" }}>After</div>
        </div>
        {/* handle */}
        <div onMouseDown={() => setDrag(true)} style={{
          position: "absolute", top: 0, bottom: 0, left: `${pos}%`,
          width: 2, background: "var(--charcoal)",
          cursor: "ew-resize",
        }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 56, height: 56, borderRadius: 999,
            background: "var(--bg)", color: "var(--charcoal)",
            border: "1.5px solid var(--charcoal)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, letterSpacing: "0.04em",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
          }}>⇆</div>
        </div>
      </div>
    </section>
  );
}

function ArchGallery() {
  const filters = ["All", "Kitchens", "Closets", "Pantries", "Vanities", "Built-ins"];
  const [f, setF] = React.useState("All");
  const items = [
    { t: "Cambridge Kitchen",     tag: "Kitchens",   r: 1, c: 1, color: "#3a2414" },
    { t: "Brookline Dressing Rm.", tag: "Closets",   r: 2, c: 1, color: "#1B1B1B" },
    { t: "Wellesley Pantry",       tag: "Pantries",  r: 1, c: 1, color: "#cdb074" },
    { t: "Chestnut Hill Vanity",   tag: "Vanities",  r: 1, c: 1, color: "#7E8B6F" },
    { t: "Back Bay Library",       tag: "Built-ins", r: 2, c: 1, color: "#26211c" },
    { t: "Beacon Hill Kitchen",    tag: "Kitchens",  r: 1, c: 1, color: "#c9a874" },
    { t: "Newton Mudroom",         tag: "Built-ins", r: 1, c: 1, color: "#5b3a22" },
    { t: "Cohasset Pantry",        tag: "Pantries",  r: 1, c: 1, color: "#A87A3C" },
  ];
  return (
    <section style={{ padding: "100px 60px 100px", borderTop: "1px solid var(--rule)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
        <div>
          <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>Index 005 / Selected work</div>
          <h2 className="display" style={{ fontSize: 84, margin: 0 }}>Recent rooms.</h2>
        </div>
        <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
          {filters.map(x => (
            <button key={x} onClick={() => setF(x)} style={{
              padding: "10px 16px", border: "1px solid",
              borderColor: f === x ? "var(--charcoal)" : "var(--rule)",
              background: f === x ? "var(--charcoal)" : "transparent",
              color: f === x ? "var(--bg)" : "var(--ink)",
              fontFamily: "inherit", fontSize: 12, letterSpacing: "0.04em", cursor: "pointer",
            }}>{x}</button>
          ))}
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridAutoRows: "260px",
        gap: 16,
      }}>
        {items.map((it, i) => {
          const dim = f !== "All" && it.tag !== f;
          return (
            <figure key={i} className="ph" style={{
              margin: 0, gridRow: `span ${it.r}`, gridColumn: `span ${it.c}`,
              background: `linear-gradient(160deg, ${it.color}, #0a0a09)`,
              opacity: dim ? 0.25 : 1, transition: "opacity .3s",
              cursor: "pointer", position: "relative",
            }}>
              <svg width="100%" height="100%" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.4 }}>
                <rect x="20" y="40" width="260" height="120" fill="none" stroke="#A87A3C" strokeWidth="0.6"/>
                <rect x="20" y="180" width="260" height="100" fill="none" stroke="#A87A3C" strokeWidth="0.6"/>
                <line x1="100" y1="40" x2="100" y2="160" stroke="#A87A3C" strokeWidth="0.4"/>
                <line x1="200" y1="40" x2="200" y2="160" stroke="#A87A3C" strokeWidth="0.4"/>
              </svg>
              <div className="filmstrip-meta-overlay" style={{
                position: "absolute", left: 14, bottom: 14, color: "var(--bg)",
              }}>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--concrete)" }}>{it.tag}</div>
                <div style={{ fontSize: 16, marginTop: 4, fontWeight: 500 }}>{it.t}</div>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}

function ArchMethod() {
  const steps = [
    ["Visit", "We meet in your space, take measurements, and listen."],
    ["Draw", "Hand drawings → CAD elevations. Two rounds of revision."],
    ["Spec", "Materials, hardware, lighting, and joinery confirmed in writing."],
    ["Build", "12–14 weeks in our Watertown shop. Photographed monthly."],
    ["Install", "Two-week white-glove install. Final adjustment & polish."],
  ];
  const [active, setActive] = React.useState(0);
  return (
    <section style={{ padding: "100px 60px 100px", borderTop: "1px solid var(--rule)", background: "var(--paper)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", marginBottom: 56, alignItems: "baseline" }}>
        <h2 className="display" style={{ fontSize: 84, margin: 0 }}>The studio method.</h2>
        <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Index 006 / Method</div>
      </div>

      <div style={{ display: "flex", gap: 0, borderTop: "1px solid var(--rule)" }}>
        {steps.map(([t, d], i) => (
          <button key={i} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} style={{
            flex: active === i ? 3 : 1,
            background: active === i ? "var(--charcoal)" : "transparent",
            color: active === i ? "var(--bg)" : "var(--ink)",
            border: "none", borderRight: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
            padding: "32px 28px 28px",
            textAlign: "left",
            cursor: "pointer", transition: "flex .35s ease, background .25s ease",
            fontFamily: "inherit",
          }}>
            <div style={{ fontSize: 11, color: active === i ? "var(--brass)" : "var(--muted)", letterSpacing: "0.18em", marginBottom: 12 }}>
              {String(i + 1).padStart(2, "0")} / {steps.length.toString().padStart(2, "0")}
            </div>
            <div className="display" style={{ fontSize: 44, marginBottom: 16 }}>{t}</div>
            <div style={{
              fontSize: 14, lineHeight: 1.55,
              maxHeight: active === i ? 200 : 0,
              opacity: active === i ? 1 : 0,
              overflow: "hidden", transition: "all .35s ease",
              color: active === i ? "rgba(255,255,255,0.7)" : "var(--muted)",
            }}>{d}</div>
          </button>
        ))}
      </div>
    </section>
  );
}

function ArchTestimonials() {
  const items = [
    { quote: "Restraint is rare. We hired them because of it.",       n: "L. Khoury",    role: "Architect, AIA",     proj: "Cambridge ·  Kitchen" },
    { quote: "Eight months later and the joinery has not moved a millimeter.", n: "B. Olin",      role: "Homeowner",          proj: "Wellesley · Pantry"  },
    { quote: "Treated my project like their own house.",              n: "P. Mendes",    role: "GC, Mendes Build",   proj: "Newton ·  Built-ins" },
    { quote: "The plan answered three problems I hadn't articulated.", n: "S. Howe",      role: "Interior designer",  proj: "Back Bay ·  Library" },
    { quote: "Clean, quiet, exact.",                                   n: "R. Cha",       role: "Homeowner",          proj: "Cohasset ·  Vanity"  },
    { quote: "They build like they're going to live in it.",          n: "D. Akkad",     role: "Architect",          proj: "Brookline ·  Closet" },
  ];
  const row = [...items, ...items];
  return (
    <section style={{ padding: "100px 0 120px", borderTop: "1px solid var(--rule)", overflow: "hidden" }}>
      <div style={{ padding: "0 60px 56px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h2 className="display" style={{ fontSize: 84, margin: 0 }}>On the record.</h2>
        <div style={{ fontSize: 12, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Index 007 / Praise</div>
      </div>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 24, animation: "marquee 60s linear infinite", width: "max-content" }}>
          {row.map((q, i) => (
            <article key={i} style={{
              flex: "0 0 420px", padding: 28,
              background: "var(--paper)", border: "1px solid var(--rule)",
              display: "flex", flexDirection: "column", gap: 24, minHeight: 240,
            }}>
              <div style={{ fontSize: 11, color: "var(--brass)", letterSpacing: "0.18em", textTransform: "uppercase" }}>{q.proj}</div>
              <div className="display" style={{ fontSize: 24, lineHeight: 1.25, color: "var(--charcoal)" }}>
                “{q.quote}”
              </div>
              <div style={{ marginTop: "auto", display: "flex", gap: 14, alignItems: "center" }}>
                <div className="ph" style={{ width: 40, height: 40, borderRadius: 999, background: "linear-gradient(135deg,#8b8275,#3a3530)" }}/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{q.n}</div>
                  <div style={{ fontSize: 11, color: "var(--muted)" }}>{q.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchCTA() {
  return (
    <section style={{ padding: "120px 60px 100px", background: "var(--charcoal)", color: "var(--bg)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "end" }}>
        <h2 className="display" style={{ fontSize: 168, margin: 0, lineHeight: 0.9 }}>
          Plan a<br/>studio visit.
        </h2>
        <div style={{ maxWidth: 360 }}>
          <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.55, marginBottom: 28 }}>
            Walk the shop, hold the materials, sit at the bench. Visits are scheduled Thursday and Friday, by appointment.
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <a style={{ padding: "16px 22px", background: "var(--brass)", color: "var(--charcoal)", textAlign: "center", fontWeight: 600 }}>Book a visit →</a>
            <a style={{ padding: "16px 22px", border: "1px solid rgba(255,255,255,0.3)", color: "var(--bg)", textAlign: "center" }}>Request a quote</a>
          </div>
        </div>
      </div>
      <div style={{
        marginTop: 64, paddingTop: 28,
        borderTop: "1px solid rgba(255,255,255,0.15)",
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
        fontSize: 12, letterSpacing: "0.04em",
      }}>
        {[
          ["Studio",   "84 Pleasant Street\nWatertown, MA"],
          ["Hours",    "Thu–Fri, 10–4\nBy appointment"],
          ["Contact",  "+1 617 555 0142\nhello@k-k.studio"],
          ["Service",  "Greater Boston\nMartha's Vineyard"],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ color: "var(--brass)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 10 }}>{k}</div>
            <div style={{ whiteSpace: "pre-line", color: "rgba(255,255,255,0.7)", lineHeight: 1.55 }}>{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ArchFooter() {
  return (
    <footer style={{ background: "var(--bg)", padding: "40px 60px", display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>
      <span>© 2026 k&amp;k studio · Watertown, Massachusetts</span>
      <span>Index 008 — End of page.</span>
    </footer>
  );
}

function ArchHomepage() {
  return (
    <div className="theme-arch" style={{ width: 1440 }}>
      <ArchNav/>
      <ArchHero/>
      <ArchIndex/>
      <ArchMaterialLab/>
      <ArchCompare/>
      <ArchGallery/>
      <ArchMethod/>
      <ArchTestimonials/>
      <ArchCTA/>
      <ArchFooter/>
    </div>
  );
}

window.ArchHomepage = ArchHomepage;
