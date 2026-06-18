// ============================================================
// LECCIÓN 15 · MAP Y SET · RETO 1: Agenda telefónica con Map
// ============================================================

const agenda = new Map();
agenda.set("Ana García",     "310-555-1234");
agenda.set("Carlos Ruiz",    "320-555-5678");
agenda.set("Diana López",    "315-555-9012");
agenda.set("Pedro Martínez", "300-555-3456");
agenda.set("Sofía Torres",   "311-555-7890");

console.log("📞 Ana García    :", agenda.get("Ana García"));
console.log("📞 Carlos Ruiz   :", agenda.get("Carlos Ruiz"));
console.log("¿Existe 'Pedro'?          :", agenda.has("Pedro"));
console.log("¿Existe 'Pedro Martínez'? :", agenda.has("Pedro Martínez"));

agenda.delete("Diana López");
console.log("Tras eliminar Diana, tamaño:", agenda.size);

console.log("\n📒 Agenda completa:");
agenda.forEach((tel, nombre) => console.log(`  ${nombre}: ${tel}`));
