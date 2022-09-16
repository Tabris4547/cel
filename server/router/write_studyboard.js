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

    var num = 2;

    const sqlQuery1 = "INSERT into study(study_name,explanation,rule,mento_presence,study_president_id,study_start_date,open_chat_link)" +
        " values(?,?,?,?,?,now(),?);"
    const sqlQuery2="SELECT study_number FROM study WHERE study_name=?;"
    const sqlQuery3="INSERT into study_tag(study_number,study_tag) values(?,?);"

    // const sqlQuery2 = "SELECT study_number from study where study_name='test';"
    // const sqlQuery2="SELECT study_number INTO @num FROM study WHERE study_name='test'"
    //               +"CREATE PROCEDURE loopInsert()"
    //               +"BeGIN"
    //               +"Declare i INT DEFAULT 0"
    //               +"where i<?.length"
    //               +"DO"
    //               +"INSERT into study_tag(study_number,study_tag)"+"values(@num,?.[i])"
    //               +"SET i=i+1"
    //               +"END while"
    //               +"END"
    //               +"CALL loopInsert();"
    // const sqlQuery3 = "INSERT into study_tag(num,study_tag)"+"values(?,?);"

    db.query(sqlQuery1,values, (err, result) => {
    })
    db.query(sqlQuery2,study_name,(err,result)=>{
        num=result[0].study_number
        console.log(result);
        console.log(num);
        db.query(sqlQuery3,[num,tags[0]],(err,result)=>{
          console.log(num);
        })
        db.query(sqlQuery3,[num,tags[1]],(err,result)=>{
          console.log(num);
        })
        db.query(sqlQuery3,[num,tags[2]],(err,result)=>{
          console.log(num);
          res.redirect('/')
        })
    })


    // for(var i=0;i<3;i++){
    //   db.query(sqlQuery2,tags[i], (err, result) => {
    //       console.log(tags);
    //       console.log(tags[0]);
    //       console.log(tags[1]);
    //       console.log(tags[2]);
    //       console.log(i)
    //       console.log(tags[i])
    //
    // 이 방식대로 하면 i=3으로 찍히네요....
    //     })
    //   }
    // db.query(sqlQuery2,tags, (err, result) => {
    //     console.log(tags.length)
    //     console.log(tags[0])
    //     console.log('ok')
    //     res.redirect('/')
    //
    // })

    //
    // db.query(sqlQuery3,num,tags,(err, result) => {
    //     res.redirect('/')
    // })

})
module.exports = router;
