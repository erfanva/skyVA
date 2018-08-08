jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

$(document).ready(function(){
    $(window).scroll(function() {
        var top = $(window).scrollTop();
        var maxTop = $(document).height() - $(window).height();
        var ratio = top/maxTop;
        var angle = 360 * ratio;
        $('#container').height($(window).height());
        $('#container').rotate(angle);
        console.log(angle);
    });
});