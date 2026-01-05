document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("requestVerificationBtn");
  const modal = document.getElementById("verificationModal");
  const closeBtn = document.getElementById("verificationClose");
  const overlay = document.querySelector(".verification-overlay");
  const form = document.getElementById("verificationForm");
  const successBox = document.getElementById("verificationSuccess");

  if (!modal) return;

  /* ================= OPEN MODAL ================= */
  openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";

    // reset state
    form.style.display = "block";
    successBox.style.display = "none";
  });

  /* ================= CLOSE MODAL ================= */
  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ================= FORM SUBMIT ================= */
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    // 👉 yahan future me API / backend lagega
    // abhi sirf UI flow

    // hide form
    form.style.display = "none";

    // show professional success message
    successBox.style.display = "block";
    successBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});


// Request-btn through menu 

document.addEventListener("DOMContentLoaded", () => {

  const verificationModal = document.getElementById("verificationModal");
  const verificationClose = document.getElementById("verificationClose");
  const verificationOverlay = document.querySelector(".verification-overlay");

  // 🔥 AUTO OPEN via URL
  if (window.location.hash === "#request-verification") {
    verificationModal?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // CLOSE modal
  function closeVerification() {
    verificationModal?.classList.remove("active");
    document.body.style.overflow = "";
  }

  verificationClose?.addEventListener("click", closeVerification);
  verificationOverlay?.addEventListener("click", closeVerification);

});
