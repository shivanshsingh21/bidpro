var express = require("express");
<<<<<<< HEAD

const { itemController } = require("../controller/item.controler");
=======
const { itemController } = require("../controller/item.controler");

const { verifyUser } = require("../middleware/auth");
>>>>>>> f007283bfa8835c01de3a0eaebea199227f9b91e
var router = express.Router();

/* GET users listing. */

<<<<<<< HEAD
router.post("/item", itemController.item);
router.post("/bid", itemController.item);
=======
router.post("/item", verifyUser, itemController.item);
>>>>>>> f007283bfa8835c01de3a0eaebea199227f9b91e

module.exports = router;
