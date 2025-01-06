const playButton = document.getElementById("playButton");
const pauseOverlay = document.getElementById("pause-overlay");
const video = document.getElementById("video");

let paused = true;

playButton.onclick = () => {
    playButton.classList.toggle("active");
    pauseOverlay.classList.toggle("paused");
    paused ? video.play() : video.pause();

    paused = !paused;
};

window.addEventListener("mouseout", function (event) {
    if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex"; // Show the overlay
        overlay.style.visibility = "visible";
    }
});

const overlay = document.getElementById("overlay");
// Close the overlay when the button is clicked
document.getElementById("closeOverlay").addEventListener("click", function () {
    overlay.style.display = "none"; // Hide the overlay
    overlay.style.visibility = "collapse";
});
