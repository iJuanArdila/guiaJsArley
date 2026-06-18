// ============================================================
// LECCIÓN 13 · ARRAYS · RETO 1: Lista de invitados
// ============================================================

let invitados = [];
invitados.push("Ana", "Carlos", "Diego", "Sofía");
invitados.unshift("María VIP");
console.log("Tras agregar:", invitados);

invitados.splice(2, 1);
console.log("Tras splice :", invitados);

console.log("¿Está Pedro?:", invitados.includes("Pedro"));

invitados.sort();
console.log("Ordenados   :", invitados);
