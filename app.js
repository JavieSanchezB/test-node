const  saludo  = require("./saludar");
const  { Uno, Dos } = require("./desestructuracion.js")

console.log(saludo.saludar("Hola mundo"));
console.log(saludo.saludarHolamudo());
console.log(saludo["saludo mundo"]());

console.log(Uno());
console.log(Dos());