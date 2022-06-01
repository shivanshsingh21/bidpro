var express = require("express");

const { itemController } = require("../controller/item.controler");
var router = express.Router();

/* GET users listing. */

router.post("/item", itemController.item);
router.post("/bid", itemController.item);

module.exports = router;
