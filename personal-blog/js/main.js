$(function() {
    $('.menu-btn').on('click', function() {
        // $('.header__menu').toggleClass('header__menu-active');
        $('.burger-menu').toggleClass('burger-menu--active');
    });
});

let modalBtn = document.querySelector('.aside__buttons-sendme');
let modalBg = document.querySelector('.modal-bg');
let modalClose = document.querySelector('.modal__close');

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('modal-bg--active');
});
modalClose.addEventListener('click', function() {
    modalBg.classList.remove('modal-bg--active');
});