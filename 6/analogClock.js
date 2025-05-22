function drawClock() {
    const canvas = document.getElementById("clockCanvas");
    const ctx = canvas.getContext("2d");
    const radius = canvas.width / 2;
  
    ctx.translate(radius, radius);
    const clockRadius = radius - 10;
  
    ctx.beginPath();
    ctx.arc(0, 0, clockRadius, 0, 2 * Math.PI);
    ctx.fillStyle = '#f0f0f0';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();
  
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30) * (Math.PI / 180);
      ctx.moveTo(clockRadius * 0.85 * Math.cos(angle), clockRadius * 0.85 * Math.sin(angle));
      ctx.lineTo(clockRadius * 0.95 * Math.cos(angle), clockRadius * 0.95 * Math.sin(angle));
      ctx.stroke();
    }
  
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourAngle = (hours * 30 + minutes / 2) * (Math.PI / 180);
    drawHand(hourAngle, clockRadius * 0.5, 7);
  
    const minuteAngle = (minutes * 6) * (Math.PI / 180);
    drawHand(minuteAngle, clockRadius * 0.7, 5);
  
    const secondAngle = (seconds * 6) * (Math.PI / 180);
    drawHand(secondAngle, clockRadius * 0.8, 2, '#ff0000');
  
    setTimeout(drawClock, 1000);
  }
  
  function drawHand(angle, length, width, color = '#000') {
    const ctx = document.getElementById("clockCanvas").getContext("2d");
    ctx.save();
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -length);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }
  
  drawClock();
  