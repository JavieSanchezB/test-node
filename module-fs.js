const fs = require('fs');

fs.readFile('index.html', 'utf-8', (err, contenido) => {
if(err){
    console.log(err);
} else {
    console.log(contenido);
}


});