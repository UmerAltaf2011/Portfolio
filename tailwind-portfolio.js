const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");

// Ensure proper styles are applied
cursorDot.style.position = "fixed";
cursorRing.style.position = "fixed";
cursorDot.style.pointerEvents = "none";
cursorRing.style.pointerEvents = "none";
cursorDot.style.transform = "translate(-50%, -50%)";
cursorRing.style.transform = "translate(-50%, -50%)";
cursorDot.style.zIndex = "9999";
cursorRing.style.zIndex = "9999";

// Handle cursor movement (scroll-safe)
document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  cursorDot.style.left = `${x}px`;
  cursorDot.style.top = `${y}px`;

  cursorRing.style.left = `${x}px`;
  cursorRing.style.top = `${y}px`;
});

// Hover effect on interactive elements
const interactiveEls = document.querySelectorAll("a, button, .glass, span");
interactiveEls.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursorRing.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    cursorRing.classList.remove("cursor-hover");
  });
});

// Neon text hover
const neonText = document.querySelectorAll(".neon-text");
neonText.forEach(el => {
  el.addEventListener("mouseenter", () => {
    cursorRing.classList.add("cursor-hover");
  });
  el.addEventListener("mouseleave", () => {
    cursorRing.classList.remove("cursor-hover");
  });
});

// Click grow effect
document.addEventListener("click", () => {
  cursorRing.classList.add("click-grow");
  setTimeout(() => {
    cursorRing.classList.remove("click-grow");
  }, 300);
});

// Scroll animations for skill cards
const skillCards = document.querySelectorAll('.skill-pill');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, {
  threshold: 0
});
skillCards.forEach(el => observer.observe(el));

// Preloader fade-out
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

// Theme toggle
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const toggle = document.getElementById('theme-toggle');
const body = document.body;
let isLight = false;

toggle.addEventListener('click', () => {
  isLight = !isLight;
  body.classList.toggle('light-mode', isLight);
  sunIcon.classList.toggle('hidden', isLight);
  moonIcon.classList.toggle('hidden', !isLight);
});

// Scroll progress bar
const scrollBar = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + '%';
});

// Final preloader animation
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("main-content");
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = "none";
    content.classList.remove("opacity-0", "scale-95");
    content.classList.add("opacity-100", "scale-100");
  }, 500);
});
