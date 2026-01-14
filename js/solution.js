
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach(item => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

      accordionItems.forEach(i => {
        if (i !== item) i.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });


  document
  .getElementById("openContactFromIndividual")
  ?.addEventListener("click", () => {
    document.getElementById("contact").classList.add("active");
    document.body.classList.add("menu-open");
  });


  /* ================= OPEN CONTACT FROM INDIVIDUAL CTA ================= */
document.addEventListener("DOMContentLoaded", () => {
  const individualBtn = document.getElementById("openContactFromIndividual");
  const contactSection = document.getElementById("contact");

  if (!individualBtn || !contactSection) return;

  individualBtn.addEventListener("click", e => {
    e.preventDefault();

    contactSection.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});


// --------------Solution Section Hidden 

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  const sections = document.querySelectorAll(".solution-block");

  // sab hide
  sections.forEach(section => {
    section.classList.remove("active");
  });

  // agar URL me type aaya
  if (type) {
    const activeSection = document.getElementById(type);
    if (activeSection) {
      activeSection.classList.add("active");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  } else {
    // default fallback (optional)
    document.getElementById("individual")?.classList.add("active");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const section = params.get("type");

  const allSections = document.querySelectorAll(".solution-block");

  // Hide all
  allSections.forEach(sec => sec.classList.remove("active"));

  // Show selected
  if (section) {
    const target = document.getElementById(section);
    if (target) {
      target.classList.add("active");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  } else {
    // Default (optional)
    document.getElementById("individual")?.classList.add("active");
  }
});

// === +/x Accoration
/* ===== SMB FAQ ACCORDION ===== */
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

      // close other open items (optional but professional)
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
        }
      });

      // toggle current
      item.classList.toggle("active");
    });
  });
});


document.querySelectorAll(".open-contact").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("contact").classList.add("active");
    document.body.style.overflow = "hidden";
  });
});
