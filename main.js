const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, el) => acc + el, 0); // reduce recibe dos argumentos, el primero es una función que recibe dos argumentos, el acumulador y el elemento actual, el segundo argumento es el valor inicial del acumulador
console.log(suma); // 10

const  valor = [10,23,58,108,324,3,2,4];
const maximo = valor.reduce((acc, el) => Math.max(acc, el), valor[0]); 
console.log(maximo);

const letra = ['H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o', 'u', 'n', 'u', 'n'];
const contar = letra.reduce((acu,letra) => {
    acu[letra] = (acu[letra] || 0) + 1;
    return acu;
},{})
console.log(contar);

class Fruta{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
}
const productos = [
    new Fruta('Manzana', 'Fruta'),
    new Fruta('Pera', 'Fruta'),
    new Fruta('Banana', 'Fruta'),
    new Fruta('Tomate', 'Verdura'),
    new Fruta('Zanahoria', 'Verdura'),
    new Fruta('Papa', 'Verdura'),
    new Fruta('Naranja', 'Fruta'),
    new Fruta('Mandarina', 'Fruta'),
    new Fruta('Lechuga', 'Verdura')
];
const agrupacion = productos.reduce((acu,producto) => {
    (acu[producto.tipo] = acu[producto.tipo] || []).push(producto.nombre);// si no existe el tipo de fruta lo crea y le agrega el producto
    return acu;
},{});
console.log(agrupacion);

//Every
const numi = [1, 30, 3, 29, 5, 8, 9, 10, -7, -1];
const negativos = numi.every(num => num < 0);
console.log(negativos);

const usuarios = [
    {nombre: 'Jorge', edad: 23},
    {nombre: 'Juan', edad: 18},
    {nombre: 'Ana', edad: 18},
    {nombre: 'Maria', edad: 27},
    {nombre: 'Pedro', edad: 30}
]
const is_mayor = usuarios.every(user => user.edad >= 18);
console.log(is_mayor);

const inventario = [
    {nombre: "macbook", disponible: true},
    {nombre: "iphone", disponible: false},
    {nombre: "teclado", disponible: true},
    {nombre: "mouse", disponible: false},
    {nombre: "monitor", disponible: true},
    {nombre: "cargador", disponible: false}
]
const todos_disponibles = inventario.every(producto => producto.disponible);
console.log(todos_disponibles);

//includes
const texto = "Aprendiendo JavaScript con el método includes";
const resultado = texto.includes('Jaba');
console.log(resultado);

const textos = ["Aprendiendo JavaScript con el método includes", "Aprendiendo JavaScript con el método includes", "Aprendiendo JavaScript con el método includes"];
console.log(textos.includes("Aprender"));

//some: devuelve true si al menos un elemento cumple con la condición
const numeriyo = [1, 30, 3, 29, 5, 8, 9, 10, -7, -1, 0];
const positivos = numeriyo.some(num => num > 0);
console.log(positivos);

const permisos = [
    {usuario: "juan", rol: "admin"},
    {usuario: "jorge", rol: "user"},
    {usuario: "pedro", rol: "user"},
    {usuario: "ana", rol: "admin"},
    {usuario: "maria", rol: "editor"}
]
const es_admin = permisos.some(user => user.rol === "admin");
console.log(es_admin);