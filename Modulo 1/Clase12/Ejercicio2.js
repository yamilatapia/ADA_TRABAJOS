/*Ejercicio 2: Do While 
Escribe un programa que solicite al usuario ingresar una contraseña. 
Si la contraseña es incorrecta, debe volver a pedirla hasta que el usuario ingrese la correcta. 
La contraseña correcta es "1234".*/


const prompt = require('prompt-sync')();

let contraseña = "1234"; // Los pongo como string porqe necesitamos compararlos con variable ingresar
let ingresar ;

do {
    ingresar = prompt("Ingrese una contraseña: "); // utilizo prompt dentro del do porqe solo necesitamos pedir la contraseña una vez dentro del bucle

    if(ingresar === contraseña){
        console.log("La contraseña es correcta");
    }
            else {
                console.log(("La contraseña es incorrecta. Vuelve a intentarlo"));
            }
        }
    
    
while (ingresar !== contraseña); 
