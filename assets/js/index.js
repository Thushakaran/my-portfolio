document.addEventListener("DOMContentLoaded", () => {
  // Theme Toggle Functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');

  // Check for saved theme preference or default to dark
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
  });

  function updateThemeIcon(theme) {
    if (theme === 'light') {
      themeIcon.className = 'fas fa-sun';
    } else {
      themeIcon.className = 'fas fa-moon';
    }
  }

  // Typing effect
  const roles = ["Full-Stack Developer", "Backend Developer", "Freelancer"];
  let roleIndex = 0;
  let charIndex = 0;
  const typingElement = document.querySelector(".typing");

  function typeEffect() {
    if (charIndex < roles[roleIndex].length) {
      typingElement.textContent += roles[roleIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(eraseEffect, 1000);
    }
  }

  function eraseEffect() {
    if (charIndex > 0) {
      typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseEffect, 50);
    } else {
      roleIndex = (roleIndex + 1) % roles.length;
      setTimeout(typeEffect, 500);
    }
  }

  typeEffect();

  // Fade-in animation on scroll
  const fadeElements = document.querySelectorAll(".fade-in");

  function fadeInOnScroll() {
    fadeElements.forEach((element) => {
      const elementPos = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (elementPos < windowHeight - 100) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // Run on page load

  // Smooth scroll for anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Active navigation highlighting
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);
  updateActiveNav(); // Run on page load

  // Animate zoomIn element
  const animatedElement = document.querySelector(".animate__zoomIn");
  if (animatedElement) {
    animatedElement.classList.remove("animate__zoomIn");
    void animatedElement.offsetWidth; // Reflow trick
    animatedElement.classList.add("animate__zoomIn");
  }

  // Resume download tracking
  const resumeLinks = document.querySelectorAll('a[href*="Thushakaran__CV.pdf"]');
  resumeLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Track download event (you can add analytics here)
      console.log('Resume downloaded');

      // Optional: Show a success message
      setTimeout(() => {
        alert('Resume downloaded successfully!');
      }, 1000);
    });
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all fields.');
      } else {
        alert('Message sent successfully!');
        e.target.reset();
      }
    });
  }

  // Animate on scroll for sections and cards
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const staggerParents = document.querySelectorAll('.stagger-parent');

  const observer = new window.IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animateElements.forEach(el => observer.observe(el));

  // Staggered animation for cards
  staggerParents.forEach(parent => {
    const cards = parent.querySelectorAll('.stagger');
    cards.forEach((card, idx) => {
      observer.observe(card);
      card.style.transitionDelay = (idx * 0.12) + 's';
    });
  });
});
