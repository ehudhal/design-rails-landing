/**
 * Scroll-triggered animations and page interactions
 */

class ScrollAnimations {
  constructor() {
    this.observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    this.init();
  }

  init() {
    // Add js-enabled class to enable progressive enhancement
    document.documentElement.classList.add('js-enabled');

    this.addAnimationClasses();
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, this.observerOptions);

    // Observe all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  addAnimationClasses() {
    // Add animation class to capability cards
    const capabilityCards = document.querySelectorAll('.capability-card');
    capabilityCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add animation class to process steps
    const processSteps = document.querySelectorAll('.process-step');
    processSteps.forEach((step, index) => {
      step.classList.add('animate-on-scroll');
      step.style.transitionDelay = `${index * 0.15}s`;
    });

    // Add animation class to benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add animation class to testimonials
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
      card.classList.add('animate-on-scroll');
      card.style.transitionDelay = `${index * 0.1}s`;
    });

    // Add animation class to FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach((item, index) => {
      item.classList.add('animate-on-scroll');
      item.style.transitionDelay = `${index * 0.08}s`;
    });
  }
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  const scrollAnimations = new ScrollAnimations();

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Section titles should always be visible (no scroll animation)
  // They serve as navigation landmarks and should not be hidden
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const hero = document.querySelector('.hero');

  if (hero && scrollY < window.innerHeight) {
    hero.style.transform = `translateY(${scrollY * 0.5}px)`;
    hero.style.opacity = 1 - (scrollY / window.innerHeight) * 0.7;
  }
});
