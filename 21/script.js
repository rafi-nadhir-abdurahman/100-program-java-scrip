const targetDateInput = document.getElementById("targetDate");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculateDays() {
  const targetDateValue = targetDateInput.value;
  if (!targetDateValue) {
    result.textContent = "Silakan pilih tanggal target!";
    return;
  }

  const today = new Date();
  const targetDate = new Date(targetDateValue);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    result.textContent = "Tanggal target sudah lewat.";
  } else if (diffDays === 0) {
    result.textContent = "Hari ini adalah tanggal target!";
  } else {
    result.textContent = `Jumlah hari sampai tanggal target: ${diffDays} hari`;
  }
}

calculateBtn.addEventListener("click", calculateDays);
