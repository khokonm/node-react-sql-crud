const response = require("../utils/response");
const db = require("../utils/db");
exports.list = (req, res) => {
    const page = req.params.page ? req.params.page : 1;
    const limit = 5;
    const offset = (page - 1) * limit;
    db.all(
        `SELECT * FROM books LIMIT ${limit} OFFSET ${offset}`,
        (err, rows) => {
            response(res, err, rows);
        }
    );
};
exports.singleBook = (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM books WHERE id = ${id}`, (err, row) => {
        response(res, err, row);
    });
};
exports.search = (req, res) => {
    const { query } = req.params;
    db.all(
        `SELECT * FROM books WHERE name LIKE '%${query}%' OR author LIKE '%${query}%'`,
        (err, rows) => {
            response(res, err, rows);
        }
    );
};
exports.addBook = (req, res) => {
    const { name, image, author, price, isbn } = req.body;
    db.run(
        "INSERT INTO books(name,image,author,price,isbn) VALUES(?,?,?,?,?)",
        [name, image, author, price, isbn],
        (err) => {
            response(res, err);
        }
    );
};
exports.partialUpdate = (req, res) => {
    const { id } = req.params;
    const { ...update } = req.body;
    const keys = Object.keys(update);
    const values = keys.map((key) => update[key]);
    const columns = keys.join("=?,") + "=?";
    db.run(`UPDATE books SET ${columns} WHERE id=?`, [...values, id], (err) => {
        response(res, err);
    });
};
exports.updatePhoto = (req, res) => {
    const { id, image } = req.body;
    db.run("UPDATE books SET image=? WHERE id=?", [image, id], (err) => {
        response(res, err);
    });
};
exports.deleteBook = (req, res) => {
    const { id } = req.params;
    db.run("DELETE FROM books WHERE id=?", [id], (err) => {
        response(res, err);
    });
};
