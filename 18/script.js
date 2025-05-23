const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const heightCm = parseFloat(heightInput.value);

  if (isNaN(weight) || isNaN(heightCm) || weight <= 0 || heightCm <= 0) {
    result.textContent = "Masukkan berat dan tinggi yang valid!";
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight (Kurus)";
  } else if (bmi < 24.9) {
    category = "Normal";
  } else if (bmi < 29.9) {
    category = "Overweight (Kelebihan Berat)";
  } else {
    category = "Obese (Obesitas)";
  }

  result.textContent = `BMI Anda: ${bmiRounded} - ${category}`;
}

calculateBtn.addEventListener("click", calculateBMI);
