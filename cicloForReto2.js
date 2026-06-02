/*Usa un ciclo for para imprimir un triángulo de asteriscos: fila 1 con 1 asterisco, fila 
2 con 2, hasta fila 7 con 7 asteriscos. Pista: dentro del ciclo principal usa otro for o 
el método repeat de strings: '*'.repeat(i).*/

for(let i=1; i<=7; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("*")
    }
    console.log()
}