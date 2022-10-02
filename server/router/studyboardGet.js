const express = require("express");
const router = express.Router();
const db = require("../dbconnect");

// 잘 생각해보니까 여기 게시판 한 페이지에 글 몇개씩 띄울지를 좀 고민해봐야 할 듯 싶네요
// 아니면 무한 스크롤로 할지? (앱이면 이게 자연스러우려나?)
router.get('/', (req, res) => {
    const sqlQuery = "select study.study_number, study_name, study_tag " +
        "from study inner join study_tag " +
        "on study.study_number=study_tag.study_number;"
    db.query(sqlQuery, (err, result) => {
        console.log(result[0]);
        res.json(result);
    })
})

module.exports = router;