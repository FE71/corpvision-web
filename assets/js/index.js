const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header script dark-light mode
const moon = $('.far.fa-moon');
const sun = $('.far.fa-sun');
const day = $('.day.ms-3');
var isMoon = true;

// html elements
const navbarToggler = $('.navbar-toggler');
const header = $('#site-header');
const headerRespondsive = $('.navbar-toggler');
var isActive = false;

// handle search event
navbarToggler.onclick = function () {
    isActive = !isActive;
    header.classList.toggle('active', isActive)
    headerRespondsive.classList.toggle('close', isActive);
}
// end of searching function 

// scroll to top event
var goTopButton = $('.goTop');
var carouselSection = $('.carousel-section');
var sticky = carouselSection.offsetTop;
window.onscroll = function () { showingHeader() };
function showingHeader() {
    var isScroll = window.pageYOffset > sticky ? true : false;
    header.classList.toggle('scroll', isScroll);
    goTopButton.classList.toggle('d-block', isScroll);
}
// done scroll to top even

// start function to turn on/off dark mode 
day.onclick = function () {
    isMoon = !isMoon;
    if (isMoon) {
        sun.style.display = 'none';
        moon.style.display = 'block';
        $('html').setAttribute('data-theme', 'light')
    } else {
        sun.style.display = 'block';
        moon.style.display = 'none';
        $('html').setAttribute('data-theme', 'dark')
    }
}
//end function on/off dark mode