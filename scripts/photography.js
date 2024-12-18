// photography
const scrollingImages1 = document.getElementById('scrollingImages1');

let currentPosition1 = 0;

// Auto-scroll function for photography
function autoScroll1() {
  const totalWidth1 = scrollingImages1.scrollWidth;
  const containerWidth = scrollingImages1.parentElement.offsetWidth;

  currentPosition1 -= 500; // Scroll by one image width
  if (Math.abs(currentPosition1) >= totalWidth1) {
    currentPosition1 = 0; // Reset position
  }
  scrollingImages1.style.transform = `translateX(${currentPosition1}px)`;
}

// Start auto-scroll
let autoScrollInterval1 = setInterval(autoScroll1, 2000); // Auto-scroll every 2 seconds

// Scroll Left (Previous Button)
function scrollLeft1() {
  clearInterval(autoScrollInterval1); // Pause auto-scroll
  currentPosition1 += 500; // Scroll one image to the left
  if (currentPosition1 > 0) {
    currentPosition1 = -scrollingImages1.scrollWidth + 500; // Reset to last image
  }
  scrollingImages1.style.transform = `translateX(${currentPosition1}px)`;
  autoScrollInterval1 = setInterval(autoScroll1, 2000); // Resume auto-scroll
}

// Scroll Right (Next Button)
function scrollRight1() {
  clearInterval(autoScrollInterval1); // Pause auto-scroll
  currentPosition1 -= 500; // Scroll one image to the right
  if (Math.abs(currentPosition1) >= scrollingImages1.scrollWidth) {
    currentPosition1 = 0; // Reset to first image
  }
  scrollingImages1.style.transform = `translateX(${currentPosition1}px)`;
  autoScrollInterval1 = setInterval(autoScroll1, 2000); // Resume auto-scroll
}


// event listneners
const leftButton1 = document.querySelector('.js-button1-left')
const rightButton1 = document.querySelector('.js-button1-right')

leftButton1.addEventListener('click', () => {
  scrollLeft1()
})

rightButton1.addEventListener('click', () => {
  scrollRight1()
})
