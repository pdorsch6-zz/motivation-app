const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/all', controllers.quote.getAll);
router.post('/', controllers.quote.create);
router.delete('/:id', controllers.quote.deleteOne);


module.exports = router