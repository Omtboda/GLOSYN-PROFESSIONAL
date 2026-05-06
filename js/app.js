/**
 * GLOSYN PROFESSIONAL — Core Application Module
 * Handles theme, navigation, scroll reveal, particles, and shared UI logic
 */

const GlosynApp = (() => {
  'use strict';

  // ── State ──
  let state = {
    theme: 'light',
    mobileMenuOpen: false,
    scrolled: false
  };

  // ── DOM Cache ──
  const dom = {};

  // ── Initialize ──
  function init() {
    cacheDom();
    initTheme();
    initNavbar();
    initMobileMenu();
    initScrollReveal();
    initParticles();
    initPreloader();
    initSmoothScroll();
  }

  // ── Cache DOM Elements ──
  function cacheDom() {
    dom.body = document.body;
    dom.navbar = document.querySelector('.navbar');
    dom.mobileToggle = document.querySelector('.navbar-mobile-toggle');
    dom.mobileMenu = document.querySelector('.mobile-menu');
    dom.mobileOverlay = document.querySelector('.mobile-menu-overlay');
    dom.themeToggle = document.querySelector('.theme-toggle');
    dom.preloader = document.querySelector('.preloader');
    dom.heroParticles = document.querySelector('.hero-particles');
  }

  // ── Theme System ──
  function initTheme() {
    const saved = localStorage.getItem('glosyn-theme');
    if (saved) {
      state.theme = saved;
    } else {
      state.theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    applyTheme();

    if (dom.themeToggle) {
      dom.themeToggle.addEventListener('click', toggleTheme);
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    localStorage.setItem('glosyn-theme', state.theme);
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
  }

  // ── Navbar ──
  function initNavbar() {
    if (!dom.navbar) return;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 60 && !state.scrolled) {
        dom.navbar.classList.add('scrolled');
        state.scrolled = true;
      } else if (scrollY <= 60 && state.scrolled) {
        dom.navbar.classList.remove('scrolled');
        state.scrolled = false;
      }
    }, { passive: true });

    // Active link highlight
    const navLinks = dom.navbar.querySelectorAll('.navbar-links a');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ── Mobile Menu ──
  function initMobileMenu() {
    if (!dom.mobileToggle || !dom.mobileMenu) return;

    dom.mobileToggle.addEventListener('click', () => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
      dom.mobileToggle.classList.toggle('active', state.mobileMenuOpen);
      dom.mobileMenu.classList.toggle('active', state.mobileMenuOpen);
      if (dom.mobileOverlay) dom.mobileOverlay.classList.toggle('active', state.mobileMenuOpen);
      dom.body.style.overflow = state.mobileMenuOpen ? 'hidden' : '';
    });

    if (dom.mobileOverlay) {
      dom.mobileOverlay.addEventListener('click', closeMobileMenu);
    }

    dom.mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
  }

  function closeMobileMenu() {
    state.mobileMenuOpen = false;
    dom.mobileToggle.classList.remove('active');
    dom.mobileMenu.classList.remove('active');
    if (dom.mobileOverlay) dom.mobileOverlay.classList.remove('active');
    dom.body.style.overflow = '';
  }

  // ── Scroll Reveal ──
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
  }

  // ── Floating Particles ──
  function initParticles() {
    if (!dom.heroParticles) return;

    const count = 20;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
      particle.style.animationDelay = `${Math.random() * 10}s`;
      dom.heroParticles.appendChild(particle);
    }
  }

  // ── Preloader ──
  function initPreloader() {
    if (!dom.preloader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        dom.preloader.classList.add('hidden');
        setTimeout(() => {
          dom.preloader.remove();
        }, 800);
      }, 800);
    });
  }

  // ── Smooth Scroll ──
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = dom.navbar ? dom.navbar.offsetHeight + 20 : 80;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // ── Utility: Format Price ──
  function formatPrice(price) {
    return new Intl.NumberFormat('en-IN').format(price);
  }

  // ── Utility: Create Element ──
  function createElement(tag, className, innerHTML) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  // ── Public API ──
  return {
    init,
    formatPrice,
    createElement,
    getState: () => ({ ...state })
  };
})();

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', GlosynApp.init);
