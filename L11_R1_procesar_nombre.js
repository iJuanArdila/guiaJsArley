// ============================================================
// LECCIÓN 11 · CADENAS · RETO 1: Procesar nombre de usuario
// ============================================================

const nombreCrudo = "  pEDRO peRez  ";

const nombreLimpio = nombreCrudo
  .trim()
  .split(" ")
  .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
  .join(" ");

console.log("Original  :", `"${nombreCrudo}"`);
console.log("Procesado :", `"${nombreLimpio}"`);
