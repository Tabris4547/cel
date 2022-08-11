const express = require("express");
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})

app.post("/api/post", (req, res)=>{
    //json으로 날아온 데이터 처리 작성
    //DB에 쿼리 넣기
})