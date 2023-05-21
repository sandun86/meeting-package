/**
 * Database connection
 */

const mysql = require("mysql");

const db = {
	pool: mysql.createPool({
		connectionLimit: process.env.DB_POOL_SIZE,
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		debug: false,
		timezone: "utc",
	}),
	query: function (qry, params, next) {
		qry = mysql.format(qry, params);
		console.log("qry  --->",qry)
		db.pool.query(qry, function (err, rows) {
			next(err, rows);
		});
	},
};

module.exports = db;