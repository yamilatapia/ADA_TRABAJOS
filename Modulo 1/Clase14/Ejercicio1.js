/* Calcular el precio final con IVA 
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final. */

const prompt = require('prompt-sync')();

let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let iva = parseFloat(prompt("Ingrese el porcentaje de iva: "));

let calcularPrecioFinal = (precio, iva) => {
    let porcentajeIva = (precio * iva) / 100;
    let precioFinal = precio + porcentajeIva;
    return precioFinal
}

console.log(calcularPrecioFinal(precio,iva));
