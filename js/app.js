document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Toggle menu on click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Reset menu state on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
    }
  });

  // 🎥 Video Interaction Logic
  const video = document.getElementById("bg-video");
  const header = document.getElementById("mainHeader");
  const hero = document.getElementById("heroContent");

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      header.classList.remove("visible-content");
      header.classList.add("hidden-while-playing");
      hero.classList.remove("visible-content");
      hero.classList.add("hidden-while-playing");
    } else {
      video.pause();
      header.classList.add("visible-content");
      header.classList.remove("hidden-while-playing");
      hero.classList.add("visible-content");
      hero.classList.remove("hidden-while-playing");
    }
  });
});
