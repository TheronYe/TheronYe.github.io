(function () {
  const header = document.querySelector('[data-header]');
  const progress = document.querySelector('[data-progress]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav-links]');
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  const sectionLinks = document.querySelectorAll('[data-nav-links] a[href^="#"]');
  const sections = Array.from(sectionLinks)
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  function updateScrollState() {
    const scrollTop = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;

    if (header) header.classList.toggle('is-scrolled', scrollTop > 12);
    if (progress) progress.style.transform = `scaleX(${max > 0 ? scrollTop / max : 0})`;

    let current = sections[0];
    sections.forEach((section) => {
      if (section.offsetTop - 120 <= scrollTop) current = section;
    });

    sectionLinks.forEach((link) => {
      link.classList.toggle('is-active', current && link.getAttribute('href') === `#${current.id}`);
    });
  }

  function closeMenu() {
    document.body.classList.remove('menu-open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  }

  navToggle?.addEventListener('click', () => {
    const isOpen = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  internalLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  document.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || link.target === '_blank') return;

      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      document.body.classList.add('is-leaving');
      window.setTimeout(() => {
        window.location.href = url.href;
      }, 160);
    });
  });

  const revealItems = document.querySelectorAll('.reveal');
  const counters = document.querySelectorAll('[data-count]');

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');

        if (entry.target.hasAttribute('data-count')) {
          animateCounter(entry.target);
        }

        observer.unobserve(entry.target);
      });
    }, { threshold: 0.18 })
    : null;

  revealItems.forEach((item) => observer ? observer.observe(item) : item.classList.add('is-visible'));
  counters.forEach((item) => observer ? observer.observe(item) : animateCounter(item));

  function animateCounter(node) {
    if (node.dataset.done) return;
    node.dataset.done = 'true';

    const target = Number(node.dataset.count || 0);
    const suffix = node.dataset.suffix || '';
    const duration = 900;
    const start = performance.now();

    function tick(now) {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 3);
      node.textContent = `${Math.round(target * eased)}${suffix}`;
      if (progressValue < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }

  document.querySelectorAll('[data-faq]').forEach((item) => {
    const button = item.querySelector('button');
    const answer = item.querySelector('.faq-answer');

    button?.addEventListener('click', () => {
      const isOpen = item.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(isOpen));
      if (answer) answer.style.maxHeight = isOpen ? `${answer.scrollHeight}px` : '0px';
    });
  });

  window.addEventListener('scroll', updateScrollState, { passive: true });
  window.addEventListener('resize', updateScrollState);
  updateScrollState();
})();
