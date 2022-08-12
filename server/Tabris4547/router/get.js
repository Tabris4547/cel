module.exports = function(app, fs)
{
  //로그인
  app.get('/login',function(req,res){
      var sess = req.session;
      //res.renderFile( __dirname + "/../../client/data/user.json")
  });
  //로그아웃
  app.get('/logout', function(req, res){
      var sess = req.session;

  });
  //게시판
  app.get('/list', function (req, res) {
    var sess = req.session;
    fs.renderFile( __dirname + "/../../client/components/home/main.js",function(err,data){
      if (error)
      {
        throw error;
      }
      res.end(data)
    })
  });

  //게시판 정렬
  app.get('/list/sort_key',function(req,res)){


  });
  //상세보기
  app.get('/detail',function(req,res)){
    var sess = req.session;
    fs.renderFile( __dirname + "/../../client/components/StudyBoard.js",function(err,data){
      if (error)
      {
        throw error;
      }
      res.end(data)
    })
  });

  });
  //상세보기의 참가신청
  app.get('/detail/opentalk',function(req,res)){


  });
  //floating 페이지
  app.get('/write',function(req,res)){
    var sess = req.session;
    fs.renderFile( __dirname + "/../../client/components/CreateStudy.js",function(err,data){
      if (error)
      {
        throw error;
      }
      res.end(data)
    })

  });
}
