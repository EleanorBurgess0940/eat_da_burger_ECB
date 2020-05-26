//import the orm to create functions that will interact wiwth this file
var orm = require("../config/orm.js");

//adds function to the selectAll insertOne and updateOne
var burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

//Exports the database for the controlle
module.exports = burger;
