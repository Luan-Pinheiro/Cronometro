// Internal state --------------------------------------------------------------

let interval = undefined;
let horas = 0;
let minutos = 0;
let segundos = 0;

// Main ------------------------------------------------------------------------

function zerar(marca) {
    marca = 0;
}

function medidasMarcas() {
    segundos++;
    if (segundos === 60) {
        zerar(segundos);
        minutos++;

        if (minutos === 60) {
            zerar(minutos);
            horas++;
        }

        if (horas === 23 && minutos === 59 && segundos === 59) {
            reiniciar();
        }
    }

    document.getElementById("hours").innerHTML = horas + " : ";
    document.getElementById("minutes").innerHTML = minutos + " : ";
    document.getElementById("seconds").innerHTML = segundos;
}

function zerarTodos(marca1, marca2, marca3) {
    marca1 = marca2 = marca3 = 0;
}

// API -------------------------------------------------------------------------

function reiniciar() {
    clearInterval(interval);
    zerarTodos(horas, minutos, segundos);
    iniciar();
}

function iniciar() {
    interval = setInterval(medidasMarcas, 1000);
}

function parar() {
    clearInterval(interval);
}

export const chronometer = {
    reiniciar,
    iniciar,
    parar
};
