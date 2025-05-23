const emailInput = document.getElementById("emailInput");
const validateBtn = document.getElementById("validateBtn");
const message = document.getElementById("message");

function validateEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(email)) {
    message.textContent = "Email valid ✔️";
  } else {
    message.textContent = "Email tidak valid ❌";
  }
}

validateBtn.addEventListener("click", validateEmail);
