/*Convertir a minutos 
Crea una función declarada llamada convertirHorasAMinutos que reciba 
un número de horas como parámetro y devuelva el total en minutos. */
const prompt = require('prompt-sync')();

let horas = prompt("Ingrese cantidad de horas: ");

function convertirHorasAMinutos(horas){
    let minutos = horas * 60;
    return minutos;

}

console.log(`El total de minutos para ${horas} horas es:`, convertirHorasAMinutos(horas));
