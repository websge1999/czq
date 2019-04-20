<template>
    <div class="footer">
        <div class="footerBox">
            <!-- 1楼-->
            <p class="footer1 mb-0 text-left">友情链接</p>
            <!-- 2楼-->
            <div class=" footer1 mb-1">
                <a href="javascript:;" class="float-left">
                    <img src="/img/1551516697(1).jpg" alt=""/>
                    <img src="/img/1551516735(1).jpg" alt="" class="ml-2">
                    <img src="/img/1551516800(1).jpg" alt="" class="footerimg ml-2">
                </a>
                 <div class="float11"></div>
            </div>
            <!-- 3楼-->
            <div class="footer1 border_b">
                <div class="float-left">
                    <a href="javascript:;" class="footerbox_a">关于我们|联系我们|投稿声明|版权声明</a>
                </div>
                <div class=" float-right">广州阿里巴巴文学信息技术有限公司    版权所有</div>
                <div class="float11"></div>
            </div>
            <!-- 4楼-->
            <div class="footer1 border_b">
                    <div class="float-left">阿里文学书旗网</div>
                    <a href="javascript:;" class="float-right footerbox_a">
                        粤ICP备13078413号-6   增值电信业务许可证    粤B2-20130742 网络文化经营许可证    粤网文[2017]3018-499
                    </a>
                <div class="float11"></div>
            </div>
            <!-- 5楼-->
            <div class="footer1">
                <div class="float-left">为保证更好的浏览效果，请使用IE9以上或其他主流浏览器访问</div>
                <div class=" float-right">地址:广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元  电话:020-39225959</div>
                <div class="float11"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .footer{
    background: #333;
    color:#fff;
    padding: 36px 0;
    z-index: 100;
    position: relative;
}
.footerBox{
    width:1000px;
    margin: 0 auto;
}
.footer1{
    font-size:14px;
    line-height: 14px;
    padding: 10px;
    color: #6b6a6a;
}
.footer1:last-child{
    font-size:12px;
}
.footer1:nth-child(4){
    font-size:12px;
}
.footerimg{
    width:90px;
    height: 40px;
}
.footerbox_a{
    color: #6b6a6a;
}
.float11{
   clear: both;
}
.border_b{
    border-bottom: 1px  solid #6b6a6a;
}
.footer1 a:hover{
    text-decoration: none;
    color:#6b6a6a;
}
</style>