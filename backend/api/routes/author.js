const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/all', controllers.author.getAll);
router.post('/', controllers.author.create);
router.delete('/:id', controllers.author.deleteOne);
router.put('/:id', controllers.author.update);


module.exports = router