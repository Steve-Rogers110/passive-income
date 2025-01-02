const playButton = document.getElementById("playButton");
const pauseOverlay = document.getElementById("pause-overlay");
const video = document.getElementById("video");

let paused = true;

playButton.onclick = () => {
    playButton.classList.toggle("active");
    pauseOverlay.classList.toggle("paused");
    paused ? video.play() : video.pause();

    paused = !paused;

    // if(paused){
    //     pauseOverlay.style.opacity = "80%"
    // }else{
    //     pauseOverlay.style.opacity = "0%"
    // }
    // pauseOverlay.onmouseover = () =>{pauseOverlay.style.opacity= "80%"}
    // pauseOverlay.onmouseout = () =>{pauseOverlay.style.opacity= "0%"}
};
