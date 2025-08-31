const Employee = require('../models/employeeModel');

const loadRegister = async (req,res)=>{
  try {
    
    const employee = new Employee({
      name:req.body.name,
      email:req.body.email,
      mobile:req.body.mobile,
      password:req.body.password,
    });

    const result = await employee.save();
    res.send("Registration successfull"+ result);

  } catch (error) {
    console.error(error.message);
  }
}

const loadlogin = (req,res)=>{
  res.render("register");
}






module.exports= {
  loadlogin,
  loadRegister,
}