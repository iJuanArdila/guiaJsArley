/*Crea variables num1, num2 y operador (string: '+', '-', '*', '/'). Usa switch sobre 
operador para hacer la operación correspondiente. Maneja la división entre cero 
como caso especial dentro del case '/'. Imprime el resultado formateado.  */

let num1=3;
let num2=8;
operador="+";

switch(operador){
    case "+":
        let suma = num1+num2;
        console.log(`La suma de ${num1} y de ${num2} es igual a ${{suma}}`);
        break;
    case "-":
        let resta=num1-num2;
        console.log(`La resta de ${num1} y ${num2} es ${resta}`);
        break;
    case "*":
        let multiplicacion=num1*num2;
        console.log(`La multiplicacion entre ${num1} y ${num2} resulta en ${multiplicacion}`);
        break;
    case "/":
        if(num1==0 || num2==0){
            console.log("NO SE PUEDE DIVIDIR")
        }else{
          let division=num1/num2;
        console.log(`La division de ${num1} entre ${num2} resulta en ${division}`);
        }
        break;

    default:
        console.log("Operacion inexistente");
        break;

}

// Ejercicio switch reto 2