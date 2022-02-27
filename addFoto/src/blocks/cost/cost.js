const costAddButton = document.querySelectorAll('.cost__item-additional-item')
const retouchModal = document.querySelector('.retouch-modal')
const retouchModalButton = document.querySelector('.retouch-modal__button')
let status = false
let price = 0

function toggleModal(e) {
    if (e.target.dataset.name === 'retouch') {
        retouchModal.classList.toggle('active')
        toggleButton(e.target)
    }
    if (e.target.dataset.name === 'artist') {
        e.target.classList.toggle('active')
        calculate(e.target)
    }
    console.log(e.target.dataset)
}


function toggleButton(item) {
    if (retouchModal.classList.contains('active')) {
        retouchModalButton.addEventListener('click', e => {
            e.preventDefault()
            retouchModal.classList.remove('active')
            status = true
            item.classList.toggle('active')
            let input = retouchModal.querySelector('input').value
            let parent = item.closest('.cost__item').querySelector('.cost__item-price')
            let parentValue = parent.textContent.replace('₽', '').trim()
            parentValue = Number(parentValue)
            parent.innerHTML = (250 * input) + parentValue + '₽'
        })
    }
}

function calculate(item) {
    let parent = item.closest('.cost__item').querySelector('.cost__item-price')
    let parentValue = parent.textContent.replace('₽', '').trim()
    parentValue = Number(parentValue)
    if (item.classList.contains('active')) parent.innerHTML = parentValue + 2000 + '₽'
    if (!item.classList.contains('active')) parent.innerHTML = parentValue - 2000 + '₽'
}

costAddButton.forEach(item => {
    item.addEventListener('click', toggleModal)
})
