exports.render = function(req,res){

  res.render('index',{
    title: '首页',
    content: '这是一个MEAN项目，这是首页',
    username: req.user?req.user.username:''
  });
};
