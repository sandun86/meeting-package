/**
 * MeetingRoomService 
 */

const meetingRoomModel = require("../models/meetingRoom");

const meetingRoomService = {

	getMeetingRoomPrices: async (req, res) => {

		const { channelId, meetingRoomId } = req.body;
		const meetingRoomPrices = await meetingRoomModel.getMeetingRoomPrices(meetingRoomId, channelId);

		return meetingRoomPrices;
	}
}

module.exports = meetingRoomService;