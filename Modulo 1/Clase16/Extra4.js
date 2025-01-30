/*Encuentra la película más corta y analiza los títulos largos 
Supón que tienes una lista de películas con su duración en minutos: */

const peliculas = [ 
{ title: 'El Señor de los Anillos', duration: 200 }, 
{ title: 'Inception', duration: 148 }, 
{ title: 'Matrix', duration: 136 }, 
{ title: 'Toy Story', duration: 81 }, 
{ title: 'Coco', duration: 105 } 
];

// A) Encontrar la película más corta en duración

let peliculaMasCorta = peliculas.reduce(function(peliCorta, peliculaActual){
    if(peliculaActual.duration < peliCorta.duration){
        return peliculaActual;
    } else {
        return peliCorta;
    }
});

console.log(`La pelicula con menor duracion es ${peliculaMasCorta.title} `);

//De las películas restantes, quedarnos con aquellas cuyo título tenga más de 10 caracteres.
let tituloLargo = peliculas.filter(pelicula => pelicula.title.length > 10);

console.log(tituloLargo);

//Crear una lista de los títulos largos en minúsculas
let titulosLargosEnMinuscula = tituloLargo.map(pelicula => pelicula.title.toLowerCase());
console.log(`La pelicula con titulo mas largo es ${titulosLargosEnMinuscula}`);
