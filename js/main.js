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

  /* ================= SERVICES SLIDER ================= */
  const slider = document.getElementById("servicesSlider");

  if (slider) {
    window.slideLeft = () => {
      slider.scrollBy({ left: -380, behavior: "smooth" });
    };

    window.slideRight = () => {
      slider.scrollBy({ left: 380, behavior: "smooth" });
    };
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


});


// ========== Contact form hidden ===============
const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

if (contactBtn && contactSection) {
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Show contact section
    contactSection.style.display = "block";

    // Smooth scroll
    contactSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

// White-space click contact form close 

const contactContainer = contactSection
  ? contactSection.querySelector(".container")
  : null;

/* OPEN CONTACT */
if (contactBtn && contactSection) {
  contactBtn.addEventListener("click", function (e) {
    e.preventDefault();
    contactSection.style.display = "block";
    document.body.style.overflow = "hidden"; // prevent background scroll
  });
}

/* OUTSIDE CLICK TO CLOSE */
if (contactSection && contactContainer) {
  contactSection.addEventListener("click", function (e) {
    if (!contactContainer.contains(e.target)) {
      contactSection.style.display = "none";
      document.body.style.overflow = ""; // restore scroll
    }
  });
}

