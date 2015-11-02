var User = require('mongoose').model('User'),
    passport = require('passport'),
    utility = require('utility');


var getErrorMessage = function(err){
  var message = '';
  if (err.code){
    switch(err.code){
    case 11000:
    case 11001:
      message = '用户邮箱已存在';
    default:
      message = err.message;
    }
  }else{
    for (var errName in err.errors){
      if (err.errors[errName].message)
        message = err.errors[errName].message;
    }
  }
  return message;
};

exports.renderSignup = function(req,res,next){
  if (!req.user){
    res.render('signup',{
      title: '注册',
      messages: req.flash('error') || req.flash('info')
    });

  }else{
    res.redirect('/');
  }
};

exports.signup = function(req,res,next){

  if (!req.user){
    var user = new User(req.body);
    var message = null;
    user.provider = 'local';
    user.save(function(err){
      if (err){
        var message = getErrorMessage(err);
        req.flash('error',message);
        return res.redirect('/signup');
      }
      req.login(user,function(err){
      if (err) return next(err);
        return res.redirect('/');
      });

      return res.redirect('/');
    });
  }else{
    return res.redirect('/');
  };

};

exports.renderSignin = function(req,res,next){
  if(!req.user){
    res.render('signin',{
      title:'登录',
      messages: req.flash('error')||req.flash('info')
    });
  }else{
    res.redirect('/');
  }
};

exports.signout = function(req,res){
  req.logout();
  res.redirect('/');
};

exports.requiresLogin = function(req,res,next){
  if (!req.isAuthenticated()){
    return res.status(401).send({
      message: 'User is not log in'
    });
  }
  next();
};
