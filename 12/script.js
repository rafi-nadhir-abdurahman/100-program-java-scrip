let secretNumber = Math.floor(Math.random() * 100) + 1;
let maxAttempts = 10;
let attemptCount = 0;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const guess = parseInt(input.value);
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = "Masukkan angka valid antara 1 dan 100.";
    return;
  }

  attemptCount++;
  attempts.textContent = `Percobaan: ${attemptCount} dari ${maxAttempts}`;

  if (guess === secretNumber) {
    feedback.textContent = `Selamat! Kamu menebak dengan benar: ${secretNumber}`;
    endGame();
  } else if (attemptCount >= maxAttempts) {
    feedback.textContent = `Game over! Angka yang benar adalah ${secretNumber}.`;
    endGame();
  } else if (guess < secretNumber) {
    feedback.textContent = "Terlalu rendah! Coba angka lebih besar.";
  } else {
    feedback.textContent = "Terlalu tinggi! Coba angka lebih kecil.";
  }

  input.value = "";
  input.focus();
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button[onclick='checkGuess()']").disabled = true;
  document.getElementById("resetBtn").style.display = "inline";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;

  document.getElementById("guessInput").disabled = false;
  document.querySelector("button[onclick='checkGuess()']").disabled = false;
  document.getElementById("feedback").textContent = "";
  document.getElementById("attempts").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("resetBtn").style.display = "none";
}
