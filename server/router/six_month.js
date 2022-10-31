const express = require("express");
const router = express.Router();
const db = require("../dbconnect");

router.get('/', (req, res) => {
    const today=new Date();
    const t_year=today.getYear();
    const t_month=today.getMonth();
    const t_day=today.getDate();
    console.log(today)
    console.log(t_year)
    console.log(t_month)
    console.log(t_day)

    const sqlQuery1 = "select study_start_date from study;"

    db.query(sqlQuery1,(err,result)=>{
        num=result[0].study_start_date
        console.log(num)
        const s_year=num.getYear();
        const s_month=num.getMonth();
        const s_day=num.getDate();
        console.log(s_year)
        console.log(s_month)
        console.log(s_day)

        const n_year=(t_year-s_year)*(360);
        const n_month=(t_month-s_month)*(30);
        const n_day=t_day-s_day;
        console.log(n_year)
        console.log(n_month)
        console.log(n_day)
        const period=n_year+n_month+n_day;
        console.log(period)
        if (period>180)
        {
          console.log('yes')
        }
        else
        {
          console.log('no')
        }
    })
})

module.exports = router;
