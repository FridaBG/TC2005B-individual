const { response } = require('express');
const express = require('express');

const router = express.Router();

router.get('/nuevo', (request, response, next) => {
    
    let html = `
        <h3> Registro </h3>
        <form action="/fuerza/nuevo" method="POST">

        <label for="nombre">Nombre completo:</label>
        <input type="text" id="nombre" name="nombre">
    <br>
        <label for="correo">Correo: 
        <input type="email" placeholder="nombre@dominio.com" id="correo" name="correo">
        </label>
    <br>
        <input type="submit" value="Enviar">
        </form>
    `;
    response.send(html);
});

router.get('/alimentacion1', (request, response, next) => {
    
    let html3 = `
        <h2> VEGANA </h2>
        <h3> Falafel ligero </h3>
        <img src=https://i.blogs.es/54002b/falafel-ligero/1366_2000.jpg weight=40px >
        <ul>
         <li><strong>Ingredientes</strong>. 240 g de garbanzos cocidos y escurridos, 2 rebanadas de pn de molde, 50 g de cebolla, 2 dientes de ajo pelados,  1 cucharadita de comino molido, 1/2 cucharadita de pimentón, 1 manojo de  cilantro fresco, 1 manojo de perejil fresco, 30 ml de aceite de oliva virgen extra, 1 cucharadita de levadura química, agua (opcional).</li>
         <li><strong>Elaboración</strong>. Lavar los garbanzos escurridos y triturar todos los ingredientes en el robot Magimix Cook Expert o robot de cocina, ajustando la textura con agua si fuera necesario. Tomamos pequeñas porciones de la masa y formamos bolitas de igual tamaño. Conviene humedecerse las manos para que la masa no se nos pegue. Las colocamos sobre una bandeja de horno cubierta con papel sulfurizado y aplastamos ligeramente con las manos. Dejamos reposar una hora en la nevera o en una zona fría de la cocina. Cocemos en horno pre calentado a 180ºC, arriba y abajo con calor tradicional, durante unos 20 minutos o hasta que estén dorados. Volteamos cada uno a media cocción, es decir, después de los primeros 10 minutos. Retiramos del horno y servimos inmediatamente.</li>
        </ul>
    `;
    response.send(html3);
});

router.get('/alimentacion2', (request, response, next) => {
    
    let html3 = `
        <h3> ESTANDAR </h3>
    
    `;
    response.send(html3);
});



router.post('/nuevo', (request, response, next) => {
    console.log(request.body);
    console.log(request.body.nombre);
    console.log(request.body.correo);

    let html2 = `
        <h3> Conoce sobre nuestras diferentes alternativas de comidas</h3>
        <form method="get" action="http://localhost:3000/fuerza/alimentacion2">
        <button type="submit">Estandar</form>
    
        <form method="get" action="http://localhost:3000/fuerza/alimentacion1">
        <button type="submit">Vegetariano</form>
    <br>
    `

    response.send( "  <h2> FUERZA </h2> Plan de entrenamiento para: " + request.body.nombre + " <br> E-mail: " 
    + request.body.correo + ' <br> <h3>Te recomendamos ver el siguiente video: </h3> <br> '
     + ' <iframe width="560" height="315" + src="https://www.youtube.com/watch?v=jYwHKLo75kc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' 
     + html2);

});



module.exports = router;


//deiferencia entre id, for, name en las formas