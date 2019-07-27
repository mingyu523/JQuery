// $=jquery
// (document)=網頁文件
// . 執行
// ready 準備完成
// function (){}匿名函式
$(document).ready(function () {
    
    $("#top").fadeOut(100);

    $("#top").click(function (e) { 
        
        $("html, body").animate({scrollTop: 0}, 2000);
        
    });

    $(window).scroll(function(){ 
    
        // javascript判斷式
    if ($(window).scrollTop() >200) {
        $("#top").fadeIn(500);        
    } else {
        $("#top").fadeOut(500);
    }
        
    });

    // 函式需要加()
    // $("#a1").click(function (e) {
    //     var top = $("#section1").position().top;
    //     $("html, body").animate({scrollTop: top}, 500)
    // });

    // API
    function scrollToPosition (btn, pos) {
        $(btn).click(function (e) {
            var top = $(pos).position().top;
            $("html, body").animate({scrollTop: top}, 1000);
        });
    }

    scrollToPosition("#a1", "#section1");
    scrollToPosition("#a2", "#section2");
    scrollToPosition("#a3", "#section3");
    scrollToPosition("#a4", "#section4");
    scrollToPosition("#a5", "#section5");


    // if ->如果 (條件->2 > 5) {
    //     執行動作->alert("123");
    // }
    // else ->否則{
    //     執行動作alert("777");
    // }


});