const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name:{
    type:String
  },
  Age:{
    type:Number
  },
  gender:{
    type:String,
  },
  email:{
    type:String,
  },
  CGPA:{
    type:Number
  },
  Student_Result:[{
    Course_ID:{
      type:String
    },
    GPA: {
      type:Number
    }
  }]
});

module.exports = Student = mongoose.model('student',StudentSchema); 