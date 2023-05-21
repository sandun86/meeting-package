/**
 * Authentication Middleware
 */

const { response } = require("../config/response");

module.exports = function (req, res, next) {

    //I have used simple authentication here
    //TODO: When a user's login is successful, create a token with a unique key related to the user. 
    //And every API request from a logged-in user needs to validate that token. 
    const authHeader = req.headers['api-key'];
    if (authHeader !== process.env.API_KEY) {
        return res.status(401).json(response(401, "Request failed!", 'Unauthorized'));
    }
    next();
};