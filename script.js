let currentIndex = 0;

// Function to display the current slide based on the index
function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (n >= slides.length) { 
        currentIndex = 0;  // Reset to first slide if index exceeds the last slide
    } 
    if (n < 0) { 
        currentIndex = slides.length - 1;  // Set to last slide if index is less than 0
    }

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the current slide based on currentIndex
    slides[currentIndex].style.display = "block";
}

// Function to move to the next or previous slide
function moveSlide(n) {
    showSlides(currentIndex += n);  // Adjust currentIndex and show the updated slide
}

// Initialize the slideshow when the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    showSlides(currentIndex);  // Show the initial slide
});

// Mobile Navigation Toggle
const toggleMenu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// Add click event listener to toggle the mobile navigation menu
toggleMenu.addEventListener('click', () => {
    nav.classList.toggle('nav-open');  // Toggle the 'nav-open' class on the navigation
});
