//para crear el servidor es como el "create server"
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

//Middleware - son capas que están en medio del software, ej. capa de seguridad
//te evita tener que hacer eso en varias partes del código 
// app.use - registrar un middleware

//tercera fucnion "next" - next le dice a express que avance hacie el siguiente middle 
app.use((request, response, next) => {
    console.log('Middleware! UWU');
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

app.use('/nuevo', (request, response, next)=>{
    console.log(request.body);
    console.log(request.body.jugador);

    let html = `
        <form action "nuevo" method= "POST">
        <label for="jugador">Nombre del jugador: </label>
        <input type="text" id="jugador" name="jugador">
        <input type="submit" value="enviar">
        </form>
    `; 
    response.send(html);
})

app.use( (request, response, next) =>{
    console.log("tercer middleware");
    //response.send('¡Hola desde el tercer middleware!'); 
});


//Puerto
app.listen(3000);