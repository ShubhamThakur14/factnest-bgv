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
