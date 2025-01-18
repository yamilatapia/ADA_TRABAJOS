// Uso de Arrays y Condicionales 
// Crea un programa que solicite al usuario ingresar 5 nombres y los almacene en un array.
// Luego, solicita al usuario ingresar un nombre y 
// verifica si ese nombre se encuentra en el array. (Pueden desglosar en 
// pasos el código si eso les facilita su desarrollo)

const prompt = require ('prompt-sync')();

let nombres = [];

for (let i = 0; i < 5; i++) {
    let ingresarNombre = prompt("Ingrese un nombre: ");
    nombres.push(ingresarNombre);
    
}
//solicita al usuario ingresar un nombre y verificar
let buscarNombre = prompt("Ingrese un nombre para buscar: ");

//verificamos si el nombre est en el array
//utilizamos el metodo includes y no el signo de comparacion porq no podesmos comparar el ARRAY nombres con la variable buscarNombres
if (nombres.includes(buscarNombre)) { //metodo para buscar lo qe recibe como parametro
    console.log(`El nombre ${buscarNombre} se encuentra en la lista.`);
    
} else {
    console.log(`El nombre ${buscarNombre} no se encuentra en la lista.`);
}


/*Paso 3: Verificar si el nombre está en el array
let encontrado = false;
for (let i = 0; i < 5; i++) {  // Iterar sobre los 5 elementos
    if (nombres[i] === nombreBuscar) {
        encontrado = true;
        break;  // Salir del bucle si se encuentra el nombre
    }
}

// Paso 4: Mostrar el resultado
if (encontrado) {
    console.log("El nombre se encuentra en la lista.");
} else {
    console.log("El nombre no se encuentra en la lista.");
}*/