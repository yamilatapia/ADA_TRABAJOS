/* Calcula el total de ventas de productos seleccionados 
Supón que tienes una lista de productos con sus precios en formato de 
objeto: */
const listaDeProductos = [ 
{ name: 'Laptop', price: 1000 }, 
{ name: 'Mouse', price: 25 }, 
{ name: 'Teclado', price: 50 }, 
{ name: 'Monitor', price: 200 }, 
{ name: 'Audífonos', price: 75 } 
]; 
/*Queremos: 
o Seleccionar los productos cuyo precio sea mayor o igual a 50. 
o Obtener solo los nombres de esos productos. 
o Calcular el precio total sumando los precios de los productos 
seleccionados. 
o Imprime el total y los nombres de los productos seleccionados en la 
consola. */

let precioMayorIgualA50 = listaDeProductos.filter(producto => producto.price >= 50);
console.log(precioMayorIgualA50);

let nombreDeProductos = listaDeProductos.map(producto => producto.name)
console.log(nombreDeProductos.join (', '));

let precioTotal = precioMayorIgualA50.reduce((acumulador, producto) => acumulador + producto.price, 0);
console.log(precioTotal);

console.log(`El total de los productos ${nombreDeProductos.join(', ')} es de: ${precioTotal}`);
