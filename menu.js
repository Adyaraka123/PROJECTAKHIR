document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil elemen-elemen yang dibutuhkan dari DOM
  const carouselTrack = document.getElementById("carouselTrack");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // 2. Tentukan seberapa banyak kita akan menggeser
  // Kita akan menggeser sebesar lebar satu item kopi + jarak (gap).
  // Nilai ini harus disesuaikan dengan nilai di CSS (.coffee-item width + gap)
  const scrollAmount = 270; // (250px lebar item + 20px gap)

  // 3. Tambahkan event listener untuk tombol 'Next'
  nextBtn.addEventListener("click", () => {
    // scrollLeft adalah posisi scroll horizontal saat ini
    // Kita tambahkan nilai scrollAmount untuk menggeser ke kanan
    carouselTrack.scrollLeft += scrollAmount;
  });

  // 4. Tambahkan event listener untuk tombol 'Previous'
  prevBtn.addEventListener("click", () => {
    // Kita kurangi nilai scrollAmount untuk menggeser ke kiri
    carouselTrack.scrollLeft -= scrollAmount;
  });

  // Catatan: Karena kita menggunakan `scroll-behavior: smooth;` di CSS,
  // perubahan `scrollLeft` akan menghasilkan animasi yang mulus.
});

document.addEventListener("DOMContentLoaded", () => {
  // 1. Ambil elemen-elemen yang dibutuhkan dari DOM
  // 'carouselTrack' adalah div yang berisi semua item kopi dan akan di-scroll
  const carouselTrack = document.getElementById("carouselTrack");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // 2. Tentukan seberapa banyak kita akan menggeser
  // Nilai ini harus sama dengan LEBAR SATU ITEM + JARAK ANTAR ITEM (GAP) yang Anda tentukan di CSS.
  // Di file styles.css kita menggunakan:
  // .coffee-item width: 250px
  // .carousel-track gap: 20px
  const itemWidth = 250;
  const itemGap = 20;
  const scrollAmount = itemWidth + itemGap; // Total pergeseran per klik: 270px

  // 3. Tambahkan event listener untuk tombol 'Next' (Panah Kanan)
  nextBtn.addEventListener("click", () => {
    // scrollLeft adalah posisi scroll horizontal saat ini.
    // Kita tambahkan nilai scrollAmount untuk menggeser ke kanan
    carouselTrack.scrollLeft += scrollAmount;

    // Opsional: Cek jika sudah di akhir untuk menonaktifkan tombol (penyempurnaan)
    // (Kita biarkan sederhana untuk saat ini, fokus pada animasi geser)
  });

  // 4. Tambahkan event listener untuk tombol 'Previous' (Panah Kiri)
  prevBtn.addEventListener("click", () => {
    // Kita kurangi nilai scrollAmount untuk menggeser ke kiri
    carouselTrack.scrollLeft -= scrollAmount;
  });

  // Catatan Penting: Animasi mulus terjadi karena CSS berikut:
  // di file styles.css, pada selector .carousel-track, kita menggunakan properti:
  // scroll-behavior: smooth;
});
