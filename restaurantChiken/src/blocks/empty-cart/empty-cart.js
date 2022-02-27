document.addEventListener('DOMContentLoaded', () => {
    const emptyCart = document.querySelector('.empty-cart')
    const headerCart = document.querySelector('.header__cart')
    emptyCart.querySelector('.empty-cart__close').addEventListener('click', function () {
        emptyCart.classList.remove('active')
    })
    headerCart.addEventListener('click', (e) => {
        e.preventDefault()
        emptyCart.classList.add('active')
    })
})
