/**
 * Routes are define
 */
const express = require('express');
const router = express.Router();

const validator = require('../middleware/validator');
const meetingRoomController = require('../controllers/meetingRoomController');

router.post('/v1/meeting-room-price', validator.getMeetingRoomPrice(), meetingRoomController.getMeetingRoomPrice);

module.exports = router;