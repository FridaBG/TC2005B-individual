const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    next();
});

app.use('/hola', (request, response, next) => {
    response.send('Hola desde la ruta /hola');
});

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);


app.listen(3000);


//No hay distincón entre get y post en express
//para maejar el tipo de petición se usa el método "router"
//cambiar ".use" por ".get", lo que psa es que cuando haces el post (click en el botón), te manda a otra de las páginas