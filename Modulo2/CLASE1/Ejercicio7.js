/* Filtrar palabras largas        
Escribe una función que reciba un array de palabras y un número, y 
devuelva las palabras que tienen más caracteres que el número dado. 
Consigna: 
• Usa el método filter(). 
• Usa una función flecha para simplificar el código. */

let palabras = ["casa", "patio","sala"];
let numero = 4;

let palabrasMayoresQue = palabras.filter((palabra) => palabra.length > numero);

console.log(palabrasMayoresQue);
