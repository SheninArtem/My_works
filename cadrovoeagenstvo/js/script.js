const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper1 = new Swiper('.swiper1', {
  // Optional parameters
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  edgeSwipeDetection: 'prevent',
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1532: {
      slidesPerView: 3,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


var open1 = document.querySelector('#btn-modal1')
var open2 = document.querySelector('#btn-modal2')
var open3 = document.querySelector('#btn-modal3')

var modal1 = document.querySelector('#modal1')
var modal2 = document.querySelector('#modal2')
var modal3 = document.querySelector('#modal3')

var close1 = document.querySelector('#close1')
var close2 = document.querySelector('#close2')
var close3 = document.querySelector('#close3')

var link1 = document.querySelector('#link1')
var link2 = document.querySelector('#link2')
var link3 = document.querySelector('#link3')

var svgc1 = document.querySelector('.svgc1')
var svgc2 = document.querySelector('.svgc2')
var svgc3 = document.querySelector('.svgc3')

var svgo1 = document.querySelector('.svgo1')
var svgo2 = document.querySelector('.svgo2')
var svgo3 = document.querySelector('.svgo3')
var svgo3spec = document.querySelector('.svgo3-spec')

open1.onclick = function () {
  modal1.style = 'display: flex';
  link1.style = 'text-decoration-line: none';
  svgo1.style = 'display: block';
  svgc1.style = 'display: none';
}

close1.onclick = function () {
  modal1.style = 'display: none';
  link1.style = 'text-decoration-line: underline';
  svgo1.style = 'display: none';
  svgc1.style = 'display: block';
}

open2.onclick = function () {
  modal2.style = 'display: flex';
  link2.style = 'text-decoration-line: none';
  svgo2.style = 'display: block';
  svgc2.style = 'display: none';
}

close2.onclick = function () {
  modal2.style = 'display: none';
  link2.style = 'text-decoration-line: underline';
  svgo2.style = 'display: none';
  svgc2.style = 'display: block';
}



open3.onclick = function () {
  modal3.style = 'display: flex';
  link3.style = 'text-decoration-line: none';
  svgo3spec.style = 'display: block';
  svgc3.style = 'display: none';
}

close3.onclick = function () {
  modal3.style = 'display: none';
  link3.style = 'text-decoration-line: underline';
  svgo3spec.style = 'display: none';
  svgc3.style = 'display: block';
}

forbtnform = document.getElementById('forbtnform')

forbtnform.onclick = (function () {

  var input1 = document.getElementById('phone');
  var input2 = document.getElementById('name1');
  var neverno = document.getElementById('neverno');
  var neverno1 = document.getElementById('neverno1');

  input1.addEventListener('invalid', function (event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      neverno.innerHTML = 'Проверьте номер телефона +7(9_ _)';
      neverno.style.color = '#FA1919';
      input1.classList.add('your-class');
    }
  });

  input2.addEventListener('invalid', function (event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      neverno1.innerHTML = 'Обязательное поле для заполнения';
      neverno1.style.color = '#FA1919';
      input2.classList.add('your-class');
    }
  });

});


var openb = document.querySelector('#openb')
var closeb = document.querySelector('#closeb')
var burgers = document.querySelector('#burgers')
var link = document.querySelectorAll('.header__link')
var mains = document.querySelector('.main')

openb.addEventListener('click', function () {
  openb.style = 'display: none';
  closeb.style = 'display: block';
  burgers.style = 'display: flex';
  mains.classList.add('mains');
  document.body.classList.toggle('stop-scroll')
});

closeb.addEventListener('click', function () {
  closeb.style = 'display: none';
  openb.style = 'display: block';
  burgers.style = 'display: none';
  mains.classList.remove('mains');
});

link.forEach(function (el) {
  el.addEventListener('click', function () {
    closeb.style = 'display: none';
    openb.style = 'display: block';
    burgers.style = 'display: none';
    mains.classList.remove('mains');
  })
});




































// let burger = document.querySelector('.burger')
// let menu = document.querySelector('.header__nav')
// let menuLinks = menu.querySelectorAll('.nav__link')


// burger.addEventListener('click',

// function() {

//   burger.classList.toggle('burger--active');

//   menu.classList.toggle('header__nav--active');

//   document.body.classList.toggle('stop-scroll')
// })

// menuLinks.forEach(function(element) {
//   element.addEventListener('click', function() {
//     burger.classList.remove('burger--active');

//     menu.classList.remove('header__nav--active');

//     document.body.classList.remove('stop-scroll')
//   })
// })
