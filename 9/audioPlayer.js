const audioPlayer = document.getElementById('audioPlayer');

function playAudio() {
  audioPlayer.play();
}

function pauseAudio() {
  audioPlayer.pause();
}

function stopAudio() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}

function increaseVolume() {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume += 0.1;
  }
}

function decreaseVolume() {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume -= 0.1;
  }
}
