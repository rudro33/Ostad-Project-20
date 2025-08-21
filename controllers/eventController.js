const Event = require('../models/Event');

const createEvent = async (req, res) => {
  const { title, description, date, time, location, organizerName, eventBanner } = req.body;

  const event = new Event({
    title,
    description,
    date,
    time,
    location,
    organizerName,
    eventBanner,
    createdBy: req.user._id,
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);
};

module.exports = { createEvent };
