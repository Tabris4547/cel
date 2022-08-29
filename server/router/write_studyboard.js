const express = require("express");
const router = express.Router();
const db = require("../dbconnect");
//스터디 정보 적기
app post('/write',(req,res))=>{
  const study_name=req.body.study_name;
  const explanation=req.body.explanation;
  const rule=req.body.rule;
  const mento_presence=req.body.mento_presence;
  const study_president_id=req.body.study_president_id;
  const open_chat_link=req.body.open_chat_link;

  const sqlQuery="INSERT into study(study_name,explanation,rule,mento_presence,study_president_id,study_start_date,open_chat_link)"+
            " values(?,?,?,?,?,now(),?)";
  db.query(sqlQuery,(err,result)=>{
    res.redirect('/')
  })
}
module.exports = router;
