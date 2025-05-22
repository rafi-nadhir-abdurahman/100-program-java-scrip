function countdownToDate(targetDate) {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;
  
      if (timeDifference <= 0) {
        clearInterval(intervalId);
        document.getElementById('countdown').textContent = "Waktu Tercapai!";
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        document.getElementById('countdown').textContent = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
      }
    }, 1000);
  }
  
  // Set target date (misalnya 31 Desember 2025)
  const targetDate = new Date('December 31, 2025 00:00:00').getTime();
  
  // Mulai countdown
  countdownToDate(targetDate);
  