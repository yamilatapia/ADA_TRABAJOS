/*Invertir palabras     
Crea una función que reciba una cadena de texto y devuelva otra cadena 
con las palabras en orden inverso. 
Consigna: 
• Usa el método split() para separar las palabras. 
• Usa el método reverse() para invertir el array. 
• Usa el método join() para unir las palabras en una nueva cadena.*/

let frase = "Aprender a programar es divertido";

function invertirFrase(frase){
    let separarFrase = frase.split(" ");
    separarFrase.reverse();
    let fraseInvertida = separarFrase.join(" ") //unimos las palabras en el array separarFrase en una cadena de texto con espacios

    return fraseInvertida;


}

console.log(invertirFrase(frase));
