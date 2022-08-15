const express = require("express");
const app = express();
//const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const {urlencoded} = require('body-parser');
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/studyboard/get', (req, res) => {
    res.json([
        {
        id: '1',
        name: 'testname1',
        tag: ['tag 01', 'tag 02', 'tag 03']
        },
        {
            id: '2',
            name: 'testname2',
            tag: ['tag 01', 'tag 02', 'tag 03']
        },
        {
            id: '3',
            name: 'testname3',
            tag: ['tag 01', 'tag 02', 'tag 03']
        }
        ])
})

app.post("/api/post", (req, res)=>{
    //json으로 날아온 데이터 처리 작성
    //DB에 쿼리 넣기
})

app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})