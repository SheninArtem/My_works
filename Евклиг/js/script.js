var stages__btn = document.querySelectorAll('.stages__item-btn')
var stages__btn1 = document.querySelector('.stages__item-btn1')
var stages__btn2 = document.querySelector('.stages__item-btn2')
var stages__btn3 = document.querySelector('.stages__item-btn3')
var stages__btn4 = document.querySelector('.stages__item-btn4')

var stages__title = document.querySelectorAll('.stages__block-title')
var stages__title1 = document.querySelector('.stages__block-title1')
var stages__title2 = document.querySelector('.stages__block-title2')
var stages__title3 = document.querySelector('.stages__block-title3')
var stages__title4 = document.querySelector('.stages__block-title4')

var stages__descr = document.querySelectorAll('.stages__block-descr')
var stages__descr1 = document.querySelector('.stages__block-descr1')
var stages__descr2 = document.querySelector('.stages__block-descr2')
var stages__descr3 = document.querySelector('.stages__block-descr3')
var stages__descr4 = document.querySelector('.stages__block-descr4')

var stages__img = document.querySelectorAll('.stages__block-img')
var stages__img1 = document.querySelector('.stages__block-img1')
var stages__img2 = document.querySelector('.stages__block-img2')
var stages__img3 = document.querySelector('.stages__block-img3')
var stages__img4 = document.querySelector('.stages__block-img4')


stages__btn1.addEventListener('click', function() {
  stages__btn.forEach(function (el) {
    el.classList.remove('stages__item-btn--active')
  });

  stages__btn1.classList.add('stages__item-btn--active');

  stages__title.forEach(function (el) {
    el.classList.add('none')
  });

  stages__title1.classList.remove('none');

  stages__descr.forEach(function (el) {
    el.classList.add('none')
  });

  stages__descr1.classList.remove('none');

  stages__img.forEach(function (el) {
    el.classList.add('none')
  });

  stages__img1.classList.remove('none');
});

stages__btn2.addEventListener('click', function() {
  stages__btn.forEach(function (el) {
    el.classList.remove('stages__item-btn--active')
  });

  stages__btn2.classList.add('stages__item-btn--active');

  stages__title.forEach(function (el) {
    el.classList.add('none')
  });

  stages__title2.classList.remove('none');

  stages__descr.forEach(function (el) {
    el.classList.add('none')
  });

  stages__descr2.classList.remove('none');

  stages__img.forEach(function (el) {
    el.classList.add('none')
  });

  stages__img2.classList.remove('none');
});

stages__btn3.addEventListener('click', function() {
  stages__btn.forEach(function (el) {
    el.classList.remove('stages__item-btn--active')
  });

  stages__btn3.classList.add('stages__item-btn--active');

  stages__title.forEach(function (el) {
    el.classList.add('none')
  });

  stages__title3.classList.remove('none');

  stages__descr.forEach(function (el) {
    el.classList.add('none')
  });

  stages__descr3.classList.remove('none');

  stages__img.forEach(function (el) {
    el.classList.add('none')
  });

  stages__img3.classList.remove('none');
});

stages__btn4.addEventListener('click', function() {
  stages__btn.forEach(function (el) {
    el.classList.remove('stages__item-btn--active')
  });

  stages__btn4.classList.add('stages__item-btn--active');

  stages__title.forEach(function (el) {
    el.classList.add('none')
  });

  stages__title4.classList.remove('none');

  stages__descr.forEach(function (el) {
    el.classList.add('none')
  });

  stages__descr4.classList.remove('none');

  stages__img.forEach(function (el) {
    el.classList.add('none')
  });

  stages__img4.classList.remove('none');
});


var burger = document.querySelector('.burger')
var burger_menu = document.querySelector('.header__nav')
var header_link = document.querySelectorAll('.header__link')


burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');

  burger_menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

header_link.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');

    burger_menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})


var headerform = document.querySelector('.header__form')
var searchopen = document.querySelector('.search-open')
var searchclose = document.querySelector('.search-close')
var headersear = document.querySelector('.header__sear')

searchopen.addEventListener('click', function() {
  headerform.classList.add('header__form--active');

  burger.classList.remove('burger--active');

  burger_menu.classList.remove('header__nav--active');

  document.body.classList.remove('stop-scroll');
})

headersear.addEventListener('click', function() {
  headerform.classList.remove('header__form--active');
})

searchclose.addEventListener('click', function() {
  headerform.classList.remove('header__form--active');
})
