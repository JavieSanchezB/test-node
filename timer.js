function saludaTiempo(mensaje){
console.log(`Hola en tiempo programado ${mensaje}`)
}

//saludaTiempo('10000 segundos');

function sumar(a, b){
  console.log(`funcion sumar despues de 20000 milesegundos Resultado = ${a + b}`);
}

//Higer-Order Programming, llamar una dentro de otra funcion
setTimeout(saludaTiempo, 10000, '10000 segundos');


setTimeout(sumar, 20000, 10, 10);