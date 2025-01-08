const playButton = document.getElementById("playButton");
const pauseOverlay = document.getElementById("pause-overlay");
const video = document.getElementById("video");

const couponCode = "TIME2EARN"

const copyCoupon = () =>{
    navigator.clipboard.writeText("TIME2EARN");
}

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
        copyCoupon();
        overlay.style.display = "flex"; // Show the overlay
        overlay.style.visibility = "visible";
    }
});

// Mouse out of page popup
const overlay = document.getElementById("overlay");
// Close the overlay when the button is clicked
document.getElementById("closeOverlay").addEventListener("click", function () {
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

document.getElementById("coupon-display").addEventListener("click", () =>{
    copyCoupon();
})



// COUNTDOWN

const COUNTDOWN_KEY = "countdown_timer_end";
const PROMOTION_TEXT = "Hurry! The promotion is ending soon!";

function startCountdown(durationInMinutes) {
  const now = Date.now();
  const endTime = now + durationInMinutes * 60 * 1000;

  // Store the end time in localStorage
  localStorage.setItem(COUNTDOWN_KEY, endTime);
  updateCountdown();
}

function updateCountdown() {
  const countdownTimer = document.getElementById("countdown-timer");
  const endTime = parseInt(localStorage.getItem(COUNTDOWN_KEY), 10);
  const now = Date.now();

  if (isNaN(endTime)) {
    // Start a new countdown if no valid end time exists
    startCountdown(35);
    return;
  }

  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    // Countdown finished
    countdownTimer.textContent = PROMOTION_TEXT;
  } else {
    // Update countdown display
    const minutes = Math.floor(timeLeft / 1000 / 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    countdownTimer.textContent = `Time remaining: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    // Update the timer every second
    setTimeout(updateCountdown, 1000);
  }
}

// Initialize the countdown
if (!localStorage.getItem(COUNTDOWN_KEY)) {
  startCountdown(20); // Start with 20 minutes if not already set
} else {
  updateCountdown();
}