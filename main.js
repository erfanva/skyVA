var initialDeg = -30;
var initialLeft = 100;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$(document).ready(function(){
    var top = $(window).scrollTop();
    var maxTop = $(document).height() - $(window).height();
    var ratio = top/maxTop;
    
    // Sun & Moon
    var angle = (180 - 2*initialDeg) * ratio + initialDeg;
    $('#skyva-sm-container').height(2*$(window).height());
    $('#skyva-sm-container').rotate(angle);

    // Clouds
    var left = ($(window).width() - 2*initialLeft) * ratio + initialLeft;
    $('#skyva-cloud-container').css({left: left + "px"});
    console.log("(angle:", angle, "left:", left,")");

    // Light
    $('#skyva-light-container').css('opacity', ratio*0.5);
    
    $(window).scroll(function() {
        top = $(window).scrollTop();
        maxTop = $(document).height() - $(window).height();
        ratio = top/maxTop;

        // Sun & Moon
        var angle = (180 - 2*initialDeg) * ratio + initialDeg;
        $('#skyva-sm-container').height(2*$(window).height());
        $('#skyva-sm-container').rotate(angle);

        // Clouds
        var left = ($(window).width() - 2*initialLeft) * ratio + initialLeft;
        $('#skyva-cloud-container').css({left: left + "px"});
        console.log("(angle:", angle, "left:", left,")");

        // Light
        $('#skyva-light-container').css('opacity', ratio*0.5);
    });
});