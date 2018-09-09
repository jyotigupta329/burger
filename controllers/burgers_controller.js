var express = require("express");
var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger");

//Create all our routes and set up logic within those routes where required.
//Get all the burger from the database
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log("I am hitting url");
  burger.create([
    "burger_name",
    // "devoured"
  ], [
      req.body.burger_name,
      //  req.body.devoured
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
  console.log(req.params.id);
  console.log(req.body.devoured);

  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
      console.log("updated");
    }
  });
});
// Export routes for server.js to use.
module.exports = router;