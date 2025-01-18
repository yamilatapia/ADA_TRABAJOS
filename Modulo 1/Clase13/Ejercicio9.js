/*contar hasta un número 
Crea una función declarada llamada contarHasta que reciba un número y 
use un bucle para imprimir todos los números desde 1 hasta ese número. */
const prompt = require ('prompt-sync')();

let numero = parseInt(prompt("Ingrese hasta donde desea contar: "));

function contarHasta(numero){
    for (let i = 1; n <= numero; i++){
        console.log(i); // imprime n en cada iteracion del bucle
    }
}

contarHasta(numero); //llamamos a la funcion