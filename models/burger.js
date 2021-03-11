// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  insertOne: function(col, val, cb) {
    orm.create("burger", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVal, condition, cb) {
    orm.update("burger", objColVal, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
