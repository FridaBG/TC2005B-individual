//para crear el servidor es como el "create server"
const express = require('express'); 
const bodyParser = require('body-parser');
const { response } = require('express');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Middleware - son capas que están en medio del software, ej. capa de seguridad
//te evita tener que hacer eso en varias partes del código 
// app.use - registrar un middleware

//tercera fucnion "next" - next le dice a express que avance hacie el siguiente middle 
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});


app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
    //response.send('¡Hola mundo!'); //Manda la respuesta, ya no es response.end
});

//agregar ruta
//primero es la ruta y la segunda es la funcion anónima

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});


const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");

    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});

app.listen(3000);




//No hay distincón entre get y post en express
//para maejar el tipo de petición se usa el método "router"
//cambiar ".use" por ".get", lo que psa es que cuando haces el post (click en el botón), te manda a otra de las páginas