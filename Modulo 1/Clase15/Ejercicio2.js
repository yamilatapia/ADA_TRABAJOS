/*Eliminar al último invitado 
Tienes una lista de invitados a una fiesta ["Ana", "Juan", "Carlos", "Sofía"]. 
El último invitado no puede asistir. Elimina al último invitado y muestra 
quién fue eliminado y el estado actualizado de la lista. */

let invitados = ["Ana", "Juan", "Carlos", "Sofía"];

let eliminado = invitados.pop("Sofía");

console.log(`La nueva lista de invitados: `);
console.log(invitados);

console.log(`${eliminado} no podra asistir`);
