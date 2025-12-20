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
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
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
    }
  });

  /* ================= DESKTOP SERVICES DROPDOWN (CLICK ONLY) ================= */
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

});
