/*Módulos y require  
1.Dentro de la carpeta clase2, crea un archivo llamado datos.js que 
contenga un objeto con información sobre un curso, similar a los ejemplos 
anteriores.  
2.Crea otro archivo llamado actividad3.js que importará los datos de 
datos.js usando require(). 
Instrucciones: 
• En datos.js, define un objeto que tenga información como 
nombreCurso, duracion, y temas (array de cadenas). 
• Exporta este objeto para que pueda ser utilizado en otros archivos. 
• En actividad3.js, importa el objeto usando require(). 
• Muestra en la consola la información del curso. 
*/

let curso = require('./datos.js'); //importamos el objeto
console.log(curso); //mostramos por consola
