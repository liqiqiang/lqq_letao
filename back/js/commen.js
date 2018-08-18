$(function(){
  /*进度条 */
  $(document).ajaxStart(function(){
    NProgress.start();
  }) 
  $(document).ajaxStop(function(){
    NProgress.done();
  })

  if( location.href.indexOf('login.html') === -1){
    $.ajax({
      type: 'get',
      url:'/employee/checkRootLogin',
      dataType : 'json',
      success : function(info){
        if( info.success ){
          console.log('用户已登陆');
        }
        if( info.error == 400 ){
       location.href = "login.html" ;
        }
      }
    })
  }
 
})
$(function(){
  $('.nav .cate').click(function(){
    $('.child').stop().slideToggle();
  })
  $('.icon_menu').click(function(){
    $('.aside').toggleClass('hidemenu');
    $('.main').toggleClass('hidemenu');
    $('.topbar').toggleClass('hidemenu');
  })
  $('.icon_logout').click(function(){
    $('#logoutModal').modal('show');
  })
})
$(function(){
  $('.logoutbtn').click(function(){
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      dataType:'json',
      success : function(info){
        if( info.success ){
          location.href = "login.html" ;
        }
      }
    })
  })
})