let workTimeInput = document.getElementById('workTimeInput');
let breakTimeInput = document.getElementById('breakTimeInput');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');

let timerInterval;

window.onload = () => {
    let workTime = parseInt(workTimeInput.value);
    minutesDisplay.innerHTML = workTime < 10 ? '0' + workTime : workTime;
    secondsDisplay.innerHTML = '00';
}

function start() {
    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    let workTime = parseInt(workTimeInput.value);
    let breakTime = parseInt(breakTimeInput.value);
    let seconds = 0;

    let isWorkTime = true;
    let currentMinutes = workTime;

    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (currentMinutes === 0) {
                if (isWorkTime) {
                    currentMinutes = breakTime;
                    isWorkTime = false;
                } else {
                    currentMinutes = workTime;
                    isWorkTime = true;
                }
            } else {
                currentMinutes--;
            }
            seconds = 59;
        } else {
            seconds--;
        }

        minutesDisplay.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
        secondsDisplay.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    }, 1000);
}

document.getElementById('reset').onclick = () => {
    clearInterval(timerInterval);
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    let workTime = parseInt(workTimeInput.value);
    minutesDisplay.innerHTML = workTime < 10 ? '0' + workTime : workTime;
    secondsDisplay.innerHTML = '00';
}