const pool = require('./pool');

async function addUser(fName, lName, username, password) {
    await pool.query("INSERT INTO Users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)", [fName, lName, username, password]);
}

module.exports = {
    addUser
}