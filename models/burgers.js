// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVal, condition, cb) {
    orm.updateOne("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burgers;
