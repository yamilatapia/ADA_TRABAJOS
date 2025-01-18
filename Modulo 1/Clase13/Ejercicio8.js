/*Convertir grados Celsius a Fahrenheit (Ejercicio entrevista) 
Crea una función expresada llamada convertirCelsiusAFahrenheit que 
reciba una temperatura en grados Celsius y devuelva la temperatura en 
Fahrenheit.
fahrenheit = (celsius * 9/5) + 32 */
const prompt = require ('prompt-sync')();

let gradosCelcius = parseInt(prompt("Ingrese temperatura en grados celcius: "));

let convertirCelsiusAFahrenheit = function(){
    return (gradosCelcius * 9 / 5) + 32;
}

console.log("La convercion de grados celcius a fahrenheit es: ", convertirCelsiusAFahrenheit(gradosCelcius));
