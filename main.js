// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    if (mobileMenu.style.top === "0px") {
      mobileMenu.style.top = "-100%";
    } else {
      mobileMenu.style.top = "0px";
    }
  });
});
