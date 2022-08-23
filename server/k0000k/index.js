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

app.get('/studyboard/get', (req, res) => {
    const sqlQuery = "select study.study_number, study_name, study_tag " +
        "from study inner join study_tag " +
        "on study.study_number=study_tag.study_number;"
    db.query(sqlQuery, (err, result) => {
        res.json(result);
    })
})

app.post("/api/post", (req, res)=>{
    //json으로 날아온 데이터 처리 작성
    //DB에 쿼리 넣기
})

app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})
