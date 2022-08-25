const elem = document.querySelector('input[name="datepicker"]');
if (elem) {
  const datepicker = new Datepicker(elem, {
    autohide: true,
    language: "zh-CN",
  });
}

const swiper = new Swiper('.swiper', {
  pagination: {
  el: '.swiper-pagination',
  clickable: true
  },

  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
  },
});