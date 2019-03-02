document.addEventListener("DOMContentLoaded", function () {
    // Setup
    var html = document.documentElement;
    var body = document.body;
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
        if (isMenuOpen == 0 && pageFadeComputedStyle.opacity == '0')
            openMenu();
        else if (isMenuOpen == 1  && pageFadeComputedStyle.opacity == '1')
            closeMenu();
    }

    function openMenu() {
        hamburgerMenu.classList.add('hamburger__menu__active');
        pageFade.classList.add('page__fade__active');
        navbar.classList.add('navbar__active');
        menuButton.classList.add('menu__button__active');
        lockScrolling();
        isMenuOpen = 1;
    }

    function closeMenu() {
        hamburgerMenu.classList.remove('hamburger__menu__active');
        pageFade.classList.remove('page__fade__active');
        navbar.classList.remove('navbar__active');
        menuButton.classList.remove('menu__button__active');
        navbar.style.marginTop = '0';
        unlockScrolling();
        isMenuOpen = 0;
    }

    // Lock scrolling when hamburger menu is open. Works on iOS.
    function lockScrolling() {
        scrollPosition = window.pageYOffset;
        var pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        html.style.height = pageHeight + 'px';
        body.style.marginTop = -scrollPosition + 'px';
        body.style.overflowY = 'hidden';
        body.style.position = 'fixed';
    }

    // Lock scrolling when hamburger menu is open. Works on iOS.
    function unlockScrolling() {
        body.style.position = '';
        body.style.marginTop = '';
        body.style.overflowY = '';
        html.style.height = '';
        html.style.scrollBehavior = 'unset';
        window.scrollTo(0, scrollPosition);
        html.style.scrollBehavior = 'smooth';
    }

    window.addEventListener('resize', function () { if (isMenuOpen === 1) closeMenu(); })
    menuButton.onclick = function(){ event.preventDefault(); toggleMenu(); };
    pageFade.onclick = toggleMenu;
});