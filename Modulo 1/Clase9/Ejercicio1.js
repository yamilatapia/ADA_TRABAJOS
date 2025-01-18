const prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Ingrese un numero: "));
let numero2 = parseFloat(prompt("Ingrese otro numero: "));

if (numero1 > numero2){
    console.log(`El numero ${numero1} es mayor`);
    
}else if (numero1 < numero2){
    console.log(`El numero ${numero2} es mayor`);
    
}else {
    console.log(`El numero ${numero1} es igual a ${numero2}`);
    
}
