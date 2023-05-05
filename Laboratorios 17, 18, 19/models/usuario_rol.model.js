const db = require("../util/database");
const bcrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(nuevo_usuario_rol) {
    this.idUsuario = nuevo_usuario_rol.idUsuario || 0;
    this.idRol = nuevo_usuario_rol.idRol || 0;
  }

  save() {
    return bcrypt
      .hash(this.password, 12)
      .then((password_cifrado) => {
        return db.execute(
          `
                INSERT INTO usuarios (nombre, username, password)
            values (?, ?, ?)
            `,
          [this.nombre, this.username, password_cifrado]
        );
      })
      .then(([result]) => {
        const usuarioId = result.insertId;
        // Consulta la tabla de roles para obtener el ID del rol correspondiente
        return db.execute("SELECT id FROM roles WHERE nombre = ?", [this.rol]);
      })
      .then(([rows]) => {
        if (rows.length > 0) {
          const rolId = rows[0].id;
          // Inserta el usuario y el rol en la tabla usuarios_rol
          return db.execute(
            `
                    INSERT INTO usuarios_rol (idUsuario, idRol)
                values (?, ?)
                `,
            [usuarioId, rolId]
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
