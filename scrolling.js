// Include this file if you want the navbar to disappear/reappear when scrolling down/up the page.
var navbar;
var position = window.pageYOffset;
var scroll;
var navbarHeight;
var navbarMargin;

document.addEventListener("DOMContentLoaded", function () {
    navbar = document.getElementById("navbar");
    navbarStyles = window.getComputedStyle(navbar);
    navbarNegativeHeight = (parseFloat(navbarStyles.getPropertyValue('height')) + parseFloat(navbarStyles.getPropertyValue('border-bottom-width'))) * -1;
    navbarMargin = parseFloat(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
    NavbarLocation();
});

window.addEventListener('scroll', NavbarLocation);

function NavbarLocation() {
    if (navbar !== null) {
        navbarMargin = parseFloat(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
        scroll = window.pageYOffset;

        if (scroll > position) {
            if (navbarMargin > navbarNegativeHeight) {
                navbar.style.marginTop = navbarMargin - (scroll - position) + "px";
            } 
        } else if (navbarMargin < 0) {
                navbar.style.marginTop = navbarMargin + (position - scroll) + "px";
        }

        if (navbarMargin < navbarNegativeHeight) {
            navbar.style.marginTop = "-54px";
        }

        if (navbarMargin > 0) {
            navbar.style.marginTop = "0";
        }

        position = scroll;
    }
    
};