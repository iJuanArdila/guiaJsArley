// ============================================================
// LECCIÓN 11 · CADENAS · RETO 2: Contador de vocales
// ============================================================

function contarVocales(texto) {
  const vocales = "aeiou";
  let conteo = 0;
  for (const char of texto.toLowerCase()) {
    if (vocales.includes(char)) conteo++;
  }
  return conteo;
}

const frases = [
  "JavaScript es el lenguaje del futuro",
  "Hola Mundo desde Colombia",
  "Aprender a programar es increíble"
];

frases.forEach(f => {
  console.log(`"${f}" → ${contarVocales(f)} vocales`);
});
