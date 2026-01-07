document.addEventListener("DOMContentLoaded", () => {

  /* ================= SELECTORS ================= */
  const modal = document.getElementById("verificationModal");
  const openBtns = document.querySelectorAll(
    "#requestVerificationBtn, a[href='#request-verification']"
  );
  const closeBtn = document.getElementById("verificationClose");
  const overlay = document.querySelector(".verification-overlay");
  const form = document.getElementById("verificationForm");
  const successBox = document.getElementById("verificationSuccess");

  const mobileMenu = document.getElementById("mobileMenu");
  const menuToggle = document.getElementById("menuToggle");

  if (!modal) return;

  /* ================= OPEN MODAL ================= */
  function openModal(e) {
    e?.preventDefault();

    // close mobile menu if open
    mobileMenu?.classList.remove("active");
    menuToggle?.classList.remove("active");
    document.documentElement.classList.remove("menu-open");

    modal.classList.add("active");
    document.body.classList.add("modal-open");

    // reset state
    if (form) form.style.display = "block";
    if (successBox) successBox.style.display = "none";
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", openModal);
  });

  /* ================= CLOSE MODAL ================= */
  function closeModal() {
    modal.classList.remove("active");
    document.body.classList.remove("modal-open");
  }

  closeBtn?.addEventListener("click", closeModal);
  overlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  /* ================= FORM SUBMIT ================= */
  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    form.style.display = "none";
    successBox.style.display = "block";

    successBox.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

  /* ================= AUTO OPEN VIA URL ================= */
  if (window.location.hash === "#request-verification") {
    openModal();
  }

});
