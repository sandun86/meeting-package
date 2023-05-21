/**
 * Common response 
 * @param {*} statusCode 
 * @param {*} message 
 * @param {*} data 
 * @returns 
 */

const response = (statusCode, message, data) => {
	return {
		statusCode: statusCode,
        message: message,
        data: data
	};
}

module.exports = {
    response
}