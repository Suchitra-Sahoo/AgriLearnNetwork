
// Toggle menu icon and navbar visibility
document.addEventListener('DOMContentLoaded', () => {
  let menuIcon = document.querySelectorAll('#menu-icon');
  let navbar = document.querySelectorAll('.navbar');

  menuIcon.forEach(icon => {
    icon.onclick = () => {
      icon.classList.toggle('bx-x');
      navbar.forEach(nav => nav.classList.toggle('active'));
    };
  });

  // Smooth scrolling to anchor links
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();

      // Remove active class from all links
      document.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
      });

      // Add active class to clicked link
      this.classList.add('active');

      // scrolling smooth to target.
      const targetId = this.getAttribute('href').substr(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, 
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight corresponding link when scrolling over sections
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar a');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });

  // Set initial active link based on URL hash
  const hash = window.location.hash;
  if (hash) {
    const targetLink = document.querySelector('a[href="' + hash + '"]');
    if (targetLink) {
      targetLink.classList.add('active');
    }
  }

  // Toggle sticky header on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 100);
  });

  // Initialize ScrollReveal
  ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

  // Typed.js initialization
  const typed = new Typed('.multiple-text', {
    strings: ['Sow', 'Learn', 'Grow'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });

  // Handle form submission
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // Add your form submission logic here
    form.reset();
  });

});
