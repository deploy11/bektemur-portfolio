// Yil
document.getElementById("year").textContent = new Date().getFullYear();

// Nav — scroll holati va mobil menyu
const nav = document.getElementById("nav");
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 20);
});

toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Reveal on scroll — bo'limlarga animatsiya
const revealEls = document.querySelectorAll(".section, .hero-inner > *");
revealEls.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

// Skill barlar — ko'ringanda to'ladi
const skillsWrap = document.getElementById("skillsWrap");
if (skillsWrap) {
  const skillIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        skillsWrap.querySelectorAll(".skill").forEach((s) => {
          const level = s.getAttribute("data-level");
          s.querySelector(".bar i").style.width = level + "%";
        });
        skillIO.disconnect();
      });
    },
    { threshold: 0.3 }
  );
  skillIO.observe(skillsWrap);
}
