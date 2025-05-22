function setReminder() {
    const reminderInput = document.getElementById('reminderInput').value;
  
    if (reminderInput) {
      localStorage.setItem('reminder', reminderInput);
  
      displayReminder();
    } else {
      alert("Harap masukkan pengingat terlebih dahulu.");
    }
  }
  
  function displayReminder() {
    const storedReminder = localStorage.getItem('reminder');
    const reminderDisplay = document.getElementById('reminderDisplay');
  
    if (storedReminder) {
      reminderDisplay.textContent = storedReminder;
    } else {
      reminderDisplay.textContent = "Tidak ada pengingat.";
    }
  }

  window.onload = function() {
    displayReminder();
  };
  