/**
 * Created by uid on 2017/4/13.
 */
$("#myCollapse .form-control").mouseover(function(){
    $(this).animate({
        width:"227px"
    },350)
})
$("#myCollapse .form-control").mouseout(function(){
    $(this).animate({
        width:"20px"
    },1000)
})
$("#partners ul").on("mouseover","div",function(){
    $(this).addClass("show");
})