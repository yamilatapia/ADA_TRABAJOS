/* Verificar si una lista contiene un elemento 
Tienes una lista de comidas ["Pizza", "Hamburguesa", "Tacos"]. Verifica si 
"Sushi" está en la lista y muestra un mensaje que confirme si está o no. 
*/

let menu = ["Pizza", "Hamburguesa", "Tacos"];
let buscar = menu.includes("Sushi");

if (buscar == true){
    console.log("Hay Sushi");
    
}else {
    console.log("No hay sushi en el menu.");
    
};