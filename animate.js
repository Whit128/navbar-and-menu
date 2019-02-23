$(document).ready(function(){
    // Menu
    var menu__open = 0;
    function menu__toggle() {
        event.preventDefault();
        if (menu__open == 0 && $("#page__fade").css('opacity') == '0') {
            $("#links > ul").css('overflow-y', 'auto');
            $("body").css('overflow-y', 'hidden');
            $("#links > ul").css('width', '250px');
            $("#links").css('color', '#fff');
            $("#page__fade").css('display', 'block');
            $("#navbar").css('margin-top', '0');
            setTimeout( // makes sure that CSS3 animation plays 
                function() {
                    $("#page__fade").css('opacity', '1');
                }, 0);
            
            menu__open=1;
        } else if (menu__open == 1 && $("#page__fade").css('opacity') == '1') {
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


/////// Changing navbar position
var navbar;
var position = window.scrollY;
var scroll;
var navbarHeight;
var navbarMargin;

window.addEventListener("load", function () {
    navbar = document.getElementById("navbar");
    navbarNegativeHeight = (parseInt(window.getComputedStyle(navbar).getPropertyValue('height')) + parseInt(window.getComputedStyle(navbar).getPropertyValue('border-bottom'))) * -1;
    navbarMargin = parseInt(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
    NavbarLocation();
});

window.addEventListener('scroll', NavbarLocation);

function NavbarLocation() {
    navbarMargin = parseInt(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
    scroll = window.scrollY;
    if (scroll > position) {
        if (navbarMargin > navbarNegativeHeight) {
            navbar.style.marginTop = navbarMargin - (scroll - position) + "px";
        } 
    } else if (navbarMargin < 0) {
            navbar.style.marginTop = navbarMargin + (position - scroll) + "px";
    }
    position = scroll;

    if (navbarMargin < navbarNegativeHeight) {
        navbar.style.marginTop = "-54px";
    }

    if (navbarMargin > 0) {
        navbar.style.marginTop = "0";
    }
};