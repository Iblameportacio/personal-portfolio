/* ===== CURSOR ===== */
const cur = document.getElementById("cursor");
const ring = document.getElementById("cursorRing");
document.addEventListener("mousemove", (e) => {
  cur.style.left = e.clientX + "px";
  cur.style.top = e.clientY + "px";
  ring.style.left = e.clientX + "px";
  ring.style.top = e.clientY + "px";
});
document
  .querySelectorAll("a,button,.skill-card,.proj-card,.stat-card")
  .forEach((el) => {
    el.addEventListener("mouseenter", () => ring.classList.add("hover"));
    el.addEventListener("mouseleave", () => ring.classList.remove("hover"));
  });

/* ===== HAMBURGER ===== */
const ham = document.getElementById("hamburger");
const mob = document.getElementById("mobileMenu");
ham.addEventListener("click", () => {
  ham.classList.toggle("open");
  mob.classList.toggle("open");
});
mob.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    ham.classList.remove("open");
    mob.classList.remove("open");
  });
});

/* ===== ACTIVE NAV ===== */
const sections = document.querySelectorAll("section[id], div[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((a) => {
          a.classList.toggle(
            "active",
            a.getAttribute("href") === "#" + e.target.id,
          );
        });
      }
    });
  },
  { threshold: 0.4 },
);
sections.forEach((s) => observer.observe(s));

/* ===== SCROLL REVEAL ===== */
const revealEls = document.querySelectorAll(".reveal");
const revObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);
revealEls.forEach((el) => revObs.observe(el));

/* ===== SCROLL TO TOP BTN ===== */
const topBtn = document.getElementById("top-btn");
window.addEventListener("scroll", () => {
  topBtn.classList.toggle("show", window.scrollY > 400);
});

/* ===== TYPEWRITER EFFECT ===== */
const phrases = [
  "math.solve(∞)",
  "go build .",
  "cargo run",
  'git commit -m "done"',
  "SELECT * FROM ideas;",
];
let pi = 0,
  ci = 0,
  deleting = false;
const target = document.getElementById("typeTarget");
function typeLoop() {
  const phrase = phrases[pi];
  if (!deleting) {
    target.textContent = phrase.slice(0, ++ci);
    if (ci === phrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    target.textContent = phrase.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 45 : 90);
}
typeLoop();
