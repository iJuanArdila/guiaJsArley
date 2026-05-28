/*Dado el promedio de un estudiante, usa un operador ternario para asignar a una 
variable resultado el valor 'APROBADO' si el promedio es 3.0 o más, o 
'REPROBADO' en otro caso. Imprime el nombre del estudiante y su resultado en 
un template literal.
*/
const nombre="Juan A";
let promedio=4 
const aprobadoYreprobado=promedio >=3 ? "APROBADO": "REPROBADO";

let mensaje=`Hola ${nombre}, su promedio es de ${promedio} por ende esta ${aprobadoYreprobado}, tenga buen diá`;
console.log(mensaje);
