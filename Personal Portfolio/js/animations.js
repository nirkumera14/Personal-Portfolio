/* ============================================
   animations.js — Scroll reveal & nav effects
   ============================================ */

(function () {

  /* ── Scroll Reveal ── */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () {
          entry.target.classList.add('in');
        }, i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });


  /* ── Active nav link highlight on scroll ── */
  var sections = document.querySelectorAll('section[id], div[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(function (sec) { sectionObserver.observe(sec); });


  /* ── Nav background on scroll ── */
  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(6,9,16,0.97)';
    } else {
      nav.style.background = 'rgba(6,9,16,0.85)';
    }
  }, { passive: true });


  /* ── Smooth scroll for nav links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  /* ── Active nav link style (CSS injection) ── */
  var style = document.createElement('style');
  style.textContent = '.nav-links a.active { color: var(--cyan); background: var(--cyan-dim); }';
  document.head.appendChild(style);

})();
