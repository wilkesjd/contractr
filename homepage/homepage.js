const images = ['images/landscaping1.jpg', 'images/landscaping2.jpg', 'images/landscaping3.jpg']; // Array of image paths
let currentIndex = 0;

const image = document.getElementById('image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// Function to update the image source
function updateImage() {
    image.src = images[currentIndex];
}

// Event listeners for buttons
prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1; // Go to the previous image
    updateImage();
});

nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1; // Go to the next image
    updateImage();
});