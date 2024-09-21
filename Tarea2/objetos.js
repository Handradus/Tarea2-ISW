//Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const personas =[
    {
        nombre: "Humberto",
        apellido: "Andrades",
        edad: 25,
        género: "Masculino"
}
];

personas.forEach(persona => {
    console.log(persona);
});

//Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. 
//Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.

const caja = 
    {
        cuadernos: 5,
        lápices: 10,
        papel: 100,
        fotografías: 20,
        estado: "buen estado"
    };


console.log(caja.cuadernos, typeof caja.cuadernos);
console.log(caja.lápices, typeof caja.lápices);
console.log(caja.papel, typeof caja.papel);
console.log(caja.fotografías, typeof caja.fotografías);
console.log(caja.estado, typeof caja.estado);
