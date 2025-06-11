const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const clickCountSpan = document.getElementById('clickCount');

let count = parseInt(localStorage.getItem('clickCount')) || 0;

clickCountSpan.textContent = count;

clickButton.addEventListener('click', () => {
    count++;
    clickCountSpan.textContent = count;
    localStorage.setItem('clickCount', count);
});

resetButton.addEventListener('click', () => {
    count = 0;
    clickCountSpan.textContent = count;
    localStorage.setItem('clickCount', count);
});