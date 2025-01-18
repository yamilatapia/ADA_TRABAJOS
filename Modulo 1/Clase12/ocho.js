let matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81,82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

let rojo = [];
let verde= [];


function sumarDiagonalPrincipal(matriz) {
    let suma = 0;
    for( let i = 0; i < matriz.length; i++){
        suma += matriz[i][i];
    }
    return suma;
}


let sumaDiagonalRojo = sumarDiagonalPrincipal(matriz);
console.log("La suma de la diagonal roja es:", sumaDiagonalRojo);


function sumarDiagonalInvertida (matriz) {
    let suma = 0; //inicializa suma en 0 para acumular la suma de los elementos de la diagonal
    let n = matriz.length; //Asigna la longitud de la matriz a n en este caso 10

    for(let i = 0; i < n; i++){
        suma += matriz[i][n -1 -i];
    }
    
    return suma;
}

let sumaDiagonalVerde = sumarDiagonalInvertida(matriz);
console.log("La suma de diagonal verde es:", sumaDiagonalVerde);