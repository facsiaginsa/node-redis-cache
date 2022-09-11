const mysql = require('mysql2');
const { dbConfig } = require('../configs');

const dbConnection = mysql.createConnection({
  host: dbConfig.host,
  port: dbConfig.port,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.name
});

module.exports = dbConnection