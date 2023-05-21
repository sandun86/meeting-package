const { check, validationResult, body } = require("express-validator");

const { response } = require("./../config/response");

const validator = {

	getMeetingRoomPrice: () => {
		return [
			body("channelId").exists().withMessage("Channel ID required"),
			body("meetingRoomId").exists().withMessage("Meeting Room ID required"),
			(req, res, next) => {
				const errors = validationResult(req);
				if (!errors.isEmpty()) {
					res.status(403).json(response(403, "Validation error", errors.array()));
				} else {
					next();
				}
			},
		];
	},


};

module.exports = validator;