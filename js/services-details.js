document.addEventListener("DOMContentLoaded", () => {

  /* ================= SELECTORS ================= */

  const serviceLinks = document.querySelectorAll(".service-link"); // left sidebar links
  const serviceContents = document.querySelectorAll(".service-content"); // right content sections

  const mobileSelect = document.querySelector(".services-mobile-select"); 
  // NOTE: agar tum native <select> use kar rahe ho

  const mobileMenuLinks = document.querySelectorAll(
    ".mobile-dropdown .dropdown-menu a"
  ); // header mobile menu services

  const customDropdown = document.querySelector(".services-mobile-dropdown");
  const customDropdownText = customDropdown?.querySelector(".selected-text");
  // NOTE: ye custom dropdown (jo sidebar me hai)

  /* ================= CORE FUNCTION ================= */

  function activateService(id, scroll = false, label = "") {

    // 1️⃣ Content switch (right side)
    serviceContents.forEach(section =>
      section.classList.toggle("active", section.id === id)
    );

    // 2️⃣ Sidebar active highlight (desktop)
    serviceLinks.forEach(link =>
      link.classList.toggle("active", link.dataset.target === id)
    );

    // 3️⃣ Native select sync (agar use ho raha ho)
    if (mobileSelect) {
      mobileSelect.value = id;
    }

    // 4️⃣ 🔥 Custom dropdown text sync (MAIN FIX)
    if (customDropdownText && label) {
      customDropdownText.textContent = label;
    }

    // 5️⃣ Optional smooth scroll
    if (scroll) {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }

  /* ================= DESKTOP SIDEBAR CLICK ================= */

  serviceLinks.forEach(link => {
    link.addEventListener("click", () => {
      activateService(
        link.dataset.target,
        true,
        link.textContent.trim()
      );
    });
  });

  /* ================= MOBILE <SELECT> DROPDOWN ================= */

  if (mobileSelect) {
    mobileSelect.addEventListener("change", () => {
      const selectedOption =
        mobileSelect.options[mobileSelect.selectedIndex].text;

      activateService(mobileSelect.value, true, selectedOption);
    });
  }

  /* ================= MOBILE MENU (HEADER) SERVICES CLICK ================= */

  mobileMenuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = link.dataset.target;
      const label = link.textContent.trim();

      // 🔥 content + dropdown sync
      activateService(target, true, label);

      // close mobile menu
      mobileMenu?.classList.remove("active");
      menuToggle?.classList.remove("active");
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    });
  });

  /* ================= URL HASH SUPPORT ================= */

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const matchedLink = [...serviceLinks].find(
      link => link.dataset.target === hash
    );

    activateService(
      hash,
      false,
      matchedLink ? matchedLink.textContent.trim() : ""
    );
  }

});
