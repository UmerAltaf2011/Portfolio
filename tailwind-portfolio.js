  
    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");

    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;

      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;

      cursorRing.style.left = `${x}px`;
      cursorRing.style.top = `${y}px`;
    });


    const interactiveEls = document.querySelectorAll("a, button, .glass, span");

    interactiveEls.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorRing.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("cursor-hover");
      });
    });

  
    const neonText = document.querySelectorAll(".neon-text");

    neonText.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorRing.classList.add("cursor-hover");
      });
      el.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("cursor-hover");
      });
    });

   
    document.addEventListener("click", () => {
      cursorRing.classList.add("click-grow");
      setTimeout(() => {
        cursorRing.classList.remove("click-grow");
      }, 300);
    });
  
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

  skillCards.forEach(el => {
    observer.observe(el);
  });
var loader= document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
    

})

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

