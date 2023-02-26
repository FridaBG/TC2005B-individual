//index o app son los nombres estandar

console.log("helloooooooo");
console.info("helloooooooo");
console.warn("helloooooooo");
console.error("helloooooooo");

// fs es el módulo para trabajar con el sistema de archivos
const filesystem = require('fs');

//método de file system
filesystem.writeFileSync('hola.txt', 'Hola'); //nombre del archivo, lo que quiero que escriba. //Sincrona (para que node se espere a que termione esta tarea y continuar con lo demásgit add)

console.log("termionamos de escribir el archivo")


//Códico asíncrono 

const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340]

for (let item of arreglo){
    setTimeout(()=> {console.log(item);}, item);
}

console.log("Este log está antes de imprimir el arrgelo"); //Se imprime antes del arreglo porque es asíncrono


setTimeout(()=> {console.log("Hackeadoooooooooooooo");}, 12000)

//htttp es el módulo que permite crear un servidos que pueda atender peticiones de http
const http = require('http');

const server = http.createServer( (request, response) => {
    response.setHeader('Chilaquiles')
    console.log(request.url);
    respond.write("HOLAAAAAAAAAAA")
    respond.end();
    
});

//localhost:3000 para acceder a este servidor
server.listen(3000)

