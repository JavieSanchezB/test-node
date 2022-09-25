function saludar($nombre) {
    return $nombre;
    }
function saludarHolamudo(){
    return 'Hola, mundo!';
}

  //Exportar modulos uno por uno
  // module.exports.saludar = saludar; 
  // module.exports.saludarHolamudo = saludarHolamudo; 

  //Exportar modulos en un objeto
  module.exports = {
    saludar: saludar,
    saludarHolamudo: saludarHolamudo

  };
