const titulo="No tengo boca y debo gritar";
const autor="Harlan Ellison";
const añoPublicacion="1967";
const paginas=309;
const disponibilidad=true;
console.log("_________________________________________________")

console.log("Titulo: "+titulo, "--",typeof titulo);
console.log("Autor: "+autor, "--",typeof autor);
console.log("Año de publicacion: "+añoPublicacion,"--", typeof añoPublicacion);
console.log("Numero de paginas: "+paginas,"--", typeof paginas);
console.log("La disponibilidad es: ",disponibilidad,"--", typeof disponibilidad);
console.log("--------------------------------------------")
const mensaje=`Nombre del libro: ${titulo}, Su autor es  ${autor}, Fue publicado en ${añoPublicacion}, y tiene ${paginas} paginas y su disponibilidad es ${true}`;
console.log(mensaje)