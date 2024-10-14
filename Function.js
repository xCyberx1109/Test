document.getElementById("sound-button").addEventListener("click", function () {
    document.getElementById("sound").play();
    var audio = document.getElementById("myAudio");
    audio.volume = 0.05; 
});