/**
 * Data Takmir & Profil Masjid Al Firdaus
 * Lokasi: Dukuh Kaligondang, Desa Temon Wetan, Kapanewon Temon, Kabupaten Kulon Progo, D.I. Yogyakarta
 * Google Maps: https://www.google.com/maps/place/Mushola+Al+Firdaus/@-7.8737951,110.0766366,983m/
 * Kontak Resmi: +62 812-2942-3441
 */

const MASJID_DATA = {
  profile: {
    name: "Masjid Al Firdaus",
    previousName: "Mushola Al Firdaus",
    tagline: "Pusat Tempat Beribadah Jamaah & Kebersamaan Warga Kaligondang",
    foundedYear: 2009,
    mosqueUpgradeDate: "2026 / 4 Muharram 1448 H",
    officialPhone: "+62 812-2942-3441",
    officialPhoneClean: "6281229423441",
    location: {
      dukuh: "Kaligondang",
      desa: "Temon Wetan",
      kapanewon: "Temon",
      kabupaten: "Kulon Progo",
      provinsi: "D.I. Yogyakarta",
      kodePos: "55654",
      coordinates: {
        lat: -7.8737951,
        lng: 110.0766366
      },
      googleMapsUrl: "https://www.google.com/maps/place/Mushola+Al+Firdaus/@-7.8737951,110.0766366,983m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e7ae5768bd36477:0x86186545acb7c15!8m2!3d-7.8737951!4d110.0766366!16s%2Fg%2F11smkls85w"
    }
  },

  bankAccount: {
    bankName: "Bank BPD DIY",
    branch: "Capem Temon (024)",
    accountNumber: "024.231.001470",
    accountNumberClean: "024231001470",
    accountHolder: "MUH ABDUL AZIS QQ MUSHOLLA AL FIRDAUS",
    picInfaq: [
      { name: "Bpk. Rahman Hartono", role: "Petugas Infak & Shadaqah", phone: "6281229423441" },
      { name: "Bpk. Ngadiman", role: "Petugas Infak & Shadaqah", phone: "6281229423441" }
    ],
    bendahara: "Ibu Sudarsih"
  },

  historyTimeline: [
    {
      year: "2009",
      hijri: "1430 H",
      title: "Pendirian Mushola Al Firdaus",
      badge: "Tonggak Awal",
      description: "Mushola Al Firdaus didirikan atas inisiatif dan swadaya gotong royong warga Dukuh Kaligondang, Temon Wetan sebagai sarana tempat beribadah sholat 5 waktu harian, pengajian warga, serta bimbingan dasar baca Al-Qur'an untuk anak-anak sekitar."
    },
    {
      year: "2010 - 2025",
      hijri: "1431 - 1447 H",
      title: "Pemberdayaan Jamaah & Kegiatan Beribadah Warga",
      badge: "Penguatan Jamaah",
      description: "Kegiatan ibadah jamaah berkembang dengan terbentuknya majelis taklim bapak-bapak & ibu-ibu, kepengurusan Remaja Islam Masjid (Rismas), renovasi sarana fisik, serta pengajian anak-anak warga lingkungan sekitar."
    },
    {
      year: "2026",
      hijri: "4 Muharram 1448 H",
      title: "Peningkatan Status Resmi Menjadi Masjid Al Firdaus",
      badge: "Transformasi Bersejarah",
      description: "Atas musyawarah mufakat warga, status dinaikkan menjadi Masjid Al Firdaus untuk memfasilitasi Sholat Jumat berjamaah dan pusat tempat beribadah masyarakat luas. Masjid berfokus sebagai tempat ibadah sholat berjamaah warga Kaligondang."
    }
  ],

  takmirCategories: [
    { id: "all", name: "Semua Pengurus" },
    { id: "inti", name: "Pimpinan Inti" },
    { id: "pendidikan", name: "Pendidikan & Bimbingan" },
    { id: "peribadatan", name: "Ibadah & Sholat" },
    { id: "pembangunan", name: "Pembangunan" },
    { id: "sosial", name: "Sosial & Qurban" },
    { id: "rismas", name: "Remaja Masjid (Rismas)" },
    { id: "humas", name: "Humas & Lembaga" },
    { id: "usaha", name: "Usaha & Perlengkapan" },
    { id: "infaq", name: "Infak & Shadaqah" }
  ],

  takmirMembers: [
    // Pimpinan Inti
    {
      name: "Muh Abdul Azis",
      role: "Ketua Takmir",
      category: "inti",
      badge: "Pimpinan",
      icon: "fa-user-tie",
      desc: "Memimpin seluruh koordinasi kebijakan ketakmiran, kemakmuran masjid, dan ketertiban kegiatan beribadah jamaah Al Firdaus."
    },
    {
      name: "Ari Setiyono",
      role: "Sekretaris Takmir",
      category: "inti",
      badge: "Administrasi",
      icon: "fa-file-signature",
      desc: "Mengelola administrasi persuratan, dokumentasi program kerja ketakmiran, dan pencatatan arsip masjid."
    },
    {
      name: "Sudarsih",
      role: "Bendahara Takmir",
      category: "inti",
      badge: "Keuangan",
      icon: "fa-wallet",
      desc: "Mengelola pembukuan kas operasional masjid, transparansi pelaporan infak sedekah, dan akuntabilitas anggaran."
    },

    // 1. Seksi Pendidikan
    {
      name: "Sumirah",
      role: "Seksi Pendidikan",
      category: "pendidikan",
      badge: "Bimbingan Warga",
      icon: "fa-book-quran",
      desc: "Membina bimbingan belajar baca Al-Qur'an (Iqro') anak-anak warga dan penguatan nilai aqidah islamiyah keluarga."
    },
    {
      name: "Siti Musfiroh",
      role: "Seksi Pendidikan",
      category: "pendidikan",
      badge: "Bimbingan Warga",
      icon: "fa-chalkboard-user",
      desc: "Membantu pengajaran tajwid dasar, hafalan doa sehari-hari, dan bimbingan adab sholat anak-anak warga sekitar."
    },
    {
      name: "Dian Kurniati",
      role: "Seksi Pendidikan",
      category: "pendidikan",
      badge: "Bimbingan Warga",
      icon: "fa-graduation-cap",
      desc: "Mengkoordinir jadwal bimbingan mengaji sore anak-anak warga dan pemeliharaan mushaf Al-Qur'an masjid."
    },
    {
      name: "Rini Setianingsih",
      role: "Seksi Pendidikan",
      category: "pendidikan",
      badge: "Bimbingan Warga",
      icon: "fa-heart",
      desc: "Mendampingi kegiatan edukasi keislaman anak-anak warga dan peringatan hari-hari besar Islam."
    },

    // 2. Seksi Peribadatan
    {
      name: "Wito Utomo",
      role: "Seksi Peribadatan",
      category: "peribadatan",
      badge: "Imam & Sholat",
      icon: "fa-kaaba",
      desc: "Mengatur jadwal imam rawatib harian, khatib sholat Jumat, dan ketertiban kegiatan beribadah sholat fardhu warga."
    },
    {
      name: "Umar Ahmadi",
      role: "Seksi Peribadatan",
      category: "peribadatan",
      badge: "Kekhidmatan Ibadah",
      icon: "fa-mosque",
      desc: "Menjaga kekhidmatan sholat fardhu 5 waktu, sholat tarawih, serta ketenangan ruang utama tempat beribadah."
    },
    {
      name: "Purwadi",
      role: "Seksi Peribadatan",
      category: "peribadatan",
      badge: "Jadwal & Muadzin",
      icon: "fa-bell",
      desc: "Mengkoordinir kumandang adzan tepat waktu setiap waktu sholat dan kesiapan sholat Jumat berjamaah."
    },

    // 3. Seksi Pembangunan
    {
      name: "Rohjadi",
      role: "Seksi Pembangunan",
      category: "pembangunan",
      badge: "Infrastruktur",
      icon: "fa-trowel-bricks",
      desc: "Perencanaan pemeliharaan fisik bangunan masjid, renovasi berkala, dan pemeliharaan kenyamanan tempat beribadah."
    },
    {
      name: "Teguh Riyadin",
      role: "Seksi Pembangunan",
      category: "pembangunan",
      badge: "Infrastruktur",
      icon: "fa-hammer",
      desc: "Pelaksanaan teknis pemeliharaan tempat wudhu, kanopi, instalasi penerangan, dan fasilitas fisik masjid."
    },

    // 4. Seksi Sosial / Qurban
    {
      name: "Widodo Triyanto",
      role: "Seksi Sosial / Qurban",
      category: "sosial",
      badge: "Sosial & Qurban",
      icon: "fa-hand-holding-heart",
      desc: "Mengelola kepanitiaan penerimaan, penyembelihan syar'i, dan distribusi hewan qurban Idul Adha bagi warga."
    },
    {
      name: "Agus Winarno",
      role: "Seksi Sosial / Qurban",
      category: "sosial",
      badge: "Sosial & Qurban",
      icon: "fa-users-line",
      desc: "Mengkoordinir kegiatan sosial kebersamaan warga sekitar, santunan yatim/dhuafa, dan kepedulian masyarakat."
    },

    // 5. Seksi Remaja Masjid (Rismas)
    {
      name: "Alezian Adib",
      role: "Seksi Remaja Masjid (Rismas)",
      category: "rismas",
      badge: "Pemuda Masjid",
      icon: "fa-users",
      desc: "Menggerakkan pemuda warga Kaligondang dalam syiar keislaman, kebersihan masjid, dan takbiran hari raya."
    },
    {
      name: "Alianzah",
      role: "Seksi Remaja Masjid (Rismas)",
      category: "rismas",
      badge: "Pemuda Masjid",
      icon: "fa-lightbulb",
      desc: "Mengorganisir agenda kebersamaan pemuda warga desa dan regenerasi kepengurusan pemakmur masjid."
    },

    // 6. Seksi Humas dan Lembaga
    {
      name: "Bambang Sutrisno",
      role: "Seksi Humas & Lembaga",
      category: "humas",
      badge: "Kemitraan",
      icon: "fa-bullhorn",
      desc: "Menjalin komunikasi dengan pemerintah Kalurahan Temon Wetan, KUA Kapanewon Temon, dan tokoh masyarakat."
    },
    {
      name: "Widiyanto",
      role: "Seksi Humas & Lembaga",
      category: "humas",
      badge: "Informasi Publik",
      icon: "fa-comments",
      desc: "Penyampaian informasi jadwal sholat, pengumuman kegiatan warga, dan syiar masjid kepada warga Kaligondang."
    },
    {
      name: "Sutrisno",
      role: "Seksi Humas & Lembaga",
      category: "humas",
      badge: "Hubungan Masyarakat",
      icon: "fa-handshake",
      desc: "Menjalin silaturahmi antar-masjid sekitar dan sinergi kegiatan kemasyarakatan di wilayah Temon Wetan."
    },

    // 7. Seksi Usaha / Perlengkapan
    {
      name: "Winarno",
      role: "Seksi Usaha & Perlengkapan",
      category: "usaha",
      badge: "Logistik & Sarana",
      icon: "fa-toolbox",
      desc: "Pemeliharaan sound system adzan, karpet sholat, pendingin ruangan/kipas, dan instalasi kelistrikan."
    },
    {
      name: "Fauzan",
      role: "Seksi Usaha & Perlengkapan",
      category: "usaha",
      badge: "Inventaris",
      icon: "fa-boxes-stacked",
      desc: "Pengelolaan inventaris perlengkapan ibadah, genset cadangan, dan aset fasilitas milik masjid."
    },

    // 8. Tim Infak & Shadaqah
    {
      name: "Rahman Hartono",
      role: "Tim Pengelola Infak & Shadaqah",
      category: "infaq",
      badge: "Pengelola ZIS",
      icon: "fa-hand-holding-dollar",
      desc: "Pengelolaan kotak infak jumat, infak harian jamaah, dan pencatatan penerimaan donasi rekening Bank BPD DIY."
    },
    {
      name: "Ngadiman",
      role: "Tim Pengelola Infak & Shadaqah",
      category: "infaq",
      badge: "Pengelola ZIS",
      icon: "fa-coins",
      desc: "Penghitungan dan pembukuan berkala dana infak untuk pemeliharaan tempat beribadah dan operasional masjid."
    }
  ],

  agendas: [
    {
      title: "Sholat Fardhu Berjamaah 5 Waktu",
      time: "Setiap Hari (Subuh, Dzuhur, Ashar, Maghrib, Isya)",
      place: "Ruang Utama Masjid Al Firdaus",
      category: "Ibadah Fardhu",
      desc: "Pelaksanaan ibadah sholat wajib 5 waktu berjamaah secara rutin dan khusyuk bagi seluruh warga masyarakat."
    },
    {
      title: "Sholat Jumat Berjamaah & Khutbah",
      time: "Setiap Hari Jumat | 11.30 WIB - Selesai",
      place: "Ruang Utama Masjid Al Firdaus",
      category: "Ibadah Jumat",
      desc: "Pelaksanaan Sholat Jumat berjamaah dan khutbah bagi warga Dukuh Kaligondang dan jamaah umum sekitar."
    },
    {
      title: "Pengajian Rutin Majelis Taklim",
      time: "Malam Ahad / Jadwal Berkala | Ba'da Isya",
      place: "Masjid Al Firdaus Kaligondang",
      category: "Kajian Warga",
      desc: "Kajian keislaman, fiqih ibadah praktis, dan silaturahmi keagamaan warga bapak-bapak & ibu-ibu Kaligondang."
    },
    {
      title: "Penyelenggaraan Ibadah Qurban Idul Adha",
      time: "Bulan Dzulhijjah (Tahunan)",
      place: "Halaman Masjid Al Firdaus",
      category: "Sosial Keumatan",
      desc: "Penerimaan hewan qurban warga, penyembelihan secara syar'i, dan pembagian daging qurban merata untuk masyarakat."
    }
  ],

  facilities: [
    {
      title: "Ruang Utama Sholat Sejuk & Nyaman",
      desc: "Kapasitas jamaah yang luas dilengkapi karpet bersih, kipas angin pendingin, pencahayaan terang, dan mihrab kaligrafi.",
      icon: "fa-mosque"
    },
    {
      title: "Tempat Wudhu & Sanitasi Bersih",
      desc: "Fasilitas tempat wudhu terpisah untuk pria dan wanita dengan kran lancar dan pasokan air bersih melimpah.",
      icon: "fa-shower"
    },
    {
      title: "Sound System Jernih & Genset Cadangan",
      desc: "Tata suara akustik berkualitas untuk kumandang adzan dan pengajian warga, didukung genset saat listrik padam.",
      icon: "fa-volume-high"
    },
    {
      title: "Perlengkapan Rukun Kematian (Jenazah)",
      desc: "Inventaris lengkap pemandian jenazah, kain kafan, dan keranda untuk melayani warga saat berduka.",
      icon: "fa-heart-pulse"
    },
    {
      title: "Halaman Parkir Luas & Tertata",
      desc: "Area parkir yang aman dan nyaman untuk kendaraan roda dua maupun roda empat jamaah.",
      icon: "fa-square-parking"
    }
  ]
};
