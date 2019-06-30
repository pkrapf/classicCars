// const mysql = require("mysql");
let mysql = require("mysql");
// require("./config");
let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database,
    port: process.env.port
});

module.exports.pool = pool;