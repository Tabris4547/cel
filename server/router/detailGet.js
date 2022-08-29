const express = require("express");
const router = express.Router();
const db = require("../dbconnect");

router.get('/detail/get/:number', (req, res) => {
    const sqlQuery = "select * from study"+
        "where study_number=number;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})

module.exports = router;