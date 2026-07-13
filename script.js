// Future integrations are configured here. Keep API keys and secrets out of this file.
const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/xkodwbar";

const SITE_CONFIG = {
  facebookUrl: "",
  linkedinUrl: "",
  youtubeVideoId: "",
  demoVideo: {
    src: "assets/portfolio/red-dirt/video/red-dirt-operations-manager-demo.mp4",
    poster: "assets/portfolio/red-dirt/operations/red-dirt-operations-dashboard.webp",
    captions: "assets/portfolio/red-dirt/video/red-dirt-operations-manager-demo.vtt"
  }
};

const SERVICES = [
  {
    title: "Assess and Clean Data",
    problem: "Reports disagree, source files are messy, or nobody fully trusts the numbers.",
    provides: "OCBS reviews the files, cleans and restructures data, documents definitions, and identifies gaps before building on top of it.",
    outcome: "Your team gets a clearer source foundation for decisions, reporting, and future system work.",
    icon: "icon-grid"
  },
  {
    title: "Build the Source of Truth",
    problem: "Spreadsheets are acting like a database and the operating record is becoming fragile.",
    provides: "OCBS designs practical local databases or appropriate structured data models with clear relationships and ownership.",
    outcome: "Data entry, reporting, and auditability can work from a more reliable foundation.",
    icon: "icon-database"
  },
  {
    title: "Create Workflow Tools",
    problem: "Daily work depends on manual steps, repeated entry, or files that were never meant to run operations.",
    provides: "OCBS builds simple desktop or web workflow tools when they reduce operating friction and protect the source data.",
    outcome: "Staff can use a clearer process instead of rebuilding the same fragile workarounds.",
    icon: "icon-gear"
  },
  {
    title: "Report Decisions",
    problem: "Owners and leaders need a clear view of performance without digging through raw files.",
    provides: "OCBS designs dashboards and recurring reports tied to known definitions, source data, and practical questions.",
    outcome: "The business can see trends, exceptions, and priorities faster and explain them more consistently.",
    icon: "icon-chart"
  },
  {
    title: "Automate Routine Work",
    problem: "Staff rebuild reports, copy files, clean the same data, or repeat avoidable manual checks.",
    provides: "OCBS automates refreshes, exports, validation checks, templates, and routine workflow steps.",
    outcome: "The team spends less time on repetitive work and more time using the information.",
    icon: "icon-gear"
  },
  {
    title: "Support and Maintain",
    problem: "A useful system still needs clear documentation, backups, updates, and support boundaries.",
    provides: "OCBS offers scoped maintenance, documentation support, checkups, and small improvements after launch.",
    outcome: "Systems stay understandable and useful instead of becoming another unsupported black box.",
    icon: "icon-file"
  },
  {
    title: "Consulting and Systems Assessment",
    problem: "It is not always clear whether the right answer is cleanup, reporting, automation, a database, or no custom build.",
    provides: "OCBS helps define the problem, compare practical options, and scope a paid assessment when deeper review is needed.",
    outcome: "Projects start with the business need instead of unnecessary technical theater.",
    icon: "icon-users"
  }
];

// Set available to true only after the matching screenshot has been added to the repository.
const PORTFOLIO_MEDIA = {
  database: {
    title: "SQLite operating data model",
    path: "assets/portfolio/red-dirt/sqlite-database-overview.webp",
    alt: "SQLite operational database overview showing verified table counts, schema rows, and recent transaction records",
    caption: "Source-backed overview generated from red_dirt_operations.db, showing the local operating data model behind the app.",
    available: true
  },
  desktop: {
    title: "Red Dirt Operations Manager",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-dashboard.webp",
    alt: "Red Dirt Operations Manager dashboard showing sales, recent transactions, and purchasing data",
    caption: "Python Tkinter operations manager connected directly to the SQLite operational database.",
    available: true
  }
};

const APPLICATION_SCREENSHOTS = [
  {
    title: "Operations Dashboard",
    description: "Live KPI cards, latest available business date, recent transactions, purchase orders, and inventory status from the SQLite database.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-dashboard.webp",
    alt: "Red Dirt Operations Manager dashboard showing sales metrics, recent transactions, low-stock inventory, and purchase orders"
  },
  {
    title: "Transaction Entry",
    description: "Point-of-sale style workflow with employee selection, food and drink search, cart quantities, subtotal, tax, tip, payment method, and final total.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-transactions.webp",
    alt: "Red Dirt Operations Manager transaction entry screen showing menu search, cart items, payment method, and sale totals"
  },
  {
    title: "Inventory Management",
    description: "Inventory search, active filters, low-stock filtering, stock levels, reorder thresholds, and highlighted operational status.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-inventory.webp",
    alt: "Red Dirt Operations Manager inventory page showing searchable stock records, quantities, units, reorder levels, and low-stock filters"
  },
  {
    title: "Inventory Adjustment",
    description: "Ledger-backed manual adjustment fields with quantity change, reason, notes, current quantity, and item metadata.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-inventory-adjustment.webp",
    alt: "Red Dirt Operations Manager inventory adjustment interface showing selected item details and manual adjustment fields"
  },
  {
    title: "Menu & Recipes",
    description: "Food and drink menu records, prices, active status, recipe ingredients, inventory relationships, and recipe quantities.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-menu-recipes.webp",
    alt: "Red Dirt Operations Manager menu and recipes page showing recipe ingredients connected to inventory items"
  },
  {
    title: "Purchasing",
    description: "Vendor and purchase-order workflows with order dates, inventory items, quantities, totals, and receipt status.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-purchasing.webp",
    alt: "Red Dirt Operations Manager purchasing page showing purchase orders, vendors, inventory items, quantities, totals, and received status"
  },
  {
    title: "Employees",
    description: "Employee list, role information, active status, search/filter controls, and editable employee detail fields.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-employees.webp",
    alt: "Red Dirt Operations Manager employees page showing employee records, roles, active status, and employee detail fields"
  },
  {
    title: "System Tools",
    description: "Database connection status, integrity checks, foreign-key checks, backup tools, export tools, and application database information.",
    path: "assets/portfolio/red-dirt/operations/red-dirt-operations-system.webp",
    alt: "Red Dirt Operations Manager system page showing database status, backup tools, integrity checks, and CSV export controls"
  }
];

