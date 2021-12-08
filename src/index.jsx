import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


//   react code here


$(".ownership-list").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      },
      1400: {
        nav: true,
        items: 5,
      },
    },
  });
  // $( ".owl-prev").html('<div class="btn-ow"><img src="images/left-arrow-svgrepo-com.png"></div');
  // $( ".owl-next").html('<div class="btn-ow"><img src="images/right-arrow-svgrepo-com.png"></div>');
  $(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
  $(".owl-next").html('<i class="fa fa-chevron-right"></i>');
  $("#banner-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
    },
  });