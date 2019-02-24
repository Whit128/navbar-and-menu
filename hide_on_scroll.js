// Include this file if you want the navbar to disappear/reappear when scrolling down/up the page.
var navbar;
var position = window.pageYOffset;
var scroll;
var navbarHeight;
var navbarMargin;

document.addEventListener("DOMContentLoaded", function () {
    navbar = document.getElementById("navbar");
    navbarStyles = window.getComputedStyle(navbar);

    // Height of navbar including the bottom margin as a negative number.
    navbarNegativeHeight = (parseFloat(navbarStyles.getPropertyValue('height')) + parseFloat(navbarStyles.getPropertyValue('border-bottom-width'))) * -1;

    navbarMargin = parseFloat(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
    NavbarLocation();
});

window.addEventListener('scroll', NavbarLocation);

function NavbarLocation() {
    if (navbar !== null) {
        navbarMargin = parseFloat(window.getComputedStyle(navbar).getPropertyValue('margin-top'));
        scroll = window.pageYOffset;

        if (scroll > position) { // Scrolling down  
            if (navbarMargin > navbarNegativeHeight) {
                navbar.style.marginTop = Math.max(navbarNegativeHeight, navbarMargin - (scroll - position)) + "px";
            } 
        }
        else if (scroll < position) { // Scrolling up
            if (navbarMargin < 0) {
                    navbar.style.marginTop = Math.min(0, navbarMargin + (position - scroll)) + "px";
            }
        }
        
        position = scroll;
    }
};