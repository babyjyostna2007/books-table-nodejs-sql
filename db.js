const Database = require('better-sqlite3');
const db = new Database('books.db');

db.exec(`
    CREATE TABLE IF NOT EXISTS books(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        author TEXT NOT NULL,
        title TEXT NOT NULL,
        year INTEGER NOT NULL
    )
`);

module.exports = db;