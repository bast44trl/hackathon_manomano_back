require("dotenv").config();
const mysql = require("mysql2");

/* const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
}); */

const pool = mysql.createPool({
  host: process.env.CLEAR_DB_HOST,
  user: process.env.CLEAR_DB_USER,
  database: process.env.CLEAR_DB_NAME,
  password: process.env.CLEAR_DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

/* mysql://b43fbc41d59823:812c6944@us-cdbr-east-05.cleardb.net/heroku_caecc15f289d066?reconnect=true */
