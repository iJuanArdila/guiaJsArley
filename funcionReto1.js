/*Crea una función imprimirReloj que muestre la hora actual en formato HH:MM:SS 
usando new Date(). Crea otra función imprimirFraseDelDia que tenga un array con 
5 frases motivacionales y muestre una al azar. Llama a ambas tres veces para ver 
la variación. */
function imprimirReloj(){
 const hoy = new Date(); 
    const hora = hoy.getHours("es-CO");
    const mes= hoy.getMonth("es-CO");
    const segundos= hoy.getSeconds("es-CO");
     console.log("📅 Fecha:"," Hora:",hora+" Mes:",mes+" Segundos:",segundos+":"); 
}
function imprimirFraseDia(){
const frases = [
  "Cada día es una nueva oportunidad para brillar.",
  "Tu esfuerzo de hoy será tu éxito de mañana.",
  "Nunca subestimes el poder de una sonrisa.",
  "La constancia convierte los sueños en realidad.",
  "Confía en ti, porque eres más fuerte de lo que imaginas."
];
const indice = Math.floor(Math.random() * frases.length);
console.log(frases[indice])
}

imprimirReloj();
imprimirFraseDia();