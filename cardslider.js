let currentIndex = 0;

function scrollSlider(direction) {
  const slider = document.querySelector('.slider');
  const cards = document.querySelectorAll('.card');
  const cardWidth = cards[0].offsetWidth;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = cards.length - 1;
  } else if (currentIndex >= cards.length) {
    currentIndex = 0;
  }

  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
