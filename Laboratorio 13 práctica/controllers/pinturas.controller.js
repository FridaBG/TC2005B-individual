const Pintura = require('../models/pinturas.model');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo');
};

exports.post_nuevo = (request, response, next) => {

    const pintura = new Pintura({
        nombre: request.body.nombre,
        autor: request.body.autor,
        fecha: request.body.fecha,
    });

    pintura.save();

    response.redirect('/pinturas/');
};

exports.listar = (request, response, next) => {
    response.render('lista', { pinturas: Pintura.fetchAll() });
};

