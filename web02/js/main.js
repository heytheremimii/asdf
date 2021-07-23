$(function(){


                      

    $("#main").fullpage({
        anchors:['xm01', 'xm02', 'xm03', 'xm04', 'xm05'],
        afterLoad: function(origin, destination, direction){
            $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
            $("nav li").eq(destination.index).addClass("on").siblings().removeClass("on");
        },
    });

    $(".m01 .xi-play-circle").on("click", function(){
        $(".m01_audio").trigger("pause");
    
    });
    
    
    $(".m01 .xi-pause-circle").on("click", function(){
        $(".m01_audio").trigger("play");
    
    });
    
    $(".pt_slider").slick({
        arrows:false,
        slidesToShow: 3,
        dots:true,

    });

    $(".m03 i.xi-angle-left-thin").on("click", function(){
        $(".pt_slider").slick("slickPrev");
    
    });
    $(".m03 i.xi-angle-right-thin").on("click", function(){
        $(".pt_slider").slick("slickNext");
    
    });
    

    
    $("#Movie").YTPlayer({
        showControls:false,
        containment:'.m05',
        autoPlay:true,
        mute:true,
        startAt:0,
        opacity:1
    });
});