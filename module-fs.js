const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
if(err){
    //console.log(err);
   
   //muestra la liena donde se encueta el error y detiene la ejecucion
    throw err;

} else {
    console.log(contenido);
}

});

fs.rename('archivo.html','main.js', (err) => {
if(err){
    throw err;
}else{
    console.log('Se cambio el nombre del archivo correctamente')
}
});