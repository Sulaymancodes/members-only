const pool = require('./pool');

async function addUser(fName, lName, username, password) {
    await pool.query("INSERT INTO Users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)", [fName, lName, username, password]);
}

async function getUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}


async function getMessages() {
    const { rows } = await pool.query("SELECT u.first_name, u.last_name, u.username, u.membership_status, m.title, m.text, m.timestamp FROM Messages AS m JOIN Users AS u ON m.user_id = u.id;");
    return rows;
}

async function addMessage(id, title, text) {
    await pool.query("INSERT INTO messages (user_id, title, text, timestamp) VALUES ($1, $2, $3, now())", [id, title, text]) 
}
module.exports = {
    addUser,
    getUsers,
    getMessages, 
    addMessage
}