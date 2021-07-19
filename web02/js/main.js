$(function(){


$("#Wrap").fullpage({
    //sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesomke', '#000']
    navigation: true,
    afterLoad: function(origin, destination, direction){
        $(".section").eq(destination.index).addClass("on").siblings().removeClass("on");
    },
});


});