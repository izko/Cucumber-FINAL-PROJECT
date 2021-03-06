/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slider = __webpack_require__(5);

__webpack_require__(4);

__webpack_require__(3);

__webpack_require__(2);

__webpack_require__(1);

document.addEventListener("DOMContentLoaded", function (event) {});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
    $(window).scroll(function () {

        var wScroll = $(this).scrollTop();

        if (wScroll > $('#secAdventures').offset().top - $(window).height() / 1.5) {
            $('#secAdventures h3').addClass('text-parallax-1');
            $('#secAdventures h1').addClass('text-parallax-2');
            $('#secAdventures p').addClass('text-parallax-3');
        }

        if (wScroll > $('#secGallery').offset().top - $(window).height() / 1.5) {
            $('#secGallery').addClass('gallery-parallax');
        }

        if (wScroll > $('#secMap').offset().top - $(window).height() / 1.5) {
            $('#secMap h1').addClass('text-parallax-1');
            $('#secMap p').addClass('text-parallax-2');
        }

        if (wScroll > $('#secMap').offset().top - $(window).height() / 5) {
            $('#contact').addClass('text-parallax');
        }
    });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  $('.hamburger').on('click', function (e) {
    e.preventDefault();
    $('.menu').toggleClass('slide-down');
  });

  $('.hamburger').on('mouseenter', function (e) {
    e.preventDefault();
    $('.menu').addClass('slide-down');
  });

  $('ul a').on('click', function (e) {
    e.preventDefault();
    $('.menu').removeClass('slide-down');
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  $(window).scroll(function () {

    //h1 main scroll
    var wScroll = $(this).scrollTop();
    $('#scrollH1').css({
      'transform': 'translate(0px, ' + wScroll / 3.5 + '%)'
    });

    //adventures text scroll
    $('#scroll').css({
      'transform': 'translate(0px, ' + wScroll / 20 + '%)'
    });

    //menu scroll
    if (wScroll > $('#secAdventures').offset().top - $(window).height() / 100) {
      $('#homeHeader').addClass('is-showing');
      $('header a').addClass('color-change');
      $('div.logo img').attr('src', 'images/black_logo1.png');
    } else {
      $('#homeHeader').removeClass('is-showing');
      $('header a').removeClass('color-change');
      $('div.logo img').attr('src', 'images/wh_logo1.png');
    }

    //adventures-img-parallax
    if (wScroll > $('#secAdventures').offset().top - $(window).height() / 1.5) {
      $('#secAdventures .col-1 img:last-of-type').addClass('img-parallax');
    }
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {

    var links = $('ul a');
    links.on('click', function (event) {
        event.preventDefault();
        var hrefValue = $(this).attr('href'),
            positionHref = $(hrefValue).offset();
        // console.log(positionHref, $(hrefValue));
        // console.log(hrefValue);

        if (hrefValue == '#homeHeader') {
            positionHref.top = 0;
        }

        $('html, body').animate({
            scrollTop: positionHref.top
        }, 1000);
    });
});
//scroll menu - odnośniki

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function (event) {
  var responsiveSlider = function responsiveSlider() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var count = 1;
    var slideList = document.getElementById("slideWrap");
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function () {
      sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function prevSlide() {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if (count = 1) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    var nextSlide = function nextSlide() {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if (count = items) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    next.addEventListener("click", function () {
      nextSlide();
    });

    prev.addEventListener("click", function () {
      prevSlide();
    });

    // setInterval(function() {
    //   nextSlide()
    // }, 8000);
  };

  window.onload = function () {
    responsiveSlider();
  };
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);