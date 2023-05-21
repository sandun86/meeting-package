const util = require("util");
const db = require("../config/database");

const meetingRoom = {
	getMeetingRoomPrices: (meetingRoomId, channelId, next) => {
		const query = "SELECT channel_name, price, venue_name, channel.is_visible as is_visible_channel, venue.is_visible as is_visible_venue "
		+"FROM meeting_room_price "
		+"INNER JOIN channel ON `channel`.`id` = `meeting_room_price`.`channel_id` "
		+"INNER JOIN meeting_room ON meeting_room.id = meeting_room_price.meeting_room_id "
		+"INNER JOIN venue ON venue.id = channel.venue_id "
		+"WHERE meeting_room_price.meeting_room_id = ? AND channel_id = ?";
		db.query(query, [meetingRoomId, channelId], next);
	},
};

module.exports = {
	getMeetingRoomPrices: util.promisify(meetingRoom.getMeetingRoomPrices),
};