const Usuario = require("../models/usuario.model");
const Rol = require("../models/rol.model");
const Usuario_Rol = require("../models/usuario_rol.model");

exports.getNuevo = (request, response, next) => {
  response.render("usuario_rol/nuevo", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.postNuevo = (request, response, next) => {
  const usuario_rol = new Usuario_Rol({
    usuario_id: request.body.usuario_id,
    rol_id: request.body.rol_id,
  });

  usuario_rol
    .save()
    .then(([rows, fieldData]) => {
      response.redirect("/usuario_rol/lista");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getLista = (request, response, next) => {
  Usuario_Rol.fetchAll()
    .then(([rows, fieldData]) => {
      response.render("usuario_rol/lista", {
        usuario_rol: rows,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || "",
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
