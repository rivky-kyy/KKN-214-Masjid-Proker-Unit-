/**
 * Main Application Logic - Masjid Al Firdaus
 * Penanganan interaktivitas, render dinamis data takmir, filter, copy rekening, dark mode, lightbox, scroll-to-top, dan navigasi
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Tema (Dark / Light Mode)
  initThemeToggle();

  // 2. Inisialisasi Navigasi Mobile & Scroll Spy
  initNavigation();

  // 3. Render Komponen Dinamis dari data-takmir.js
  renderTakmirCards("all");
  initTakmirFilter();
  renderAgendas();
  renderFacilities();
  renderTimeline();

  // 4. Inisialisasi Engine Jadwal Sholat
  if (window.prayerEngine) {
    window.prayerEngine.init();
  }

  // 5. Inisialisasi Fitur Salin Rekening & Toast
  initCopyAccount();

  // 6. Inisialisasi FAQ Accordion
  initFaqAccordion();

  // 7. Inisialisasi Form Kontak WhatsApp
  initContactForm();

  // 8. Inisialisasi Image Lightbox & Scroll To Top
  initLightbox();
  initScrollToTop();
});

/* ==========================================================================
   THEME TOGGLE (DARK / LIGHT MODE)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeIcon = themeToggleBtn ? themeToggleBtn.querySelector("i") : null;
  const savedTheme = localStorage.getItem("masjid_theme") || "light";

  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(themeIcon, savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("masjid_theme", newTheme);
      updateThemeIcon(themeIcon, newTheme);
      showToast(`Mode ${newTheme === 'dark' ? 'Gelap' : 'Terang'} diaktifkan`);
    });
  }
}

function updateThemeIcon(iconEl, theme) {
  if (!iconEl) return;
  if (theme === "dark") {
    iconEl.className = "fa-solid fa-sun";
  } else {
    iconEl.className = "fa-solid fa-moon";
  }
}

/* ==========================================================================
   NAVIGASI & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".header");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }

  // Header scroll shadow
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* ==========================================================================
   RENDER TIMELINE / JOURNEY SEJARAH (COMPACT & MODERN)
   ========================================================================== */
