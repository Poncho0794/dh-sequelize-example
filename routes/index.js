var express = require('express');
var router = express.Router();

const { index, detail, topStock } = require('../controllers/products.controller')

/* GET home page. */
router.get('/', index);
router.get('/top', topStock)
router.get('/:id', detail)
module.exports = router;
