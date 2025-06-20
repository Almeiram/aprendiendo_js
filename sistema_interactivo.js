console.log('¡bienvenido al sistema interactivo de mensajes!');

let nombre = prompt('¿Cuál es tu nombre?');
let edad = prompt('¿Cuál es tu edad?');
edad = parseInt(edad);

if (isNaN(edad)) {
    console.error('Edad no válida. Por favor, ingresa un número.');
} else if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo.!`);
}else{
    alert(`Hola ${nombre}, eres mayor de edad. ¡Bienvenido al mundo de la programacion!`);
}
console.log(`Nombre: ${nombre}, Edad: ${edad}`);
alert('Gracias por participar en el sistema interactivo de mensajes.');