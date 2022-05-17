var express = require('express');
var router = express.Router();
var masterRouter = require('./master');
var usersRouter=require('./users');
var itemRouter=require('./item');
/* GET home page. */

// Master Routes
router.use('/master',masterRouter)
router.use('/users',usersRouter)
router.use('/items',itemRouter)
module.exports = router;