/**
 * MeetingRoomController 
 */
const meetingRoomService = require("../service/meetingRoomService");
const { response } = require("../config/response");

const meetingRoomController = {

	getMeetingRoomPrice: async (req, res) => {
		
		try {

			const meetingRoomPrices = await meetingRoomService.getMeetingRoomPrices(req, res);
			
			return res.status(200).json(response(200, "Success!", meetingRoomPrices));
		} catch (error) {

			return res.status(500).json(response(500, "Request failed!", error.message));
		}
	}	
};

module.exports = meetingRoomController;