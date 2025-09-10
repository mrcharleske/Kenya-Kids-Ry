// Wait until the page loads
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
});

// Restart hero animation on page load
const heroCard = document.querySelector(".hero-card");
if (heroCard) {
  heroCard.classList.remove("animate");
  void heroCard.offsetWidth; // trigger reflow
  heroCard.classList.add("animate");
}

// Fade-in cards on scroll
const cards = document.querySelectorAll(".card");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
