/**
 * Takmir Module - Masjid Al Firdaus
 * Menangani Pencarian Real-Time & Filter Bidang Pelayanan Takmir
 */

document.addEventListener("DOMContentLoaded", () => {
  initTakmirInteractive();
});

function initTakmirInteractive() {
  const deptPills = document.querySelectorAll(".dept-pill-btn");
  const deptCards = document.querySelectorAll(".dept-card");
  const searchInput = document.getElementById("takmir-search-input");
  const noResultsBox = document.getElementById("dept-no-results");

  if (!deptCards.length && !deptPills.length) return;

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
