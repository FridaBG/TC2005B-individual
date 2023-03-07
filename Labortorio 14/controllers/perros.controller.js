const Perro = require('../models/perros.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const perro = new Perro({
        nombre: request.body.nombre,
        raza: request.body.raza,
        descripcion: request.body.descripcion,
    });

    perro.save();
    request.session.ultimo_perro = perro.nombre;


    response.setHeader('Set-Cookie', 'ultimo_perro=' + perro.nombre +  '; HttpOnly'); //crear cookie

    response.redirect('/perros/');


};

exports.listar = (request, response, next) => {



    //
    let consultas = request.get('Cookie').split(';')[0].split('=')[1] || [0] ;

    consultas ++;

    response.setHeader('Set-Cookie', 'consultas=' + 1 +  '; HttpOnly') //crear una cookie

    exports.log = (request.get('Cookie').split('=')[1]); //guardar cookie

    request.session.ultimo_perro; //creo que falta algo

    response.render('lista', { razas: Perro.fetchAll(), ultimo_perro:request.session.ultimo_perro || '' });
};


exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/perros'); //Este código se ejecuta cuando la sesión se elimina.
    });
};




