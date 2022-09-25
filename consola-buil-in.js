
console.log('Test de log');
console.warn('Test de metodo War...');
console.error('Test de metodo error...');
console.error(new Error('¡Cuando pase un error!'));
console.assert('Test de mnetodo assert...');


//Metodo Process informacion del Sistema con log
console.log(process);
console.log(process.env);
//Metodo Process informacion del Sistema con table
console.table(process.env);

//Metodo argv

console.log(process.argv);
//Metodo Process informacion del Sistema con table
console.table(process.argv);
