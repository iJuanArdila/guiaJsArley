const sueldo=2000000;
let quincena=sueldo/2;
const  salud=quincena*0.04;
quincena-=salud;
const pension=quincena*0.04;
quincena-=pension;
const prestamo=100000;
quincena-=prestamo;

console.log("Salario mensual: $" + sueldo);
console.log("Quincena bruta: $" + (sueldo / 2));
console.log("Descuento salud (4%): $" + salud);
console.log("Descuento pensión (4%): $" + pension);
console.log("Descuento préstamo: $" + prestamo);
console.log("Salario quincenal final: $" + quincena);