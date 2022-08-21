let horas = 0;
let minutos = 0;
let segundos = 0;

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
    getElementbyId("hours").innerHTML = horas + " : ";
    getElementbyId("minutes").innerHTML = minutos + " : ";
    getElementbyId("seconds").innerHTML = segundos;
}

function zerarTodos(marca1, marca2, marca3) {
    marca1 = marca2 = marca3 = 0;
}

// API -------------------------------------------------------------------------

function reiniciar() {
    clearInterval(intervalo);
    zerarTodos(horas, minutos, segundos);
    iniciar();
}

function iniciar() {
    intervalo = setInterval(medidasMarcas, 1000);
}

function parar() {
    clearInterval(intervalo);
}

export const chronometer = {
    reiniciar,
    iniciar,
    parar
};
