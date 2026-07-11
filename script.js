// Future integrations are configured here. Keep API keys and secrets out of this file.
const CONTACT_FORM_ENDPOINT = "";

const SITE_CONFIG = {
  facebookUrl: "",
  linkedinUrl: "",
  youtubeVideoId: ""
};

const SERVICES = [
  { title: "Excel Cleanup", description: "Clean, accurate spreadsheets and reliable workbooks you can trust.", icon: "icon-grid" },
  { title: "Dashboards", description: "Custom dashboards that give you a clear, current view of what is happening.", icon: "icon-chart" },
  { title: "Analytics", description: "Find trends, spot opportunities, and answer better questions with your data.", icon: "icon-analytics" },
  { title: "Automation", description: "Automate repetitive tasks and connect the tools you already use.", icon: "icon-gear" },
  { title: "Reporting", description: "Clear, consistent reports that save time and support better decisions.", icon: "icon-file" },
  { title: "Consulting", description: "Strategic guidance and practical solutions tailored to your goals.", icon: "icon-users" }
];

// Set available to true only after the matching screenshot has been added to the repository.
const PORTFOLIO_MEDIA = {
  database: {
    title: "Database-backed dashboard preview",
    path: "assets/portfolio/red-dirt/database-preview.jpg",
    alt: "Red Dirt Sports Bar executive dashboard with sales trends and item performance",
    caption: "Database-backed executive overview built from the Red Dirt Sports Bar portfolio dataset.",
    available: true
  },
  desktop: {
    title: "Application screenshot coming soon",
    path: "assets/portfolio/red-dirt/tkinter-app.webp",
    alt: "Tkinter desktop operations application connected to SQLite",
    caption: "Local desktop interface connected directly to the SQLite database.",
    available: false
  }
};

const DASHBOARD_PAGES = [
  {
    title: "Executive Overview",
    description: "A high-level view of revenue, food and drink sales, transactions, average ticket size, tips, weekly trends, top products, staff performance, and payment mix.",
    path: "assets/portfolio/red-dirt/database-preview.jpg",
    status: "Available",
    available: true
  },
  {
    title: "Product Performance",
    description: "Analysis of product revenue, units sold, average selling price, sales mix, weekday performance, and item-level detail.",
    path: "assets/portfolio/red-dirt/product-performance.webp",
    status: "In development",
    available: false
  },
  {
    title: "Inventory Management",
    description: "A manager-focused view of active stock, reorder needs, inventory health, category composition, and items below reorder thresholds.",
    path: "assets/portfolio/red-dirt/inventory-management.webp",
    status: "In development",
    available: false
  },
  {
    title: "Employee & Operations",
    description: "Sales, transactions, tips, average ticket size, hourly activity, and operational performance by employee.",
    path: "assets/portfolio/red-dirt/employee-operations.webp",
    status: "Planned",
    available: false
  },
  {
    title: "Purchasing & Vendors",
    description: "Purchase order activity, vendor spend, delivery status, purchasing trends, and supplier performance.",
    path: "assets/portfolio/red-dirt/purchasing-vendors.webp",
    status: "Planned",
    available: false
  },
  {
    title: "Inventory Movement",
    description: "Receipts, consumption, adjustments, usage patterns, and movement by inventory category.",
    path: "assets/portfolio/red-dirt/inventory-movement.webp",
    status: "Planned",
    available: false
  },
  {
    title: "Financial Trends",
    description: "Historical sales, seasonality, monthly and weekly performance, growth, and revenue trends.",
    path: "assets/portfolio/red-dirt/financial-trends.webp",
    status: "Planned",
    available: false
  }
];

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderServices();
  renderSocialLinks();
  setupContactForm();
  renderPortfolioMedia();
  renderDashboardGallery();
  renderVideo();
  setupLightbox();
  setCurrentYear();
});

