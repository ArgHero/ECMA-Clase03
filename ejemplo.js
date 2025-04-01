const transacciones = [
  {
    id: 213123,
    client: "Ana lisa",
    monto: 200,
    date: "2020-12-21",
    status: "completado",
  },
  {
    id: 213124,
    client: "Juan Perez",
    monto: 300,
    date: "2020-02-18",
    status: "rechazado",
  },
  {
    id: 213125,
    client: "Maria",
    monto: 400,
    date: "2020-12-18",
    status: "completado",
  },
  {
    id: 213126,
    client: "Pedro",
    monto: 500,
    date: "2020-12-38",
    status: "rechazado",
  },
  {
    id: 213127,
    client: "Luis",
    monto: 600,
    date: "2020-04-18",
    status: "completado",
  },
];
//Encotrar la primera transacción que se completó
const firstTransaccion = transacciones.find(
  (transaccion) => transaccion.status === "completado"
);
console.log(firstTransaccion);

// Verificar sin un ckiente en especifico tiene una transacción
const cliente = "Pedritoo";
const client = transacciones.map((transaccion) => transaccion.client);
console.log(client);

const existe = client.includes(cliente);
console.log(existe);

//Calcular el total de montos de las transaccciones completadas
const total = transacciones
  .filter((t) => t.status === "completado")
  .reduce((acumulador, transaccion) => acumulador + transaccion.monto, 0);
console.log(total);

const rechazadas = transacciones
  .filter((t) => t.status === "rechazado")
  .reduce((acumulador, transaccion) => acumulador + transaccion.monto, 0);
console.log(rechazadas);

//transacciones mayores a 500
const mayor500 = transacciones.filter(t => t.monto >= 500).map(t => t.client);
console.log(mayor500);