/* Extraer una parte de una frase 
Tienes la frase "Los gatos son geniales". Extrae y muestra solo la parte 
"gatos" utilizando el método adecuado. */

let frase = "Los gatos son geniales";
let recorte = frase.slice(4, 9); // recorta desde el indice qe pasamos primero hasta el indice que pasamos despues

console.log(recorte);
