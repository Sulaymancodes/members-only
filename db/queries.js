const pool = require('./pool');

async function addUser(fName, lName, username, password) {
    await pool.query("INSERT INTO Users (first_name, last_name, username, password) VALUES ($1, $2, $3, $4)", [fName, lName, username, password]);
}

async function getUsers() {
    const { rows } = await pool.query("SELECT * FROM users");
    return rows;
}

async function getUser(id) {
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return rows[0];
}

async function getMessages() {
    const { rows } = await pool.query("SELECT u.first_name, u.last_name, u.username, u.membership_status, m.title, m.text, m.timestamp FROM Messages AS m JOIN Users AS u ON m.user_id = u.id;");
    return rows;
}

async function addMessage(id, title, text) {
    await pool.query("INSERT INTO messages (user_id, title, text, timestamp) VALUES ($1, $2, $3, now())", [id, title, text]) 
}

async function updateMembershipStatus(id) {
    await pool.query("UPDATE users SET membership_status = TRUE WHERE id = $1", [id]);
}

async function updateUser(fName, lName, username, password, id) {
    await pool.query("UPDATE users SET first_name = $1, last_name = $2, username = $3, password = $4 WHERE id = $5", [fName, lName, username, password, id])
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    getMessages, 
    addMessage,
    updateMembershipStatus,
    updateUser
}