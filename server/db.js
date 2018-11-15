const mongoose = require('mongoose')
const Schema = mongoose.Schema
// 用户信息的数据结构模型
const userSchema = new Schema({
  username: {type: String},
  password: {type: String},
  time: {type: Date, default: Date.now}
})
// mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test',{useMongoClient:true});
var database = mongoose.connection;
database.on('error', function(error){
  console.log('数据库test连接失败：' + error)
  return
})
database.once('open', function(){
  console.log('数据库test连接成功啦，开始你的操作吧')
})

const db = {
  userModel: database.model('userModel', userSchema)
}
module.exports = db