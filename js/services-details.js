document.addEventListener("DOMContentLoaded", () => {

  /* ================= SELECTORS ================= */

  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceContents = document.querySelectorAll(".service-content");

  const mobileMenuLinks = document.querySelectorAll(
    ".mobile-dropdown .dropdown-menu a, .desktop-dropdown-menu a"
  );

  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  const customDropdown = document.querySelector(".services-mobile-dropdown");
  const dropdownBtn = customDropdown?.querySelector(".dropdown-btn");
  const dropdownText = customDropdown?.querySelector(".selected-text");
  const dropdownOptions = customDropdown?.querySelectorAll(".dropdown-options li");

  /* ================= CORE FUNCTION ================= */

  function activateService(id, label = "") {

    // right content
    serviceContents.forEach(section =>
      section.classList.toggle("active", section.id === id)
    );

    // sidebar active
    serviceLinks.forEach(link =>
      link.classList.toggle("active", link.dataset.target === id)
    );

    // mobile dropdown text
    if (dropdownText && label) {
      dropdownText.textContent = label;
    }
  }

  /* ================= SIDEBAR CLICK ================= */

  serviceLinks.forEach(link => {
    link.addEventListener("click", () => {
      activateService(
        link.dataset.target,
        link.textContent.trim()
      );
    });
  });

  /* ================= CUSTOM MOBILE DROPDOWN ================= */

  dropdownBtn?.addEventListener("click", () => {
    customDropdown.classList.toggle("active");
  });

  dropdownOptions?.forEach(option => {
    option.addEventListener("click", () => {
      activateService(
        option.dataset.value,
        option.textContent.trim()
      );
      customDropdown.classList.remove("active");
    });
  });

  document.addEventListener("click", e => {
    if (customDropdown && !customDropdown.contains(e.target)) {
      customDropdown.classList.remove("active");
    }
  });

  /* ================= HEADER MENU SERVICES ================= */

  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = link.dataset.target;
      if (!target) return;

      const label = link.textContent.trim();

      // close mobile menu
      mobileMenu?.classList.remove("active");
      menuToggle?.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");

      // activate content ONLY (no scroll)
      setTimeout(() => {
        activateService(target, label);
      }, 300);
    });
  });

  /* ================= URL PARAM SUPPORT (VIEW DETAILS) ================= */

  const params = new URLSearchParams(window.location.search);
  const serviceParam = params.get("service");

  if (serviceParam) {
    const matchedLink = [...serviceLinks].find(
      link => link.dataset.target === serviceParam
    );

    activateService(
      serviceParam,
      matchedLink ? matchedLink.textContent.trim() : ""
    );
  }

});
