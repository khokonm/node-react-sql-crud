const sqlite3 = require("sqlite3").verbose();
// Connect to DB
const db = new sqlite3.Database(
    "database.db",
    sqlite3.OPEN_READWRITE,
    (err) => {
        if (err) console.log(err);
        else console.log("Connected to DB");
    }
);
module.exports = db;
