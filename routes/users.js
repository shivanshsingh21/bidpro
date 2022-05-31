var express = require("express");

const { userController } = require("../controller/user.controller");
<<<<<<< HEAD
const { userService } = require("../service/user.service");
=======
const { verifyUser } = require("../middleware/auth");
>>>>>>> f007283bfa8835c01de3a0eaebea199227f9b91e
var router = express.Router();
/* GET users listing. */

router.post("/register", userController.register);
// router.post('/login', checkNotAuthenticated,userController.loginUSER);
// router.post('/passwordreset', userController.passwordReset);
<<<<<<< HEAD
router.post("/login", userController.login);
=======
router.post("/login", verifyUser, userController.login);
>>>>>>> f007283bfa8835c01de3a0eaebea199227f9b91e
// This token is different from JWT
// router.get('/reset/:token',userController.passwordResetGet);
router.get("/verify-user/:token", userService.verifyUser)
module.exports = router;
