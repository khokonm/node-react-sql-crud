const express = require("express");
const router = express.Router();
const {upload} = require("../utils/upload");
const {
    list,
    singleBook,
    addBook,
    partialUpdate,
    imageUpdate,
    deleteBook,
    search,
} = require("../controllers/books");

router.get("/", list);
router.get("/:page", list);
router.get("/details/:id", singleBook);
router.get("/search/:query", search);
router.delete("/:id", deleteBook);
router.post("/new",upload.single('file'), addBook);
router.put("/partialUpdate/:id", partialUpdate);
router.put("/imageUpdate/:id", upload.single('file'), imageUpdate);

module.exports = router;
