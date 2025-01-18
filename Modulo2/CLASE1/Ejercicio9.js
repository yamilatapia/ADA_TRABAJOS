/*Escribe una función que reciba un array de números y devuelva un nuevo 
array sin números repetidos. 
Consigna: 
• Usa el objeto Set para eliminar duplicados. 
• Convierte el Set a un array usando el operador spread (...).*/

let numeros = [1, 2, 3, 2, 4, 1, 5];

let newNumerosSet = new Set(numeros); //eliminamos los numeros repetidos utilizando el objeto set

//console.log(newNumerosSet);

function numerosSinRepetir(numeros){
    let newNumerosArray = [...newNumerosSet]; // convertimos el set a un array utilizando el operador spread ...
    return newNumerosArray;
} 

console.log(numerosSinRepetir(numeros));
