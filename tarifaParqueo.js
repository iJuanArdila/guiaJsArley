const nombre="Juan"
let tipoVehiculo="Carro"
let horas=28;
let valorhora;
let pago= tipoVehiculo=="Carro"?"3000":
tipoVehiculo=="Moto"?"1500":
tipoVehiculo=="Bicicleta"?"0":"No Aplica";

valorhora=pago*28;
let mensaje=`Hola ${nombre}, su vehiculo es ${tipoVehiculo}, y estuvo ${horas}, en el parqueadero, el valor por hora es de ${pago} y el total es de ${valorhora}`;
console.log(mensaje);
