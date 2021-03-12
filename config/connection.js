// Dependencies
const mysql = require("mysql");
require("dotenv").config();
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "burgers_db"
  });
}

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;