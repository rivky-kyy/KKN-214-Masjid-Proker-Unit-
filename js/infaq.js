/**
 * Infaq Module - Masjid Al Firdaus
 * Menangani Salin Nomor Rekening Bank BPD DIY & Konfirmasi Infaq via WhatsApp
 */

document.addEventListener("DOMContentLoaded", () => {
  initCopyAccount();
});

function initCopyAccount() {
  const copyBtns = document.querySelectorAll(".btn-copy");
  
  copyBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const accNumber = "024231001470";
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(accNumber).then(() => {
          showCopyFeedback(btn);
        }).catch(() => {
          fallbackCopy(accNumber, btn);
        });
      } else {
        fallbackCopy(accNumber, btn);
      }
    });
  });
}

function showCopyFeedback(btn) {
  const originalText = btn.innerHTML;
  btn.innerHTML = '<i class="fa-solid fa-check"></i> Tersalin!';
  btn.style.backgroundColor = '#10b981';
  btn.style.color = '#ffffff';

  if (typeof showToast === 'function') {
    showToast("✓ Nomor Rekening BPD DIY (024.231.001470) berhasil disalin ke clipboard!");
  }

  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.backgroundColor = '';
    btn.style.color = '';
  }, 2500);
}

function fallbackCopy(text, btn) {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  try {
    document.execCommand("copy");
    showCopyFeedback(btn);
  } catch (err) {
    if (typeof showToast === 'function') {
      showToast("Nomor Rekening: 024.231.001470");
    }
  }
  document.body.removeChild(tempInput);
}

function konfirmasiInfaqWA(officerIndex = 0) {
  const contacts = [
    { name: "Sudarsih (Bendahara)", phone: "6281229423441" },
    { name: "Rahman Hartono (Tim Infak)", phone: "6281229423441" }
  ];

  const target = contacts[officerIndex] || contacts[0];
  const message = `Assalamu'alaikum Wr. Wb. Pengurus Masjid Al Firdaus (${target.name}), saya ingin mengonfirmasi bahwa saya telah menyalurkan infaq/sedekah melalui transfer rekening Bank BPD DIY. Berikut bukti transfernya:`;
  const url = `https://wa.me/${target.phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
