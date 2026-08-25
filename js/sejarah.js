/**
 * Sejarah Module - Masjid Al Firdaus
 * Menangani Render Dinamis Linimasa Transformasi Sejarah 3 Tahapan
 */

document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
});

function renderTimeline() {
  const container = document.getElementById("history-timeline-container");
  if (!container || typeof MASJID_DATA === "undefined" || !MASJID_DATA.historyTimeline) return;

  container.className = "journey-steps-grid";
  container.innerHTML = MASJID_DATA.historyTimeline.map((item, index) => {
    const isLatest = index === MASJID_DATA.historyTimeline.length - 1;
    const stepNumber = index + 1;
    const iconClass = index === 0 ? 'fa-landmark' : (index === 1 ? 'fa-users-line' : 'fa-mosque');
    
    return `
      <div class="journey-card ${isLatest ? 'highlight' : ''} animate-fade-in">
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
