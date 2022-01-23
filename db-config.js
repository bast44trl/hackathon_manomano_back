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
  host: "us-cdbr-east-05.cleardb.net",
  user: "b43fbc41d59823",
  database: "heroku_caecc15f289d066",
  password: "812c6944",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;

/* mysql://b43fbc41d59823:812c6944@us-cdbr-east-05.cleardb.net/heroku_caecc15f289d066?reconnect=true */
