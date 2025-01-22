// Importamos el array
const estudiantes = require('./estudiantes');

//Mostramos los nombres de todos los estudiantes
 console.log('Lista de estudiantes:');
 for(let i = 0; i < estudiantes.length; i++){
    let nombre = estudiantes[i].nombre;
    console.log(nombre);
 }

//Calculamos y mostramos el promedio de notas de un estudiantes en especifico
let suma = 0;
function calcularPromedio (estudiantes, nombre){
    let estudiante = estudiantes.filter(estudiante => estudiante.nombre);
    let estudianteEspecifico = estudiante[0];

    for(let i = 0; i < estudianteEspecifico.notas.length; i++){
        suma += estudianteEspecifico.notas[i]
    }
    let promedio = suma / estudianteEspecifico.notas.length;

    return promedio;
}

console.log(calcularPromedio(estudiantes, "Wilson"));

/*Agrega un nuevo estudiante al array y
 muestra el array actualizado en formato JSON.*/

estudiantes.push({nombre: 'Carlos', edad: 25, curso: 'Biologia', notas: [8, 9, 8]});

console.log('Lista Actualizada de estudiantes:');
console.log(JSON.stringify(estudiantes, null, 2));

