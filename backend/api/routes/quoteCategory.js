const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/all', controllers.quoteCategory.getAll);
router.post('/', controllers.quoteCategory.create);
router.delete('/:id', controllers.quoteCategory.deleteOne);

module.exports = router