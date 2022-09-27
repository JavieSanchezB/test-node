function saludaTiempo(mensaje){
console.log(`Hola en tiempo programado ${mensaje}`)
}

function enviarMesnaje(mensaje){
  console.log(`este el mesnaje ${mensaje}`)
  }

//saludaTiempo('10000 segundos');

function sumar(a, b){
  console.log(`funcion sumar despues de 20000 milesegundos Resultado = ${a + b}`);
}

//Higer-Order Programming, llamar una dentro de otra funcion
setTimeout(saludaTiempo, 10000, '10000 segundos');
setTimeout(sumar, 20000, 10, 10);


//SetImmediate ejecuta primero codigo sincrono
//Se Ejecuta primero
console.log('Antes de setImmediate');
//Se ejecuta tercero
setImmediate(enviarMesnaje,'ejecutando setImmediate()');
//Se ejecuta Segundo
console.log('Despues de setImmediate');