/*: Funcion backEnd() 
Creá la función backEnd() que recibirá 2 números como parámetros. La 
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo 
en cuenta los siguientes criterios: 
✓ Si el número a imprimir es múltiplo del primer parámetro que se 
ingresó, deberá mostrar el string “Back” en lugar del número. 
✓ Si el número a imprimir es múltiplo del segundo parámetro ingresado, 
deberá mostrar el string “End” en su lugar del número. 
✓ Si el número a imprimir es múltiplo de ambos parámetros, deberá 
mostrar el string “Back End” en lugar del número.*/

const prompt = require('prompt-sync')();

let n1 = parseFloat(prompt("Ingrese un numero: "));
let n2 = parseFloat(prompt("Ingrese otro numero: "));

function backEnd(n1, n2){
     for( let i = 1; i <= 100; i++) { //Recorremos los numeros de 1 al 100
          if (i % n1 === 0 && i % n2 === 0){ //Comprobamo si es multiplo de ambos parametros
               console.log("Backend");
          
        
     }else if (i % n1 === 0 ){
          console.log("Back");
          
     } else if (i % n2 === 0 ){
          console.log("End");
          
     } else {
          console.log(i); //Si no es multiplo de ninguno imprimimos el numero
          
     }
  }
}

backEnd(n1, n2);