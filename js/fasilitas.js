/**
 * Fasilitas & Galeri Module - Masjid Al Firdaus
 * Menangani Interactive Image Lightbox Viewer
 */

document.addEventListener("DOMContentLoaded", () => {
  renderFacilities();
  initLightbox();
});

function renderFacilities() {
  const container = document.getElementById("facilities-grid-container") || document.getElementById("facility-grid-container");
  if (!container || typeof MASJID_DATA === "undefined" || !MASJID_DATA.facilities) return;

  container.innerHTML = MASJID_DATA.facilities.map(facility => `
    <div class="facility-card animate-fade-in">
      <div class="facility-icon">
        <i class="fa-solid ${facility.icon}"></i>
      </div>
      <h3 class="facility-title">${facility.title}</h3>
      <p class="facility-desc">${facility.desc}</p>
    </div>
  `).join("");
}

function initLightbox() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  if (!galleryItems.length) return;

  let modal = document.getElementById("gallery-lightbox");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "gallery-lightbox";
    modal.className = "lightbox-modal";
    modal.innerHTML = `
      <button class="lightbox-close" aria-label="Tutup">&times;</button>
      <img src="" alt="Foto Resolusi Penuh" class="lightbox-content" id="lightbox-img">
      <div class="lightbox-caption" id="lightbox-caption"></div>
    `;
    document.body.appendChild(modal);

    const closeBtn = modal.querySelector(".lightbox-close");
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("active");
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        modal.classList.remove("active");
      }
    });
  }

  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      const caption = item.querySelector(".gallery-caption");

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || "Dokumentasi Masjid Al Firdaus";
      }

      if (caption && lightboxCaption) {
        lightboxCaption.textContent = caption.textContent;
      }

      modal.classList.add("active");
    });
  });
}
