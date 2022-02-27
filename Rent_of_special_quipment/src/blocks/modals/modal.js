const modal = document.querySelector('.modal')
const modals = document.querySelectorAll('.modal')
const callModal = document.querySelectorAll('.call__modal')
const close = document.querySelectorAll('.modal__top-button')

callModal.forEach(toggleModal)

function toggleModal(item) {
    item.addEventListener('click', event => {
        event.preventDefault()
        let currentBtn = item
        let modalId = currentBtn.getAttribute('data-id')
        let currentModal = document.querySelector(modalId)
        currentModal.querySelector('.modal__top-button')
            .addEventListener('click', e => {
                currentModal.classList.remove('active')
                currentBtn.classList.remove('active')
            })

        if (!currentBtn.classList.contains('active')) {
            callModal.forEach(item => {
                item.classList.remove('active')
            })
            modals.forEach(item => {
                item.classList.remove('active')
            })
            currentBtn.classList.add('active')
            currentModal.classList.add('active')
        }
    })
}

