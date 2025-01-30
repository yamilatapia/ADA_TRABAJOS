/* Cuenta la cantidad total de letras en una lista de palabras 
Imagina que tienes una lista de palabras ['sol', 'luna', 'estrella']. Queremos 
saber cuántas letras hay en total entre todas las palabras. Por ejemplo, 
'sol' tiene 3 letras, 'luna' tiene 4, y 'estrella' tiene 8. La suma total debería 
ser 15.*/

let palabras = ['sol', 'luna', 'estrella'];

let contarLetras = palabras.reduce(function(acum, valor){
    return acum + valor;
});


let words = ['sol', 'luna', 'estrella'];
const totalLetters = words.reduce((total, word) => total + word.length, 0); // Suma las longitudes de las palabras.
console.log(totalLetters); // Resultado: 16
console.log(contarLetras.length);
