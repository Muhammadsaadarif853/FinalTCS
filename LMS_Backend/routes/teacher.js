var express = require("express");
var router = express.Router();
var Class = require("../models/class");
var Teacher = require("../models/teacher");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/* Delete Requests for the assignment  second Route*/
router.delete("/assignment/:id", async function (req, res, next) {
  try {
    const classes = await Class.find({}, { courses: req.body.id });
   
    classes.forEach(({ courses }) => {
     
      courses.forEach(({ item }) => {
        console.log(item.assignment);
      });
    });
    res.send(classes);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
