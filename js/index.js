 /*椰子子弹构造函数*/
     class Coconut {
      constructor(name){
         this.name=name;
      }
      coconutBullet(father,coconutForm,msg,callBack){
        var coconutOffset=coconutForm.offset().left;
        var formgroup1=$(".form-group1").offset().top
        var coconutHeight=coconutForm.height();
        var bullet=$("<div class='coconut-bullet'></div>");
        var coconutQipao=$(".coconut-qipao").children("p").children('span');
        var bulletWidth=$(".coconut-bullet").width();
        var windowHeight=$(window).height();
        if($(".coconut-bullet").is(":animated")){
             return false;
        }else{
          father.append(bullet);
          $(".coconut-bullet").animate({left:coconutOffset-bulletWidth,bottom:windowHeight-formgroup1},800,function(){
                 $(this).css({backgroundImage:"url(images/coconutBullet2.png)"});
                 $(".coconut").addClass("coconut-anite")
                 coconutQipao.html(msg);
                 callBack();
             })
        }
             
      }
     }
      /*椰子子弹构造函数*/
        var signIn2=function(){
        /*变量*/
          var coconutClass=new Coconut();
          var coconut=$(".coconut");
          var coconutCancon=$('.coconut-cancon');
          var useName=$("#useName").val();
          var password=$("#passWord").val();
          var useReg=/[a-zA-Z0-9]{8,10}/g;
          var passReg=/[a-zA-Z0-9]{8,10}/g;
           /*变量*/
          /*逻辑代码*/
          if(useName==''){
             coconutClass.coconutBullet(coconutCancon,coconut,"用户名为空",function(){
                setTimeout(function(){
                   $(".coconut-bullet").remove();
                   $(".coconut").removeClass("coconut-anite")
                },600)
          });
          }else if(!useName.match(useReg)){
              coconutClass.coconutBullet(coconutCancon,coconut,"请输入8-10位数字及英文的组合",function(){
                setTimeout(function(){
                   $(".coconut-bullet").remove();
                   $(".coconut").removeClass("coconut-anite")
                },600)
          });
          }else if(password==''){
             coconutClass.coconutBullet(coconutCancon,coconut,"密码为空",function(){
                setTimeout(function(){
                   $(".coconut-bullet").remove();
                   $(".coconut").removeClass("coconut-anite")
                },600)
          });
          }else if(!password.match(passReg)){
            coconutClass.coconutBullet(coconutCancon,coconut,"请输入8-10位数字及英文的组合",function(){
                setTimeout(function(){
                   $(".coconut-bullet").remove();
                   $(".coconut").removeClass("coconut-anite")
                },600)
          });
          }else{
            $(".coconut-qipao p span").css("color","#06f917").html('输入成功');
            $(".coconut-form").submit();
          }
          
          /*逻辑代码*/
      }
