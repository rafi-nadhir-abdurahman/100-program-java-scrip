let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId = null;

function updateDisplay() {
  let h = hours < 10 ? '0' + hours : hours;
  let m = minutes < 10 ? '0' + minutes : minutes;
  let s = seconds < 10 ? '0' + seconds : seconds;
  document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
  if (intervalId) return;
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}
