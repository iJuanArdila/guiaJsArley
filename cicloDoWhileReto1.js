/*Usa do/while para generar números aleatorios entre 1 y 100 (con Math.random) 
hasta obtener uno menor a 10. Cuenta cuántos intentos tomó. Imprime cada 
número generado y al final el conteo total.*/
let valores;
let intentos=0;
do{
    valores = Math.floor(Math.random() * 100) +1;
    console.log("Numero generado : " +valores);
    intentos++;
}while(valores>10);
console.log("La cantidad de intentos fueron: "+intentos)