require('dotenv').config();
const { Client } = require("pg");

const SQL = `
-- Drop existing tables if they exist
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS users;

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  membership_status BOOLEAN DEFAULT FALSE
);

-- Create messages table
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  text TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);

-- Insert users
INSERT INTO users (first_name, last_name, username, password, membership_status) VALUES
  ('John', 'Doe', 'johndoe', 'password123', TRUE),
  ('Jane', 'Smith', 'janesmith', 'password123', TRUE),
  ('Alice', 'Johnson', 'alicej', 'password123', FALSE),
  ('Bob', 'Brown', 'bobb', 'password123', FALSE),
  ('Charlie', 'White', 'charliew', 'password123', TRUE);

-- Insert messages
INSERT INTO messages (user_id, title, text) VALUES
  (1, 'Hello World', 'This is my first post!'),
  (1, 'EJS Rocks', 'Loving templating with EJS.'),
  (2, 'Happy Coding', 'JavaScript is fun and challenging!'),
  (2, 'Frontend vs Backend', 'Which one do you prefer?'),
  (3, 'Learning Node.js', 'Just started my journey with Node.js.'),
  (3, 'Database Tips', 'Always normalize your database!'),
  (4, 'Express.js Tips', 'Middleware makes life easier.'),
  (4, 'Debugging', 'I spent hours debugging an undefined variable!'),
  (5, 'Project Ideas', 'Looking for interesting projects to work on.'),
  (5, 'Deployment', 'Finally deployed my app successfully!');
`;

async function main() {
  console.log("Seeding database...");
  const client = new Client({
    connectionString: `postgresql://${process.env.ROLE_NAME}:${process.env.ROLE_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
  });

  try {
    await client.connect();
    await client.query(SQL);
    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await client.end();
  }
}

main();
