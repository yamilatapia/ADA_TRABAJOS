/* Número par o impar 
Crea una función declarada llamada esPar que reciba un número y 
devuelva "Es par" si el número es par o "Es impar" si el número es impar. 
Usa una variable local para guardar el resultado.*/
const prompt = require('prompt-sync')();

let numero = prompt("Ingrese un numero: ");

function esPar(numero){
    let resultado;    //variable local sin asignacion
    if(numero % 2 === 0){
        resultado = "Es par";  //si es par a resultado se le asigna "es par"
    } else {
       resultado = "Es impar"; //sino
    }
    return resultado //retorna la variable con el string correspondiente
}

console.log(esPar(numero));
