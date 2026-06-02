/*Usa un ciclo for para sumar todos los números enteros del 1 al 100 en una variable 
acumuladora que parte en 0. Al final, imprime el total. Adicional: cuenta cuántos de 
esos números son múltiplos de 5 e imprime ese conteo también. */

let suma=0;
let contemomultiplo=0;
for(let i=0; i<=100; i++){
    suma+=i;
   modulo=i;
   if(modulo%5===0){
    contemomultiplo++;
   }
}
 console.log("La suma de los numeros del 0 al 11 es de:"+suma);
  console.log("La cantidad de numultipos es: "+contemomultiplo);