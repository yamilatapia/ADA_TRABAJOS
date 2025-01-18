//Definimos un objeto literal
const auto = {
    marca : "Toyota",
    modelo : "Corola",
    anio : "2022",
    color : "negro",

    describir : function(){
        return `Este auto es un ${this.marca} ${this.modelo} del anio ${this.anio} y de color ${this.color}`
    }

}
//Ejecucion del metodo
console.log(auto.describir());

//Acceder a las propiedades
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.anio);
console.log(auto.color);







/*
Estructura del objeto literal
nombreObjeto = {
propiedad1 : valor1,
propiedad2 : valor2,
propiedad3 : valor3,
nombreMetodo : function (){
return logica
}
}
*/