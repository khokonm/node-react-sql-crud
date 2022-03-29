const db = require("../utils/db");
exports.list = (req, res) => {
    const page = req.params.page ? req.params.page : 1;
    const limit = 5;
    const offset = (page - 1) * limit;
    db.all(
        `SELECT * FROM books LIMIT ${limit} OFFSET ${offset}`,
        (err, rows) => {
            if (err) {
                res.status(500).send("Error");
            } else {
                res.status(200).json(rows);
            }
        }
    );
};
exports.singleBook = (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM books WHERE id = ${id}`, (err, row) => {
        if (err) {
            res.status(500).send("Error");
        } else {
            res.status(200).json(row);
        }
    });
};
exports.addBook = (req, res) => {
    const { name, image, author, price, isbn } = req.body;
    db.run(
        "INSERT INTO books(name,image,author,price,isbn) VALUES(?,?,?,?,?)",
        [name, image, author, price, isbn],
        (err) => {
            if (err) {
                res.status(500).send("Error");
            } else {
                res.status(200).send("Success");
            }
        }
    );
};
exports.partialUpdate = (req, res) => {
    const { id, ...update } = req.body;
    const keys = Object.keys(update);
    const values = keys.map((key) => update[key]);
    const columns = keys.join("=?,") + "=?";
    console.log(keys);
    db.run(`UPDATE books SET ${columns} WHERE id=?`, [...values, id], (err) => {
        if (err) {
            res.status(500).send("Error");
        } else {
            res.status(200).send("Success");
        }
    });
};
exports.updatePhoto = (req, res) => {
    const { id, image } = req.body;
    db.run("UPDATE books SET image=? WHERE id=?", [image, id], (err) => {
        if (err) {
            res.status(500).send("Error");
        } else {
            res.status(200).send("Success");
        }
    });
};
exports.deleteBook = (req, res) => {
    const { id } = req.body;
    db.run("DELETE FROM books WHERE id=?", [id], (err) => {
        if (err) {
            res.status(500).send("Error");
        } else {
            res.status(200).send("Success");
        }
    });
};
