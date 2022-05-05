var express = require('express');
var router = express.Router();
var masterRouter = require('./master');
var usersRouter=require('./users');
/* GET home page. */

// Master Routes
router.use('/master',masterRouter)
router.use('/users',usersRouter)
module.exports = router;