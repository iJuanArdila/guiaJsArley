// ============================================================
// LECCIÓN 13 · ARRAYS · RETO 2: Ranking de puntajes
// ============================================================

const puntajes = [55, 92, 78, 43, 88, 67, 95, 72];
const copia    = [...puntajes].sort((a, b) => b - a);
const top3     = copia.slice(0, 3);
const promedio = top3.reduce((acc, n) => acc + n, 0) / top3.length;

console.log("Puntajes originales:", puntajes);
console.log("Ordenados desc.    :", copia);
console.log("Top 3              :", top3);
console.log("Promedio top 3     :", promedio.toFixed(2));
