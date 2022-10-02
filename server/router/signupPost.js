const express = require("express");
const router = express.Router();
const db = require("../dbconnect");

function validateSignup(req) {

}

router.post('/', (req, res) => {
    validateSignup(req);

    const id = req.body.id;
    const name = req.body.name;
    const age = req.body.age;
    const pw = req.body.pw;

    let insertValue = {name: name, id: id, age: age, pw: pw};

    db.query("INSERT into user_information?", insertValue, (err, res) => {
        if (!err) {
            res.json({"result": "OK!"});
        } else {
            res.json({"result": "입력한 정보를 다시 확인해주세요."})
        }
    })
})

module.exports = router;