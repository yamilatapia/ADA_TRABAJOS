/* Clasificación de edades 
Solicita al usuario una edad y usa una función flecha para clasificarla en niño, 
adolescente, adulto o adulto mayor. */

const prompt = require('prompt-sync')();

let edad = parseFloat(prompt("Por favor ingrese su edad: "));

const clasificarEdad = (edad) => {
    if(edad > 0 && edad < 13){
        return `Ninio`;
    }else if (edad >= 13 && edad <= 19){
        return `Adolecente`;
    } else if (edad >= 19 && edad < 60){
        return `Adulto`;
    }else{
        return `Adulto mayor`;
    }
}

console.log(clasificarEdad(edad));
