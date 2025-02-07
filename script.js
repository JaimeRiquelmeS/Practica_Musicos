let workTimeInput = document.getElementById('workTimeInput');
let breakTimeInput = document.getElementById('breakTimeInput');
let minutesDisplay = document.getElementById('minutes');
let secondsDisplay = document.getElementById('seconds');

let timerInterval;

window.onload = () => {
    // Recuperar el estado desde localStorage
    let savedMinutes = localStorage.getItem('minutes');
    let savedSeconds = localStorage.getItem('seconds');
    let savedIsWorkTime = localStorage.getItem('isWorkTime');
    let savedTimerRunning = localStorage.getItem('timerRunning');

    if (savedMinutes !== null && savedSeconds !== null && savedIsWorkTime !== null && savedTimerRunning === 'true') {
        // Si el temporizador está corriendo, mostrar el tiempo guardado
        minutesDisplay.innerHTML = savedMinutes < 10 ? '0' + savedMinutes : savedMinutes;
        secondsDisplay.innerHTML = savedSeconds < 10 ? '0' + savedSeconds : savedSeconds;
        
        // Reiniciar el temporizador desde el estado guardado
        start(true, parseInt(savedMinutes), parseInt(savedSeconds), savedIsWorkTime === 'true');
    } else {
        // Si no hay estado guardado, inicializar con valores predeterminados
        let workTime = parseInt(workTimeInput.value);
        if (workTime < 0) {
            workTime = 0;
            workTimeInput.value = 0;
        }
        minutesDisplay.innerHTML = workTime < 10 ? '0' + workTime : workTime;
        secondsDisplay.innerHTML = '00';
    }
};

function start(continueTimer = false, initialMinutes = 25, initialSeconds = 0, isWorkTime = true) {
    let workTime = parseInt(workTimeInput.value);
    let breakTime = parseInt(breakTimeInput.value);

    if (workTime <= 0 || breakTime <= 0) {
        alert("Los tiempos no pueden ser negativos. Por favor, ingresa valores válidos.");
        return;
    }

    document.getElementById('start').style.display = "none";
    document.getElementById('reset').style.display = "block";

    let seconds = initialSeconds;
    let currentMinutes = initialMinutes;
    let isRunning = true;

    // Si se continua el temporizador, evita reiniciarlo
    if (!continueTimer) {
        currentMinutes = workTime;
        seconds = 0;
    }

    timerInterval = setInterval(() => {
        if (seconds === 0) {
            if (currentMinutes === 0) {
                if (isWorkTime) {
                    currentMinutes = breakTime - 1; 
                    isWorkTime = false;
                } else {
                    currentMinutes = workTime - 1; 
                    isWorkTime = true;
                }
                seconds = 59;
            } else {
                currentMinutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        if (currentMinutes < 0) currentMinutes = 0;
        if (seconds < 0) seconds = 0;

        // Actualizar la interfaz
        minutesDisplay.innerHTML = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;
        secondsDisplay.innerHTML = seconds < 10 ? '0' + seconds : seconds;

        // Guardar el estado en localStorage
        localStorage.setItem('minutes', currentMinutes);
        localStorage.setItem('seconds', seconds);
        localStorage.setItem('isWorkTime', isWorkTime);
        localStorage.setItem('timerRunning', 'true');
    }, 1000);
}

document.getElementById('reset').onclick = () => {
    clearInterval(timerInterval);
    document.getElementById('start').style.display = "block";
    document.getElementById('reset').style.display = "none";
    
    // Inicializar con valores predeterminados
    let workTime = parseInt(workTimeInput.value);
    if (workTime < 0) {
        workTime = 0;
        workTimeInput.value = 0;
    }
    minutesDisplay.innerHTML = workTime < 10 ? '0' + workTime : workTime;
    secondsDisplay.innerHTML = '00';

    // Limpiar el estado en localStorage
    localStorage.removeItem('minutes');
    localStorage.removeItem('seconds');
    localStorage.removeItem('isWorkTime');
    localStorage.removeItem('timerRunning');
}
