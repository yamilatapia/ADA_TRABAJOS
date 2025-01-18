//Arrays : Conjunto de elementos o datos (No deben ser obligatoriamente iguales)


let colores = ["Rojo", "Verde", "Azul"]; // Array con strings
let numeros = [23, 56, 78, 90]; // Array de numbers
let booleanos = [true, false, true, true]; // Array de booleanos
let mezcla = ["Berni", 26, true, colores]; // Array con distintos tipos de datos(array dentro de un array)

//Mostramos un array completo
console.log(numeros);


//Acceder a un dato especifico dentro de un array
console.log(colores[1]);

//Array dentro de un array
console.log(mezcla[3][0]); //Accede al indice 3 y me busca el indice 0
