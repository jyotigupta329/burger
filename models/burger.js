// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      // "burgers" - orm creates table burger in db
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    // delete: function(condition, cb) {
    //   orm.delete("burger", condition, function(res) {
    //     cb(res);
    //   });
    // }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;