/*Crea variables para una mascota: nombre, especie, edad, vacunada (boolean) y 
dueño (puede ser null si no tiene). Imprime un mensaje usando template literal que 
diga: 'Mi mascota Firulais es un Perro de 3 años. Vacunada: sí. Dueño: aún no 
registrado.' adaptándose a los valores que pongas.
*/
const nombre="Toby";
const especie="Bull Terrier";
const edad=4;
const vacunada=true;
const dueño="Juan A";
console.log("-------------------------------------------------------------------------------------------------");
const mensaje=`Mi mascota se llama ${nombre} es un perro de ${edad} años, y es  un ${especie}, actualmente su estado de vacunacion es: ${vacunada} y El dueño es: ${dueño}`;
console.log(mensaje);
