const mysql = require("mysql");
const util = require("util");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "ne14LEELA!",
  port: "3306",
  database: "burgersDB",
});

connection.connect(function (err) {
  if (err) throw err;
});

connection.query = util.promisify(connection.query);

module.exports = connection;
