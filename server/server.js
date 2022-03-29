const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Body parser
app.use(express.json());

// routes
const book = require("./routes/books");

app.use("/books", book);

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});
