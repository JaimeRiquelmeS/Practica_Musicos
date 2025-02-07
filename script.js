let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

let workTime = localStorage.getItem('workTime') ? parseInt(localStorage.getItem('workTime')) : 25;
let breakTime = localStorage.getItem('breakTime') ? parseInt(localStorage.getItem('breakTime')) : 5;
let isWorkTime = true;
let currentMinutes = workTime;
let seconds = 0;
let timerInterval = null;

function updateDisplay() {
    minutesDisplay.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
    secondsDisplay.innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

function start() {
    if (timerInterval) return;

    startButton.style.display = "none";
    resetButton.style.display = "block";

    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (currentMinutes === 0) {
                isWorkTime = !isWorkTime;
                currentMinutes = isWorkTime ? workTime : breakTime;
            } else {
                currentMinutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }, 1000);
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    isWorkTime = true;
    currentMinutes = workTime;
    seconds = 0;
    updateDisplay();
    startButton.style.display = "block";
    resetButton.style.display = "none";
}

startButton.addEventListener("click", start);
resetButton.addEventListener("click", reset);

updateDisplay();
