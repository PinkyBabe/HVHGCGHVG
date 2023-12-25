document.addEventListener("DOMContentLoaded", function () {
    const changeImageButton = document.getElementById("changeImage");
    const princessImage = document.getElementById("princessImage");

    // Array of image URLs
    const images = [
        "princess.jpeg",
        "image2.jpg",
        "image3.jpg",
        // Add more image URLs as needed
    ];

    // Function to change the image randomly
    function changeImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        const randomImage = images[randomIndex];
        princessImage.src = randomImage;
    }

    // Attach the changeImage function to the button click event
    changeImageButton.addEventListener("click", changeImage);
});