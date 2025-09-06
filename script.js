document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".testimonial-track");
  const cards = Array.from(track.children);
  // Duplicar os cards para efeito infinito
  track.innerHTML += track.innerHTML;
  let position = 0;
  const cardWidth = cards[0].offsetWidth + 20; // 20 = gap do CSS
  function animateCarousel() {
    position -= 1; // velocidade
    if (position <= -track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animateCarousel);
  }
  animateCarousel();
});
