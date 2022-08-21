// Internal state --------------------------------------------------------------

let interval = undefined;
let horas = 0;
let minutos = 0;
let segundos = 0;
let _isRunning = false;

// Main ------------------------------------------------------------------------

/*function zerar(marca) {
    marca = 0
    return marca;
}*/

function medidasMarcas() {
    segundos++;
    if (segundos == 60) {
        segundos = 0;
        minutos++;

        if (minutos == 60) {
            minutos = 0;
            horas++;
            if (horas == 23 && minutos == 59 && segundos == 59)
                reiniciar();

        }


    }

    document.getElementById("hours").innerHTML = horas + " : ";
    document.getElementById("minutes").innerHTML = minutos + " : ";
    document.getElementById("seconds").innerHTML = segundos;
}

/*function zerarTodos(marca1, marca2, marca3) {
    return marca1, marca2, marca3;
}*/

// API -------------------------------------------------------------------------

function reiniciar() {
    parar();
    horas = minutos = segundos = 0;
    iniciar();
}

function iniciar() {
    if (_isRunning) return;
    _isRunning = true;
    interval = setInterval(medidasMarcas, 1000);
}

function parar() {
    _isRunning = false;
    clearInterval(interval);
}

export const chronometer = {
    reiniciar,
    iniciar,
    parar
};
