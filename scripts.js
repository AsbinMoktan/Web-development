document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close-btn");
  const navLinks = document.querySelectorAll(".sidebar-menu a");

  // Show sidebar when hamburger is clicked
  hamburger.addEventListener("click", () => {
    sidebar.classList.add("active");
  });

  // Hide sidebar when close button is clicked
  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });

  // Hide sidebar when any link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
    });
  });
});
