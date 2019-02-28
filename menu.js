document.addEventListener("DOMContentLoaded", function () {
    var menu__open = 0;
    function menu__toggle() {
        if (menu__open == 0 && window.getComputedStyle(document.getElementById("page__fade")).opacity == '0') {
            document.getElementById("hamburger__menu").style.overflowY = 'auto';
            document.body.style.overflowY = 'hidden';
            document.getElementById("hamburger__menu").style.width = '250px';
            document.getElementById("page__fade").style.display = 'block';
            document.getElementById("navbar").style.marginTop = '0';
            setTimeout( // makes sure that CSS3 animation plays 
                function() {
                    document.getElementById("page__fade").style.opacity = '1';
                }, 0);
            menu__open=1;
        }
        else if (menu__open == 1  && window.getComputedStyle(document.getElementById("page__fade")).opacity == '1') {
            document.getElementById("hamburger__menu").style.overflowY = 'hidden';
            document.body.style.overflowY = 'auto';
            document.getElementById("hamburger__menu").style.width = '0';
            document.getElementById("page__fade").style.opacity = '0';

            setTimeout(
                function() {
                    document.getElementById("page__fade").style.display = 'none';
                }, 200);
            menu__open=0;
        }
        return false;
    }

    document.getElementById("menu__button").onclick = function(){
        event.preventDefault();
        menu__toggle();
    };

    var elements = document.getElementById("hamburger__menu").getElementsByTagName('a')

    var n;
    for (n = 0; n < elements.length; ++n)
        elements[n].onclick = function(){
            if (window.innerWidth <= 760)
                menu__toggle();
        };
 

    document.getElementById("page__fade").onclick = function(){
        menu__toggle();
    };
});