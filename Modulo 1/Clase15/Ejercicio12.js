/*Clasificación de palabras según su longitud 
Tienes una lista de palabras en una oración. Debes: 
1. Dividir la oración en palabras individuales. 
2. Clasificar las palabras en dos categorías: 
▪ Cortas (menos de 5 letras) 
▪ Largas (5 letras o más) 
3. Mostrar ambas listas de palabras clasificadas. 
4. La oración es: "JavaScript es un lenguaje poderoso y versátil". */

let oracion = "JavaScript es un lenguaje poderoso y versátil";

let oracionDividida = oracion.split(" ");



let palabrasCortas = []; //Iinicializamos los arrays para almacenar las palabras
let palabrasLargas = [];

for(let i = 0; i < oracionDividida.length; i++){
    let palabra = oracionDividida[i];
    if(palabra.length < 5){               //Si la longitud es menor a 5
        palabrasCortas.push(palabra);     //agregamos
    }else {
        palabrasLargas.push(palabra)
    }
};

console.log("Palabras cortas: ", palabrasCortas);
console.log("Palabras largas: ", palabrasLargas);

