const fs = require('fs');

const contenido =fs.readFileSync('index.html', 'utf-8');
console.log(contenido);

//Cambiar el nombre del archivo
fs.renameSync('archivo.html', 'main.js');
console.log('Se cambio el nombre del archivo correctamente');

//agregar texto al final de archivo
fs.appendFileSync('main.txt', 'este un ejemplo para agrear datos a un archivo al final');
console.log('agraga la informacion al archivo')

//eliminar un archivo
fs.unlink('archivoeliminar.txt')
console.log('archivo elimnado');

//eliminar un archivo
fs.unlink('archivoeliminar.txt')
console.log('archivo elimnado');
