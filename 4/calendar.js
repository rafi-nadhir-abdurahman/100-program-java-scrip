function generateCalendar() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth(); // 0 = Jan, 11 = Des
  
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Minggu
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
  
    let date = 1;
    for (let i = 0; i < 6; i++) {
      let row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        let cell = document.createElement('td');
        if (i === 0 && j < firstDay) {
          cell.textContent = '';
        } else if (date > daysInMonth) {
          break;
        } else {
          cell.textContent = date;
          if (
            date === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
          ) {
            cell.style.backgroundColor = '#ffff99'; 
          }
          date++;
        }
        row.appendChild(cell);
      }
  
      calendarBody.appendChild(row);
    }
  }
  
  generateCalendar();
  