var express = require('express');
var router = express.Router();
//include skills controller
var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;
