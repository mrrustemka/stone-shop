'use strict'

var scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
  var video = document.querySelector(".videoBlock");
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		TweenMax.to(video, 1, {x: -60, y:-180, scale:'0.5'});
	} if (scrolled < 300) {
		TweenMax.to(video, 1, {x: 0, y:0, scale:'1'});
	}
	scrollPrev = scrolled;
});

function backToTop() {
  var video = document.querySelector(".videoBlock");
  if (window.pageYOffset > 0) {
    setTimeout(backToTop, 1);
    TweenMax.to(video, 1.5, {x: 0, y:0, scale:'1'});
    window.scrollBy(0, -80);
  }
}

function trackScroll() {
  var scrolled = window.pageYOffset;

  if (scrolled > 1200) {
    goTopBtn.classList.add('back_to_top-show');
  }
  if (scrolled < 1200) {
    goTopBtn.classList.remove('back_to_top-show');
  }
}

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slidesOne = document.getElementsByClassName("firstSlides");
    var slidesTwo = document.getElementsByClassName("secondSlides");
    var slidesThree = document.getElementsByClassName("thirdSlides");

    for (i = 0; i < slidesOne.length; i++) {
       slidesOne[i].style.display = "none"; 
       slidesTwo[i].style.display = "none";
       slidesThree[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slidesOne.length) {slideIndex = 1}    
    slidesOne[slideIndex-1].style.display = "block";
    slidesTwo[slideIndex-1].style.display = "block";
    slidesThree[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 2000);
}

$(function(){
  $('.minimized').click(function(event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();

    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});