const buttons = document.querySelectorAll('.action-button')
buttons.forEach(item => {
    item.addEventListener('click', e => {
        e.target.parentNode.querySelector('.action-text').classList.toggle('tall')
    })
})