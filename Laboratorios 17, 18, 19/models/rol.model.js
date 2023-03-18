const db = require("../util/database");

module.exports = class Rol {
  constructor(id, nombre) {
    this.id = id;
    this.nombre = nombre;
  }

  static fetchAll() {
    return db.execute("SELECT * FROM roles");
  }

  static fetchOne(id) {
    return db.execute("SELECT * FROM roles WHERE id = ?", [id]);
  }
};
