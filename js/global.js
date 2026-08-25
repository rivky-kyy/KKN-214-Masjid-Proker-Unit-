/**
 * Global JavaScript Module - Masjid Al Firdaus
 * Menangani:
 * 1. Dark/Light Mode Theme Toggle & Persistent Storage
 * 2. Responsive Mobile Drawer Navigation & Header Scroll Shadow
 * 3. Prayer Engine & Live Clock (WIB) / Hijri Date Synchronization
 * 4. Floating Scroll-to-Top Button
 * 5. Toast Notification System
 * 6. Active Navigation Link Detection
 */

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initNavigation();
  initScrollToTop();
  updateHeaderDates();
  initPrayerAndClock();
  highlightActiveNav();
});

/* ==========================================================================
   1. TEMA DARK / LIGHT MODE
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("masjid-theme") || "light";
  
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("masjid-theme", newTheme);
      updateThemeIcon(newTheme);

      showToast(newTheme === "dark" ? "🌙 Mode Gelap diaktifkan" : "☀️ Mode Terang diaktifkan");
    });
  }
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  toggleBtn.innerHTML = theme === "dark" 
    ? '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>' 
    : '<i class="fa-solid fa-moon"></i>';
}

/* ==========================================================================
   2. NAVIGASI MOBILE & SCROLL SHADOW
   ========================================================================== */
function initNavigation() {
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");
  const header = document.querySelector(".header");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const isOpen = navMenu.classList.contains("open");
      mobileToggle.innerHTML = isOpen 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        if (mobileToggle) {
          mobileToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
      });
    });
  }

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }
}

function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ==========================================================================
   3. PRAYER ENGINE & LIVE CLOCK INITIALIZATION
   ========================================================================== */
function initPrayerAndClock() {
  if (window.prayerEngine) {
    window.prayerEngine.init();
  } else {
    // Fallback live clock if prayerEngine is not loaded on this page
    const liveClockEl = document.getElementById("live-clock");
    if (liveClockEl) {
      const updateClock = () => {
        const now = new Date();
        const pad = (n) => String(n).padStart(2, '0');
        liveClockEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())} WIB`;
      };
      updateClock();
      setInterval(updateClock, 1000);
    }
  }
}

/* ==========================================================================
   4. SCROLL TO TOP FLOATING BUTTON
   ========================================================================== */
function initScrollToTop() {
  let btn = document.getElementById("scroll-to-top");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "scroll-to-top";
    btn.className = "scroll-to-top-btn";
    btn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    btn.title = "Kembali ke Atas";
    btn.setAttribute("aria-label", "Kembali ke Atas");
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   5. TOAST NOTIFICATION HELPER
   ========================================================================== */
function showToast(message, duration = 3000) {
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "toast-box";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--gold-400);"></i> <span>${message}</span>`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

/* ==========================================================================
   6. WAKTU & TANGGAL MASEHI TOPBAR
   ========================================================================== */
function updateHeaderDates() {
  const masehiEl = document.getElementById("header-masehi-date");
  if (masehiEl) {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    masehiEl.textContent = now.toLocaleDateString('id-ID', options);
  }
}
