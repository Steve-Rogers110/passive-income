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
// Pause video Olverlay
window.addEventListener("mouseout", function (event) {
    if (!event.relatedTarget || event.relatedTarget.nodeName === "HTML") {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "flex"; // Show the overlay
        overlay.style.visibility = "visible";
    }
});

// Mouse out of page popup
const overlay = document.getElementById("overlay");
// Close the overlay when the button is clicked
document.getElementById("closeOverlay").addEventListener("click", function () {
    navigator.clipboard.writeText("TIME2EARN");
    overlay.style.display = "none"; // Hide the overlay
    overlay.style.visibility = "collapse";
});

const primarySource = document.getElementById("firstVideoSource");

// Add an error handler to detect when the first source fails
primarySource.addEventListener("error", () => {
    console.log("Primary source failed, switching to fallback...");
    const fallbackSource = document.getElementById("secondVideoSource");
    if (fallbackSource) {
        video.src = fallbackSource.src; // Set fallback source
        video.load(); // Reload the video
        video.play(); // Play the video (optional)
    }
});
