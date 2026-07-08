const CONTACT_EMAIL = "dalton@orahood.net";

const SERVICES = [
  { title: "Excel Cleanup", description: "Clean, accurate spreadsheets and reliable workbooks you can trust.", icon: "icon-grid" },
  { title: "Dashboards", description: "Custom dashboards that give you a real-time view of what is happening.", icon: "icon-chart" },
  { title: "Analytics", description: "Find trends, spot opportunities, and answer better questions with your data.", icon: "icon-chart" },
  { title: "Automation", description: "Automate repetitive tasks and connect the tools you already use.", icon: "icon-gear" },
  { title: "Reporting", description: "Clear, consistent reports that save time and support better decisions.", icon: "icon-file" },
  { title: "Consulting", description: "Strategic guidance and practical solutions tailored to your goals.", icon: "icon-users" }
];

const POSTS = [
  { title: "Five ways clean data drives better decisions", excerpt: "Start with consistent naming, reliable source files, and a simple review rhythm.", date: "Jul 8, 2026" },
  { title: "When a dashboard should replace a spreadsheet", excerpt: "The right dashboard reduces repeated questions and helps teams act faster.", date: "Jul 8, 2026" },
  { title: "Automation that keeps people in control", excerpt: "Small workflow improvements can save hours without making your process fragile.", date: "Jul 8, 2026" }
];

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupStaticLinks();
  renderServices();
  renderPortfolio();
  renderBlog();
});

function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector("#primaryNav");

  if (!navToggle || !primaryNav) return;

  navToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  primaryNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    primaryNav.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
}

function setupStaticLinks() {
  document.querySelectorAll("[data-email-link]").forEach((link) => {
    const email = link.textContent.trim() || CONTACT_EMAIL;
    link.href = `mailto:${email}`;
  });

  document.querySelectorAll("[data-phone-link]").forEach((link) => {
    const phone = link.textContent.trim();
    if (phone) link.href = `tel:${phone.replace(/[^\d+]/g, "")}`;
  });
}

function renderServices() {
  const target = document.querySelector("#servicesList");
  if (!target) return;

  target.innerHTML = SERVICES.map((service) => `
    <article class="service-item">
      <span class="service-icon" aria-hidden="true"><svg><use href="#${escapeAttribute(service.icon)}"></use></svg></span>
      <div>
        <h3>${escapeHTML(service.title)}</h3>
        <p>${escapeHTML(service.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderPortfolio() {
  const target = document.querySelector("#portfolioList");
  if (!target) return;

  target.classList.add("is-empty");
  target.innerHTML = `
    <article class="portfolio-empty">
      <h3>Portfolio coming soon</h3>
      <p>Real project stories will be added once they are ready to share. For now, reach out to talk through the data, dashboard, automation, or reporting project you have in mind.</p>
    </article>
  `;
}

function renderBlog() {
  const target = document.querySelector("#blogList");
  if (!target) return;

  target.innerHTML = POSTS.map((post) => `
    <article class="blog-card">
      <time>${escapeHTML(post.date)}</time>
      <h3>${escapeHTML(post.title)}</h3>
      <p>${escapeHTML(post.excerpt)}</p>
    </article>
  `).join("");
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHTML(value).replaceAll("`", "&#096;");
}
