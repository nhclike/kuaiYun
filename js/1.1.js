/**
 * Created by uid on 2017/4/13.
 */
/**
 * �����������
 * $(window).scrollspy(options)
 */
jQuery.fn.scrollspy = function(options){
    var $liList = $(options.target).find('li');

    //������ӵ����е�ĳ��������ʱ��ҳ�����������ָ��¥��λ��
    $liList.on('click','a', function(e){
        e.preventDefault();
        //this => a
        //����a��href���ԣ��ҵ����Ӧ��¥��ľ���ҳ�涥����ƫ����
        var floorId = $(this).attr('href');
        var top = $(floorId).offset().top;
        //��ҳ�����������ָ���ĸ߶�
        $('body').animate({scrollTop: top}, 500);
    })

    //����ҳ��Ĺ����¼�������¥�㿪�صĵ���
    //window.onscroll = function(){}
    $(window).scroll(function(){
        var top = $(window).scrollTop();//��ȡwindow������������������ľ���
        //console.log(top);
        if(top<500||top>1220){ //���ڹ�����1¥�Ϸ�
            $(options.target).fadeOut();
        } else { //���ڹ�����1¥��3¥֮��
            $(options.target).fadeIn();

            //������ǰ��������¥��Ŀ���
            //˼·������ÿ��¥�㿪�أ��鿴��ǰwindow����ƫ���������ĸ�¥���ƫ����
            $liList.each(function(i, li){
                //li => a .href  =>  div.floor => offset().top
                var floorId = $(this).children('a').attr('href');
                var floorTop = $(floorId).offset().top-10;//ÿ��¥�����ҳ�涥����ƫ����
                if(top>=floorTop){ //�����Ѿ��������ض���¥��
                    $(li).addClass('active').siblings('.active').removeClass('active');
                }
            });
        }
    })
}