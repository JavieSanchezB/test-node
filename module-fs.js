const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
  if (err) {
    //console.log(err);

    //muestra la liena donde se encueta el error y detiene la ejecucion
    throw err;

  } else {
    console.log(contenido);
  }

});

//Cambiar el nombre del archivo
// fs.rename('archivo.html','main.js', (err) => {
// if(err){
//     throw err;
// }else{
//     console.log('Se cambio el nombre del archivo correctamente')
// }
// });

//agregar texto al final de archivo
fs.appendFile('main.txt', 'este un ejemplo para agrear datos a un archivo al final', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('agraga la informacion al archivo')
  }
});


//eliminar un archivo
fs.unlink('archivoeliminar.txt',(err)=>{
  if(err){
    throw err;
  }else{
    console.log('archivo elimnado');
  }
});
//eliminar un archivo
// fs.unlink('archivoeliminar.txt', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('archivo elimnado');
//   }
// });
