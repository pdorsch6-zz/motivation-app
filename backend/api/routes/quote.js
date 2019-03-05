import express from 'express';
const router = express.Router();
const controllers = require('./controllers');


router.get('/all', controllers.quote.getAll);
router.post('/add', controllers.quote.add);

module.exports = router