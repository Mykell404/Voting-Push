'use strict';

var express = require('express');
var controller = require('./polls.controller');

var router = express.Router();

router.get('/', controller.index);
//router.get('/:id', controller.show);
router.get('/:fullName/:name', controller.fetchData);
router.get('/:fullName', controller.indexUser);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;