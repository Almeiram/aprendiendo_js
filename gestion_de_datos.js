console.log("Gestion de Datos");

// Definir objeto productos
const productos = {
  1: { id: 1, nombre: "Manzana", precio: 1500 },
  2: { id: 2, nombre: "Piña", precio: 4500 },
  3: { id: 3, nombre: "Sopa", precio: 5000 },
  4: { id: 4, nombre: "Collar", precio: 54000 }
};

console.log("Objeto productos:", productos);

// Crear un Set con los nombres de los productos
const setproductos = new Set(Object.values(productos).map(producto => producto.nombre));
console.log("Set de productos unicos:", setproductos);

// Crear un Map para agregar categorias a los productos (corregido)
const mapproductos = new Map([
  ["Frutas", ["Manzana", "Piña"]],
  ["Almuerzo", ["Sopa"]],
  ["Accesorios", ["Collar"]]
]);

console.log("Map de productos y categorias:", mapproductos);

// Recorrer el objeto productos
for (const id in productos) {
  console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

// Recorrer el Map de productos (corregido)
mapproductos.forEach((productos, categoria) => {
  console.log(`Categoria: ${categoria}, Productos: ${productos.join(", ")}`);
});

console.log("Pruebas completas de gestion de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (Set):", setproductos);
console.log("Categorias y productos (Map):", mapproductos);
