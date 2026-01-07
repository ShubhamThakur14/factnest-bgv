document.addEventListener("DOMContentLoaded", () => {

  /* ================= FADE-UP ANIMATION ================= */
  const elements = document.querySelectorAll(".fade-up");

  if (elements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

  /* ================= MOBILE MENU (HAMBURGER) ================= */
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();

      const isOpen = mobileMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");

      document.body.classList.toggle("menu-open", isOpen);
      document.documentElement.classList.toggle("menu-open", isOpen);
    });
  }

  /* ================= CLOSE MOBILE MENU ON OUTSIDE CLICK ================= */
  document.addEventListener("click", (e) => {
    if (
      mobileMenu &&
      menuToggle &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      mobileMenu.classList.remove("active");
      menuToggle.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    }
  });

  /* ================= DESKTOP SERVICES DROPDOWN ================= */
  const desktopDropdown = document.querySelector(".desktop-dropdown");

  if (desktopDropdown) {
    desktopDropdown.addEventListener("click", (e) => {
      e.stopPropagation();
      desktopDropdown.classList.toggle("active");
    });

    document.addEventListener("click", () => {
      desktopDropdown.classList.remove("active");
    });
  }

  /* ================= MOBILE SERVICES DROPDOWN ================= */
  const mobileDropdownToggle = document.querySelector(
    ".mobile-dropdown .dropdown-toggle"
  );

  if (mobileDropdownToggle) {
    mobileDropdownToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      mobileDropdownToggle.parentElement.classList.toggle("active");
    });
  }

 /* ================= SERVICES SLIDER (FINAL & WORKING) ================= */

const slider = document.getElementById("servicesSlider");
const prevBtn = document.querySelector(".services-arrow.prev");
const nextBtn = document.querySelector(".services-arrow.next");
const dotsWrap = document.getElementById("servicesDots");

if (slider && dotsWrap) {
  const cards = slider.querySelectorAll(".service-card");
  let currentIndex = 0;
  const gap = 32;

  /* ===== CREATE DOTS ===== */
  dotsWrap.innerHTML = "";
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "dot";
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  const dots = dotsWrap.querySelectorAll(".dot");

  /* ===== UPDATE DOTS ===== */
  function updateDots() {
    dots.forEach(d => d.classList.remove("active"));
    dots[currentIndex]?.classList.add("active");
  }

  /* ===== UPDATE ARROWS (IMPORTANT PART) ===== */
  function updateArrows() {
    prevBtn?.classList.toggle("disabled", currentIndex === 0);
    nextBtn?.classList.toggle(
      "disabled",
      currentIndex === cards.length - 1
    );
  }

  /* ===== GO TO SLIDE ===== */
  function goTo(i) {
    const cardWidth = cards[0].offsetWidth + gap;

    slider.scrollTo({
      left: cardWidth * i,
      behavior: "smooth"
    });

    currentIndex = i;
    updateDots();
    updateArrows();
  }

  /* ===== ARROW EVENTS ===== */
  nextBtn?.addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
      goTo(currentIndex + 1);
    }
  });

  prevBtn?.addEventListener("click", () => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1);
    }
  });

  /* ===== SYNC ON MANUAL SCROLL ===== */
  slider.addEventListener("scroll", () => {
    const cardWidth = cards[0].offsetWidth + gap;
    const i = Math.round(slider.scrollLeft / cardWidth);

    if (i !== currentIndex) {
      currentIndex = i;
      updateDots();
      updateArrows();
    }
  });

  /* ===== INITIAL STATE ===== */
  updateArrows();
}

  /* ================= PREVENT SCROLL WHEN MENU OPEN ================= */
  document.addEventListener(
    "touchmove",
    (e) => {
      if (document.body.classList.contains("menu-open")) {
        e.preventDefault();
      }
    },
    { passive: false }
  );

  /* ================= CONTACT FORM ================= */
