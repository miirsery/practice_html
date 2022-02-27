const modalButtons = document.querySelectorAll('.modal-button')
const certificateModal = document.querySelector('.certificate__modal')
const certificateModalDone = document.querySelector('.certificate__modal-done')

modalButtons.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        if (e.target.dataset.type === 'certificate') {
            certificateModal.classList.add('active')
        }
        if (e.target.dataset.type === 'feedback') {
            certificateModal.classList.remove('active')
            certificateModalDone.classList.add('active')
        }
        if (certificateModalDone.classList.contains('active')) {
            certificateModalDone
                .querySelector('.certificate__modal-done-close')
                .addEventListener('click', e => {
                    certificateModalDone.classList.remove('active')
                })
        }
        if (certificateModal.classList.contains('active')) {
            certificateModal
                .querySelector('.certificate__modal-close')
                .addEventListener('click', e => {
                    certificateModal.classList.remove('active')
                })
        }
    })
})