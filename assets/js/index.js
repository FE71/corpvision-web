const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// html elements
const header = $('#site-header');
const navbarTogglerButton = $('.navbar-toggler');
const navbarToggler = $('.navbar-toggler');
var isActive = false;

// handle search event
navbarToggler.onclick = function () {
    isActive = !isActive;
    header.classList.toggle('active', isActive)
    navbarTogglerButton.classList.toggle('close', isActive);
}
// end of searching function 

// scroll to top event
var goTopButton = $('.goTop');
var carouselSection = $('.carousel-section');
var triggerPoint = carouselSection.offsetTop;
var showHeader = function () {
    var pageDidScroll = window.pageYOffset > triggerPoint;
    header.classList.toggle('scroll', pageDidScroll);
    goTopButton.style.display = (pageDidScroll) ? 'block' : 'none';
}
window.onscroll = function () { showHeader() };
// done scroll to top even

// Dark mode toggler
const moonIcon = $('.far.fa-moon');
const sunIcon = $('.far.fa-sun');
const dayBtn = $('.day.ms-3');
var isLightTheme = true;
dayBtn.onclick = function () {
    isLightTheme = !isLightTheme;
    if (isLightTheme) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        $('html').setAttribute('data-theme', 'light')
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        $('html').setAttribute('data-theme', 'dark')
    }
}
// End of dark mode toggler