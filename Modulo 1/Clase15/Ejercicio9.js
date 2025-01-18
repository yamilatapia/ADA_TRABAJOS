/* Eliminar espacios innecesarios 
Tienes la siguiente cadena con espacios adicionales  
"    
Hola, mundo!    " 
Elimina los espacios al inicio y al final y muestra la cadena resultante. */

let saludo = "       Hola, mundo!    ";
let saludoLimpio = saludo.trim(); // guardamos en una nueva variable la variable con el metodo que elimina espacios

console.log(saludoLimpio);
