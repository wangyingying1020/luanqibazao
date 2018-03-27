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
                "top": "36px",
                "left": "208px"

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
                "top": "36px",
                "left": "208px"

            });
        }
    }







    // 点击新增按钮  让遮罩层显示和弹出框弹出
    $("#myyuyue_list").click(function() {
        $(".cover").show();
        $("#myyuyue").show(100);
    });
    // 点击叉叉 关闭遮罩层和弹出框
    $("#sqsp_btn").click(function() {
        $(".cover").hide();
        $("#myyuyue").css("display", "none");
    });
    // 点击申请列表按钮让
    $(".time_btn ").click(function() {
        $(".cover").show();
        $("#blrInfo").show(100);
    });
    $("#sqsp_btn2").click(function() {
        $(".cover").hide();
        $("#blrInfo").css("display", "none");
    });




    // 鼠标滑动 日期控件消失
    document.body.onmousewheel = function(event) {
        $("#lhgcalendar").css("display", "none");
    }
});