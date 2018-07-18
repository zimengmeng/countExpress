var express = require('express');
var router = express.Router();
const submitsingleuser = require('../model/submitsingleuser');
const getallusers = require('../model/getallusers');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function (req, res, next) {
  res.send({ msg: 'test' })
});


// router.post('/submitsingleuser', (req, res, next) => {
//   let { useid, username, moneybase } = req.body;
//   //验证
//   console.log(useid, username, moneybase)
//   res.send({ msg: '用户创建成功', code: 1 })
// });

// router.get('/getallusers', (req, res, next) => {
//   let users = [{
//     userid: 1, username: "张三", moneybase: 0
//   }, {
//     userid: 2, username: "李四", moneybase: 0
//   }, {
//     userid: 3, username: "王五", moneybase: 0
//   }];
//   res.send(users);
// })

router.post('/submitsingleuser', submitsingleuser)

router.get('/getallusers', getallusers)
module.exports = router;
