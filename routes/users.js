var express = require("express");

const { userController } = require("../controller/user.controller");
const { userService } = require("../service/user.service");
var router = express.Router();
/* GET users listing. */

router.post("/register", userController.register);
// router.post('/login', checkNotAuthenticated,userController.loginUSER);
// router.post('/passwordreset', userController.passwordReset);
router.post("/login", userController.login);
// This token is different from JWT
// router.get('/reset/:token',userController.passwordResetGet);
router.get("/verify-user/:token", userService.verifyUser)
module.exports = router;
