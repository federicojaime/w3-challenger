import mysql from "mysql2/promise";

import { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PASS, MYSQL_DATABASE } from "../config.js";

const pool = mysql.createPool({
	connectionLimit : 10,
	host            : MYSQL_HOST,
	port			: MYSQL_PORT,
	user            : MYSQL_USER,
	password        : MYSQL_PASS,
	database        : MYSQL_DATABASE
});

export const query = async (sql, values) => {
	try {
		var connection = await pool.getConnection();
		var rows = await connection.query(sql, values);
		return rows[0];
	} catch (error) {
		console.log(error);
	}
	return null;
};