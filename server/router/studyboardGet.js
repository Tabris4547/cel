const express = require("express");
const router = express.Router();
const db = require("../dbconnect");

router.get('/', (req, res) => {
    const sqlQuery = "select study.study_number, study_name, study_tag " +
        "from study inner join study_tag " +
        "on study.study_number=study_tag.study_number;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})

module.exports = router;