const numeros = [1, 2, 3, 4, 5]
let suma =0;

numeros.forEach(numero  => {
    suma += numero;
});


//Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function  sumaTotal (arreglo){
    let suma = 0;
    arreglo.forEach(numero  => {
        suma += numero;
    });
    return suma;
}

console.log('La suma total es:', sumaTotal(numeros));

//Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

function  promedio (arreglo){
    let suma = 0;
    numeros.forEach(numero  => {
        suma += numero;
    });
    return suma/arreglo.length;
}

console.log ("El promedio es :", promedio(numeros));

const strings = ["hola", "mundo", "desde", "casa"];

//Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function  aMayus (arreglo){
    let mayus = [];
    arreglo.forEach(string  => {
        mayus.push(string.toUpperCase());
    });
    return mayus;
}

let enMayus = aMayus(strings);
enMayus.forEach(string => {
    console.log(string);
});

//Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function pares (arreglo){
    let pares = [];
    arreglo.forEach(numero  => {
        if (numero % 2 == 0){
            pares.push(numero);
        }
    });
    return pares;
}

let soloPares = pares(numeros);
soloPares.forEach(numero => {
    console.log(numero);
});