const express = require("express");
const router = express.Router();

const {
    list,
    singleBook,
    addBook,
    partialUpdate,
    deleteBook,
    search,
} = require("../controllers/books");

router.get("/", list);
router.get("/:page", list);
router.get("/details/:id", singleBook);
router.get("/search/:query", search);
router.delete("/:id", deleteBook);
router.post("/new", addBook);
router.put("/partialUpdate/:id", partialUpdate);

module.exports = router;
