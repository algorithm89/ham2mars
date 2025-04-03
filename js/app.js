document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Toggle menu on click
  menuToggle?.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // ✅ Highlight the active nav link
  const links = document.querySelectorAll('#navLinks a');
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    }
  });

  // Reset menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
    }
  });
});