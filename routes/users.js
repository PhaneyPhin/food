var express = require('express');
var router = express.Router();
const conn=require('../server_js/mysqlConnect');
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  conn.getDB(`select * from users `,[],
  result=>{
    res.send(result);
  },err=>{
    res.status(500).send(err)
  })
});
router.post("/register",(req,res)=>{
  console.log(req.body);
  var {username,password,first_name,last_name}=req.body
  conn.execute(`insert into users values (?,SHA1(?),?,?,'2019-06-03','0')`,[username,password,first_name,last_name],result=>{
    if(result){
      res.send({status:1})
    }else{
      res.send({status:0})
    }
  },err=>{
    res.status(500).send(err);
  })
})
router.post('/login',(req,res)=>{
  var {username,password}=req.body;
  res.send(req.body);
})
module.exports = router;
