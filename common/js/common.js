$(function(){

/*header scroll*/
var nav = $('.header_menu');
    var navoffset = $('.header_menu').offset();     

    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  
            nav.css('position','fixed').css('top',0); 
            $(".pc_logo").css("margin-top","27px");
        }else {
            nav.css('position','absolute').css('top',50); 
            $(".pc_logo").css("margin-top","0px");
        }
    });

//search
$(".i-search-btn").on("click",function(){
    $(".search_box").fadeIn();
   });
   
   $(".search_close").on("click",function(){
    $(".search_box").fadeOut();
   });

   //search
$(".i-search-btn2").on("click",function(){
    $(".search_box2").fadeIn();
   });
   
   $(".search_close").on("click",function(){
    $(".search_box2").fadeOut();
   });


//gnb  
$(".gnb>li").on("mouseover",function(){
 $(this).find(".sub").fadeIn();  
 $(".gnb_back").fadeIn(); 
});
      
$(".gnb>li").on("mouseleave",function(){
 $(this).find(".sub").fadeOut();  
 $(".gnb_back").fadeOut();
});

//gnb  
$(".gnb2>li").on("mouseover",function(){
    $(this).find(".ssub").fadeIn();  
   });
         
   $(".gnb2>li").on("mouseleave",function(){
    $(this).find(".ssub").fadeOut();  
   });








//gnb_m_t  
$(".gnb2>li").on("mouseover",function(){
    $(this).find(".sub_m_t").stop().slideDown();   
   });
         
   $(".gnb2>li").on("mouseleave",function(){
    $(this).find(".sub_m_t").stop().slideUp();  
   });


//gnb_m_t  
$(".gnb_m_t>li").on("mouseover",function(){
 $(this).find(".sub_m_t").stop().slideDown();   
});
      
$(".gnb_m_t>li").on("mouseleave",function(){
 $(this).find(".sub_m_t").stop().slideUp();  
});


//ic_menu
 $(".ic_menu").on("click",function(){
  $(".menu_m_t").animate({marginLeft:"260px"},300);   
 });

$(".close_m_t").on("click",function(){
  $(".menu_m_t").animate({marginLeft:"0px"},300);   
 });


});  //function end




