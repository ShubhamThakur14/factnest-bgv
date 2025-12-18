const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


// For USING Slider in SERVICE-SECTION 

const slider = document.getElementById('servicesSlider');

if (slider) {
  function slideLeft() {
    slider.scrollBy({ left: -380, behavior: 'smooth' });
  }

  function slideRight() {
    slider.scrollBy({ left: 380, behavior: 'smooth' });
  }
}


