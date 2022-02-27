if (window.location.toString().indexOf('orderPage.html') > 0) {

    const deliveryButtons = document.querySelectorAll('.order__delivery-button')
    const deliveryItems = document.querySelectorAll('.order__delivery')
    const deliveryTime = document.querySelector('.order__delivery-time')
    const notDelivery = document.querySelector('.not-delivery')

    deliveryButtons.forEach(onTabClick)

    function getTime() {
        let now = new Date().getHours()
        if (now >= 21 || now < 8) notDelivery.classList.add('active')
        else notDelivery.classList.remove('active')
        console.log(now)
    }

    getTime()

    function onTabClick(item) {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            let currentBtn = item
            let tabId = currentBtn.getAttribute('data-tab')
            let currentTab = document.querySelector(tabId)
            if (tabId === '#tab_1') deliveryTime.classList.add('active')
            if (tabId === '#tab_2') deliveryTime.classList.remove('active')

            if (!currentBtn.classList.contains('active')) {
                deliveryButtons.forEach(item => {
                    item.classList.remove('active')
                })
                deliveryItems.forEach(item => {
                    item.classList.remove('active')
                })

                currentBtn.classList.add('active')
                currentTab.classList.add('active')
            }
        })
    }

    document.querySelector('.order__delivery-button').click()


}
