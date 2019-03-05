const express = require('express');
const router = express.Router();
const controllers = require('../controllers');


router.get('/all', controllers.quoteCategory.getAll);
router.post('/create', controllers.quoteCategory.create);

module.exports = router