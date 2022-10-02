const express = require("express");
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const {urlencoded} = require('body-parser');
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const studyboardGetRouter = require("./router/studyboardGet");
const detailGetRouter = require("./router/detailGet");
const signupPostRouter = require("./router/signupPost");


app.listen(port, () => {
    console.log(`${port}에서 서버 실행중`);
})

app.use("/studyboard/get", studyboardGetRouter);
app.use("/detail/get", detailGetRouter);
app.use("/signup/post", signupPostRouter);
