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
    // const sqlQuery2 = "SELECT study_number from study where study_name='test';"
    const sqlQuery2="SELECT study_number INTO $num FROM study WHERE study_name='test'"
                  +"CREATE PROCEDURE loopInsert()"
                  +"BeGIN"
                  +"Declare i INT DEFAULT 0"
                  +"where i<?.length"
                  +"DO"
                  +"INSERT into study_tag(num,study_tag)"+"values($num,?.[i])"
                  +"SET i=i+1"
                  +"END while"
                  +"END"
                  +"CALL loopInsert();"
    // const sqlQuery3 = "INSERT into study_tag(num,study_tag)"+"values(?,?);"

    db.query(sqlQuery1,values, (err, result) => {

    })
    // for(int i=0;i<tags.length;i++){
    //   db.query(sqlQuery2,tags[i], (err, result) => {
    //       console.log(tags[i])
    //       res.redirect('/')
    //
    //     })
    //   }
    db.query(sqlQuery2,tags, (err, result) => {
        console.log(tags.length)
        res.redirect('/')

    })

    //
    // db.query(sqlQuery3,num,tags,(err, result) => {
    //     res.redirect('/')
    // })

})
module.exports = router;
