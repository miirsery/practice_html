document.addEventListener('DOMContentLoaded', function (e) {
    const burgerBtn = document.querySelector('.header__btn')
    const burgerMenu = document.querySelector('.burger__nav')
    burgerBtn.addEventListener('click', openBurger)

    function openBurger(event) {
    console.log(event.target)
    burgerMenu.classList.toggle('active')
}


function resize() {
    (window.innerWidth > 1023) ? burgerMenu.classList.remove('active') : ''
}

window.onresize = resize
})
