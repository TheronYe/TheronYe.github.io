(function () {
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const progress = document.querySelector("[data-progress]");
  const projectList = document.querySelector("[data-project-list]");
  const serviceCarousel = document.querySelector("[data-service-carousel]");
  const slides = Array.from(document.querySelectorAll("[data-showcase-slide]"));
  const dotsWrap = document.querySelector("[data-showcase-dots]");
  const showcaseTitle = document.querySelector("[data-showcase-title]");
  const showcaseTitles = ["企业官网截图", "Admin Dashboard截图（预留）", "AI Assistant截图（预留）"];

  function updateChrome() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (progress) progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0";
  }

  function setupNav() {
    if (!navToggle || !navMenu) return;
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navMenu.addEventListener("click", (event) => {
      if (!event.target.matches("a")) return;
      navMenu.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  }

  function setupReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    items.forEach((item) => observer.observe(item));
  }

  function renderProjects() {
    if (!projectList || !Array.isArray(window.PORTFOLIO_PROJECTS)) return;
    projectList.innerHTML = window.PORTFOLIO_PROJECTS.map((project, index) => {
      const stack = project.stack.map((item) => `<li>${item}</li>`).join("");
      const analysis = project.analysis.map((item) => `<li>${item}</li>`).join("");
      return `
        <article class="project-card reveal">
          <a class="project-shot" href="${project.detailUrl}" aria-label="查看${project.title}详情">
            <img src="${project.image}" alt="${project.title}截图" loading="lazy" />
          </a>
          <div class="project-body">
            <h3>${String(index + 1).padStart(2, "0")} · ${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-meta"><span>开发时间：${project.devTime}</span></div>
            <ul class="tech-list" aria-label="技术栈">${stack}</ul>
            <div class="project-analysis">
              <strong>项目解析</strong>
              <ul>${analysis}</ul>
            </div>
            <div class="project-actions">
              <a href="${project.demoUrl}">在线Demo</a>
              <a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub</a>
            </div>
            <a class="project-detail-link" href="${project.detailUrl}">查看项目详情</a>
          </div>
        </article>
      `;
    }).join("");
  }

  function setupShowcase() {
    if (!slides.length || !dotsWrap) return;
    let index = 0;
    dotsWrap.innerHTML = slides.map((_, itemIndex) => `<button type="button" aria-label="查看项目展示 ${itemIndex + 1}"></button>`).join("");
    const dots = Array.from(dotsWrap.querySelectorAll("button"));

    function activate(nextIndex) {
      index = nextIndex % slides.length;
      slides.forEach((slide, itemIndex) => slide.classList.toggle("is-active", itemIndex === index));
      dots.forEach((dot, itemIndex) => dot.classList.toggle("is-active", itemIndex === index));
      if (showcaseTitle) showcaseTitle.textContent = showcaseTitles[index];
    }

    dots.forEach((dot, itemIndex) => dot.addEventListener("click", () => activate(itemIndex)));
    activate(0);
    window.setInterval(() => activate(index + 1), 3200);
  }

  function setupServiceCarousel() {
    if (!serviceCarousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const cards = Array.from(serviceCarousel.querySelectorAll(".service-card"));
    if (cards.length < 2) return;
    let index = 0;
    let timer = null;

    function setActive() {
      cards.forEach((card, itemIndex) => card.classList.toggle("is-active", itemIndex === index));
    }

    function go(nextIndex) {
      index = nextIndex % cards.length;
      setActive();
      serviceCarousel.scrollTo({ left: cards[index].offsetLeft - serviceCarousel.offsetLeft, behavior: "smooth" });
    }

    function start() {
      if (!timer) timer = window.setInterval(() => go(index + 1), 2100);
    }

    function stop() {
      window.clearInterval(timer);
      timer = null;
    }

    serviceCarousel.addEventListener("mouseenter", stop);
    serviceCarousel.addEventListener("mouseleave", start);
    serviceCarousel.addEventListener("pointerdown", stop);
    serviceCarousel.addEventListener("pointerup", start);
    setActive();
    start();
  }

  renderProjects();
  setupNav();
  setupShowcase();
  setupServiceCarousel();
  setupReveal();
  updateChrome();
  window.addEventListener("scroll", updateChrome, { passive: true });
})();
