const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

router.get('/find', eventsController.findEvents);

router.post('/', eventsController.addEvent);


module.exports = router;