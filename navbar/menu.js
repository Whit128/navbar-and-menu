document.addEventListener("DOMContentLoaded", function () {
    // Setup
    var htmlStyle = document.documentElement.style;
    var bodyContentStyle = document.getElementById("body__content").style;
    var isMenuOpen = 0;
    var scrollPosition;
    var navbar = document.getElementById("navbar");
    var menuButton = document.getElementById("menu__button");
    var hamburgerMenu = document.getElementById("hamburger__menu");
    var pageFade = document.getElementById("page__fade");
    var pageFadeComputedStyle = window.getComputedStyle(pageFade);

    var hamburgerMenuLinks = hamburgerMenu.getElementsByTagName('a');
    for (a = 0; a < hamburgerMenuLinks.length; a++) {
        hamburgerMenuLinks[a].onclick = function(){
            if (window.innerWidth <= 760)
                toggleMenu();
        };
    }
    // Setup end

    // Toggle the menu open or closed
    function toggleMenu() {
        if (isMenuOpen == 0 && pageFadeComputedStyle.opacity == '0') {
            hamburgerMenu.classList.add('hamburger__menu__active');
            pageFade.classList.add('page__fade__active');
            navbar.classList.add('navbar__active');
            lockScrolling();
            isMenuOpen = 1;
        }
        else if (isMenuOpen == 1  && pageFadeComputedStyle.opacity == '1') {
            hamburgerMenu.classList.remove('hamburger__menu__active');
            pageFade.classList.remove('page__fade__active');
            navbar.classList.remove('navbar__active');
            unlockScrolling();
            isMenuOpen = 0;
        }
    }

    // Lock scrolling when hamburger menu is open. Works on iOS.
    function lockScrolling() {
        scrollPosition = window.pageYOffset;
        bodyContentStyle.marginTop = -scrollPosition + 'px';
        bodyContentStyle.position = 'fixed';
    }

    // Lock scrolling when hamburger menu is open. Works on iOS.
    function unlockScrolling() {
        bodyContentStyle.position = '';
        bodyContentStyle.marginTop = '';
        htmlStyle.scrollBehavior = 'unset';
        window.scrollTo(0, scrollPosition);
        htmlStyle.scrollBehavior = 'smooth';
    }

    menuButton.onclick = function(){ event.preventDefault(); toggleMenu(); };
    pageFade.onclick = toggleMenu;
});