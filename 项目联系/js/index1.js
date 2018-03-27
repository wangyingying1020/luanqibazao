$(function() {
    var li = $(".nav1").children(".nav1_lc");
    var li2 = $(".tab_content").children("li");

    //控制默认第几个导航加样式和对应的内容显示  ---start
    var index = 2;
    li.eq(index).css("background", 'url("./images/flow_r4_c2_2.png")');
    li2.eq(index).show().siblings().hide();
    li.eq(index).prevAll(".nav1_lc").css("background", 'url("./images/flow_r6_c2_2.png")');
    //控制默认第几个导航加样式和对应的内容显示  ---end


    //点击时对应的导航加背景图片对应的内容显示 ----start
    li.mouseover(function() {
        var i = $(this).index();
        $(this).css("background", 'url("./images/flow_r2_c2_2.png")')
        if (i == 1) {
            i = 0;
        } else if (i == 3) {
            i = 1
        } else if (i == 5) {
            i = 2
        } else if (i == 7) {
            i = 3
        }

        li2.eq(i).show().siblings().hide();

    });

    li.mouseleave(function() {
            $(this).css("background", 'url("./images/flow_r5_c2_2.png")')
            li.eq(index).css("background", 'url("./images/flow_r4_c2_2.png")');
            li2.eq(index).show().siblings().hide();
            li.eq(index).prevAll(".nav1_lc").css("background", 'url("./images/flow_r6_c2_2.png")');
        })
        //点击时对应的导航加背景图片对应的内容显示 ----end

    //点击委托人的时候跳转到委托人的页面
    $(".click_wtr").click(function() {
        window.location.href = './index.html';
    })
})