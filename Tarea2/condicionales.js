const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

let mayor = Math.max(numero1,numero2,numero3);
console.log("El número mayor es: " , mayor);


let menor = Math.min(numero1,numero2,numero3);
console.log("El número menor es: " , menor);



function esPar(numero){
    par = numero % 2;
    if (par == 0){
        console.log("El número", numero, " es par ");;
    }else{
        console.log("El número", numero, " es impar ");
    }

}

esPar(numero1);
esPar(numero2);
esPar(numero3);

function esMultiplo(numero, multiplo){
    multiplo = numero % multiplo;
    if (multiplo == 0){
        console.log("El número", numero, " es multiplo de 5");
    }else{
        console.log("El número", numero, " NO es multiplo de 5");
    }

}

esMultiplo(numero1,5);
esMultiplo(numero2,5);
esMultiplo(numero3,5);


