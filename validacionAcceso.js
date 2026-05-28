/*Un sistema deja entrar si: el usuario es mayor de edad Y tiene cuenta activa, O si 
es administrador. Crea las variables booleanas, usa operadores lógicos (&&, ||) y 
guarda el resultado en puedeEntrar. Imprime el resultado y prueba al menos tres 
combinaciones distintas.
*/
const nombre1="Juan";
const edad=17;
const administrador=true;
const cuentaActiva=true;
let puedeEntrar=0;
switch(nombre1){
    case "Juan":
        if(edad>=18 || administrador===true){
            console.log("Es mayor de edad o administrador por ende, puede Ingresar :)")
            puedeEntrar++;
        }else if(edad>=18 && cuentaActiva===false){
            console.log("Es mayor de edad pero su cuenta es inactiva")

        }else if(edad<18 && cuentaActiva===false){
            console.log("No puede ingresar porque es menor de edad");
        }else if(edad>=18 && cuentaActiva===true){
            console.log("Puede entrar, bienvenido");
            puedeEntrar++;
        }
        console.log("La cantidad de usuarios que ingresaron son:"+puedeEntrar);
}
