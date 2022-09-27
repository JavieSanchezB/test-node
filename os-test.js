const OS = require('OS');

console.log(OS.type());
console.log(OS.homedir());
console.log(OS.cpus());
console.log(OS.devNull);
console.log(OS.endianness());
console.log(OS.freemem());
console.log(OS.hostname());
console.log(OS.loadavg());
console.log(OS.networkInterfaces());
console.log(OS.platform());
console.log(OS.release());
console.log(OS.tmpdir());
console.log(OS.uptime());
console.log(OS.version());
console.log(OS.userInfo());

//No funciona en versiones menores a 18.9.0
//console.log(OS.machine());



console.log(process.memoryUsage());
