const meetingRoomService = require("../service/meetingRoomService");

const meetingRoomController = {
	getMeetingRoomPrice: async (req, res) => {
		const user = await meetingRoomService.getMeetingRoomPrice(req, res);
		return 'user';
	}

	
};

module.exports = meetingRoomController;