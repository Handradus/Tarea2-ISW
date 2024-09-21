

/*1. Crea una función que reciba un string y retorne el string en mayúsculas.
2. Crea una función que reciba un string y retorne el string en minúsculas.
3. Crear una función que reciba como parámetro 2 números y los reste.
4. Crear una función que reciba como parámetro 2 números y los divida.
5. Crear una función que reciba como parámetro 2 números y los multiplique.
6. Crear una función que reciba un string y devuelva la longitud del string.*/


let miString = "hOlA MuNdo"
let numero1 = 10;
let numero2 = 20;

function mayusculas (string) {
    return string.toUpperCase()
}

function minusculas (string) {
    return string.toLowerCase()
}

function resta (numero1, numero2) {
    return numero1 - numero2
}

function suma (numero1, numero2) {
return numero1 + numero2
}

function division (numero1, numero2) {
    return numero1 / numero2
}

function multi (numero1, numero2) {
    return numero1 * numero2
}

function longitud (string) {
    return string.length
}

console.log (mayusculas(miString));
console.log (minusculas(miString));
console.log (resta(numero1,numero2));
console.log (suma(numero1,numero2));
console.log (division(numero1,numero2));
console.log (multi(numero1,numero2));
console.log (longitud(miString));

