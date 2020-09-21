(function ($) {
  "use strict";

  //serach box
  $(".search i").click(function () {
    $(".search span").toggleClass("active");
    $(".search-field").toggleClass("active");
  });

  //responsive menu
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $("nav").toggleClass("active");
    $(".overlay").toggleClass("active");
  })

  $(".nav-list li").click(function () {
    $(this).toggleClass("active");
    $(".nav-list li").not($(this)).removeClass("active");
  })

  $(".overlay").click(function () {
    $(".menu-toggle").removeClass("active");
    $("nav").removeClass("active");
    $(this).removeClass("active");
  })

  //sticky navbar
  $(".menubar").sticky({
    topSpacing: 0,
    zIndex: 99,
  });

  //active js
  $(".pagination ul li a").click(function () {
    $(".pagination ul li a").removeClass("active");
    $(this).addClass("active");
  })

  //blog-img link
  $(".blog-img").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  //insta-img link
  $(".insta-img").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  //single-slider-post link
  $(".single-slider-post").click(function () {
    window.location = $(this).find("a").attr("href");
    return false;
  });

  //slick js
  $(".main-slider").slick({
    speed: 300,
    infinite: true,
    prevArrow: ".prev-main",
    nextArrow: ".next-main",
  });

  // slick js
  $(".post-slider").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // slick js
  $(".large-post-slider").slick({
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [{
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]

  });

})(jQuery);