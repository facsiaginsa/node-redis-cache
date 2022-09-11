const mysql = require('mysql2/promise');
const { dbConfig } = require('../configs');

const dbConnection = mysql.createPool({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.name,
  connectionLimit: 10,
});

module.exports = dbConnection