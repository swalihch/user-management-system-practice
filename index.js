const mongoose = require('mongoose');
const conn = mongoose.connect("mongodb://127.0.0.1:27017/company");
const path = require('path');
const express = require('express');
const app = express();
const employeeRouter = require('./router/employeeRouter');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set('views',path.join(__dirname,"views"));
app.set('view engine', 'ejs');

app.use('/',employeeRouter);




const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`server running on ${PORT}`));