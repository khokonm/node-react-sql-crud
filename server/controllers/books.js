const response = require("../utils/response");
const db = require("../utils/db");
const fs = require('fs');
exports.list = (req, res) => {
    const page = req.params.page ? req.params.page : 1;
    const limit = 5;
    const offset = (page - 1) * limit;
    db.all(
        `SELECT * FROM books LIMIT ? OFFSET ?`,
        [limit, offset],
        (err, rows) => {
            response(res, err, rows);
        }
    );
};
exports.singleBook = (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM books WHERE id =?`,[id], (err, row) => {
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
    if (!req.file) {
        response(res, true, null, {"error":true, "message":"Please upload a Photo"});
        return;
    }
    const { name, author, price, isbn } = req.body;
    const image = req.file.filename;
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
exports.imageUpdate = (req, res) => {
    if (!req.file) {
        response(res, true, null, {"error":true, "message":"Please upload a Photo"});
        return;
    }
    const { id } = req.params;
    const image = req.file.filename;
    db.run("UPDATE books SET image=? WHERE id=?", [image, id], (err) => {
        response(res, err);
    });
};
exports.deleteBook = (req, res) => {
    const { id } = req.params;
    db.get(`SELECT image FROM books WHERE id=?`,[id], (err, row) => {
        if (err) {
            response(res, err);
            return;
        }
        if(fs.existsSync(`./public/uploads/${row.image}`)) {
            fs.unlinkSync(`./public/uploads/${row.image}`);
        }
        db.run("DELETE FROM books WHERE id=?", [id], (err) => {
            response(res, err);
        });
    });
};
    

