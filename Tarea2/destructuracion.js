const usuario = {
  nombre: 'Diego',
  apellido: 'Salazar',
  edad: 21,
  direccion: {
    calle: 'Villa los corales',
    numero: 123,
    ciudad: 'Concepción',
    pais: 'Chile'
  },
  contactos: {
    telefono: '123456789',
    email: 'diegosalazar@example.com',
    redesSociales: {
      instagram: '@diego',
    }
  },
  intereses: ['Programación', 'Música', 'Ajedrez']
};

/*1. Extrae el nombre, el apellido y la ciudad en variables separadas.
2. Extrae el primer interés en una variable llamada "primerInteres".
3. Extrae el email y el instagram en variables separadas.
4. Extrae la calle y el número de la dirección y renómbralos como "calleUsuario" y "numeroUsuario".
5. Imprime en consola todas las variables que extrajiste. */

let nombre = usuario.nombre;
let apellido = usuario.apellido;
let ciudad = usuario.direccion.ciudad;

let primerInteres = usuario.intereses[0];
let email = usuario.contactos.email;
let instagram = usuario.contactos.redesSociales.instagram;
let calleUsuario = usuario.direccion.calle;
let numeroUsuario = usuario.direccion.numero;

console.log(nombre, apellido, ciudad, primerInteres, email, instagram, calleUsuario, numeroUsuario); 