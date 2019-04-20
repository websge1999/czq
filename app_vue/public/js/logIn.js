
(function(){
    //1.1用户名失去焦点验证
    $('#uname').blur(function(){
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
    //3.当用户名和密码都是true的时候,才允许发送登录请求
    //4. 登录成功后跳主页  
        /*var uname = document.getElementById("uname");
        var upwd = document.getElementById("upwd");
        var btn = document.getElementById("login");
        //2:为按钮绑定点击事件 55
        btn.onclick = function(){
        //3:获取用户输入用户名
        var u = uname.value;
        var p = upwd.value;
        //4:保存sessionStorage中 01
        sessionStorage.setItem("uname",u);
        sessionStorage.setItem("upwd",p);
        //5:提示登录成功 3s 跳转首页
        alert("登录成功 3s后跳转首页");
        setTimeout(function(){
            location.href = "content.html"
        },3000)
        }*/
    //5.登录功能,发送ajax请求
    $('#login').click(function(){
        var $uname=$('#uname').val();
        var $upwd=$('#upwd').val();
        $.ajax({
            url:"http://127.0.0.1:3000/login?uname="+$uname+'&upwd='+$upwd,
            type:'get',
            data:{
    
            },
            datatype:'json'
        }).then(function(result){
            if(result.code==1){
                /*alert("登录成功 3s后跳转首页");
                setTimeout(function(){
                    location.href = "content.html"
                  },3000)*/
                sessionStorage.setItem("$uname",$uname);
                sessionStorage.setItem("$upwd",$upwd);
                //5:提示登录成功 3s 跳转首页
                alert("登录成功 3s后跳转首页");
                setTimeout(function(){
                    location.href = "content.html"
                },3000)
            }else if(result.code==-1){
                alert("登录失败")
            }else if(result.code==2){
                alert("你的账号不能为空")
            }else if(result.code==3){
                alert("你的密码不能为空")
            }
        })
    })
})()