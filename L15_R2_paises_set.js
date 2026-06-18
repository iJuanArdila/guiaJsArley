// ============================================================
// LECCIÓN 15 · MAP Y SET · RETO 2: Países visitados con Set
// ============================================================

const visitados2026 = [
  "Colombia","México","España","México",
  "Argentina","Colombia","Perú","Argentina"
];

const unicos2026 = new Set(visitados2026);
console.log("Países únicos visitados en 2026:", unicos2026.size);
console.log("Lista:", [...unicos2026]);

const planeados2027 = new Set(["Chile","Colombia","Portugal","México","Japón"]);
console.log("\nPlaneados para 2027:", [...planeados2027]);

const enComun = new Set([...unicos2026].filter(p => planeados2027.has(p)));
console.log("Países en común    :", [...enComun]);
