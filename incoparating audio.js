// Created by Lucy Njoki 

document.addEventListener("DOMContentLoaded", function () {
    const memeImage = document.getElementById("memeImage");
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const backgroundSound = document.getElementById("backgroundSound");
    let isMoving = false;
    let moveInterval;

    function moveMeme() {
        const maxX = window.innerWidth - memeImage.clientWidth;
        const maxY = window.innerHeight - memeImage.clientHeight;

        memeImage.style.left = Math.random() * maxX + "5px";
        memeImage.style.top = Math.random() * maxY + "10px";

        function moveMeme() {
            const maxX = window.innerWidth - memeImage.clientWidth;
            const maxY = window.innerHeight - memeImage.clientHeight;
        
            // Increase the image size
            const newSize = 200; // Change this value as needed
            memeImage.style.width = newSize + "10px";
            memeImage.style.height = newSize + "10px";
        
            // Randomly position the meme
            memeImage.style.left = Math.random() * (maxX - newSize) + "10px";
            memeImage.style.top = Math.random() * (maxY - newSize) + "10px";
        }
        
    }

    startButton.addEventListener("click", function () {
        if (!isMoving) {
            isMoving = true;
            startButton.disabled = true;
            stopButton.disabled = false;
            moveInterval = setInterval(moveMeme, 1000);
            backgroundSound.play(); // Play the background sound
        }
    });

    stopButton.addEventListener("click", function () {
        if (isMoving) {
            isMoving = false;
            startButton.disabled = false;
            stopButton.disabled = true;
            clearInterval(moveInterval);
            backgroundSound.pause(); // Pause the background sound
        }
    });
});
