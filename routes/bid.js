var express = require("express");
const { bidController } = require("../controller/bid.controller");
const { verifyUser } = require("../middleware/auth");
var router = express.Router();

/* GET users listing. */

router.post("/bid", verifyUser, bidController.bid);

module.exports = router;
