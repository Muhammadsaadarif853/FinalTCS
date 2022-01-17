const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
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
  salary:{
    type:Number
  },
  contact:{
    type:String
  }
});

module.exports = Teacher = mongoose.model('teacher',TeacherSchema);