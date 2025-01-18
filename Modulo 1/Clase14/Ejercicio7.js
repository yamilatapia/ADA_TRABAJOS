/*Libros 
Define dos objetos libro1 y libro2 con las siguientes propiedades y valores: 
✓ título: una cadena con el título del libro. 
✓ autor: una cadena con el nombre del autor del libro. 
✓ anioPublicacion: un número con el año de publicación del libro. 
Luego, crea una función llamada mostrarLibro que tome un arreglo de libros 
como parámetro y muestre por consola la información de cada libro en el 
formato especificado.*/
let libros = [
    {
    libro1 : 1,
    titulo: "Rebelion en la Granja",
    autor: "George Orwell",
    anio: 1945
},

{   libro2 : 2, 
    titulo : "La metamorfosis",
    autor: "Frank Kafka",
    anio: 1912
}
]


function mostrarLibro (libros){
    for(let i = 0; i < libros.length; i++){
        let libro = libros[i];
        console.log(`El libro ${libro.titulo} pertenece al autor ${libro.autor} y fue publicado en el anio ${libro.anio} `);

    }
}

mostrarLibro(libros);