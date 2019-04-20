//1.引入两个模块 express  mysql
const express=require("express");
const mysql=require("mysql");
//1.1引入模块cors 
const cors=require('cors');
//2.创建连接池
var pool=mysql.createPool({
  host:"127.0.0.1",
  port:3306,
  user:"root",
  password:"",
  database:"ali",
  connectionLimit:20
});
//3创建express对象
var server=express();
//3.1配置允许访问列
server.use(cors({
  //3.2允许端口号8080访问
  origin:['http://127.0.0.1:8080','http://localhost:8080'],
  credentials:true
}))
//3.2配置静态资源目录,public
server.use(express.static("image"));
server.use(express.static("public"));
server.use(express.static("public/html"));
//4.1配置第三方中间件
const bodyParser=require("body-parser");
//4.2配置json是否是否自动转换
server.use(bodyParser.urlencoded({
  extended:false
}))
//5监听端口3000
server.listen(3000);
//6.1引入express-session模块
const session = require("express-session");
//6.2配置会话模块
server.use(
    session({
        secret: "128位随机字符串",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
);

// 功能一：用户登录
// 1.用户发送get请求 请求路径/login
server.get("/login",(req,res)=>{
  //2.获取两个参数 uname upwd
  var obj=req.query;
  var $uname=obj.uname;
  var $upwd=obj.upwd;
  if(!$uname){
    res.send({code:2,msg:'你的用户名不能为空'});
    return ;
  }
  if(!$upwd){
    res.send({code:3,msg:'你的密码不能为空'});
    return ;
  }
  // 3.创建sql
  var sql="SELECT uid FROM ali_user WHERE uname=? AND upwd=?";
  // 4.执行sql
  pool.query(sql,[$uname,$upwd],(err,result)=>{
  // 5.获取数据库返回结果
  // 6.返回客户数据
    if(err) throw err;
    if(result.length>0){
      res.send({code:1,msg:"登陆成功"});
    }else{
      res.send({code:-1,msg:"用户名或密码错误"});
    }
  })
})
// 功能二  post 注册接口
server.post("/register",(req,res)=>{
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$email){
		res.send("邮箱不存在");
		return;
	}
	if(!$phone){
		res.send("phone不存在");
		return;
	}
	var sql="insert into ali_user values(null,?,?,?,?,null,null,null)";
	pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
    if(err) throw err;
      res.send({code:1,msg:'恭喜你注册成功'});
	});
});
// 功能二 轮播图
server.get("/lunbo",(req,res)=>{
    var sql="select  lid,title,author,content from ali_lunbo";
    pool.query(sql,(err,result)=>{
      res.send(result);
    })
})
/*
// 功能二：商品列表
  //用户发送get请求 请求路径/getProducts
server.get('/getProducts',(req,res)=>{
    //1.获取用户参数,pno pageSize
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    //2.为参数设置默认值 pno：1 pageSize：4
    if(!pno){
      pno=1
    }
    if(!pageSize){
      pagSize=4
    }
     //3.创建sql语句
     var sql='SELECT l.lid,l.lname,l.price,p.md from xz_laptop l,xz_laptop_pic p WHERE l.lid=p.laptop_id GROUP BY l.lid LIMIT ?,?';
     var offset=(pno-1)*pageSize;
     pageSize=parseInt(pageSize);
    //start=(页码-1)*count
    //res.send(pno+'...'+pageSize)
    //4.创建sql语句
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
    //5.获取数据库返回结果并且发送脚手架
        res.send({code:1,data:'result'})
    })  
})
//功能3  轮播图

server.get('/imgList',(req,res)=>{
  var row=[
    {id:1,img_url:"http://127.0.0.1:3000/img/index/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/index/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/index/banner3.png"},
    {id:4,img_url:"http://127.0.0.1:3000/img/index/banner4.png"}
  ]
  res.send(row);
})
*/


 
//        http://127.0.0.1:3000/login?uname=awei&upwd=123456
  