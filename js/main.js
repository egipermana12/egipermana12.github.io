import { updateAuraPosition } from './mouseaura.js';

document.addEventListener("DOMContentLoaded", () => {
  const aura = document.getElementById("mouse-aura");
  window.addEventListener("pointermove", (e) => {
    updateAuraPosition(e, aura);
  });

  let currentActive = null;
  const navLinks = document.querySelectorAll('.nav_href');
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      const link = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        // Hapus class 'active' dari semua link
        navLinks.forEach(nav => nav.classList.remove("active"));
        // Tambahkan ke yang sedang aktif
        link.classList.add("active");
      }
    });
  }, {
    root: null,
    rootMargin: "0px",
    threshold: 0.6, // bagian 60% dari elemen terlihat
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});
