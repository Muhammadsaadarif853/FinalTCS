var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var Class = require('../models/class');
var Teacher = require('../models/teacher');
var Student = require('../models/student');

/* GET Operations */
router.get('/', function(req, res, next) {
    res.send('Admin');

});
router.get('/classes', function(req, res, next) {
    Class.find({}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
router.get('/students', function(req, res, next) {
    Student.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
router.get('/teachers', function(req, res, next) {
    Teacher.find().sort('name').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.get('/classes/:id', function(req, res, next) {
    Class.find({ _id: req.params.id }).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.get('/students/:id', function(req, res, next) {
    Student.findById(req.params.id)
        .then((student) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(student);
        }, (err) => next(err))
        .catch((err) => next(err));

});
router.get('/teachers/:id', function(req, res, next) {
    Teacher.findById(req.params.id)
        .then((teacher) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(teacher);
        }, (err) => next(err))
        .catch((err) => next(err));

});
//POST Operations
router.post('/addteacher', function(req, res, next) {
    Teacher.create(req.body)
        .then((teacher) => {
            console.log('Teacher has been Added ', teacher);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(teacher);
        }, (err) => next(err))
        .catch((err) => next(err));
});



router.post('/addstudent', function(req, res, next) {
    Student.create(req.body)
        .then((student) => {
            console.log('Student has been Added ', student);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(student);
        }, (err) => next(err))
        .catch((err) => next(err));
});

//PUT Operations
router.put('/assign/:cid/Student/:sid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, {
            "$push": {
                "courses": {
                    "students": {
                        "sid": req.params.sid
                    }
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
});

router.put('/assign/:cid/Student/:sid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, {
            "$push": {
                "students": {
                    "sid": req.params.sid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            res.json(results);
        });
});

router.put('/class/:cid/teacher/:tid', function(req, res, next) {
    Class.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid }, function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});
router.put('/class/:cid', function(req, res, next) {
    res.send('respond with a resource');
});

//Delete Operations
router.delete('/delteacher/:id', function(req, res, next) {
    Teacher.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});


router.delete('/delclass/:id', function(req, res, next) {
    Class.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

router.delete('/delstudent/:id', function(req, res, next) {
    Student.deleteOne({ _id: req.params.id }, function(error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    });
});

// My first route is add class
router.get("/addclass", async function (req, res, next) {
    try {
 
      obj = {
        name: req.body.name,
        teacher:req.body.teachername,
        students: [

          { sid:req.body.studentid,
            sname=req.body.studentname,
        },
         
        
        ],
        courses: [
          {
            courseName: req.body.courseName,
  
            assignments: [
              {
                assignNo: req.body.assignNo,
                description: req.body.assignmentdescription,
              },
              
            ],
            quizes: [
              {
                quizNo: req.body.quizid,
              },
            ],
          },
        ],
      };
      const class2 = await Class.create(obj);
      res.send(class2);

         //   obj = {
    //     name: "test",
    //     teacher: "61e41a8d70eb7c1c1000a0e9",
    //     students: [
    //       { sid: "61e41d6d0a94192ac88ca85b" },
    //       { sid: "61e41d710a94192ac88ca85d" },
        
    //     ],
    //     courses: [
    //       {
    //         courseName: "TCS CS12",
  
    //         assignments: [
    //           {
    //             assignNo: 3,
    //             description: "Do the Lab task",
    //           },
    //           {
    //             assignNo: 1,
    //             description: "Do Practicle assignment",
    //           },
    //           {
    //             assignNo: 3,
    //             description: "Complete the task metioned in class",
    //           },
    //           {
    //             assignNo: 5,
    //             description: "Have the group task done ",
    //           },
    //           {
    //             assignNo: 32,
    //             description: "Make Expresa and node Routes for your project",
    //           },
    //           {
    //             assignNo: 12,
    //             description: "Comple the FYP routes ",
    //           },
    //         ],
    //         quizes: [
    //           {
    //             quizNo: 7,
    //           },
    //         ],
    //       },
    //     ],
    //   };
    } catch (err) {
      res.send(err.message);
    }
  });

module.exports = router;