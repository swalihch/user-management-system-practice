const mongoose = require('mongoose');

const employee = new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  },
  mobile:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  }
});

const Employee = mongoose.model('Employee',employee);

module.exports = Employee;