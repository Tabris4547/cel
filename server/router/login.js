const express = require("express");
const router = express.Router();
const db = require("../dbconnect");




//로그인 후 어디를 줘야하지?
router.post('/', (req, res) => {

    var user_id=req.body.user_id;
    var user_pw=req.body.user_pw;
    var sqlQuery='SELECT * FROM user_information WHERE user_id = ? AND user_pw = ?';
    //아이디확인여부
    //비번 확인여부

    if (user_id && user_pw)
    {
    db.query(sqlQuery, [user_id, user_pw],(error, results, fields)=> {
        if (error) throw error;
        if (results.length > 0) {
            req.session.loggin = true;
            req.session.user_id = user_id;
            res.redirect('/');
            console.log('ok');
            res.end();
        }
        else
        {
            console.log('re');
            res.send('<script type="text/javascript">alert("로그인 정보가 일치하지 않습니다."); document.location.href="/login";</script>');
        }
    });
  }
 else
  {
    res.send('<script type="text/javascript">alert("username과 password를 입력하세요!"); document.location.href="/login";</script>');
    res.end();
  }


});

module.exports = router;
