var express = require('express');
var router = express.Router();
var masterRouter = require('./master');
/* GET home page. */

// Mater Routes
router.use('/master',masterRouter)

module.exports = router;