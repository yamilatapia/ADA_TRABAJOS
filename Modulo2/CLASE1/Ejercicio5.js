/* Generador de iniciales 🅰️ 
Escribe una función que reciba un nombre completo y devuelva las 
iniciales en mayúsculas. 
Consigna: 
• Usa el método split() para dividir el nombre. 
• Usa un bucle for y métodos de string. */

let nombre = "juan perez gomez";

function generarIniciales(nombre){
    nombre = nombre.split(" "); // dividimos el nombre con el metodo split ("juan", "perez", "gomez")
    return nombre
    /*t iniciales = ""; //inicializamos un string vacion para guardar las inciales
    for(let i = 0; i < nombre.length; i++){ //recorremos el nombre que ahora tiene el metodo split
        iniciales += nombre[i][0].toUpperCase(); //toamos la primera letra y la convertimos a mayuscula
    }
    return iniciales; //retornamos laws iniciales*/

}

console.log(generarIniciales(nombre));
