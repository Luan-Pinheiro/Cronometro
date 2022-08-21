let horas = 0;
let minutos = 0;
let segundos = 0;

function zerar(marca){
    marca = 0;
}

function medidasMarcas(){
    segundos++;
    if(segundos === 60){
        zerar(segundos);
        minutos++;

        if(minutos === 60){
            zerar(minutos);
            horas++;
        }
        
        if(horas === 23 &&  minutos === 59 && segundos === 59 ){
            reiniciar();
        }
    }
    getElementbyId("Horas").innerHTML = horas + " : ";
    getElementbyId("Minutos").innerHTML = minutos + " : "; 
    getElementbyId("Segundos").innerHTML = segundos;   
}
function iniciar(){
    intervalo = setInterval(tempoMedidas, 1000);
}


function zerarTodos(marca1, marca2, marca3){
    marca1 = marca2 = marca3 = 0;
}

function reiniciar(){
    clearInterval(intervalo);
    zerarTodos(horas, minutos, segundos);
    iniciar();
}
function parar(){
    clearInterval(intervalo);
}