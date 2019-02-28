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
            hamburgerMenu.classList.add('hamburger__menu__active');
            pageFade.classList.add('page__fade__active');
            navbar.classList.add('navbar__active');
            
            document.body.style.overflowY = 'hidden';
            menu__open = 1;  
        }
        else if (menu__open == 1  && pageFadeComputedStyle.opacity == '1') {
            hamburgerMenu.classList.remove('hamburger__menu__active');
            pageFade.classList.remove('page__fade__active');
            navbar.classList.remove('navbar__active');

            document.body.style.overflowY = 'auto';
            menu__open = 0;    
        }
    }

    menuButton.onclick = function(){ event.preventDefault(); menu__toggle(); };
    pageFade.onclick = menu__toggle;
});