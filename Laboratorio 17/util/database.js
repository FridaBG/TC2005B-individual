const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "Laboratorio17",
  password: " ",
});

module.exports = pool.promise();
