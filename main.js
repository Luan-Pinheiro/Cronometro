import './src/styles';

import { chronometer } from './src/index';

const pauseButton = document.getElementById('pause');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

pauseButton.addEventListener('click', chronometer.parar);
startButton.addEventListener('click', chronometer.iniciar);
resetButton.addEventListener('click', chronometer.reiniciar);