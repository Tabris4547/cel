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
  const study_tag=req.body.study_tag;
  const num = 0;

  const sqlQuery1="INSERT into study(study_name,explanation,rule,mento_presence,study_president_id,study_start_date,open_chat_link)"+
            " values(?,?,?,?,?,now(),?)";
  db.query(sqlQuery1,(err,result)=>{

  })
  db.query('SELECT study_number from study where study_name=study_name',(err,result))=>{
    num = result[0].study_number;
  })
  const sqlQuery2="INSERT into study_tag(study_number,study_tag)"+
                  "values(num,?)";


  db.query(sqlQuery2,(err,result)=>{
    req.redirect('/')
  })
}
module.exports = router;
