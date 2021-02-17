// Dependencies
const mysql = require("mysql");
require("dotenv").config();

// Create MySQL connection
var connection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORT || 3306,
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
//   afterConnection();
});


// Export connection
module.exports = connection;