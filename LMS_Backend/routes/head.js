var express = require('express');
var router = express.Router();
var Class = require('../models/class');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/results/class/:id', function(req, res, next) {
  Class.find({ _id: req.params.id }).exec(function(error, results) {
      if (error) {
          return next(error);
      }
      var result = results[0].result;
      res.json(result);
  });
});
//Route in header


module.exports = router;