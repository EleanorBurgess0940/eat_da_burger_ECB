// Set up MySQL connection
const mysql = require("mysql");

var connection;

//two different connections local/ heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ne14LEELA!",
    port: "3306",
    database: "burgersDB",
  });
}

//make connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export connection to orm.js
module.exports = connection;
