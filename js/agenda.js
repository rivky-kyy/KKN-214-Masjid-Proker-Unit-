/**
 * Agenda Module - Masjid Al Firdaus
 * Menangani Render Agenda & Kegiatan Ibadah Berjamaah
 */

document.addEventListener("DOMContentLoaded", () => {
  renderAgendas();
});

function renderAgendas() {
  const container = document.getElementById("agenda-grid-container");
  if (!container || typeof MASJID_DATA === "undefined" || !MASJID_DATA.agendas) return;

  container.innerHTML = MASJID_DATA.agendas.map(agenda => `
    <div class="agenda-card animate-fade-in">
      <div class="agenda-header">
        <span class="agenda-category">${agenda.category}</span>
        <span class="agenda-badge-time">${agenda.time}</span>
      </div>
      <h3 class="agenda-title">${agenda.title}</h3>
      <div class="agenda-meta">
        <div class="agenda-meta-item">
          <i class="fa-solid fa-calendar-day"></i>
          <span>${agenda.schedule}</span>
        </div>
        <div class="agenda-meta-item">
          <i class="fa-solid fa-location-dot"></i>
          <span>${agenda.location}</span>
        </div>
      </div>
      <p class="agenda-desc">${agenda.desc}</p>
    </div>
  `).join("");
}
