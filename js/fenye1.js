/**
 * Created by uid on 2017/4/13.
 */

$("#myCollapse .form-control").focus(function(){
    $(this).stop(true).animate({
        width:"227px"
    },350)
});
$("#myCollapse .form-control").blur(function(){
    $(this).animate({
        width:"20px"
    },1000)
});

$("#partners ul").on("mouseover","div",function(){
    $(this).addClass("show");
})
//    是哪个门提货的
$('.in_family').mouseenter(function () {
    $(this).stop(true).animate({ "width":"300px"},340).find('.arrow').stop(true).show(340);
    $(this).find('.img-responsive ').attr('src','').attr('src',"../images/order-button-icon.jpg")
}).mouseleave(function(){
    $(this).animate({"width":"240px"},340).find('.arrow').stop(true).hide(340)
});
//货物追踪的自助 手机和运单号的切换

$("#sj_dH").on( 'click','li', function(){
   console.log($(this).index());
     var i= $(this).index();
    console.log($("#sj_dH").next("ul").children());
     $(this).addClass("dda").siblings().removeClass('dda');
    $("#sj_dH").next("ul").children().eq(i).show().siblings().hide();
    if(i==0){
       $('.container.main_container_1.has-feedback').css("display","none")
    }else{
        $('.container.main_container_1.has-feedback').css("display","block")
    }
});
