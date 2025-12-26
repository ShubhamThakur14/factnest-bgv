document.addEventListener("DOMContentLoaded", () => {
  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceContents = document.querySelectorAll(".service-content");

  serviceLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-target");

      // Remove active from all links
      serviceLinks.forEach((item) => item.classList.remove("active"));

      // Hide all content
      serviceContents.forEach((content) =>
        content.classList.remove("active")
      );

      // Activate clicked link
      link.classList.add("active");

      // Show corresponding content
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
      }
      if (window.innerWidth < 768) {
  targetContent.scrollIntoView({ behavior: "smooth" });
}

    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceContents = document.querySelectorAll(".service-content");

  function activateService(id) {
    serviceLinks.forEach((link) => {
      link.classList.toggle("active", link.dataset.target === id);
    });

    serviceContents.forEach((content) => {
      content.classList.toggle("active", content.id === id);
    });
  }

  // Sidebar click
  serviceLinks.forEach((link) => {
    link.addEventListener("click", () => {
      activateService(link.dataset.target);
      history.replaceState(null, "", `#${link.dataset.target}`);
    });
  });

  // Page load with hash
  const hash = window.location.hash.replace("#", "");
  if (hash) {
    activateService(hash);
  }
});

/* ===== SERVICES CONTENT SWITCH (DESKTOP + MOBILE) ===== */
document.addEventListener("DOMContentLoaded", () => {
  const mobileSelect = document.querySelector(".services-mobile-select");
  const serviceLinks = document.querySelectorAll(".service-link");
  const serviceContents = document.querySelectorAll(".service-content");

  function showService(targetId) {
    // Hide all contents
    serviceContents.forEach(content => {
      content.classList.remove("active");
    });

    // Show selected content
    const activeSection = document.getElementById(targetId);
    if (activeSection) {
      activeSection.classList.add("active");
    }

    // Update desktop sidebar active state
    serviceLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-target") === targetId
      );
    });
  }

  /* Desktop sidebar click */
  serviceLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("data-target");
      showService(target);
    });
  });

  /* Mobile dropdown change */
  if (mobileSelect) {
    mobileSelect.addEventListener("change", function () {
      showService(this.value);
    });
  }
});

const dropdown = document.querySelector(".services-mobile-dropdown");
const btn = dropdown?.querySelector(".dropdown-btn");
const options = dropdown?.querySelectorAll("li");
const contents = document.querySelectorAll(".service-content");

btn?.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

options?.forEach(option => {
  option.addEventListener("click", () => {
    const target = option.dataset.value;

    // update button text
    btn.querySelector(".selected-text").textContent = option.textContent;

    // content switch
    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(target)?.classList.add("active");

    dropdown.classList.remove("active");
  });
});

// outside click close
document.addEventListener("click", e => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