const form = document.getElementById("contactForm");
const contactWrapper = document.querySelector(".contact-wrapper");
const contactThankYou = document.getElementById("contactThankYou");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: form.querySelector('input[placeholder="Your Name"]').value,
      email: form.querySelector('input[placeholder="Your Email"]').value,
      company: form.querySelector('input[placeholder="Company Name"]').value,
      message: form.querySelector('textarea').value
    };

    fetch("https://script.google.com/macros/s/AKfycbwfdN24j8kN9pSq8paBlk0zM_s82ALqfCMEFCuy298tO27w7dwQPfppwZwD33jnWDJ1Yw/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(() => {
      // ❌ Hide left + right both
      if (contactWrapper) {
        contactWrapper.style.display = "none";
      }

      // ✅ Show full-width thank you
      if (contactThankYou) {
        contactThankYou.style.display = "block";
        contactThankYou.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      form.reset();
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });
  });
}

/* ================= CLOSE MENU ON LINK CLICK (NO SCROLL JUMP) ================= */
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuToggle.classList.remove("active");

    // scroll lock hatao
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");
  });
});



});

/* ================= CONTACT MODAL (GLOBAL – ALL PAGES) ================= */
document.addEventListener("DOMContentLoaded", () => {

  const contactSection = document.getElementById("contact");
  const contactBtns = document.querySelectorAll("#contactBtn");
  const contactCloseBtn = document.getElementById("contactClose");
  const contactOverlay = document.querySelector(".contact-overlay");

  if (!contactSection) return;

  /* OPEN CONTACT */
  contactBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      contactSection.classList.add("active");
      document.body.style.overflow = "hidden";
      document.documentElement.classList.add("menu-open");
    });
  });

  /* CLOSE CONTACT */
  function closeContact() {
    contactSection.classList.remove("active");
    document.body.style.overflow = "";
    document.documentElement.classList.remove("menu-open");
  }

  contactCloseBtn?.addEventListener("click", closeContact);
  contactOverlay?.addEventListener("click", closeContact);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeContact();
  });

});

// ================= CONTACT MODAL (FINAL & CLEAN) =================
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contact");
  const contactOpenBtns = document.querySelectorAll("#contactBtn");
  const contactCloseBtn = document.getElementById("contactClose");
  const overlay = document.querySelector(".contact-overlay");

  if (!contactSection) return;

  // OPEN CONTACT
  contactOpenBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      contactSection.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // CLOSE FUNCTION
  function closeContact() {
    contactSection.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Close button
  contactCloseBtn?.addEventListener("click", closeContact);

  // Overlay click
  overlay?.addEventListener("click", closeContact);

  // ESC key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeContact();
  });
});

// ================= CONTACT MODAL (GLOBAL – SAFE & CLEAN) =================
document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.getElementById("contact");
  const contactOpenBtns = document.querySelectorAll(".contact-btn");
  const contactCloseBtn = document.getElementById("contactClose");
  const overlay = document.querySelector(".contact-overlay");

  if (!contactSection || !contactOpenBtns.length) return;

  // OPEN
  contactOpenBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      contactSection.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // CLOSE
  function closeContact() {
    contactSection.classList.remove("active");
    document.body.style.overflow = "";
  }

  contactCloseBtn?.addEventListener("click", closeContact);
  overlay?.addEventListener("click", closeContact);

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeContact();
  });
});



// ============ MOBILE MENU → OPEN MODALS =============
document.addEventListener("DOMContentLoaded", () => {

  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  // CONTACT
  document.querySelectorAll(".contact-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      // close mobile menu
      mobileMenu?.classList.remove("active");
      menuToggle?.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");

      // open contact modal
      const contact = document.getElementById("contact");
      if (contact) {
        contact.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

  // REQUEST VERIFICATION
  document.querySelectorAll(".request-verification-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();

      // close mobile menu
      mobileMenu?.classList.remove("active");
      menuToggle?.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");

      // open verification modal
      const modal = document.getElementById("verificationModal");
      if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
      }
    });
  });

});

