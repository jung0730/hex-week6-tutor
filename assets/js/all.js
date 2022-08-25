"use strict";

var elem = document.querySelector('input[name="datepicker"]');

if (elem) {
  var datepicker = new Datepicker(elem, {
    autohide: true,
    language: "zh-CN"
  });
}

var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});
//# sourceMappingURL=all.js.map
