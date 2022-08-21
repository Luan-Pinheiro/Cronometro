// Internal state --------------------------------------------------------------

let _interval = undefined;
let _hours = 0;
let _minutes = 0;
let _seconds = 0;
let _isRunning = false;

// Main ------------------------------------------------------------------------

function update() {
    _seconds++;
    if (_seconds == 60) {
        _seconds = 0;
        _minutes++;

        if (_minutes == 60) {
            _minutes = 0;
            _hours++;
            if (_hours == 23 && _minutes == 59 && _seconds == 59)
                reiniciar();

        }


    }

    document.getElementById("hours").innerHTML = _hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = _minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = _seconds.toString().padStart(2, '0');
}


// API -------------------------------------------------------------------------

function reiniciar() {
    parar();
    _hours = _minutes = _seconds = 0;
    iniciar();
}

function iniciar() {
    if (_isRunning) return;
    _isRunning = true;
    _interval = setInterval(update, 1000);
}

function parar() {
    _isRunning = false;
    clearInterval(_interval);
}

export const chronometer = {
    reiniciar,
    iniciar,
    parar
};
