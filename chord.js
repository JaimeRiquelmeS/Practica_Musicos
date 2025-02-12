// Definimos las escalas de acordes
const acordesEscalaMayor7mas = [
    "Do", "Re", "Mi", "Fa", "Sol", "La", "Si",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMenorNatural = [
    "Do", "Re", "Mi♭", "Fa", "Sol", "La♭", "Si♭",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMenorArmonica = [
    "Do", "Re", "Mi♭", "Fa", "Sol", "La♭", "Si",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMenorMelodica = [
    "Do", "Re", "Mi", "Fa", "Sol", "La", "Si",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMayorLidia = [
    "Do", "Re", "Mi", "Fa♯", "Sol", "La", "Si",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMenorDorica = [
    "Do", "Re", "Mi♭", "Fa", "Sol", "La", "Si♭",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMenorFrigia = [
    "Do", "Re♭", "Mi♭", "Fa", "Sol", "La♭", "Si♭",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMayorMixolidia = [
    "Do", "Re", "Mi", "Fa", "Sol", "La", "Si♭",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaLocria = [
    "Do", "Re♭", "Mi♭", "Fa", "Sol♭", "La♭", "Si♭",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

const acordesEscalaMayorB5 = [
    "Do", "Re", "Mi", "Fa", "Sol♯", "La", "Si",  
    "Do7", "Re7", "Mi7", "Fa7", "Sol7", "La7", "Si7"
];

// Mapeo de las escalas
const escalas = {
    "mayor7": acordesEscalaMayor7mas,
    "menorNatural": acordesEscalaMenorNatural,
    "menorArmonica": acordesEscalaMenorArmonica,
    "menorMelodica": acordesEscalaMenorMelodica,
    "mayorLidia": acordesEscalaMayorLidia,
    "menorDorica": acordesEscalaMenorDorica,
    "menorFrigia": acordesEscalaMenorFrigia,
    "mayorMixolidia": acordesEscalaMayorMixolidia,
    "locria": acordesEscalaLocria,
    "mayorB5": acordesEscalaMayorB5
};

// Variables de control
let intervalo;
let intervaloDeCambio = 5000; // 5 segundos

// Función para mostrar un acorde aleatorio
function mostrarAcorde(escala) {
    const acorde = escala[Math.floor(Math.random() * escala.length)];
    document.getElementById('chordDisplay').textContent = acorde;
}

// Función para iniciar el ciclo de mostrar acordes
function iniciarAcordes() {
    const scaleSelect = document.getElementById('scaleSelect');
    const selectedScale = scaleSelect.value;
    const escalaSeleccionada = escalas[selectedScale];

    if (intervalo) {
        clearInterval(intervalo); // Limpiar intervalo si ya existe uno
    }

    mostrarAcorde(escalaSeleccionada); // Mostrar el primer acorde inmediatamente

    intervalo = setInterval(() => {
        mostrarAcorde(escalaSeleccionada); // Cambiar acorde cada 5 segundos
    }, intervaloDeCambio);
}

// Evento para el botón de iniciar
document.getElementById('startBtn').addEventListener('click', iniciarAcordes);
