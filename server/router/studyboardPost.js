const express = require("express");
const router = express.Router();
const db = require("../dbconnect");


router.post('/', (req, res) => {

    const study_name = req.body.study_name;
    const explanation = req.body.explanation;
    const rule = req.body.rule;
    const mento_presence = req.body.mento_presence;
    const study_president_id = req.body.study_president_id;
    const open_chat_link = req.body.open_chat_link;
    const study_tags = req.body.study_tags;

    var values=[study_name,explanation,rule,mento_presence,study_president_id,open_chat_link]
    var tags=study_tags.split(',')

    let num = 0;

    const sqlQuery1 = "INSERT into study(study_name,explanation,rule,mento_presence,study_president_id,study_start_date,open_chat_link)" +
        " values(?,?,?,?,?,now(),?);"
    const sqlQuery2 = "SELECT study_number from study where study_name=test;"
    const sqlQuery3 = "INSERT into study_tag(num,study_tag)"+"values(?,?);"

    db.query(sqlQuery1,values, (err, result) => {

    })

    db.query(sqlQuery2,study_name, (err, result) => {
        num = result;
        console.log(study_name)
        console.log(result)

    })


    db.query(sqlQuery3,num,tags,(err, result) => {
        res.redirect('/')
    })
module.exports = router;
