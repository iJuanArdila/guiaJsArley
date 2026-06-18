// ============================================================
// LECCIÓN 12 · ARROW FUNCTIONS · RETO 1: Convertidores
// ============================================================

const celsiusAFahrenheit = c  => (c * 9 / 5 + 32).toFixed(2);
const kilometrosAMillas  = km => (km * 0.621).toFixed(2);
const kilogramosALibras  = kg => (kg * 2.205).toFixed(2);

console.log("100°C       →", celsiusAFahrenheit(100), "°F");
console.log("0°C         →", celsiusAFahrenheit(0),   "°F");
console.log("37°C        →", celsiusAFahrenheit(37),  "°F");
console.log("10 km       →", kilometrosAMillas(10),   "millas");
console.log("42.195 km   →", kilometrosAMillas(42.195), "millas (maratón)");
console.log("70 kg       →", kilogramosALibras(70),   "libras");
