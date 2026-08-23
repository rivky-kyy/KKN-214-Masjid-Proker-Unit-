---
description: Rule Ground Truth & Design System Website Masjid Al Firdaus
globs: ["**/*"]
alwaysApply: true
---

# Aturan Pengembagan Website Masjid Al Firdaus (Ground Truth RAG)

Dokumen ini adalah aturan wajib saat mengedit, memelihara, atau mengembangkan website Masjid Al Firdaus:

## 1. Identitas & Batasan Konsep Faktual
- **Nama**: Masjid Al Firdaus (Didirikan 2009 sebagai Mushola, Resmi beralih status menjadi Masjid th 2026 / 4 Muharram 1448 H).
- **Lokasi**: Dukuh Kaligondang, Kalurahan Temon Wetan, Kapanewon Temon, Kabupaten Kulon Progo, D.I. Yogyakarta 55654.
- **Titik Koordinat**: `-7.8737951° LS, 110.0766366° BT`.
- **Google Maps**: `https://www.google.com/maps/place/Mushola+Al+Firdaus/@-7.8737951,110.0766366,983m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e7ae5768bd36477:0x86186545acb7c15!8m2!3d-7.8737951!4d110.0766366!16s%2Fg%2F11smkls85w`.
- **Kontak Resmi**: `+62 812-2942-3441` (`6281229423441`).
- **Rekening Infaq**: Bank BPD DIY (Capem Temon - 024) `024.231.001470` a.n. `MUH ABDUL AZIS QQ MUSHOLLA AL FIRDAUS`.

## 2. Aturan Diksi & Narasi
- **Gunakan Diksi "Beribadah"**: Gunakan kata *beribadah* / *tempat beribadah* / *sarana beribadah*. Dilarang menggunakan kata *peribadatan* (kecuali untuk nama resmi *Seksi Peribadatan* pada takmir).
- **Dilarang Menyinggung Santri / Pesantren**: Jangan pernah menuliskan atau menyinggung kata *santri*, *santri mukim*, atau *pesantren*. Profil masjid berfokus murni pada sholat fardhu 5 waktu, Sholat Jumat, dan pengajian warga.

## 3. UI/UX & Arsitektur
- Multi-page Vanilla HTML/CSS/JS (8 halaman: `index.html`, `sejarah.html`, `takmir.html`, `jadwal-sholat.html`, `infaq.html`, `agenda.html`, `fasilitas.html`, `kontak.html`).
- Single Data Source: `js/data-takmir.js`.
- Tema Warna: Islamic Emerald (`--primary-900: #064e3b;`) & Gold (`--gold-500: #f59e0b;`).
- Font: `'Plus Jakarta Sans'` (Latin) dan `'Amiri'` (Arab).
- Navbar: 8 menu items dengan `.nav-link` padat (`font-size: 0.84rem; height: 34px; padding: 6px 11px; white-space: nowrap;`) dan tombol Infaq header (`.nav-btn-infaq`).
