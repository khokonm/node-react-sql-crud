const express = require("express");
const router = express.Router();

const {
    list,
    singleBook,
    addBook,
    partialUpdate,
    deleteBook,
} = require("../controllers/books");

router.get("/", list);
router.get("/:page", list);
router.get("/details/:id", singleBook);

router.delete("/", deleteBook);
router.post("/new", addBook);
router.put("/partialUpdate", partialUpdate);

module.exports = router;
