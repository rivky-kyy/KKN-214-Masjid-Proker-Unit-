/**
 * Kontak Module - Masjid Al Firdaus
 * Menangani Validasi Formulir WhatsApp & FAQ Accordion
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
  initFaqAccordion();
});

function initContactForm() {
  const form = document.getElementById("masjid-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("contact-name")?.value.trim() || "";
    const category = document.getElementById("contact-category")?.value || "Informasi Umum";
    const message = document.getElementById("contact-message")?.value.trim() || "";

    if (!name || !message) {
      if (typeof showToast === 'function') {
        showToast("⚠️ Mohon lengkapi nama dan isi pesan Anda.");
      } else {
        alert("Mohon lengkapi nama dan isi pesan Anda.");
      }
      return;
    }

    const waText = `Assalamu'alaikum Wr. Wb. Pengurus Masjid Al Firdaus Temon Wetan,\n\nNama: ${name}\nKeperluan: ${category}\nPesan: ${message}`;
    const waUrl = `https://wa.me/6281229423441?text=${encodeURIComponent(waText)}`;

    if (typeof showToast === 'function') {
      showToast("Mengalihkan ke WhatsApp Takmir...");
    }

    window.open(waUrl, "_blank");
    form.reset();
  });
}

function initFaqAccordion() {
  const faqHeaders = document.querySelectorAll(".faq-header");

  faqHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      const isActive = item.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".faq-item").forEach(other => {
        if (other !== item) other.classList.remove("active");
      });

      // Toggle current item
      item.classList.toggle("active", !isActive);
    });
  });
}
