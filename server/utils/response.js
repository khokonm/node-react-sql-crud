const response = (
    res,
    err,
    rows = null,
    failed = "Error",
    success = "Success"
) => {
    if (err) {
        res.status(500).send(failed);
    } else if (rows) {
        res.status(200).json(rows);
    } else {
        res.status(200).send(success);
    }
};
module.exports = response;
