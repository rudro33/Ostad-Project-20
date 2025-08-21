const express = require('express');
const router = express.Router();
const { createEvent, getEvents, getEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .post(protect, createEvent)
  .get(protect, getEvents);

router.route('/:id')
  .get(protect, getEvent)
  .put(protect, updateEvent)
  .delete(protect, deleteEvent);

module.exports = router;
