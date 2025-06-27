# Gestión de Datos

Este proyecto muestra como usar estructuras de datos en JavaScript como **Objetos**, **Sets** y **Maps** para organizar y manipular productos.

---

## Usando herramientas como;

- `for...in`.
- `Set`.
- `Map`.
- Mostrar los datos de forma clara y ordenada.

---

## Código

```javascript
console.log("Gestion de Datos");

const productos = {
  1: { id: 1, nombre: "Manzana", precio: 1500 },
  2: { id: 2, nombre: "Piña", precio: 4500 },
  3: { id: 3, nombre: "Sopa", precio: 5000 },
  4: { id: 4, nombre: "Collar", precio: 54000 },
};

console.log("Objeto productos:", productos);

const setproductos = new Set(
  Object.values(productos).map((producto) => producto.nombre)
);
console.log("Set de productos unicos:", setproductos);

const mapproductos = new Map([
  ["Frutas", ["Manzana", "Piña"]],
  ["Almuerzo", ["Sopa"]],
  ["Accesorios", ["Collar"]],
]);

console.log("Map de productos y categorias:", mapproductos);

for (const id in productos) {
  console.log(`Producto ID: ${id}, Detalles:`, productos[id]);
}

mapproductos.forEach((productos, categoria) => {
  console.log(`Categoria: ${categoria}, Productos: ${productos.join(", ")}`);
});

console.log("Pruebas completas de gestion de datos:");
console.log("Lista de productos (Objeto):", productos);
console.log("Lista de productos unicos (Set):", setproductos);
console.log("Categorias y productos (Map):", mapproductos);
```

## Ejecutar

Para ejecutar este codigo tiene que usar un navegador en este caso uso firefox y este mensaje me da la consola:

```
console.log("Gestion de Datos");

// Definir objeto productos
const productos =
  1: { id: 1, nombre: "Manzana", precio: 1500 },…
Gestion de Datos debugger eval code:2:9
Objeto productos:
Object { 1: {…}, 2: {…}, 3: {…}, 4: {…} }
debugger eval code:12:9
Set de productos unicos:
Set(4) [ "Manzana", "Piña", "Sopa", "Collar" ]
debugger eval code:16:9
Map de productos y categorias:
Map(3) { Frutas → "Piña", Almuerzo → "Sopa", Accesorios → "Collar" }
debugger eval code:25:9
Producto ID: 1, Detalles:
Object { id: 1, nombre: "Manzana", precio: 1500 }
debugger eval code:29:11
Producto ID: 2, Detalles:
Object { id: 2, nombre: "Piña", precio: 4500 }
debugger eval code:29:11
Producto ID: 3, Detalles:
Object { id: 3, nombre: "Sopa", precio: 5000 }
debugger eval code:29:11
Producto ID: 4, Detalles:
Object { id: 4, nombre: "Collar", precio: 54000 }
debugger eval code:29:11
Categoria: Frutas, Producto: Piña debugger eval code:34:11
Categoria: Almuerzo, Producto: Sopa debugger eval code:34:11
Categoria: Accesorios, Producto: Collar debugger eval code:34:11
Pruebas completas de gestion de datos: debugger eval code:37:9
Lista de productos (Objeto):
Object { 1: {…}, 2: {…}, 3: {…}, 4: {…} }
debugger eval code:38:9
Lista de productos unicos (Set):
Set(4) [ "Manzana", "Piña", "Sopa", "Collar" ]
debugger eval code:39:9
Categorias y productos (Map):
Map(3) { Frutas → "Piña", Almuerzo → "Sopa", Accesorios → "Collar" }

```

