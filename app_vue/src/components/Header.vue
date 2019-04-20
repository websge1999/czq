<template>
    <div class="top">
      <div class="topLog">
            <img src="/img/logo.png" alt=""/>
        </div>
        <div class="topnav m-auto">
            <div class="topnavcenter">
                <ul class="list-unstyled m-auto text-center">
                    <li class="d-inline-block"><a href="javascript:;" class="active">首页</a></li>
                    <li class="d-inline-block"><a href="javascript:;">书库</a></li>
                    <li class="d-inline-block"><router-link to="/Ranking">排行榜</router-link>
                    <li class="d-inline-block"><a href="javascript:;">封神榜</a></li>
                    <li class="d-inline-block"><a href="javascript:;">版权推荐</a></li>
                    <li class="d-inline-block"><a href="javascript:;">二次元</a></li>
                    <li class="d-inline-block"><a href="javascript:;">作者福利</a></li>
                    <li class="d-inline-block"><a href="javascript:;">书架</a></li>
                    <li class="d-inline-block"><a href="javascript:;">作者专区</a></li>
                    <li class="d-inline-block">
                        <!--<router-link><img src="/img/search2.png" alt=""/></router-link>-->
                        <router-link to="/register">
                            注册
                        </router-link>
                        <router-link to="/Login">登录</router-link>
                    </li>
                </ul>
            </div>
      </div>
    </div>
</template>
<script>

  export default {

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
  .top{
      border-top: 1px solid #f37529;
  }
  body{
      color:#333;
      background: #fff;
      font-size: 12px;
  }
  .topLog{
      margin: 32px auto;
      
  }
  .topnavcenter{
      height: 72px;
      margin:0 auto;
      line-height: 72px;
      width: 100%;
  }
  .topnav ul li a{
      font-size: 16px;
      font-weight: 700;
      color:#000;
  }
  .topnav ul li .active{
      color:#f37529;
  }
  .topnav ul li :hover{
      color:#f37529;
      text-decoration: none;
  }
  .topnav ul li{
      width:110px;
  }
</style>