// mobile.jsx — mobile peeks for each theme

function RoyalMobile() {
  return (
    <div className="theme-royal" style={{ width: 390, background: "var(--bg)" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid var(--rule)" }}>
        <span className="display" style={{ fontSize: 18, color: "var(--navy)", fontWeight: 500 }}>K <span style={{ fontStyle: "italic", color: "var(--gold)" }}>&amp;</span> K</span>
        <span style={{ fontSize: 18, color: "var(--navy)" }}>≡</span>
      </header>
      <section style={{ padding: "32px 20px 24px" }}>
        <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 18 }}>No. 047 / Vol. XVII</div>
        <h1 className="display" style={{ fontSize: 56, margin: 0, color: "var(--navy)", lineHeight: 0.95 }}>
          Heirloom<br/>kitchens<br/><span style={{ fontStyle: "italic", color: "var(--gold)" }}>&amp;</span> dressing<br/>rooms.
        </h1>
        <div className="ph" style={{ marginTop: 28, height: 340, background: "linear-gradient(160deg,#16264a,#0a1428)" }}>
          <svg width="100%" height="100%" viewBox="0 0 350 340" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.6 }}>
            <rect x="30" y="30" width="290" height="140" fill="none" stroke="#D9B97A" strokeWidth="1"/>
            <line x1="125" y1="30" x2="125" y2="170" stroke="#D9B97A" strokeWidth="0.6"/>
            <line x1="220" y1="30" x2="220" y2="170" stroke="#D9B97A" strokeWidth="0.6"/>
            <line x1="30" y1="180" x2="320" y2="180" stroke="#D9B97A" strokeWidth="1"/>
            <rect x="30" y="200" width="290" height="120" fill="none" stroke="#D9B97A" strokeWidth="1"/>
            <line x1="175" y1="200" x2="175" y2="320" stroke="#D9B97A" strokeWidth="0.6"/>
          </svg>
          <span className="lbl">No. 047 · Brookline</span>
        </div>
        <a style={{ display: "block", marginTop: 24, padding: "16px 22px", background: "var(--navy)", color: "var(--champagne)", borderRadius: 999, fontSize: 13, textAlign: "center", letterSpacing: "0.06em" }}>Begin a commission →</a>
      </section>
      <section style={{ padding: "32px 20px", borderTop: "1px solid var(--rule)", background: "var(--paper)" }}>
        <div style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>03 · Commissions</div>
        {["Kitchens","Dressing rooms","Pantries","Libraries"].map((t, i) => (
          <div key={t} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 0", borderBottom: i < 3 ? "1px solid var(--rule)" : "none" }}>
            <div>
              <div className="display" style={{ fontSize: 14, fontStyle: "italic", color: "var(--gold)" }}>{String(i+1).padStart(2,"0")}</div>
              <div className="display" style={{ fontSize: 28, color: "var(--navy)" }}>{t}</div>
            </div>
            <span style={{ color: "var(--gold)" }}>→</span>
          </div>
        ))}
      </section>
      <section style={{ padding: "32px 20px", background: "var(--navy)", color: "var(--paper)" }}>
        <div className="display" style={{ fontSize: 64, lineHeight: 0.9 }}>
          Begin your<br/><span style={{ fontStyle: "italic", color: "var(--champagne)" }}>commission</span>.
        </div>
        <a style={{ display: "block", marginTop: 28, padding: "16px 22px", background: "var(--champagne)", color: "var(--navy)", borderRadius: 999, textAlign: "center", fontSize: 13, fontWeight: 600 }}>Request a consultation</a>
      </section>
    </div>
  );
}

