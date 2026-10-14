/* ============================================================
   THE ARD � main.js  | Vanilla JS
   ============================================================ */

/* -- Navbar: scroll opacity & active links --------------- */
const navbar = document.getElementById("navbar");
let lastY = 0;

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  navbar.classList.toggle("scrolled", y > 60);
  lastY = y;
});

/* -- Mobile hamburger ----------------------------------- */
const hamburger = document.getElementById("navHamburger");
const mobileMenu = document.getElementById("navMobile");

hamburger.addEventListener("click", () => {
  const isOpen = hamburger.classList.toggle("open");
  mobileMenu.classList.toggle("open", isOpen);
  navbar.classList.toggle("menu-open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
});

// Close on link click
mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    navbar.classList.remove("menu-open");
    hamburger.setAttribute("aria-expanded", "false");
  });
});

/* -- Smooth anchor scrolling ---------------------------- */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const id = anchor.getAttribute("href");
    if (id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 20;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - offset,
      behavior: "smooth",
    });
  });
});

/* -- Intersection Observer  reveal animations ---------- */
const revealEls = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
);

revealEls.forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 0.1}s`;
  observer.observe(el);
});

/* -- Testimonials slider (guarded) -------------------- */
const testimonials = document.querySelectorAll(".testimonial");
const dots = document.querySelectorAll(".t-dot");
let currentT = 0;
let autoSlide;

if (testimonials.length > 0) {
  function showTestimonial(idx) {
    testimonials[currentT].classList.remove("active");
    if (dots[currentT]) dots[currentT].classList.remove("active");
    currentT = (idx + testimonials.length) % testimonials.length;
    testimonials[currentT].classList.add("active");
    if (dots[currentT]) dots[currentT].classList.add("active");
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      showTestimonial(i);
      resetAutoSlide();
    });
  });

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(() => showTestimonial(currentT + 1), 7000);
  }
  resetAutoSlide();
}

/* -- What We Offer: Stacked Cards Deck Engine ----------- */
(function initOfferStack() {
  const stackWrapper = document.getElementById("offerStackWrapper");
  const stack = document.getElementById("offerStack");
  if (!stack || !stackWrapper) return;

  const cards = Array.from(stack.querySelectorAll(".offer-card"));
  const offerDots = document.querySelectorAll(".offer-dot");
  const total = cards.length;
  let activeIndex = 0;
  let autoTimer = null;
  const AUTO_INTERVAL = 4500;
  let isDismissing = false;

  function updatePositions() {
    cards.forEach((card, i) => {
      const pos = (i - activeIndex + total) % total;
      card.classList.remove("dismissing");

      if (pos === 0) {
        card.setAttribute("data-pos", "0");
        card.setAttribute("tabindex", "0");
      } else if (pos === 1) {
        card.setAttribute("data-pos", "1");
        card.setAttribute("tabindex", "-1");
      } else if (pos === 2) {
        card.setAttribute("data-pos", "2");
        card.setAttribute("tabindex", "-1");
      } else {
        card.setAttribute("data-pos", "hidden");
        card.setAttribute("tabindex", "-1");
      }
    });

    offerDots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
    isDismissing = false;
  }

  function dismissCard() {
    if (isDismissing) return;
    const frontCard = stack.querySelector('.offer-card[data-pos="0"]');
    if (!frontCard) return;

    isDismissing = true;
    frontCard.classList.add("dismissing");

    setTimeout(() => {
      activeIndex = (activeIndex + 1) % total;
      updatePositions();
    }, 280);
  }

  function startAutoAdvance() {
    stopAutoAdvance();
    autoTimer = setInterval(dismissCard, AUTO_INTERVAL);
  }

  function stopAutoAdvance() {
    if (autoTimer) {
      clearInterval(autoTimer);
      autoTimer = null;
    }
  }

  // Dismiss by User: Close button, Card click, and Background Card selection
  cards.forEach((card) => {
    const closeBtn = card.querySelector(".offer-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        dismissCard();
        startAutoAdvance();
      });
    }

    card.addEventListener("click", (e) => {
      if (e.target.closest("a") || e.target.closest(".offer-close")) return;
      
      const pos = card.getAttribute("data-pos");
      if (pos === "0") {
        // Tapping the front card dismisses it to reveal next
        dismissCard();
        startAutoAdvance();
      } else if (pos === "1" || pos === "2") {
        // Tapping a peeking background card brings it directly to the front
        const cardIdx = parseInt(card.getAttribute("data-index"), 10);
        if (!isNaN(cardIdx)) {
          activeIndex = cardIdx;
          updatePositions();
          startAutoAdvance();
        }
      }
    });
  });

  // Dots direct navigation
  offerDots.forEach((dot, idx) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      if (idx !== activeIndex && !isDismissing) {
        activeIndex = idx;
        updatePositions();
        startAutoAdvance();
      }
    });
  });

  // Pause on hover
  stackWrapper.addEventListener("mouseenter", stopAutoAdvance);
  stackWrapper.addEventListener("mouseleave", startAutoAdvance);

  // Mobile Touch Swipe
  let startX = 0;
  let startY = 0;
  stack.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      stopAutoAdvance();
    },
    { passive: true },
  );

  stack.addEventListener(
    "touchend",
    (e) => {
      const diffX = e.changedTouches[0].clientX - startX;
      const diffY = e.changedTouches[0].clientY - startY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        dismissCard();
      }
      startAutoAdvance();
    },
    { passive: true },
  );

  // Initialize
  updatePositions();
  startAutoAdvance();
})();

/* -- 3D Ticket Interactive Mouse Tilt Engine -------------- */
(function initTicket3DTilt() {
  const wrappers = document.querySelectorAll(".ticket-wrapper");
  if (!wrappers.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  wrappers.forEach((wrapper) => {
    const card = wrapper.querySelector(".ticket");
    if (!card) return;

    let rafId = null;

    wrapper.addEventListener("mousemove", (e) => {
      const rect = wrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Realistic tactile 3D tilt (-6deg to +6deg)
      const rotateX = -((y - centerY) / centerY) * 6;
      const rotateY = ((x - centerX) / centerX) * 6;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        card.style.transform = `perspective(1200px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(10px)`;
      });
    });

    wrapper.addEventListener("mouseleave", () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.style.transition = "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s ease, border-color 0.35s ease";
      card.style.transform = "";
      setTimeout(() => {
        card.style.transition = "";
      }, 450);
    });
  });
})();

/* -- Hero Typewriter Effect (Courier Prime) ------------- */
(function initHeroTypewriter() {
  const line1El = document.getElementById("typewriterLine1");
  const line2El = document.getElementById("typewriterLine2");
  if (!line1El || !line2El) return;

  const text1 = line1El.textContent.trim();
  const text2 = line2El.textContent.trim();

  // If prefers-reduced-motion, leave static text
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Clear text for typing effect
  line1El.textContent = "";
  line2El.textContent = "";

  const cursor = document.createElement("span");
  cursor.className = "typewriter-cursor";
  cursor.setAttribute("aria-hidden", "true");
  cursor.textContent = "|";

  line1El.appendChild(cursor);

  let charIndex1 = 0;
  let charIndex2 = 0;

  function typeLine1() {
    if (charIndex1 < text1.length) {
      cursor.remove();
      line1El.textContent += text1.charAt(charIndex1);
      line1El.appendChild(cursor);
      charIndex1++;
      setTimeout(typeLine1, 38);
    } else {
      setTimeout(() => {
        cursor.remove();
        line2El.appendChild(cursor);
        typeLine2();
      }, 350);
    }
  }

  function typeLine2() {
    if (charIndex2 < text2.length) {
      cursor.remove();
      line2El.textContent += text2.charAt(charIndex2);
      line2El.appendChild(cursor);
      charIndex2++;
      setTimeout(typeLine2, 34);
    }
  }

  // Start typing after initial hero reveal
  setTimeout(typeLine1, 750);
})();

/* -- Console branding ----------------------------------- */
console.log(
  "%c The ARD ",
  "background:#211C18;color:#C9A45C;font-size:18px;font-weight:700;padding:6px 14px;border-radius:4px;",
);
console.log(
  "%cBeyond the obvious. Decode Egypt.",
  "color:#756B5D;font-size:12px;",
);
