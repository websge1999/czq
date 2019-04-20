<template>
    <div class="login1">
        <div class="login2">
            <div class="login3">
                <div>
                <a href="javascript:;" class="float-left">&lt;&lt;返回</a>
                <div id="float_a"></div>
                </div>
                <div class="loninInput">
                    <table></table>
                    <h1 class="loginImg mb-1"><img src="/img/logo.png" alt=""/></h1>
                    <!-- 用户名-->
                    <div class="input mt-2">
                        <div class="d-inline-block mt-3">
                            <span class="text-center">用户名:</span>
                        </div>
                        <div class="d-inline-block">
                            <input type="text" placeholder="请输入用户名" class="inputI" v-model="uname">
                        </div>
                        <span id="s1"></span>
                    </div>
                    <!-- 密码-->
                    <div class="input mt-2">
                        <div class="d-inline-block mt-2">
                            <span class="text-center">登录密码</span>
                        </div>
                        <div class="d-inline-block">
                            <input type="password" placeholder="请输入密码" class="inputI"  v-model="upwd">
                        </div>
                    </div>
                    <!-- 确认密码-->
                    <div class="input mt-2">
                        <div class="d-inline-block mt-2">
                            <span class="text-center">确认密码:</span>
                        </div>
                        <div class="d-inline-block">
                            <input type="password" placeholder="请再次输入密码" class="inputI" v-model="upwd2">
                        </div>
                    </div>
                    <!-- 邮箱-->
                    <div class="input mt-2">
                        <div class="d-inline-block mt-2">
                            <span class="text-center">邮箱:</span>
                        </div>
                        <div class="d-inline-block">
                            <input type="text" placeholder="请输入你的邮箱" class="inputI"  v-model="email">
                        </div>
                    </div>
                    <!-- 手机号-->
                    <div class="input mt-2">
                        <div class="d-inline-block mt-2">
                            <span class="text-center">手机号:</span>
                        </div>
                        <div class="d-inline-block">
                            <input type="text" placeholder="请输入你的手机号" class="inputI"  v-model="phone">
                        </div>
                    </div>
                    <!-- 隐私保护协议-->
                    <div class="mt-3 mb-1">
                        <span>
                            <input type="checkbox">
                        </span>
                        <span>
                            <a href="javascript:;" >
                                我已阅读、了解并接受《<span>阿里文学用户服务协议》</span>、
                                <span>《隐私保护政策》</span>
                            </a>
                        </span>
                    </div>
                    <!-- 提交按钮-->
                    <input type="submit" value="提交注册" class="btn buttonS" @click='userregister'>   <!--jq移除  disabled -->
                </div>
            </div>
            <div class="loginBottom">
                <span class="mr-2">©广州阿里巴巴文学信息技术有限公司2015</span>
                <a href="javascript:;" class="mr-2">关于我们</a>
                <span>|</span>
                <a href="javascript:;" class="mr-2" >投稿声明</a>
                <span>|</span>
                <a href="javascript:;" class="mr-2">版权声明</a>
                <span>|</span>
                <a href="javascript:;" class="mr-2">联系我们</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname:"",
                upwd:"",
                email:"",
                phone:"",
                upwd2:"",
            }
        },
        methods: {
            userregister(){
                var uname=this.uname;
                var upwd=this.upwd;
                var upwd2=this.upwd2;
                var email=this.email;
                var phone=this.phone;
                var reg=/^\w{4,10}$/       //用户验证
                var ureg=/^\w{6,12}$/      //密码验证
                var ereg=/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/                //邮箱验证
                var preg=/^1[3,9]\d{9}$/                 //手机号验证
                if(!reg.test(uname)){   
                    alert("你的用户名格式有问题")
                    return;
                }
                if(!ureg.test(upwd)){
                    alert("你的密码输入错误")
                    return;
                }
                if(upwd!=upwd2){
                    alert("两次密码输入不一致,请重新输入")
                    return;
                }
                if(!ereg.test(email)){
                    alert("你的邮箱格式有问题")
                    return;
                }
                if(!preg.test(phone)){
                    alert("你的手机号码格式有问题")
                    return;
                }
                //6.创建postData保存注册资料
                var postData = this.qs.stringify({
                        uname:uname,
                        upwd:upwd,
                        email:email,
                        phone:phone
                });
                //验证
                var url="http://127.0.0.1:3000/register"
                this.axios.post(url,postData).then(result=>{
                    //console.log(result)
                    if(result.data.code==1){
                        alert("恭喜你注册成功")
                    }
                })
            }
        },
    }
</script>

<style scoped>
    *{
    margin: 0;
    padding: 0;
}
.container-fluid{
    padding-left:0 !important;
    padding-right:0 !important;
}
.login1{
    background: #34424f;
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    font-size: 12px;
    color:#333;
}
.login2{
    height: 530px;
    width: 1120px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -560px;
    margin-top: -265px;
}
.login3{
    background: #fff;
    padding: 20px 20px 0 20px;
    height: 461px;
}

.login3>div a{
    color:#333;
    text-decoration: none;
    text-align: right;
}
.login3 .loninInput{
    margin: 0 auto;
    width: 357px;
}
.loninInput .loginImg{
    margin: 0 auto;
    text-align: center;
}
.input{
    border-bottom:1px solid #999;
    height: 43px;
}
.input .inputI{
    border:0;
    width:185px;
    text-align: center;
    outline:none;
    line-height: 42px;
}
.loninInput .buttonS{
    width: 357px;
    height: 50px;
    border-radius: 30px;
    background: #f36f20;
    border-color:#f36f20;
    color: #fff;
    outline:none;
}
/*�ύ��ťhover*/
/*.buttonS:hover{
    background: #fff;
    color:#f36f20;
}*/
.loginBottom a{
    color:#333;
}
.placeholder{
    background: #fff;
}
#float_a{
    clear:both;
}
</style>