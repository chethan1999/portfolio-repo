document.addEventListener('DOMContentLoaded', () => {

  // Animate skill progress bars when they scroll into view
  const bars = document.querySelectorAll('.progress-bar[data-width]');
  if (bars.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.dataset.width + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });
    bars.forEach(b => observer.observe(b));
  }

  // Project filter buttons
  const filterBtns = document.querySelectorAll('.btn-filter');
  const projectItems = document.querySelectorAll('.project-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      projectItems.forEach(item => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });

  // Contact form validation (client-side only)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      document.getElementById('formSuccess').classList.remove('d-none');
      form.reset();
      form.classList.remove('was-validated');
    });
  }

  // Collapse navbar on mobile link click
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });

});
