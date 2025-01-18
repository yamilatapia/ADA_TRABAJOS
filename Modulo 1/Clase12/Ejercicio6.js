/*Ejercicio 6: Iguales a 10 pero menores de 1000 
Dada una matriz, recorrer sus valores y sumar solo los números que estén 
por encima o sean iguales a 10, pero menores que 1000.*/


let matriz = [
    [10, 3, 2, 1, 4, 7],
    [5, 5, 10, 100, 4],
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4]
];

let suma = 0;

//recorremos cadaa fila de matriz
for (let fila = 0; fila < matriz.length; fila++) {
    //recorremos cada VALOR en la fila actual("columna")
     for (let columna = 0; columna < matriz[fila].length; columna++){
        //Obtenemos el valor actual
        let valor = matriz[fila][columna]; //Entramos a la fila y accedemos al valor de la columna
        //verificamos si el valor cumple con la condicion
        if(valor >= 10 && valor < 1000){
            //Sumamos el valor a la suma total
            suma += valor;    //suma = suma + valor tmb

        }

     }
     
    
}

//mostramos el resultado
console.log(suma)