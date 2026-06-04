/* ============================================
   typing.js — Typing animation for hero role
   ============================================ */

(function () {
  const roles = [
    'Full Stack Developer',
    'Java & Spring Boot Dev',
    'React.js Developer',
    'MERN Stack Developer',
    'Problem Solver'
  ];

  let roleIndex  = 0;
  let charIndex  = 0;
  let isDeleting = false;

  const el = document.getElementById('typed-text');
  if (!el) return;

  function type() {
    const current = roles[roleIndex];

    if (!isDeleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex  = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, isDeleting ? 50 : 90);
  }

  // Start after hero animation settles
  setTimeout(type, 1200);
})();
