// photography
const scrollingImages3 = document.getElementById('scrollingImages3');

let currentPosition3 = 0;

// Auto-scroll function for photography
function autoScroll3() {
  const totalWidth3 = scrollingImages3.scrollWidth;
  const containerWidth = scrollingImages3.parentElement.offsetWidth;

  currentPosition3 -= 500; // Scroll by one image width
  if (Math.abs(currentPosition3) >= totalWidth3) {
    currentPosition3 = 0; // Reset position
  }
  scrollingImages3.style.transform = `translateX(${currentPosition3}px)`;
}

// Start auto-scroll
let autoScrollInterval3 = setInterval(autoScroll3, 2000); // Auto-scroll every 2 seconds

// Scroll Left (Previous Button)
function scrollLeft3() {
  clearInterval(autoScrollInterval3); // Pause auto-scroll
  currentPosition3 += 500; // Scroll one image to the left
  if (currentPosition3 > 0) {
    currentPosition3 = -scrollingImages3.scrollWidth + 500; // Reset to last image
  }
  scrollingImages3.style.transform = `translateX(${currentPosition3}px)`;
  autoScrollInterval3 = setInterval(autoScroll3, 2000); // Resume auto-scroll
}

// Scroll Right (Next Button)
function scrollRight3() {
  clearInterval(autoScrollInterval3); // Pause auto-scroll
  currentPosition3 -= 500; // Scroll one image to the right
  if (Math.abs(currentPosition3) >= scrollingImages3.scrollWidth) {
    currentPosition3 = 0; // Reset to first image
  }
  scrollingImages3.style.transform = `translateX(${currentPosition3}px)`;
  autoScrollInterval3 = setInterval(autoScroll3, 2000); // Resume auto-scroll
}


// event listneners
const leftButton3 = document.querySelector('.js-button3-left')
const rightButton3 = document.querySelector('.js-button3-right')

leftButton3.addEventListener('click', () => {
  scrollLeft3()
})

rightButton3.addEventListener('click', () => {
  scrollRight3()
})
