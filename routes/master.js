var express = require('express');
const {masterController} = require('../controller/master.controller');
var router = express.Router();

/* GET home page. */
router.post('/addCategory',masterController.addCategory);

module.exports = router;
