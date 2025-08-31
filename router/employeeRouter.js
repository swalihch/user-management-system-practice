const express = require('express');
const router = express.Router();
const employee = require('../controllers/employeeController');


router.get('/register',employee.loadlogin);

router.post('/register',employee.loadRegister);

module.exports = router;