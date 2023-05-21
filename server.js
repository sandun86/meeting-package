/**
 * Server
 */

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/constants");
const authenticator = require('./middleware/authenticator');
const routes = require("./routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/api/v1/*', [authenticator]);
app.use('/api/', routes);

module.exports = app.listen(PORT, () => {
	console.log("service listening on port", PORT);
});