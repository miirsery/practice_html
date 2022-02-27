if (window.location.toString().indexOf('faqPage.html') > 0) {
    const faqLeft = document.querySelector('.faq__left')
    console.log('work')
    faqLeft.addEventListener('click', function (e) {
        if (e.target.classList.contains('faq__item-title')) {
            toggleAsk(e.target)
        }
    })

    function toggleAsk(ask) {
        let answer = ask.parentNode.querySelector('.faq__item-content')
        let arrow = ask.querySelector('.faq__item-arrow')
        console.log(arrow)
        if (answer.classList.contains('active')) {
            let animate = answer.animate([
                {opacity: 1},
                {opacity: 0},
            ], {duration: 500})

            animate.addEventListener('finish', function () {
                answer.classList.remove('active')
                arrow.style.transform = 'rotate(0deg)'
            })
        } else {
            answer.classList.add('active')
            arrow.style.transform = 'rotate(180deg)'
        }
    }


}