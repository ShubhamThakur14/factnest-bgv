document.addEventListener('DOMContentLoaded', () => {

  const elements = document.querySelectorAll('.fade-up');

  if (elements.length) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

  // === Slider animation ======

  const slider = document.getElementById('servicesSlider');

  if (slider) {
    window.slideLeft = () => {
      slider.scrollBy({ left: -380, behavior: 'smooth' });
    };

    window.slideRight = () => {
      slider.scrollBy({ left: 380, behavior: 'smooth' });
    };
  }

});
