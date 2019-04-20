// import { SIGUSR1 } from "constants";

/**
 * Created by web on 2019/3/21.
 */
(function(){
    //1.1用户名失去焦点验证
    /*$('#uname').blur(function(){
        var $uname=$('#uname').val();
        var reg=/^\w{4,10}$/;
        var i=reg.test($uname);
        if(i){
            s1.innerHTML='用户验证通过'
            return true;
        }else{
            s1.innerHTML='验证错误,请输入数字,字母'
            return false;
        }
    })
    //1.2用户名获得焦点验证
    $('#uname').focus(function(){
        s1.innerHTML='你的账号长度为4~10位'
    })
    //2.1密码失去焦点验证
    $('#upwd').blur(function(){
        var $upwd=$('#upwd').val();
        var reg=/^\w{6,12}$/;
        var i=reg.test($upwd);
        if(i){
            s2.innerHTML='密码验证通过'
            return true;
        }else{
            s2.innerHTML='你的格式不正确,请输入输入!'
            return false;
        }
    })
    //2.2密码名获得焦点
    $('#upwd').focus(function(){
        s2.innerHTML='你的密码长度为6~12位'
    })
    //3.同意条款
    var $chb=$(":checkbox");
    $chb.click(function(){
        var $chb=$(this);//获得当前chb
        var $inputs=$(":input:not(:checkbox)")
        $inputs.prop(
                "disabled",!$chb.is(":checked"))
    })
    //当用户名和密码都是true的时候,才允许发送登录请求
    */
    // 4.注册功能,发送ajax请求
    $('#register').click(function(){
        var $uname=$('#uname').val();
        var $upwd=$('#upwd').val();
        var $email=$('#email').val();
        var $phone=$('phone').val();
        $.ajax({
            url:"http://127.0.0.1:3000/register",
            type:'post',
            data:{
                uname:$uname,
                upwd:$upwd,
                email:$email,
                phone:$phone
            },
            datatype:'json'
        }).then(function(result){
            if(result==1){
                alert('恭喜你注册成功')
            }
        })
    })
})()
//http://127.0.0.1:3000/register?uname=tom&upwd=456456&email=113@qq.com&phone=13156568980