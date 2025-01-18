/*Crea una función que reciba una cadena de texto y devuelva cuántas 
vocales contiene. 
Consigna: 
• Usa un bucle for y condicionales. 
• Considera vocales mayúsculas y minúsculas (a, e, i, o, u).*/

let texto = "Hola Mundo";

function contarVocales(texto){
    let contador = 0; //Inicializamos un contador
    let vocales = "aeiouAEIOU"; //Cadena con todas las vocales

    for (let i = 0; i < texto.length; i++){  //recorremos el texto
        if(vocales.includes(texto[i])) { // utilizamos el metodo includes y le pasamos como parametro cada iteracion de texto para que busque
            contador++;   //Incrementamos el contador si encontramos una vocal
        }
    }
    return contador;  //retornamos el numero total de vocales encontradas
}


console.log(contarVocales(texto));
