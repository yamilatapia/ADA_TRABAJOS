/*Crea un nuevo array con los cuadrados de los números 
Imagina que tienes una lista de números, como [2, 4, 6, 8]. Tu objetivo es 
crear una nueva lista donde cada número de la lista original se haya 
transformado en su cuadrado. Por ejemplo, el número 2 debería 
convertirse en 4, el número 4 en 16, y así sucesivamente. Al final, imprime 
la nueva lista. */

let numeros = [2, 4, 6, 8];

let numerosAlCuadrado = numeros.map( function(numero){
    return numero * numero
});

console.log(numerosAlCuadrado);
