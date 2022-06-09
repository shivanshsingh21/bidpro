var express = require('express');
const {masterController} = require('../controller/master.controller');
var router = express.Router();

/* GET home page. */
router.post('/addCategory',masterController.addCategory);

router.post('/addRole',masterController.addRoles);

router.get('/getRole',masterController.getRoles);

router.get('/getCategory',masterController.getCategory);

module.exports = router;
