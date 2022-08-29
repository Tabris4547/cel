const mysql = require("mysql");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0000",
    database: "study_user_information"
});

module.exports = db;