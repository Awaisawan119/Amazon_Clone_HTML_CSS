const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

let currentIndex = 1; // Start at the first "real" slide (after the clone)
const totalSlides = slideImages.length;

// Clone the first and last slides
const firstClone = slideImages[0].cloneNode(true);
const lastClone = slideImages[totalSlides - 1].cloneNode(true);

// Append clones to the slider
slides.appendChild(firstClone);
slides.insertBefore(lastClone, slideImages[0]);

// Update slider to show the first "real" slide
slides.style.transform = `translateX(-100%)`;

// Function to update the slide position
function updateSlidePosition(index) {
    slides.style.transition = 'transform 0.3s ease-in-out'; // Faster speed
    slides.style.transform = `translateX(${-index * 100}%)`;
}

// Move to the next slide
function nextSlide() {
    currentIndex++;
    updateSlidePosition(currentIndex);

    // If on the clone of the first slide, reset to the real first slide
    setTimeout(() => {
        if (currentIndex === totalSlides + 1) {
            slides.style.transition = 'none'; // Disable transition
            currentIndex = 1; // Reset index
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }
    }, 300); // Match the transition duration
}

// Move to the previous slide
function prevSlide() {
    currentIndex--;
    updateSlidePosition(currentIndex);

    // If on the clone of the last slide, reset to the real last slide
    setTimeout(() => {
        if (currentIndex === 0) {
            slides.style.transition = 'none'; // Disable transition
            currentIndex = totalSlides; // Reset index
            slides.style.transform = `translateX(${-currentIndex * 100}%)`;
        }
    }, 300); // Match the transition duration
}

// Event listeners for arrows
const leftArrowBox = document.querySelector('.left-arrow-box');
const rightArrowBox = document.querySelector('.right-arrow-box');
rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);
