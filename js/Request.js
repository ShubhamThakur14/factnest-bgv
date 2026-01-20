// document.addEventListener("DOMContentLoaded", () => {

//   /* ================= SELECTORS ================= */
//   const modal = document.getElementById("verificationModal");
//   const openBtns = document.querySelectorAll(
//     "#requestVerificationBtn, a[href='#request-verification']"
//   );
//   const closeBtn = document.getElementById("verificationClose");
//   const overlay = document.querySelector(".verification-overlay");
//   const form = document.getElementById("verificationForm");
//   const successBox = document.getElementById("verificationSuccess");

//   const mobileMenu = document.getElementById("mobileMenu");
//   const menuToggle = document.getElementById("menuToggle");

//   if (!modal || !form) return;

//   /* ================= OPEN MODAL ================= */
//   function openModal(e) {
//     e?.preventDefault();

//     // Close mobile menu if open
//     mobileMenu?.classList.remove("active");
//     menuToggle?.classList.remove("active");
//     document.documentElement.classList.remove("menu-open");

//     modal.classList.add("active");
//     document.body.classList.add("modal-open");

//     // Reset form & success state
//     form.style.display = "block";
//     successBox.style.display = "none";
//     form.reset();
//   }

//   openBtns.forEach(btn => {
//     btn.addEventListener("click", openModal);
//   });

//   /* ================= CLOSE MODAL ================= */
//   function closeModal() {
//     modal.classList.remove("active");
//     document.body.classList.remove("modal-open");
//   }

//   closeBtn?.addEventListener("click", closeModal);
//   overlay?.addEventListener("click", closeModal);

//   document.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") closeModal();
//   });

//   // /* ================= FORM SUBMIT (SINGLE SOURCE OF TRUTH) ================= */
//   // form.addEventListener("submit", function (e) {
//   //   e.preventDefault();

//   //   const formData = {
//   //     company: document.querySelector('input[placeholder="Company Name *"]').value.trim(),
//   //     email: document.querySelector('input[placeholder="Official Email *"]').value.trim(),
//   //     phone: document.querySelector('input[placeholder="Phone Number *"]').value.trim(),
//   //     location: document.querySelector('input[placeholder="Company Location"]').value.trim(),
//   //     companyType: document.querySelector('select').value,

//   //     verifications: Array.from(
//   //       document.querySelectorAll('input[name="verification[]"]:checked')
//   //     ).map(el => el.value),

//   //     candidates: document.querySelectorAll('select')[1].value,
//   //     tat: document.querySelectorAll('select')[2].value,
//   //     message: document.querySelector('textarea').value.trim(),
//   //     consent: true
//   //   };

//   //   // Basic safety check
//   //   if (!formData.company || !formData.email || !formData.phone) {
//   //     alert("Please fill all required fields.");
//   //     return;
//   //   }

//   //   fetch("https://script.google.com/macros/s/AKfycbwejfrgyep3tJ1ZWhPMSAUcWtmXFrgi5WG_RJtXFX2LTTutYf6EDyxdmg612wwLi85fig/exec", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json"
//   //     },
//   //     body: JSON.stringify(formData)
//   //   })
//   //   .then(res => res.json())
//   //   .then(data => {
//   //     if (data.success) {
//   //       form.style.display = "none";
//   //       successBox.style.display = "block";

//   //       successBox.scrollIntoView({
//   //         behavior: "smooth",
//   //         block: "center"
//   //       });
//   //     } else {
//   //       alert("Submission failed. Please try again.");
//   //     }
//   //   })
//   //   .catch(() => {
//   //     alert("Something went wrong. Please try again.");
//   //   });

//   // });

//   /* ================= AUTO OPEN VIA URL ================= */
//   if (window.location.hash === "#request-verification") {
//     openModal();
//   }

// });



// // 
// // document.addEventListener("DOMContentLoaded", () => {

// //   const form = document.getElementById("verificationForm");
// //   const successBox = document.getElementById("verificationSuccess");

// //   form.addEventListener("submit", function (e) {
// //     e.preventDefault();

// //     const data = {
// //       company: document.getElementById("company").value,
// //       email: document.getElementById("email").value,
// //       phone: document.getElementById("phone").value,
// //       location: document.getElementById("location").value,
// //       companyType: document.getElementById("companyType").value,
// //       verifications: [...document.querySelectorAll("input[name='verification[]']:checked")].map(v => v.value),
// //       candidates: document.getElementById("candidates").value,
// //       tat: document.getElementById("tat").value,
// //       message: document.getElementById("message").value,
// //       consent: document.getElementById("consent").checked
// //     };

// //     fetch("https://script.google.com/macros/s/AKfycbyKYxjrZwXLpxCwtQhGuMHF_T0G28iE3hdWlq3R4kFrdRGhGUro51RQdBlf6vUgV5avzw/exec", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify(data)
// //     })
// //     .then(() => {
// //       form.style.display = "none";
// //       successBox.style.display = "block";
// //     })
// //     .catch(() => {
// //       alert("Something went wrong. Please try again.");
// //     });

// //   });

// // });

// Submit form logic in Request form 

// document.getElementById("verificationForm").addEventListener("submit", function () {
//   setTimeout(() => {
//     document.getElementById("verificationForm").style.display = "none";
//     document.getElementById("verificationSuccess").style.display = "block";
//   }, 800);
// });


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

  if (!modal || !form) return;

  /* ================= OPEN MODAL ================= */
  function openModal(e) {
    e?.preventDefault();

    mobileMenu?.classList.remove("active");
    menuToggle?.classList.remove("active");
    document.documentElement.classList.remove("menu-open");

    modal.classList.add("active");
    document.body.classList.add("modal-open");

    form.style.display = "block";
    successBox.style.display = "none";
    form.reset();
  }

  openBtns.forEach(btn => btn.addEventListener("click", openModal));

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

  /* ================= FORM SUBMIT (SUCCESS UI ONLY) ================= */
  form.addEventListener("submit", () => {
    // IMPORTANT: preventDefault nahi hai
    // Form Google Script ko naturally submit hoga

    setTimeout(() => {
      form.style.display = "none";
      successBox.style.display = "block";
    }, 800);
  });

  /* ================= AUTO OPEN VIA URL ================= */
  if (window.location.hash === "#request-verification") {
    openModal();
  }

});


// Drop-down for Request form 
document.querySelectorAll(".custom-select").forEach(select => {
  const trigger = select.querySelector(".select-trigger");
  const options = select.querySelector(".select-options");
  const hiddenInput = select.querySelector("input");
  const text = trigger.querySelector("span");

  trigger.addEventListener("click", () => {
    select.classList.toggle("active");
  });

  options.querySelectorAll("div").forEach(option => {
    option.addEventListener("click", () => {
      hiddenInput.value = option.dataset.value;
      text.textContent = option.textContent;
      select.classList.remove("active");
    });
  });

  document.addEventListener("click", e => {
    if (!select.contains(e.target)) {
      select.classList.remove("active");
    }
  });
});