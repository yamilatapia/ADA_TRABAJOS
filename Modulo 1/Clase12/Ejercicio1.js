/*Ejercicio 1: While 
Crea un programa que solicite al usuario ingresar números continuamente 
hasta que el usuario ingrese un número negativo. Luego, imprime la suma 
de todos los números ingresados.*/

const prompt = require ('prompt-sync')();

let suma = 0; //inicializamos la variable en 0
let numero = parseInt(prompt("Ingrese un numero: "));

while (numero >= 0){
    suma = suma + numero;
    // o tmb suma += numero;  //suma acumulativa, mismo resultado que arriba

    numero = parseInt(prompt("Ingrese un numero: "));
}

console.log(`La suma de todos los numeros ingresados es: ${suma}.`);