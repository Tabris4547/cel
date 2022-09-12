const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {urlencoded} = require('body-parser');
const session=require('express-session')
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
  secret:'keyboard cat',
  loggin:false,
  user_id:'',
}));


const studyboardGetRouter = require("./router/studyboardGet");
const detailGetRouter = require("./router/detailGet")
const study_tag=require("./router/sortByTags")
const write_studyboardPostRouter=require('./router/write_studyboard')
const login=require('./router/login')

app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})
app.use("/studyboard/get", studyboardGetRouter);
app.use("/detail/get/:number", detailGetRouter);
app.use('/studyboard/get/:s_tag',study_tag);
app.use('/write',write_studyboardPostRouter);
app.use('/login',login)
//app.use('/creat_id',create)
