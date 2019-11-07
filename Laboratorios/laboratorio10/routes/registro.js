var express = require('express');
var router = express.Router();
var registroController = require('../COntroller/registroController');

router.get('/',);
router.get('/:id',);
router.post('/',);
router.delete('/:id',);
router.put('/',registroController.put);

module.exports = router;