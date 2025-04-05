document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const navbar = document.querySelector(".navbar");

  // Toggle mobile menu and hamburger X
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    menuToggle.classList.toggle("open");
    navbar.classList.toggle("transparent");
    if (navLinks.classList.contains("show")) {
      navLinks.style.backdropFilter = "blur(8px)";
    } else {
      navLinks.style.backdropFilter = "none";
    }
  });

  // Highlight current active nav link
  const links = document.querySelectorAll('#navLinks a');
  const currentPath = window.location.pathname.split("/").pop();

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });

  // Reset nav on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("show");
      menuToggle.classList.remove("open");
      navbar.classList.remove("transparent");
      navLinks.style.backdropFilter = "none";
    }
  });
});