function ArchMobile() {
  return (
    <div className="theme-arch" style={{ width: 390, background: "var(--bg)" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--brass)" }}/>
          <span style={{ fontSize: 13, fontWeight: 600 }}>k&amp;k studio</span>
        </div>
        <span style={{ fontSize: 13 }}>menu</span>
      </header>
      <section style={{ padding: "28px 20px 32px" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 11, color: "var(--muted)", marginBottom: 24 }}>
          <span style={{ width: 18, height: 1, background: "var(--brass)" }}/>
          Index 001 — Boston, est. 2008
        </div>
        <h1 className="display" style={{ fontSize: 76, margin: 0, color: "var(--charcoal)", lineHeight: 0.88 }}>
          Built-in.<br/>Built right.
        </h1>
        <div className="ph" style={{ marginTop: 28, height: 220, background: "linear-gradient(160deg,#e8e3d8,#cdc7b6)" }}>
          <svg width="100%" height="100%" viewBox="0 0 350 220" preserveAspectRatio="xMidYMid slice">
            <rect x="20" y="20" width="310" height="140" fill="none" stroke="#1B1B1B" strokeWidth="0.8" opacity="0.4"/>
            <line x1="130" y1="20" x2="130" y2="160" stroke="#1B1B1B" strokeWidth="0.5" opacity="0.4"/>
            <line x1="240" y1="20" x2="240" y2="160" stroke="#1B1B1B" strokeWidth="0.5" opacity="0.4"/>
            <line x1="20" y1="180" x2="330" y2="180" stroke="#A87A3C" strokeWidth="1"/>
          </svg>
        </div>
      </section>
      <section style={{ padding: "28px 20px", borderTop: "1px solid var(--rule)" }}>
        <h2 className="display" style={{ fontSize: 36, margin: "0 0 20px" }}>What we make.</h2>
        {["Kitchens","Closets","Pantries","Built-ins"].map((t, i) => (
          <div key={t} style={{ display: "grid", gridTemplateColumns: "30px 1fr auto", padding: "14px 0", borderTop: "1px solid var(--rule)", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 10, color: "var(--muted)" }}>0{i+1}</span>
            <span className="display" style={{ fontSize: 24, color: "var(--charcoal)" }}>{t}</span>
            <span style={{ color: "var(--brass)" }}>→</span>
          </div>
        ))}
      </section>
      <section style={{ padding: "32px 20px", background: "var(--charcoal)", color: "var(--bg)" }}>
        <h2 className="display" style={{ fontSize: 64, margin: 0, lineHeight: 0.9 }}>Plan a<br/>studio visit.</h2>
        <a style={{ display: "block", marginTop: 24, padding: "14px 18px", background: "var(--brass)", color: "var(--charcoal)", textAlign: "center", fontWeight: 600 }}>Book a visit →</a>
      </section>
    </div>
  );
}

function CraftMobile() {
  return (
    <div className="theme-craft" style={{ width: 390, background: "var(--bg)" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 5, background: "var(--walnut)", color: "var(--cream)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>k&amp;</div>
          <span style={{ fontWeight: 700, fontSize: 13, color: "var(--walnut)" }}>Kitchen &amp; Klosets</span>
        </div>
        <span style={{ fontSize: 18, color: "var(--walnut)" }}>≡</span>
      </header>
      <section style={{ padding: "28px 20px 24px" }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--clay)" }}/>
          <span style={{ fontSize: 11, color: "var(--clay)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600 }}>Family-run, Watertown</span>
        </div>
        <h1 className="display" style={{ fontSize: 52, margin: 0, color: "var(--walnut)", lineHeight: 0.95 }}>
          Cabinets your<br/>
          <span style={{ color: "var(--clay)" }}>grandkids</span> will<br/>
          still slam.
        </h1>
        {/* one polaroid */}
        <figure style={{
          margin: "32px auto 0", maxWidth: 280,
          background: "var(--cream)", padding: "12px 12px 36px",
          boxShadow: "0 12px 24px rgba(42,31,21,0.18)",
          transform: "rotate(-3deg)",
        }}>
          <div className="ph" style={{ height: 200, background: "linear-gradient(160deg,#3B2A1E,#1c130a)" }}>
            <svg width="100%" height="100%" viewBox="0 0 280 200" preserveAspectRatio="xMidYMid slice" style={{ opacity: 0.45 }}>
              <rect x="20" y="20" width="240" height="100" fill="none" stroke="#FAF4E8"/>
              <rect x="20" y="130" width="240" height="60" fill="none" stroke="#FAF4E8"/>
            </svg>
          </div>
          <figcaption style={{ marginTop: 10, fontFamily: "'Caveat', cursive", fontSize: 16, color: "var(--walnut)", textAlign: "center" }}>
            No. 0142 — Brookline walnut
          </figcaption>
        </figure>
        <a style={{ display: "block", marginTop: 28, padding: "14px 20px", background: "var(--walnut)", color: "var(--cream)", borderRadius: 10, textAlign: "center", fontWeight: 600 }}>Start a project →</a>
      </section>
      <section style={{ padding: "28px 20px", background: "var(--walnut)", color: "var(--cream)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[["18","Years"],["340+","Rooms"],["6","Cabinetmakers"],["10yr","Warranty"]].map(([v, l]) => (
            <div key={l}>
              <div className="display" style={{ fontSize: 48, color: "var(--clay)", lineHeight: 0.95 }}>{v}</div>
              <div style={{ fontSize: 12, color: "rgba(250,244,232,0.65)", marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: "24px 20px" }}>
        <div style={{ background: "var(--clay)", color: "var(--cream)", padding: 24, borderRadius: 14 }}>
          <div className="display" style={{ fontSize: 30, lineHeight: 1 }}>Bring us a wishlist.</div>
          <a style={{ display: "block", marginTop: 16, padding: "12px 18px", background: "var(--walnut)", borderRadius: 10, textAlign: "center", fontWeight: 700, fontSize: 14 }}>Book consultation</a>
        </div>
      </section>
    </div>
  );
}

window.RoyalMobile = RoyalMobile;
window.ArchMobile = ArchMobile;
window.CraftMobile = CraftMobile;
