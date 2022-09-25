const  saludo  = require("./saludar");
const  { Uno } = require("./desestructuracion.js")

console.log(saludo.saludar("Hola mundo"));
console.log(saludo.saludarHolamudo());
console.log(saludo["saludo mundo"]());

console.log(Uno());