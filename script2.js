var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}
('Button2').tilt({scale: 1.1, spped: 1000});

var fun = function lang(l) {
  dateformat.i18n = require('./lang/' + l)
  return true;
}
