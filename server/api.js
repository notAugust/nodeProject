const db = require('./db')
//转换数据格式
const bodyParser = require('body-parser')
module.exports = function (app) {
  app.all("*", function(req, res, next) {
    next();
  });
  // api login
  app.post('/api/user/login', bodyParser.json(), function (req, res) {
    console.log("------------我是登录--------");
    // 对发来的登录数据进行验证
    if (!req.body.username) {
      res.json({code: 600, msg:'username 不能为空！'})
      return
    }
    if (!req.body.password) {
      res.json({code: 600, msg:'password 不能为空！'})
      return
    }
    db.userModel.findOne({username: req.body.username}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        if (!doc) {
          res.json({code: 700, msg:'不存在该用户名：' + req.body.username})
          return
        } else {
          if (req.body.password != doc.password) {
            res.json({code: 700, msg:'密码不正确！'})
            return
          } else {
            res.json({code: 200, msg:'密码正确，登录成功'})
            return
          }
        }

      }
    })
  })
  // 注册
  app.post('/api/user/register', bodyParser.json(), function (req, res) {
    // 对发来的注册数据进行验证
    console.log("------------我是注册--------");
    let username = req.body.username
    let password = req.body.password
    // 对发来的注册数据进行验证
    if (!username) {
      res.json({code: 600, msg:'username 不能为空！'})
      return
    }
    if (!password) {
      res.json({code: 600, msg:'password 不能为空！'})
      return
    }
    // 是否存在账号
    db.userModel.findOne({username: req.query.username}, function(err, doc){
      if (err) {
        console.log('查询出错：' + err);
        res.json({code: 700, msg:'查询出错：' + err})
        return
      } else {
        if (doc) {
          res.json({code: 700, msg:'该用户名名已经被注册：' + username})
          return
        } else {
          db.userModel.create({
            username: username,
            password: password
          }, function (err, doc) {
            if (err) {
              res.end('注册失败:' + err)
            } else {
              res.json({code: 200, msg:'用户注册成功：' + username})
              return
            }
          })
        }

      }
    })
  })
  app.get('*', function(req, res){
    res.end('404')
  })
}