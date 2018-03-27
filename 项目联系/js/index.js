$(function() {

    //判断是否是IE9浏览器
    if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
        if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 9.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
            $(".selectStyle").css("background", "none");
            $(".kuang").css({
                "width": "28px",
                "background": "#fff",
                "height": "34px",
                "position": "absolute",
                "line-height": "24px",
                "top": "15px",
                "left": "180px"

            });
        }
    }
    //判断是否是IE8
    if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
        if (navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/MSIE 8.0/i)) { //判断浏览器内核是否为Trident内核IE8.0
            $(".selectStyle").css("background", "none");
            $(".selectStyle").css({
                "padding": "8px 0"
            });
            $(".colspan").css("line-height", "25px");
            $(".kuang").css({
                "width": "28px",
                "background": "#fff",
                "height": "34px",
                "position": "absolute",
                "line-height": "24px",
                "top": "19px",
                "left": "180px"

            });
        }
    }

    //tab切换逻辑  ---------------start


    var li = $(".nav1").children("li");
    var li2 = $(".blsit-list").children("li");

    //控制默认第几个导航加样式和对应的内容显示  ---start
    var index = 0;
    if (index == 0) {
        li.eq(index).css("background", 'url("./images/firsthuang.png")');
    } else {
        li.eq(index).css("background", 'url("./images/centerhuang.png")');
    }

    li2.eq(index).show().siblings().hide();
    //控制默认第几个导航加样式和对应的内容显示  ---end


    //点击时对应的导航加背景图片对应的内容显示 ----start
    li.click(function() {
        // alert($(this).index());
        // console.log($(this));
        var i = $(this).index();
        if (i == 0) {
            $(this).css("background", 'url("./images/firsthuang.png")');
            $(this).siblings("li").css("background", 'url("./images/centerlan.png")');
        } else {
            $(this).css("background", 'url("./images/centerhuang.png")');
            $(this).siblings("li").css("background", 'url("./images/centerlan.png")');
            $(this).siblings("li").eq(0).css("background", 'url("./images/firstlan.png")');
        }

        $(this).parents("#main").find(".blsit-list li").eq(i).show().siblings().hide();
    });
    //点击时对应的导航加背景图片对应的内容显示 ----end


    //tab切换逻辑 ----------------------end



    // 日期插件的调用

    // J('#cal2').calendar({
    //     format: 'yyyy年MM月dd日'
    // });





    // 点击新增按钮  让遮罩层显示和弹出框弹出
    $("#addBtnInv").click(function() {
        $(".cover").show();
        $(".add_czr1").show(100);
    });
    // 点击叉叉 关闭遮罩层和弹出框
    $("#addczr_btn").click(function() {
        $(".cover").hide();
        $(".add_czr1").css("display", "none");
    });
    // 点击申请列表按钮让
    $("#sq_btn").click(function() {
        $(".cover").show();
        $(".add_czr2").show(100);
    });
    $("#sqsp_btn").click(function() {
        $(".cover").hide();
        $(".add_czr2").css("display", "none");
    });




    // 鼠标滑动 日期控件消失
    document.body.onmousewheel = function(event) {
        $("#lhgcalendar").css("display", "none");
    }
});