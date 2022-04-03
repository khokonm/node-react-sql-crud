const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const cors = require('cors')

// Allow CORS
app.use(cors())

// Set Static Folder
app.use(express.static("./public"))

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
const book = require("./routes/books");

app.use("/books", book);

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});
