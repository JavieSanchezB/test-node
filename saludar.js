function saludar($nombre) {
    return $nombre;
    }
function saludarHolamudo(){
    return 'Hola, mundo!';
}
function saludomundo(){
    return 'Hola, mundo! la funcion tiene espacio';

}
  //Exportar modulos uno por uno
  // module.exports.saludar = saludar; 
  // module.exports.saludarHolamudo = saludarHolamudo; 

  //Exportar modulos en un objeto
  module.exports = {
    saludar: saludar,
    saludarHolamudo: saludarHolamudo,
    'saludo mundo': saludomundo

  };
