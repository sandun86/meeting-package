const { response } = require("../config/response");

module.exports = function (req, res, next) {

    const authHeader = req.headers['api-key'];
    if (authHeader !== process.env.API_KEY) {
        return res.status(401).json(response(401, "Request failed!", 'Unauthorized'));
    }
    next();
};