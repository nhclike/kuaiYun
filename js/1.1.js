/**
 * Created by uid on 2017/4/13.
 */
/**
 * 滚动监听插件
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy = function(options){
    var $liList = $(options.target).find('li');

    //点击附加导航中的某个超链接时，页面主体滚动到指定楼层位置
    $liList.on('click','a', function(e){
        e.preventDefault();
        //this => a
        //根据a的href属性，找到其对应的楼层的距离页面顶部的偏移量
        var floorId = $(this).attr('href');
        var top = $(floorId).offset().top;
        //让页面主体滚动到指定的高度
        $('body').animate({scrollTop: top}, 500);
    })

    //监听页面的滚动事件，进行楼层开关的点亮
    //window.onscroll = function(){}
    $(window).scroll(function(){
        var top = $(window).scrollTop();//获取window距离滚动条顶部滚动的距离
        //console.log(top);
        if(top<500||top>1220){ //现在滚动到1楼上方
            $(options.target).fadeOut();
        } else { //现在滚动到1楼和3楼之间
            $(options.target).fadeIn();

            //点亮当前滚动到的楼层的开关
            //思路：遍历每个楼层开关，查看当前window滚动偏移量超过哪个楼层的偏移量
            $liList.each(function(i, li){
                //li => a .href  =>  div.floor => offset().top
                var floorId = $(this).children('a').attr('href');
                var floorTop = $(floorId).offset().top-10;//每个楼层距离页面顶部的偏移量
                if(top>=floorTop){ //窗口已经滚动到特定的楼层
                    $(li).addClass('active').siblings('.active').removeClass('active');
                }
            });
        }
    })
}