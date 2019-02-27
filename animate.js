$(document).ready(function(){
    // Menu
    var menu__open = 0;
    function menu__toggle() {
        event.preventDefault();
        if (menu__open == 0 && $("#page__fade").css('opacity') == '0') {
            $("#links > #hamburger__menu").css('overflow-y', 'auto');
            $("body").css('overflow-y', 'hidden');
            $("#links > #hamburger__menu").css('width', '250px');
            $("#links").css('color', '#fff');
            $("#page__fade").css('display', 'block');
            $("#navbar").css('margin-top', '0');
            setTimeout( // makes sure that CSS3 animation plays 
                function() {
                    $("#page__fade").css('opacity', '1');
                }, 0);
            
            menu__open=1;
        } else if (menu__open == 1 && $("#page__fade").css('opacity') == '1') {
            $("#links > #hamburger__menu").css('overflow-y', 'hidden');
            $("body").css('overflow-y', 'auto');
            $("#links > #hamburger__menu").css('width', '0');
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

    $("#links #hamburger__menu li a").click(function(){
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