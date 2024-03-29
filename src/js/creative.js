import $ from 'jquery';
import 'jquery.easing';
import 'bootstrap';
import ScrollReveal from 'scrollreveal';
import 'magnific-popup';


// Smooth scrolling using jQuery easing
$(document).on('click', 'a.js-scroll-trigger[href*="#"]:not([href="#"])', function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    let target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - 56)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$(document).on('click', '.js-scroll-trigger', () => {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: 57,
});

// Collapse Navbar
const navbarCollapse = () => {
  if ($("#mainNav").offset().top > 100) {
    $("#mainNav").addClass("navbar-shrink");
  } else {
    $("#mainNav").removeClass("navbar-shrink");
  }
};
// Collapse now if page is not at top
navbarCollapse();
// Collapse the navbar when page is scrolled
$(window).scroll(navbarCollapse);

// Scroll reveal calls
window.sr = ScrollReveal();
sr.reveal('.sr-icons', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 200);
sr.reveal('.sr-button', {
  duration: 1000,
  delay: 200
});
sr.reveal('.sr-contact', {
  duration: 600,
  scale: 0.3,
  distance: '0px'
}, 300);


// Magnific popup calls
$('.popup-gallery').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1]
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
  }
});