const DASHBOARD_PAGES = [
  {
    title: "Executive Overview",
    description: "A high-level view of total sales, food and drink revenue, transaction volume, average ticket size, tips, weekly sales trends, top products, bartender performance, and payment-method distribution.",
    path: "assets/portfolio/red-dirt/executive-overview.png",
    status: "Available",
    available: true
  },
  {
    title: "Product Performance",
    description: "Analysis of product revenue, units sold, average selling price, sales mix, weekday performance, and item-level detail.",
    path: "assets/portfolio/red-dirt/product-performance.png",
    status: "Available",
    available: true
  },
  {
    title: "Inventory and Reorder",
    description: "A manager-focused view of active stock, reorder needs, inventory health, category composition, and items below reorder thresholds.",
    path: "assets/portfolio/red-dirt/inventory-reorder.png",
    status: "Available",
    available: true
  },
  {
    title: "Employee & Operations",
    description: "Sales, transactions, tips, average ticket size, hourly activity, and operational performance by employee.",
    path: "assets/portfolio/red-dirt/employee-operations.png",
    status: "Available",
    available: true
  },
  {
    title: "Purchasing & Vendors",
    description: "Purchase order activity, vendor spend, delivery status, purchasing trends, and supplier performance.",
    path: "assets/portfolio/red-dirt/purchasing-vendors.png",
    status: "Available",
    available: true
  },
  {
    title: "Inventory Movement",
    description: "Receipts, consumption, adjustments, usage patterns, and movement by inventory category.",
    path: "assets/portfolio/red-dirt/inventory-movement.png",
    status: "Available",
    available: true
  },
  {
    title: "Financial Trends",
    description: "Historical sales, seasonality, monthly and weekly performance, growth, and revenue trends.",
    path: "assets/portfolio/red-dirt/financial-trends.png",
    status: "Available",
    available: true
  }
];

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  renderServices();
  renderSocialLinks();
  setupContactForm();
  renderPortfolioMedia();
  renderDashboardGallery();
  renderApplicationGallery();
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
        <p>${escapeHTML(service.problem)}</p>
        <dl class="service-outcomes">
          <div><dt>Provides</dt><dd>${escapeHTML(service.provides)}</dd></div>
          <div><dt>Outcome</dt><dd>${escapeHTML(service.outcome)}</dd></div>
        </dl>
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
  ].filter((network) => network.url);

  const wrapper = target.closest(".social-connect");
  if (!networks.length) {
    if (wrapper) wrapper.hidden = true;
    return;
  }

  if (wrapper) wrapper.hidden = false;

  target.innerHTML = networks.map((network) => {
    const inner = `<svg aria-hidden="true"><use href="#${network.icon}"></use></svg><span>${network.name}<small>Visit profile</small></span>`;
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
    contactConsent: "Please confirm that Orahood Custom Business Solutions may contact you about this request."
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
      status.textContent = "The contact form is temporarily unavailable. Please contact Dalton directly by email or phone for now.";
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
      status.textContent = "Your project request was sent. Orahood Custom Business Solutions will follow up as soon as possible.";
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

function renderApplicationGallery() {
  const target = document.querySelector("#applicationGallery");
  if (!target) return;

  target.innerHTML = APPLICATION_SCREENSHOTS.map((page) => `
    <article class="app-shot-card">
      <button class="app-shot-image media-trigger" type="button" data-lightbox-src="${escapeAttribute(page.path)}" data-lightbox-title="${escapeAttribute(page.title)}" data-lightbox-description="${escapeAttribute(page.description)}" aria-label="Enlarge ${escapeAttribute(page.alt)}">
        <img src="${escapeAttribute(page.path)}" alt="${escapeAttribute(page.alt)}" loading="lazy" width="1600" height="900">
      </button>
      <div class="app-shot-copy">
        <h3>${escapeHTML(page.title)}</h3>
        <p>${escapeHTML(page.description)}</p>
      </div>
    </article>
  `).join("");
}

function renderVideo() {
  const target = document.querySelector("#videoContainer");
  if (!target) return;

  if (SITE_CONFIG.demoVideo?.src) {
    target.innerHTML = `
      <video class="portfolio-video" controls preload="metadata" poster="${escapeAttribute(SITE_CONFIG.demoVideo.poster)}">
        <source src="${escapeAttribute(SITE_CONFIG.demoVideo.src)}" type="video/mp4">
        <track kind="captions" src="${escapeAttribute(SITE_CONFIG.demoVideo.captions)}" srclang="en" label="English captions" default>
        Your browser does not support the HTML5 video player. Please contact Orahood Custom Business Solutions for the project walkthrough.
      </video>`;
    return;
  }

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
