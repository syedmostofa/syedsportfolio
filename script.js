// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// ECG trace: a flat line with a heartbeat complex every 200px
(() => {
  const beat = "l60 0 l8 -8 l8 8 l10 0 l6 14 l8 -66 l8 62 l6 -10 l14 0 l10 -12 l10 12 l52 0";
  const d = "M0 70 " + Array(6).fill(beat).join(" ");
  document.getElementById("ecg-path").setAttribute("d", d);
  document.getElementById("ecg-pulse").setAttribute("d", d);
})();

// Fade sections in as they scroll into view (content stays visible without JS)
(() => {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.documentElement.classList.add("js-reveal");
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );
  els.forEach((el) => io.observe(el));
})();
