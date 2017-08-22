document.addEventListener('DOMContentLoaded', function() {
    const moving__background = document.querySelector('#header__background');
    
    window.addEventListener( 'scroll', function() {
        ParallaxAnimation( moving__background );
    });
});

// Parallax scrolling header
function ParallaxAnimation( el ) {
    let scrollTop = document.body.scrollTop;

    el.style.marginTop = (scrollTop / 3) + 'px';
    el.style.opacity = (1 - scrollTop / el.offsetHeight );
};

$(document).ready(function(){
    // Menu
    var menu__open = 0;
    function menu__toggle() {
        event.preventDefault();
        if (menu__open == 0) {
            $("#links > ul").css('overflow-y', 'auto');
            $("body").css('overflow-y', 'hidden');
            $("#links > ul").css('width', '250px');
            $("#links").css('color', '#fff');
            $("#page__fade").css('opacity', '1');
            $("#page__fade").css('display', 'block');
            menu__open=1;
        } else {
            $("#links > ul").css('overflow-y', 'hidden');
            $("body").css('overflow-y', 'auto');
            $("#links > ul").css('width', '0');
            $("#links").css('color', '#333');
            $("#page__fade").css('opacity', '0');

            setTimeout(
                function() {
                    $("#page__fade").css('display', 'none');
                }, 200);

            menu__open=0;
        }
        return false;
    }

    $(".menu__button").click(function(){
        menu__toggle();
    });

    $("#links ul li").click(function(){
        if ($(window).width() <= 760) {
            menu__toggle();
        }
    });

    $("#page__fade").click(function() {
        menu__toggle();
    });
});

// Scroll smoothly when pressing links on navbar
$(document).on('click', 'a', function(event){
    if ($(this).hasClass("top__button")) {
        $('html,body').stop().animate({ scrollTop: 0 }, 500);
    } else {
        $('html, body').stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);                    
    }
    return false;
});