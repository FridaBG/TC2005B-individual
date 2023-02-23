//index o app son los nombres estandar

console.log("helloooooooo");
console.info("helloooooooo");
console.warn("helloooooooo");
console.error("helloooooooo");

// fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');

//método de file system
filesystem.writeFileSync('hola.txt', 'Hola'); //nombre del archivo, lo que quiero que escriba.