// ============================================================
// LECCIÓN 14 · MÉTODOS FUNCIONALES · RETO 2: Estadísticas de notas
// ============================================================

const estudiantes = [
  { nombre: "Valentina", nota: 4.8 },
  { nombre: "Juan",      nota: 2.5 },
  { nombre: "Camila",    nota: 3.7 },
  { nombre: "Andrés",    nota: 3.0 },
  { nombre: "Luisa",     nota: 4.1 },
  { nombre: "Miguel",    nota: 1.8 }
];

const mejor         = estudiantes.reduce((m, e) => e.nota > m.nota ? e : m);
const promedio      = estudiantes.reduce((acc, e) => acc + e.nota, 0) / estudiantes.length;
const aprobados     = estudiantes.filter(e => e.nota >= 3.0);
const hayReprobado  = estudiantes.some(e => e.nota < 3.0);
const todosAprobaron= estudiantes.every(e => e.nota >= 3.0);

console.log("Mejor estudiante  :", mejor.nombre, `(${mejor.nota})`);
console.log("Promedio del curso:", promedio.toFixed(2));
console.log("Aprobados         :", aprobados.map(e => e.nombre).join(", "));
console.log("¿Alguno reprobó?  :", hayReprobado);
console.log("¿Todos aprobaron? :", todosAprobaron);
