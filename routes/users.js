var express = require('express');
const {userController} = require('../controller/user.controller');
var router = express.Router();
/* GET users listing. */




router.post('/register', userController.register);
router.post('/login', userController.loginUSER);
router.post('/passwordreset', userController.passwordReset);

// This token is different from JWT
router.get('/reset/:token',userController.passwordResetGet);

module.exports = router;
