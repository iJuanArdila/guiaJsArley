// ============================================================
// LECCIÓN 12 · ARROW FUNCTIONS · RETO 2: Procesamiento encadenado
// ============================================================

const numeros = [12, 45, 67, 23, 89, 11, 56, 34];

const mayoresDe30   = numeros.filter(n => n > 30);
const multiplicados = mayoresDe30.map(n => n * 2);
const sumaTotal     = multiplicados.reduce((acc, n) => acc + n, 0);

console.log("Original        :", numeros);
console.log("Filtrados >30   :", mayoresDe30);
console.log("Multiplicados x2:", multiplicados);
console.log("Suma total      :", sumaTotal);