function renderTimeline() {
  const timelineContainer = document.getElementById("history-timeline-container");
  if (!timelineContainer || !MASJID_DATA.historyTimeline) return;

  timelineContainer.className = "journey-steps-grid";
  timelineContainer.innerHTML = MASJID_DATA.historyTimeline.map((item, index) => {
    const isLatest = index === MASJID_DATA.historyTimeline.length - 1;
    const stepNumber = index + 1;
    const iconClass = index === 0 ? 'fa-landmark' : (index === 1 ? 'fa-users-line' : 'fa-mosque');
    return `
      <div class="journey-card ${isLatest ? 'featured' : ''}">
        <div class="journey-step-header">
          <span class="journey-step-badge">
            <i class="fa-solid ${iconClass}"></i> ${item.badge}
          </span>
          <span class="journey-step-num">${stepNumber}</span>
        </div>
        <div class="journey-year">${item.year}</div>
        <div class="journey-hijri"><i class="fa-solid fa-moon"></i> ${item.hijri}</div>
        <h3 class="journey-title">${item.title}</h3>
        <p class="journey-desc">${item.description}</p>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   RENDER & FILTER STRUKTUR TAKMIR MASJID (EXECUTIVE SHOWCASE)
   ========================================================================== */
function renderTakmirCards(category = "all") {
  const container = document.getElementById("takmir-grid-container");
  if (!container || !MASJID_DATA.takmirMembers) return;

  const filteredMembers = category === "all"
    ? MASJID_DATA.takmirMembers
    : MASJID_DATA.takmirMembers.filter(m => m.category === category);

  container.innerHTML = filteredMembers.map(member => `
    <div class="takmir-card animate-fade-in" data-category="${member.category}">
      <div class="takmir-card-header">
        <div class="takmir-avatar">
          <i class="fa-solid ${member.icon}"></i>
        </div>
        <div class="takmir-meta">
          <h4 class="takmir-name">${member.name}</h4>
          <span class="takmir-role">${member.role}</span>
        </div>
      </div>
      <span class="takmir-badge">${member.badge}</span>
      <p class="takmir-desc">${member.desc}</p>
    </div>
  `).join("");
}

function initTakmirFilter() {
  // Legacy filter support
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.dataset.filter;
      renderTakmirCards(category);
    });
  });

  // Modern Department Pills & Live Search
  const deptPills = document.querySelectorAll(".dept-pill-btn");
  const deptCards = document.querySelectorAll(".dept-card");
  const searchInput = document.getElementById("takmir-search-input");
  const noResultsBox = document.getElementById("dept-no-results");

  let currentCategory = "all";
  let currentSearch = "";

  function applyFilterAndSearch() {
    let visibleCount = 0;

    deptCards.forEach(card => {
      const cardCategory = card.getAttribute("data-category") || "";
      const cardText = card.textContent.toLowerCase();

      const matchCategory = (currentCategory === "all") || (cardCategory === currentCategory);
      const matchSearch = (currentSearch === "") || cardText.includes(currentSearch);

      if (matchCategory && matchSearch) {
        card.style.display = "flex";
        card.classList.add("animate-fade-in");
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (noResultsBox) {
      noResultsBox.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  deptPills.forEach(pill => {
    pill.addEventListener("click", () => {
      deptPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentCategory = pill.getAttribute("data-dept") || "all";
      applyFilterAndSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      applyFilterAndSearch();
    });
  }
}

/* ==========================================================================
   RENDER AGENDA & FASILITAS
   ========================================================================== */
function renderAgendas() {
  const container = document.getElementById("agenda-grid-container");
  if (!container || !MASJID_DATA.agendas) return;

  container.innerHTML = MASJID_DATA.agendas.map(agenda => `
    <div class="agenda-card">
      <span class="agenda-category">${agenda.category}</span>
      <h3 class="agenda-title">${agenda.title}</h3>
      <div class="agenda-meta-item">
        <i class="fa-regular fa-clock"></i>
        <span>${agenda.time}</span>
      </div>
      <div class="agenda-meta-item">
        <i class="fa-solid fa-location-dot"></i>
        <span>${agenda.place}</span>
      </div>
      <p class="agenda-desc">${agenda.desc}</p>
    </div>
  `).join("");
}

function renderFacilities() {
  const container = document.getElementById("facilities-grid-container");
  if (!container || !MASJID_DATA.facilities) return;

  container.innerHTML = MASJID_DATA.facilities.map(fac => `
    <div class="facility-card">
      <div class="facility-icon">
        <i class="fa-solid ${fac.icon}"></i>
      </div>
      <div>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-heading); margin-bottom: 6px;">${fac.title}</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${fac.desc}</p>
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   SALIN REKENING BANK BPD DIY & TOAST
   ========================================================================== */
function initCopyAccount() {
  const copyBtn = document.getElementById("btn-copy-rekening");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const accNum = MASJID_DATA.bankAccount.accountNumberClean;
      
      const onCopySuccess = () => {
        showToast("Nomor rekening Bank BPD DIY (024231001470) berhasil disalin!");
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Tersalin!`;
        copyBtn.style.backgroundColor = "var(--primary-500)";
        copyBtn.style.color = "#ffffff";
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.backgroundColor = "";
          copyBtn.style.color = "";
        }, 2500);
      };

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(accNum)
          .then(onCopySuccess)
          .catch(() => fallbackCopy(accNum, onCopySuccess));
      } else {
        fallbackCopy(accNum, onCopySuccess);
      }
    });
  }
}

function fallbackCopy(text, callback) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  textArea.style.top = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    if (callback) callback();
  } catch (err) {
    console.error('Fallback copy failed', err);
    showToast("Silakan salin manual nomor: 024.231.001470");
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  let toast = document.getElementById("toast-notification");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast-notification";
    toast.className = "toast-box";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-400); font-size: 1.2rem;"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ==========================================================================
   LIGHTBOX MODAL FOR GALLERY
   ========================================================================== */
function initLightbox() {
  // Buat element Lightbox jika belum ada di DOM
  let lightbox = document.getElementById("global-lightbox");
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.id = "global-lightbox";
    lightbox.className = "lightbox-modal";
    lightbox.innerHTML = `
      <button class="lightbox-close-btn" id="lightbox-close" title="Tutup"><i class="fa-solid fa-xmark"></i></button>
      <div class="lightbox-img-wrapper">
        <img src="" alt="" class="lightbox-img" id="lightbox-image">
        <div class="lightbox-caption-text" id="lightbox-caption"></div>
      </div>
    `;
    document.body.appendChild(lightbox);

    const closeBtn = document.getElementById("lightbox-close");
    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }

  // Bind click event pada seluruh gallery item
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector(".gallery-caption");
      if (img) {
        openLightbox(img.src, caption ? caption.textContent : img.alt);
      }
    });
  });
}

function openLightbox(src, caption) {
  const lightbox = document.getElementById("global-lightbox");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxCaption = document.getElementById("lightbox-caption");
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightboxImg.alt = caption;
    if (lightboxCaption) lightboxCaption.textContent = caption;
    lightbox.classList.add("open");
  }
}

function closeLightbox() {
  const lightbox = document.getElementById("global-lightbox");
  if (lightbox) lightbox.classList.remove("open");
}

/* ==========================================================================
   SCROLL TO TOP BUTTON
   ========================================================================== */
function initScrollToTop() {
  let scrollBtn = document.getElementById("scroll-to-top");
  if (!scrollBtn) {
    scrollBtn = document.createElement("button");
    scrollBtn.id = "scroll-to-top";
    scrollBtn.className = "scroll-to-top-btn";
    scrollBtn.title = "Kembali ke Atas";
    scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });
}

/* ==========================================================================
   FAQ ACCORDION
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

/* ==========================================================================
   FORM KONTAK / PESAN WHATSAPP
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById("masjid-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-sender-name").value.trim();
    const role = document.getElementById("form-sender-type").value;
    const msg = document.getElementById("form-sender-message").value.trim();

    if (!name || !msg) {
      showToast("Mohon lengkapi nama dan isi pesan Anda.");
      return;
    }

    const waText = encodeURIComponent(
      `*Assalamu'alaikum Pengurus Masjid Al Firdaus*\n\n` +
      `*Nama:* ${name}\n` +
      `*Status/Peran:* ${role}\n` +
      `*Pesan/Aspirasi:* ${msg}\n\n` +
      `_Terkirim melalui Website Resmi Masjid Al Firdaus Temon Wetan_`
    );

    const targetPhone = MASJID_DATA.profile.officialPhoneClean || "6281229423441";
    window.open(`https://wa.me/${targetPhone}?text=${waText}`, "_blank");
    showToast("Membuka WhatsApp untuk mengirim pesan...");
    form.reset();
  });
}

// Global WhatsApp Infaq helper
window.konfirmasiInfaqWA = function(targetPic) {
  const pic = targetPic === 2 ? MASJID_DATA.bankAccount.picInfaq[1] : MASJID_DATA.bankAccount.picInfaq[0];
  const waText = encodeURIComponent(
    `*Assalamu'alaikum Bpk. ${pic.name}*\n` +
    `Saya ingin konfirmasi penyaluran infak/shadaqah ke rekening Bank BPD DIY Masjid Al Firdaus (No. Rek 024.231.001470 a.n. MUH ABDUL AZIS QQ MUSHOLLA AL FIRDAUS).\n\n` +
    `Mohon petunjuk dan tanda terima. Terima kasih. Wassalamu'alaikum.`
  );
  window.open(`https://wa.me/${pic.phone}?text=${waText}`, "_blank");
};
