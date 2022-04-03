const express = require("express");
const app = express();
var cors = require('cors')
const PORT = process.env.PORT || 3001;

// Allow CORS
app.use(cors())

// Body parser
app.use(express.json());

// routes
const book = require("./routes/books");

app.use("/books", book);

app.listen(PORT, () => {
    console.log(`Server Running on PORT ${PORT}`);
});
