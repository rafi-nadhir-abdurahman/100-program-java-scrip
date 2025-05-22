let totalSeconds = 0;
let intervalId = null;

function updateDisplay() {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;

  document.getElementById('timerDisplay').textContent = `${m}:${s}`;
}

function startCountdown() {
  if (intervalId) return;

  const inputMinutes = parseInt(document.getElementById('minutes').value) || 0;
  const inputSeconds = parseInt(document.getElementById('seconds').value) || 0;

  if (inputMinutes === 0 && inputSeconds === 0) return;

  totalSeconds = inputMinutes * 60 + inputSeconds;
  updateDisplay();

  intervalId = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      alert("Waktu habis!");
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetCountdown() {
  stopCountdown();
  totalSeconds = 0;
  updateDisplay();
}
