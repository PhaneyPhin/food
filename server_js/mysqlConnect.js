const mysql=require('mysql');

const config=require('./config.json');

console.log(config);

var getDB=(sql,data,callback,errors)=>{
    var conn=mysql.createConnection(config);
    conn.query(sql,data,(err,result,fields)=>{
        if(err){
            errors(err);
        }else{
            callback(result);
        }
    })
}
var execute=(sql,data,callback,errors)=>{
    var conn=mysql.createConnection(config);
    conn.query(sql,data,(err,result,fields)=>{
        if(err){
            errors(err);
        }else{
            callback(result);
        }
    })
}
module.exports.execute=execute
module.exports.getDB=getDB;
