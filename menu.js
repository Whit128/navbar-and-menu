document.addEventListener("DOMContentLoaded", function () {
    // Setup
    var menu__open = 0;
    var navbar = document.getElementById("navbar");
    var menuButton = document.getElementById("menu__button");
    var hamburgerMenu = document.getElementById("hamburger__menu");
    var pageFade = document.getElementById("page__fade");
    var pageFadeComputedStyle = window.getComputedStyle(pageFade);
    var hamburgerMenuLinks = hamburgerMenu.getElementsByTagName('a');

    for (a = 0; a < hamburgerMenuLinks.length; a++) {
        hamburgerMenuLinks[a].onclick = function(){
            if (window.innerWidth <= 760)
                menu__toggle();
        };
    }
    // Setup end

    function menu__toggle() {
        if (menu__open == 0 && pageFadeComputedStyle.opacity == '0') {
            hamburgerMenu.style.overflowY = 'auto';
            document.body.style.overflowY = 'hidden';
            hamburgerMenu.style.width = '250px';
            pageFade.style.pointerEvents = 'auto';
            navbar.style.marginTop = '0';
            pageFade.style.opacity = '1';
            menu__open = 1;
        }
        else if (menu__open == 1  && pageFadeComputedStyle.opacity == '1') {
            hamburgerMenu.style.overflowY = 'hidden';
            document.body.style.overflowY = 'auto';
            hamburgerMenu.style.width = '0';
            pageFade.style.opacity = '0';
            pageFade.style.pointerEvents = 'none';
            
            menu__open = 0;
        }
    }

    menuButton.onclick = function(){
        event.preventDefault();
        menu__toggle();
    };

    pageFade.onclick = function(){
        menu__toggle();
    };  
});