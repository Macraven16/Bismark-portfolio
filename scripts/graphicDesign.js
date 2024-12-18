// photography
const scrollingImages2 = document.getElementById('scrollingImages2');

let currentPosition2 = 0;

// Auto-scroll function for photography
function autoScroll2() {
  const totalWidth2 = scrollingImages2.scrollWidth;
  const containerWidth = scrollingImages2.parentElement.offsetWidth;

  currentPosition2 -= 500; // Scroll by one image width
  if (Math.abs(currentPosition2) >= totalWidth2) {
    currentPosition2 = 0; // Reset position
  }
  scrollingImages2.style.transform = `translateX(${currentPosition2}px)`;
}

// Start auto-scroll
let autoScrollInterval2 = setInterval(autoScroll2, 2000); // Auto-scroll every 2 seconds

// Scroll Left (Previous Button)
function scrollLeft2() {
  clearInterval(autoScrollInterval2); // Pause auto-scroll
  currentPosition2 += 500; // Scroll one image to the left
  if (currentPosition2 > 0) {
    currentPosition2 = -scrollingImages2.scrollWidth + 500; // Reset to last image
  }
  scrollingImages2.style.transform = `translateX(${currentPosition2}px)`;
  autoScrollInterval2 = setInterval(autoScroll2, 2000); // Resume auto-scroll
}

// Scroll Right (Next Button)
function scrollRight2() {
  clearInterval(autoScrollInterval2); // Pause auto-scroll
  currentPosition2 -= 500; // Scroll one image to the right
  if (Math.abs(currentPosition2) >= scrollingImages2.scrollWidth) {
    currentPosition2 = 0; // Reset to first image
  }
  scrollingImages2.style.transform = `translateX(${currentPosition2}px)`;
  autoScrollInterval2 = setInterval(autoScroll2, 2000); // Resume auto-scroll
}


// event listneners
const leftButton2 = document.querySelector('.js-button2-left')
const rightButton2 = document.querySelector('.js-button2-right')

leftButton2.addEventListener('click', () => {
  scrollLeft2()
})

rightButton2.addEventListener('click', () => {
  scrollRight2()
})
