const { response } = require("../config/response");

const meetingRoomModel = require("../models/meetingRoom");

const meetingRoomService = {
	getMeetingRoomPrice: async (req, res) => {
		const { channelId, meetingRoomId } = req.body;
		try {
			const meetingRoomPrices = await meetingRoomModel.getMeetingRoomPrices(meetingRoomId, channelId);
			return res.status(200).json(response(201, "Success!", meetingRoomPrices));
		} catch (error) {
			return res.status(500).json(response(500, "Request failed!", error.message));
		}
	}
}

module.exports = meetingRoomService;