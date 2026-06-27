/* ============================================================
   PROJECTS DATA
   ------------------------------------------------------------
   To add a new project: copy one object below (including the
   curly braces { } and the comma after it) and edit the fields.
   No other file needs to change — the card is built automatically.

   Fields:
     title       - project name shown on the card
     description - 1-3 sentences, plain text
     image       - path to a screenshot, e.g. "assests/projects/my-shot.png"
                   leave as "" (empty string) if you don't have one yet —
                   a styled placeholder will show instead
     tags        - array of short tech-stack strings
     github      - link to the repo, or "" to hide the button
     demo        - link to a live demo, or "" to hide the button
   ============================================================ */

const PROJECTS = [
  {
    title: "Himalayan Horizon",
    description: "A full-stack tours and travel booking website built with Flask and a PostgreSQL/MySQL database, with admin-gated content management for tour listings and a working booking flow.",
    image: "assests/himalayan-horizon.png",
    tags: ["Flask", "PostgreSQL", "SQL", "HTML/CSS", "Admin Auth"],
    github: "https://github.com/pratikbhattarai-dev/Full-stack-website-tours-and-travel",
    demo: ""
  },
  {
    title: "Sleep Quality Predictor",
    description: "A regression model trained on lifestyle and physiological data — stress, screen time, caffeine, sleep duration — that predicts a sleep quality score.",
    image: "assests/sleep-quality-predictor.png",
    tags: ["Python", "pandas", "scikit-learn", "Random Forest", "Flask"],
    github: "https://github.com/pratikbhattarai-dev/Sleep-Health-Prediction",
    demo: ""
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website — the one you're looking at right now! Built from scratch with HTML, CSS, and vanilla JavaScript.",
    image: "assests/portfolioimage.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "",
    demo: ""
  }
];

/* ============================================================
   RENDER PROJECT CARDS
   ============================================================ */
function renderProjects() {
  const grid = document.getElementById("project-grid");
  if (!grid) return;

  grid.innerHTML = PROJECTS.map((project, index) => {
    const headerContent = project.image
      ? `<img src="${project.image}" alt="${escapeHTML(project.title)} screenshot"
           onerror="this.closest('.project-card-header').classList.add('placeholder'); this.remove();">`
      : "";

    const headerClass = project.image ? "" : "placeholder";

    const tagsHTML = project.tags
      .map(tag => `<span class="project-tag">${escapeHTML(tag)}</span>`)
      .join("");

    const githubLink = project.github
      ? `<a href="${project.github}" class="btn btn-primary btn-sm" target="_blank" rel="noopener">GitHub ↗</a>`
      : "";

    const demoLink = project.demo
      ? `<a href="${project.demo}" class="btn btn-secondary btn-sm" target="_blank" rel="noopener">Live Demo ↗</a>`
      : "";

    const altClass = index % 2 === 1 ? " alt" : "";

    return `
      <div class="project-card">
        <div class="project-card-header${altClass} ${headerClass}">
          ${headerContent}
        </div>
        <h3>${escapeHTML(project.title)}</h3>
        <p>${escapeHTML(project.description)}</p>
        <div class="project-tags">${tagsHTML}</div>
        <div class="project-links">${githubLink}${demoLink}</div>
      </div>
    `;
  }).join("");
}

// Basic escaping so any text in PROJECTS can't break the markup
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ============================================================
   THEME TOGGLE (light / dark, persisted in localStorage)
   ============================================================ */
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", stored);

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initThemeToggle();
});
