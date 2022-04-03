const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "./public/uploads/")  
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

exports.upload = multer({
    storage: storage
});