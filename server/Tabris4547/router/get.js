const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const {urlencoded} = require('body-parser');
const port = 8080;

const db = mysql.createPool({
   host: "localhost",
    user: "root",
    password: "0000",
    database: "study_user_information"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

//처음 화면
app.get('/studyboard/get', (req, res) => {
    const sqlQuery = "select study.study_number, study_name, study_tag " +
        "from study inner join study_tag " +
        "on study.study_number=study_tag.study_number;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})
//테그 있는 것만 출력
app.get('/studyboard/get/:s_tag', (req, res) => {
    const sqlQuery = "select study.study_number, study_name, study_tag " +
        "from study inner join study_tag " +
        "on study.study_number=study_tag.study_number"+
        "where study_tag=s_tag;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})

//디테일하게 출력
app.get('/detail/get/:number', (req, res) => {
    const sqlQuery = "select * from study"+
                  "where study_number=number;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})
app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})
//스터디 상세보기
// app.get('/detail/:s_name',(req,res))==>{
//   const sqlQuery="SELECT * FROM study WHERE study_name=s_name;"
//   db.query(sqlQuery,(err,result)=>{
//     res.json(result);
//   })
// }
