// script.js - Handles animations, header state, and active navigation

document.addEventListener('DOMContentLoaded', () => {
  // 1. Highlight Active Navigation Link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 2. Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Scroll Reveal Animation for Sections and Cards
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once revealed
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(sec => observer.observe(sec));
  // Observe grid cards with a slight delay
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
  });
});

// Download Resume Function (Fallback if direct link behavior is overridden)
function downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/navyashree_resume.docx';
  link.download = 'Navyashree_Resume.docx';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
