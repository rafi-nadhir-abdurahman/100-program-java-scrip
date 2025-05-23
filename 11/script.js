function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    if (name === "") {
      errorMsg.textContent = "Nama harus diisi.";
      return false;
    }
  
    if (!validateEmail(email)) {
      errorMsg.textContent = "Format email tidak valid.";
      return false;
    }
  
    if (password.length < 6) {
      errorMsg.textContent = "Password minimal 6 karakter.";
      return false;
    }
  
    errorMsg.textContent = "";
    alert("Formulir berhasil dikirim!");
    return true;
  }
  
  function validateEmail(email) {
    
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  