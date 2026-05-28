/*Crea una variable numero del 1 al 7 y usa switch para mostrar el nombre del día 
(1=Lunes, 2=Martes... 7=Domingo). Si el número está fuera de rango, default debe 
mostrar 'Día inválido'. Prueba con tres valores distintos. 
 */

let diaSemana=1;

switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log("Dia invalido")
        break;
}

//Switch RETO 1