let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.nav__lists');
let navList = document.querySelector('.nav__list');
let navBurger = document.querySelector('.nav-burger');
let header = document.querySelector('#header');
let body = document.querySelector('body');

menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('visible');
    navList.classList.toggle('nav__list--margin');
    navBurger.classList.toggle('active-burger');
    header.classList.toggle('header-overlay');
    body.classList.toggle('overflow');
})

header.addEventListener('click', (e) => {
    let target = e.target;
    if (target === header) {
        navList.classList.toggle('nav__list--margin');
        header.classList.toggle('header-overlay');
        body.classList.toggle('overflow');
        navBurger.classList.toggle('active-burger');
        menu.classList.toggle('visible');
    } else {
        return
    }
})

// let swiper = new Swiper('.swiper-container', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     navigation: {
//       nextEl: '.arrow-right',
//       prevEl: '.arrow-left',
//     },
// });

// let sliderItems = document.querySelectorAll('.slider__items');
// for (let i = 0; sliderItems.length >= 11; i++) {
//     sliderItems[i].style.width = '270px';
// }
// console.log(sliderItems);



