// middle.jsx — Wood Library, Services, By the Bench (counters)

function WoodLibrary() {
  const [pick, setPick] = React.useState(WOODS[0]);
  const [changing, setChanging] = React.useState(false);
  const headRef = useReveal();

  const choose = (w) => {
    if (w.n === pick.n) return;
    setChanging(true);
    setTimeout(() => {
      setPick(w);
      requestAnimationFrame(() => setChanging(false));
    }, 200);
  };

  return (
    <section className="wood-section" id="wood">
      <div className="container">
        <div className="section-head" ref={headRef} data-reveal>
          <div>
            <div className="eyebrow" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 32, height: 1, background: "var(--clay)", display: "inline-block" }}/>
              Materials · the wood
            </div>
            <h2 className="display">The wood library.</h2>
          </div>
          <p className="hint">
            Tap a door to feel out the finish. All six species come from FSC-certified mills within 300 miles of the shop.
          </p>
        </div>

        <div className="wood-grid">
          <div className="door-grid" data-reveal>
            {WOODS.map((w, idx) => (
              <button key={w.n}
                className={`door ${pick.n === w.n ? "active" : ""}`}
                onClick={() => choose(w)}
                aria-label={`Select ${w.n}`}
                style={{ "--delay": `${idx * 60}ms` }}>
                <div className="door-tex" style={{ background: `linear-gradient(160deg, ${w.c}, ${w.g})` }}/>
                <svg className="door-grain" viewBox="0 0 100 130" preserveAspectRatio="xMidYMid slice">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <path key={i}
                      d={`M 0 ${12 + i * 14} Q 50 ${9 + i * 14 + (i % 2 ? 2 : -2)} 100 ${15 + i * 14}`}
                      stroke="#FAF4E8" strokeWidth="0.45" fill="none"/>
                  ))}
                </svg>
                <div className="door-panel"/>
                <div className="door-handle"/>
                <div className="door-label">
                  <span>{w.n}</span>
                  {pick.n === w.n && <span style={{ color: "var(--clay)" }}>●</span>}
                </div>
              </button>
            ))}
          </div>

          <div className="spec-card" data-reveal>
            <div className="spec-head">
              <div>
                <span className="eyebrow">Selected · solid hardwood</span>
                <h3 className={`display ${changing ? "changing" : ""}`}>{pick.n}</h3>
                <div className="spec-latin">{pick.latin}</div>
              </div>
              <div className="spec-swatch" style={{ background: `linear-gradient(135deg, ${pick.c}, ${pick.g})` }}/>
            </div>

            <p className="spec-desc">
              Finished in {pick.finish.toLowerCase()}, no fillers or stains used. The natural color deepens with use; most clients keep the wood unconditioned for the first two years.
            </p>

            <div className="spec-meta">
              <div><div className="k">Hardness</div><div className="v">{pick.janka} Janka</div></div>
              <div><div className="k">Source</div><div className="v">FSC certified · NE</div></div>
              <div><div className="k">Finish</div><div className="v">{pick.finish}</div></div>
              <div><div className="k">Lead time</div><div className="v">{pick.lead}</div></div>
            </div>

            <div className="spec-actions">
              <a className="btn btn-walnut">Mail me a sample</a>
              <a className="btn btn-ghost">See it built</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">What we build</span>
            <h2 className="display">Custom kitchens, closets &amp; built-ins.</h2>
            <p style={{ marginTop: 14, color: "var(--muted)", fontSize: "var(--t-body)", maxWidth: 520 }}>
              Shaker, inset, and slab doors in walnut, white oak, cherry, maple, ash, or reclaimed chestnut. Designed and built for Northern Ontario homes.
            </p>
          </div>
          <p className="hint">Every cabinet leaves through the same set of doors. Same crew, same materials, same warranty.</p>
        </div>

        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <article key={s.t} className="service-card" data-reveal style={{ "--delay": `${i * 60}ms` }}>
              <div className="service-thumb ph" style={{ background: `linear-gradient(160deg, ${["#3B2A1E","#5B4434","#7a3a23","#7E8B6F","#26211c","#B85A3F"][i]}, #1c130a)` }}>
                <Img src={s.img} alt={`Custom ${s.t.toLowerCase()} by Kitch and Klozets, Sudbury ON`} w={600}/>
                <CabinetOverlay opacity={0.32}/>
              </div>
              <div className="service-head">
                <span className="service-num">0{i + 1}</span>
                <span className="service-count">{s.n} built</span>
              </div>
              <h3 className="display">{s.t}</h3>
              <p>{s.d}</p>
              <div className="service-foot">
                <span>See projects</span>
                <span className="service-arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ByTheBench() {
  return (
    <section className="numbers" id="numbers">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2 className="display">By the numbers.</h2>
          <p className="hint">
            Eight RTA finish lines plus finished kitchens from Oppein, shipped from the GTA. Open 7 days a week for sales conversations.
          </p>
        </div>
        <div className="numbers-grid" data-reveal>
          {STATS.map((s, i) => (
            <div className="num-cell" key={i}>
              <div className="display v">
                <Counter to={s.v}/>{s.suf}
              </div>
              <div className="l">{s.l}</div>
              <div className="s">{s.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WoodLibrary, Services, ByTheBench });
