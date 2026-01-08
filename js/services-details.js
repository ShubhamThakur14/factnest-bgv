document.addEventListener("DOMContentLoaded", () => {

  /* ================= SELECTORS ================= */

  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceContents = document.querySelectorAll(".service-content");

  // native <select> (agar future me use ho)
  const mobileSelect = document.querySelector(".services-mobile-select");

  // header mobile menu services
  const mobileMenuLinks = document.querySelectorAll(
    ".mobile-dropdown .dropdown-menu a"
  );

  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  // custom dropdown (sidebar mobile)
  const customDropdown = document.querySelector(".services-mobile-dropdown");
  const dropdownBtn = customDropdown?.querySelector(".dropdown-btn");
  const dropdownText = customDropdown?.querySelector(".selected-text");
  const dropdownOptions = customDropdown?.querySelectorAll(".dropdown-options li");

  /* ================= CORE FUNCTION ================= */
function activateService(id, label = "") {

  // Right side content
  serviceContents.forEach(section =>
    section.classList.toggle("active", section.id === id)
  );

  // Sidebar active
  serviceLinks.forEach(link =>
    link.classList.toggle("active", link.dataset.target === id)
  );

  // Mobile select sync (future safe)
  if (mobileSelect) {
    mobileSelect.value = id;
  }

  // Custom dropdown text
  if (dropdownText && label) {
    dropdownText.textContent = label;
  }

  // ❌ NO scroll here (IMPORTANT)
}


  /* ================= DESKTOP SIDEBAR ================= */

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
      const target = option.dataset.value;
      const label = option.textContent.trim();

      activateService(target, label);


      customDropdown.classList.remove("active");
    });
  });

  // outside click close
  document.addEventListener("click", e => {
    if (customDropdown && !customDropdown.contains(e.target)) {
      customDropdown.classList.remove("active");
    }
  });

 
/* ================= HEADER MOBILE MENU ================= */

mobileMenuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.target;
    if (!target) return;

    const label = link.textContent.trim();

    // 1️⃣ Pehle mobile menu band karo
    mobileMenu?.classList.remove("active");
    menuToggle?.classList.remove("active");
    document.body.classList.remove("menu-open");
    document.documentElement.classList.remove("menu-open");

    // 2️⃣ Thoda wait, phir scroll + content activate
    setTimeout(() => {

      // scroll to services section
      document.getElementById("services")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // activate service content (NO scroll inside)
      activateService(target, false, label);

    }, 300); // menu animation wait
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

// ===== HEADER SERVICES DROPDOWN SUPPORT =====
document
  .querySelectorAll(".desktop-dropdown-menu a, .mobile-menu .dropdown-menu a")
  .forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const target = link.dataset.target;
      if (!target) return;

      document.querySelectorAll(".service-content").forEach(section => {
        section.classList.toggle("active", section.id === target);
      });

      document.querySelectorAll(".service-link").forEach(item => {
        item.classList.toggle("active", item.dataset.target === target);
      });
    });
  });


  // Contact form 
  