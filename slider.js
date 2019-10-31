let currentImageIndex = 0

/**
 * begins slider animation
 */
function beginSliderAnimation() {
    setInterval(changeImage, 3000)
}

/**
 * Changes the opacity on current and next image 
 * to animate the transition to the next image
 */
function changeImage() {
    const images = document.querySelectorAll(".animated_slider img")
    images[currentImageIndex].classList.add("hidden")

    currentImageIndex++
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.remove("hidden")

}