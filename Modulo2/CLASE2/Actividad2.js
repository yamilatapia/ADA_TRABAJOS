/*Conversión de Objetos JavaScript a JSON  
1.En la misma carpeta clase2, crea un nuevo archivo llamado 
actividad2.js.  
2.Crea un objeto en JavaScript que represente a un estudiante con las 
siguientes propiedades: nombre, edad, curso, notas (un array de 
números). 
Instrucciones: 
• Convierte este objeto a una cadena JSON usando JSON.stringify(). 
• Muestra la cadena JSON en la consola. 
• Luego, convierte la cadena JSON de nuevo a un objeto utilizando 
JSON.parse() y muestra el objeto en la consola.*/

let estudiante = {
    nombre : "Camila Gomez",
    edad: 25,
    curso: "E-commerce",
    notas : [6, 8, 10, 10]
};

let estudianteJSON = JSON.stringify(estudiante); //convertimos a JSON
console.log(estudianteJSON); //mostramos la cadena JSON

let estudianteObj= JSON.parse(estudianteJSON); //Convertimos de vuelta a objeto
console.log(estudianteObj); //mostramos el objeto



