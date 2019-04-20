<template>
    <div class="login1">
        <div class="login2">
            <div class="login3">
                <div>
                  <a href="javascript:;" class="float-left">&lt;&lt;返回</a>
                  <div id="float_clear"></div>
                </div>
                <div class="loninInput">
                    <table></table>
                    <h1 class="loginImg mb-1"><img src="/img/logo.png" alt=""/></h1>
                    <!-- 用户名-->
                    <div class="input mt-2">
                        <!-- <div class="d-inline-block mt-3">
                            <span class="text-center">用户名:</span>
                        </div> -->
                        
                        <div class="d-inline-block">
                            <input type="text" placeholder="请输入你的用户名" class="inputI" v-model="uname">
                        </div>
                        <span id='s1'></span>
                    </div>
                    <!-- 密码-->
                    <div class="input mt-4">
                        <!-- <div class="d-inline-block mt-2">
                            <span class="text-center">登录密码</span>
                        </div> -->
                        <div class="d-inline-block">
                            <input type="password" placeholder="请输入你的密码" class="inputI" v-model="upwd">
                        </div>
                        <span id='s2'></span>
                    </div>
                    <!-- 隐私保护协议-->
                    <div class="mt-3 mb-1 pt-5">
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
                    <!-- 登录按钮-->
                    <input type="button" value="登录"  class="btn buttonS" @click="userlogin">      <!--jq   移除disabled-->
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
        return {
        uname:"",
        upwd:"",
        }
    },
     methods:{
         userlogin(){
             //获取用户名和密码
             var uname=this.uname;
             var upwd=this.upwd;
             //验证
             var reg=/^\w{4,10}$/       //用户验证
             var Preg=/^\w{6,12}$/      //密码验证
             if(!reg.test(uname)){
                alert("用户名格式不正确");
                return;
             }
             if(!Preg.test(upwd)){
                 alert("密码格式不正确")
                 return;
             }
            var url="http://127.0.0.1:3000/login?uname="+uname+"&upwd="+upwd;
            this.axios.get(url).then(result=>{
             if(result.data.code == 1){
                alert("登录成功");
               //this.$router.push("/Home")
            }else{
               alert("用户名或密码错误")
                }
            })  
         }
     }
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
  #float_clear{
    clear:both;
  }
</style>