function setupNavigation() {
  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.querySelector("#primaryNav");
  if (!navToggle || !primaryNav) return;

  const focusableSelector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const closeMenu = ({ returnFocus = false } = {}) => {
    if (!primaryNav.classList.contains("open")) return;
    primaryNav.classList.remove("open");
    document.body.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
    if (returnFocus) navToggle.focus();
  };

  const openMenu = () => {
    primaryNav.classList.add("open");
    document.body.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation");
    primaryNav.querySelector("a")?.focus();
  };

  navToggle.addEventListener("click", () => {
    if (primaryNav.classList.contains("open")) closeMenu();
    else openMenu();
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (!primaryNav.classList.contains("open")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeMenu({ returnFocus: true });
      return;
    }
    if (event.key !== "Tab") return;

    const focusable = [navToggle, ...primaryNav.querySelectorAll(focusableSelector)];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) closeMenu();
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

function renderSocialLinks() {
  const target = document.querySelector("#socialLinks");
  if (!target) return;

  const networks = [
    { name: "Facebook", icon: "icon-facebook", url: SITE_CONFIG.facebookUrl },
    { name: "LinkedIn", icon: "icon-linkedin", url: SITE_CONFIG.linkedinUrl }
  ];

  target.innerHTML = networks.map((network) => {
    const inner = `<svg aria-hidden="true"><use href="#${network.icon}"></use></svg><span>${network.name}<small>${network.url ? "Visit profile" : "Coming soon"}</small></span>`;
    if (!network.url) {
      return `<button class="social-button" type="button" aria-disabled="true">${inner}</button>`;
    }
    return `<a class="social-button" href="${escapeAttribute(network.url)}" target="_blank" rel="noopener noreferrer">${inner}</a>`;
  }).join("");
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const status = form.querySelector("#contactFormStatus");
  const submitButton = form.querySelector("button[type='submit']");
  const submitLabel = form.querySelector(".submit-label");
  const submitLoading = form.querySelector(".submit-loading");
  const requiredFields = [...form.querySelectorAll("[required]")];

  const messages = {
    contactName: "Please enter your name.",
    contactEmail: "Please enter a valid email address.",
    contactService: "Please select the service you need.",
    contactDetails: "Please include a short description of your project.",
    contactConsent: "Please confirm that Orahood may contact you about this request."
  };

  const showFieldState = (field) => {
    const error = document.querySelector(`#${field.id}Error`);
    const isValid = field.validity.valid;
    field.setAttribute("aria-invalid", String(!isValid));
    if (error) error.textContent = isValid ? "" : messages[field.id] || "Please complete this field.";
    return isValid;
  };

  requiredFields.forEach((field) => {
    field.addEventListener("blur", () => showFieldState(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") showFieldState(field);
    });
    field.addEventListener("change", () => {
      if (field.getAttribute("aria-invalid") === "true") showFieldState(field);
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    const invalidFields = requiredFields.filter((field) => !showFieldState(field));
    if (invalidFields.length) {
      status.textContent = "Please review the highlighted fields before sending your request.";
      status.classList.add("status-error");
      invalidFields[0].focus();
      return;
    }

    const honeypot = form.querySelector("[name='website']");
    if (honeypot?.value) return;

    if (!CONTACT_FORM_ENDPOINT) {
      status.textContent = "Online form delivery is being connected. Please contact Dalton directly by email or phone for now.";
      status.classList.add("status-notice");
      return;
    }

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitLabel.hidden = true;
    submitLoading.hidden = false;

    try {
      const response = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });
      if (!response.ok) throw new Error(`Form service returned ${response.status}`);
      form.reset();
      requiredFields.forEach((field) => {
        field.removeAttribute("aria-invalid");
        const error = document.querySelector(`#${field.id}Error`);
        if (error) error.textContent = "";
      });
      status.textContent = "Your project request was sent. Orahood will follow up as soon as possible.";
      status.classList.add("status-success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      status.textContent = "The form could not be delivered. Please try again or contact Dalton directly by email or phone.";
      status.classList.add("status-error");
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitLabel.hidden = false;
      submitLoading.hidden = true;
    }
  });
}

function renderPortfolioMedia() {
  document.querySelectorAll("[data-portfolio-media]").forEach((target) => {
    const media = PORTFOLIO_MEDIA[target.dataset.portfolioMedia];
    if (!media) return;
    target.innerHTML = createMediaMarkup(media);
  });
}

function createMediaMarkup(media) {
  if (media.available) {
    return `
      <figure class="case-media-figure">
        <button class="media-trigger" type="button" data-lightbox-src="${escapeAttribute(media.path)}" data-lightbox-title="${escapeAttribute(media.caption)}" data-lightbox-description="" aria-label="Enlarge ${escapeAttribute(media.alt)}">
          <img src="${escapeAttribute(media.path)}" alt="${escapeAttribute(media.alt)}" loading="lazy" width="1600" height="900">
        </button>
        <figcaption>${escapeHTML(media.caption)}</figcaption>
      </figure>`;
  }

  return `
    <figure class="case-media-figure is-placeholder" data-planned-image="${escapeAttribute(media.path)}">
      <div class="branded-placeholder" role="img" aria-label="${escapeAttribute(media.title)}">
        <span class="placeholder-mark" aria-hidden="true"></span>
        <strong>${escapeHTML(media.title)}</strong>
        <small>${escapeHTML(media.path)}</small>
      </div>
      <figcaption>${escapeHTML(media.caption)}</figcaption>
    </figure>`;
}

function renderDashboardGallery() {
  const target = document.querySelector("#dashboardGallery");
  if (!target) return;

  target.innerHTML = DASHBOARD_PAGES.map((page, index) => {
    const media = page.available
      ? `<button class="dashboard-image media-trigger" type="button" data-lightbox-src="${escapeAttribute(page.path)}" data-lightbox-title="${escapeAttribute(page.title)}" data-lightbox-description="${escapeAttribute(page.description)}" aria-label="Enlarge ${escapeAttribute(page.title)} dashboard screenshot"><img src="${escapeAttribute(page.path)}" alt="${escapeAttribute(page.title)} Power BI dashboard page" loading="lazy" width="1600" height="900"></button>`
      : `<div class="dashboard-image dashboard-placeholder" data-planned-image="${escapeAttribute(page.path)}" role="img" aria-label="${escapeAttribute(page.title)} dashboard screenshot coming soon"><span>${String(index + 1).padStart(2, "0")}</span><strong>Dashboard screenshot<br>coming soon</strong><small>${escapeHTML(page.path)}</small></div>`;

    return `
      <article class="dashboard-card">
        ${media}
        <div class="dashboard-card-copy">
          <div class="dashboard-card-title">
            <h3>${escapeHTML(page.title)}</h3>
            <span class="status-badge">${escapeHTML(page.status)}</span>
          </div>
          <p>${escapeHTML(page.description)}</p>
        </div>
      </article>`;
  }).join("");
}

function renderVideo() {
  const target = document.querySelector("#videoContainer");
  if (!target) return;

  if (!SITE_CONFIG.youtubeVideoId) {
    target.innerHTML = `
      <div class="video-placeholder" role="img" aria-label="Video demonstration coming soon">
        <span class="video-play" aria-hidden="true"></span>
        <strong>Video demonstration coming soon</strong>
        <small>The complete project walkthrough will be added here.</small>
      </div>`;
    return;
  }

  const id = encodeURIComponent(SITE_CONFIG.youtubeVideoId);
  target.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}" title="Red Dirt Sports Bar BI Suite project walkthrough" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

function setupLightbox() {
  const dialog = document.querySelector("#mediaLightbox");
  if (!dialog) return;

  const image = dialog.querySelector("#lightboxImage");
  const title = dialog.querySelector("#lightboxTitle");
  const description = dialog.querySelector("#lightboxDescription");
  const closeButton = dialog.querySelector(".lightbox-close");
  let previouslyFocused = null;

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest(".media-trigger");
    if (!trigger) return;
    previouslyFocused = trigger;
    image.src = trigger.dataset.lightboxSrc;
    image.alt = trigger.getAttribute("aria-label").replace(/^Enlarge\s+/, "");
    title.textContent = trigger.dataset.lightboxTitle || "Portfolio image";
    description.textContent = trigger.dataset.lightboxDescription || "";
    dialog.showModal();
    closeButton.focus();
  });

  const closeDialog = () => {
    if (dialog.open) dialog.close();
  };

  closeButton.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  dialog.addEventListener("close", () => {
    image.removeAttribute("src");
    previouslyFocused?.focus();
    previouslyFocused = null;
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((target) => {
    target.textContent = String(new Date().getFullYear());
  });
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
