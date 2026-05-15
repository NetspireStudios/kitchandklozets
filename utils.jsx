// utils.jsx — reveal, counter, image, parallax, drawer

// IntersectionObserver-based reveal — adds .in-view when element enters viewport
function useReveal(opts = {}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          if (opts.once !== false) io.disconnect();
        } else if (opts.once === false) {
          el.classList.remove("in-view");
        }
      });
    }, { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px 0px -8% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// Animated counter that starts when in view
function Counter({ to, from = 0, duration = 1800, suffix = "", prefix = "", format }) {
  const [v, setV] = React.useState(from);
  const ref = React.useRef(null);
  const started = React.useRef(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setV(from + (to - from) * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, from, duration]);
  const display = format ? format(v) : Math.round(v).toLocaleString();
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

// Image w/ fade-in once loaded; if it fails, keeps gradient parent showing
function Img({ src, alt, sizes = "100vw", w = 1200, q = 80 }) {
  const [loaded, setLoaded] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  // Three accepted shapes:
  //   1. Absolute URL          — used directly
  //   2. Local /assets path    — used directly (no CDN params)
  //   3. Unsplash photo id     — formatted into a CDN URL
  const url = src.startsWith("http")
    ? src
    : src.startsWith("/")
      ? src
      : `https://images.unsplash.com/photo-${src}?w=${w}&q=${q}&auto=format&fit=crop`;
  return failed ? null : (
    <img
      src={url}
      alt={alt || ""}
      sizes={sizes}
      loading="lazy"
      onLoad={(e) => { e.currentTarget.classList.add("loaded"); setLoaded(true); }}
      onError={() => setFailed(true)}
    />
  );
}

// Mouse parallax: returns {x, y} in [-1, 1] for a referenced element
function useMouseParallax(strength = 1) {
  const ref = React.useRef(null);
  const [m, setM] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = null;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const nx = ((e.clientX - r.left) / r.width  - 0.5) * 2 * strength;
      const ny = ((e.clientY - r.top)  / r.height - 0.5) * 2 * strength;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setM({ x: nx, y: ny }));
    };
    const onLeave = () => setM({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return [ref, m];
}

// Sticky nav scrolled-state hook
function useScrolled(threshold = 16) {
  const [scrolled, setS] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setS(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// Lock body scroll while drawer is open
function useScrollLock(locked) {
  React.useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [locked]);
}

Object.assign(window, { useReveal, Counter, Img, useMouseParallax, useScrolled, useScrollLock });
