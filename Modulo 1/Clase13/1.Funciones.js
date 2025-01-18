/* Funcion normal (DECLARADA)
Se define con la palabra reservada function.
Es un bloque de codigo que tiene unafuncionalidad y que se va a reutilizar*/


function calcularAreaRectangulo(base, altura){  //parametros
    return base * altura;
}
console.log("Area de un rectangulo", calcularAreaRectangulo(10, 5)); //llamamos a la funcion y le pasamos los argumentos

//Declarada
//No esta en variable y tiene nombre(nombrada)
function esPar(numero){
    if(numero % 2 === 0){
        return "Es par";
    } else {
        return "Es impar";
    }
}

console.log("El numero 7: ", esPar(7));// imprimo e invoco a la funcion
console.log("El numero 8: ", esPar(8));


//Pasos para que la funcion funcione:
//1. Declarar (hacer la maqueta)
//2.Imprimir (Usando console.log)
//Invocar(Dentro de console.log)

//Funcion expresada: se guarda en variable y es anonima
const encontrarMayor = function(a, b){
    if (a > b){
        return a; 
    } else {
        return b;
    }
}

console.log("El mayor de 15 y 20 es: ",encontrarMayor(15, 20));
