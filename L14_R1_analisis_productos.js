// ============================================================
// LECCIÓN 14 · MÉTODOS FUNCIONALES · RETO 1: Análisis de productos
// ============================================================

const productos = [
  { nombre: "Laptop",    precio: 3500000, stock: 5  },
  { nombre: "Mouse",     precio: 85000,   stock: 0  },
  { nombre: "Teclado",   precio: 120000,  stock: 12 },
  { nombre: "Monitor",   precio: 980000,  stock: 3  },
  { nombre: "Webcam",    precio: 250000,  stock: 0  },
  { nombre: "Audífonos", precio: 180000,  stock: 8  }
];

const conStock        = productos.filter(p => p.stock > 0);
const nombresMayusc   = conStock.map(p => p.nombre.toUpperCase());
const valorInventario = productos.reduce((acc, p) => acc + p.precio * p.stock, 0);

console.log("Con stock (mayúsculas):", nombresMayusc);
console.log("Valor total inventario: $", valorInventario.toLocaleString("es-CO"));
