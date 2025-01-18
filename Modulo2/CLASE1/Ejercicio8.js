/*Crea una función que reciba una cadena de texto y una letra, y devuelva 
cuántas veces aparece esa letra en la cadena. 
Consigna: 
• Usa un bucle for y condicionales. 
• Haz que la búsqueda no distinga entre mayúsculas y minúsculas.*/

let texto = "Programar es divertido";
let letra = "a"

function contarLetraRepetida(texto,letra){
   let contador = 0; //inicializamos un contador

    for (let i = 0; i < texto.length ; i++) {
        if (texto[i].toLowerCase() == letra) {
            contador ++; // a contador le sumamos 1
        }
        
    }
   return contador
}

console.log(contarLetraRepetida(texto, "r"))