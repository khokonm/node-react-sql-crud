const response = (
    res,
    err,
    rows = null,
    failed = {"error":true, "message":"Something went wrong!"},
    success = {"error":false, "message":"Success"}
) => {
    if (err) {
        res.status(200).json(failed);
    } else if (rows) {
        res.status(200).json(rows);
    } else {
        res.status(200).json(success);
    }
};
module.exports = response;
