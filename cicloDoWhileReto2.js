/*Menú de calculadora 
Simula con un array las opciones que un usuario elige: [1, 2, 3, 0]. Crea un menú 
con do/while que muestre: 1.Sumar, 2.Restar, 3.Multiplicar, 0.Salir. Por cada opción 
imprime un mensaje. Sale cuando la opción es 0.*/
const opciones=[1,2,3,0]; 
let i = 0;
let opcion;
 let menu;
   
do{
    menu+="\n\n=== CALCULADORA ===\n\n";
    menu+="1.Sumar\n";
    menu+="2.Restar\n";
    menu+="3.Multiplicar\n";
    menu+="0.SALIR\n"
    menu+=`Tu eleccion es: ${opciones[i]}\n`;
    console.log(menu);
    opcion=opciones[i];
    switch(opcion){
        case 1:
            console.log("➕ Esto es una suma");
            break;
        case 2:
            console.log("➖ Esto es una resta");
            break;
        case 3:
            console.log("✖️ Esto es una multiplicacion");
            break;
        default:
            console.log("❌ Valor fuera de rango ❌")
    }
    i++;
}while(opcion!==0);