function renderProjects(projects) {
  const grid = document.getElementById("project-grid");
  grid.innerHTML = projects
    .map(
      (p) => `
      <a class="card" href="${p.url}" target="_blank" rel="noopener noreferrer">
        <div class="card-icon">
          <img src="${p.logo}" alt="${p.name} logo" loading="lazy">
        </div>
        <div class="card-body">
          <h2>${p.name}</h2>
          <span class="card-link">${p.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </a>`
    )
    .join("");
}

function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = saved || (prefersLight ? "light" : "dark");

  applyTheme(theme);

  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").textContent = theme === "light" ? "☀️" : "🌙";
}

renderProjects(PROJECTS);
initTheme();
document.getElementById("year").textContent = new Date().getFullYear();
