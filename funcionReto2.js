/*Crea una función reiniciarContador que imprima 'Contador reiniciado a 0'. Crea otra 
notificarUsuario que imprima '🔔 Notificación enviada'. Y otra cerrarSesion que 
imprima '👋 Sesión cerrada'. Llama a las tres en secuencia desde una cuarta 
función ejecutarLimpieza.*/
function reiniciarContador(){
    console.log("Contador Reiniciado A: 0")
}
function notificarUsuario(){
    console.log("🔔 Notifición Envidada");
}
function cerrarSesion(){
    console.log("👋 Sesión cerrada")
}
function ejecutarLimpieza(){
    reiniciarContador();
    notificarUsuario();
    cerrarSesion();
}
ejecutarLimpieza();