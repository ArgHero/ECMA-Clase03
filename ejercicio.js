//Inventario de un ecomerce con id, nombre, categoria, precio, envio gratis, oferta, stock, vendidos
const inventario = [
  {
    id: 1,
    nombre: "Camisa",
    categoria: "ropa",
    precio: 500,
    envio_gratis: true,
    oferta: false,
    stock: 100,
    vendidos: 50,
  },
  {
    id: 2,
    nombre: "Pantalon",
    categoria: "ropa",
    precio: 700,
    envio_gratis: false,
    oferta: true,
    stock: 50,
    vendidos: 30,
  },
  {
    id: 3,
    nombre: "Zapatos",
    categoria: "calzado",
    precio: 800,
    envio_gratis: true,
    oferta: false,
    stock: 0,
    vendidos: 100,
  },
  {
    id: 4,
    nombre: "Gorra",
    categoria: "accesorios",
    precio: 300,
    envio_gratis: true,
    oferta: true,
    stock: 10,
    vendidos: 5,
  },
  {
    id: 5,
    nombre: "Reloj",
    categoria: "accesorios",
    precio: 1000,
    envio_gratis: false,
    oferta: false,
    stock: 0,
    vendidos: 0,
  },
  {
    id: 6,
    nombre: "Cartera",
    categoria: "accesorios",
    precio: 500,
    envio_gratis: true,
    oferta: false,
    stock: 10,
    vendidos: 5,
  },
  {
    id: 7,
    nombre: "Pantaloneta",
    categoria: "ropa",
    precio: 200,
    envio_gratis: false,
    oferta: true,
    stock: 20,
    vendidos: 10,
  },
  {
    id: 8,
    nombre: "Blusa",
    categoria: "ropa",
    precio: 400,
    envio_gratis: true,
    oferta: false,
    stock: 30,
    vendidos: 15,
  },
  {
    id: 9,
    nombre: "Short",
    categoria: "ropa",
    precio: 150,
    envio_gratis: false,
    oferta: true,
    stock: 25,
    vendidos: 10,
  },
  {
    id: 10,
    nombre: "Medias",
    categoria: "accesorios",
    precio: 50,
    envio_gratis: true,
    oferta: false,
    stock: 50,
    vendidos: 25,
  },
];
//Verificar si hay productos en oferta
const oferta = inventario
  .filter((producto) => producto.oferta)
  .map((producto) => producto.nombre);
console.log("Los productos en oferta son: ", oferta);

//Encontrar el primer producto sin stock
const sin_stock = inventario.find((producto) => producto.stock === 0);
console.log("El producto sin stock es: ", sin_stock.nombre);

//Verficar cuales productos tienen envio gratis
const envio_gratis = inventario
  .filter((producto) => producto.envio_gratis)
  .map((producto) => producto.nombre);
console.log("Los productos con envio gratis son: ", envio_gratis);

//Calcular el valor total de tu inventario

const total_inventario = inventario.reduce(
  (acumulador, producto) => acumulador + producto.precio * producto.stock,
  0
);
console.log("El valor total del inventario es: ", total_inventario);

//Calcular el numero total de productos vendidos

const total_vendidos = inventario.reduce(
  (acumulador, producto) => acumulador + producto.vendidos,
  0
);
console.log("El numero total de productos vendidos es: ", total_vendidos);

//Obtener todos los producto de una categoria
const categoria = "accesorios";
const productos_categoria = inventario
  .filter((producto) => producto.categoria === categoria)
  .map((producto) => producto.nombre);
console.log(
  "Los productos de la categoria ",
  categoria,
  " son: ",
  productos_categoria
);
//Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.
console.log("=======================Proyecto=======================");

console.log("=====Filtro de los productos por precio");
const filtroPrecio = (precio, compare =  (a,b) => a>=b ) =>{
    return inventario.filter((item)=>compare(item.precio,precio)).map((item)=>[item.nombre,item.precio]);
}

// Usa filter() para obtener los productos que cuesten menos de $100.
filtroPrecio(100,(a,b)=>a<b).forEach((item) => console.log(`${item[0]}: ${item[1]}`));

console.log("=====Orden alfabético de los productos en una lista");
// Usa sort() para ordenar esos productos alfabéticamente por su nombre.
// Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
// Muestra los resultados de la aplicación de cada métiodo en consola.
// (Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.
console.log(inventario.map(item=>item.nombre).sort().reduce((a,b)=>a+=` ${b},`,""));






