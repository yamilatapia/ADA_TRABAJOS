/*Escribe una función que reciba un array de números y devuelva el 
promedio. 
Consigna: 
• Usa un bucle for para sumar los números. 
• Divide la suma total entre la cantidad de elementos del array. */

let calificaciones = [8, 9, 10, 7, 6];

function calcularPromedio(calificaciones){
    let suma = 0  //Iinicializamos la variable para la suma

    for (let i = 0; i < calificaciones.length; i++){
        suma += calificaciones[i]; //sumamos cada elemento
    }
    return suma / calificaciones.length // calculamos el promedio
}

console.log(calcularPromedio(calificaciones));
