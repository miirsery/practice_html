import {getState} from '../filters/filters'

if (window.location.pathname === '/indexT.html') {
    const toursItems = document.querySelectorAll('.tours__content')
    const pagination = document.querySelector('.pagination')
    const notesOnPage = 4

    const items = [
        {
            title: 'Автобусный тур',
        }, {}, {}, {}, {}, {}
    ]
    let countOfItems = Math.ceil(items.length / notesOnPage)
    let pages = []

    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li')
        li.innerHTML = i
        pagination.appendChild(li)
        pages.push(li)
    }
    toursItems.forEach(item => {
        showPage(pages[0], item)


        if (item.classList.contains('hide')) return
        pages.forEach(page => {
            page.addEventListener('click', function () {
                showPage(this, item)
            })
        })
    })
    const favoriteButton = document.querySelectorAll('.tours__item-favorite')
    favoriteButton.forEach(item => {
        item.addEventListener('click', e => {
            e.target.classList.toggle('active')
            if (e.target.classList.contains('active')) {
                let currentFavorite = e.target.firstElementChild.firstElementChild
                currentFavorite.style.stroke = '#0499DD'
                currentFavorite.style.fill = 'transparent'
                e.target.firstElementChild.children[1].style.stroke = '#0499DD'
            }
            if (!e.target.classList.contains('active')) {
                let currentFavorite = e.target.firstElementChild.firstElementChild
                currentFavorite.style.stroke = '#EDEDED'
                currentFavorite.style.fill = '#EDEDED'
                e.target.firstElementChild.children[1].style.stroke = '#D4D4D4'
            }
        })
    })

    function showPage(item, page) {
        let active = document.querySelector('.pagination li.active')
        if (active) active.classList.remove('active')
        item.classList.add('active')
        let pageNum = +item.innerHTML
        let start = (pageNum - 1) * notesOnPage
        let end = start + notesOnPage
        let notes = items.slice(start, end)
        page.innerHTML = ''
        for (let note in notes) {
            const node = document.createRange().createContextualFragment(renderPages(getState()))
            page.appendChild(node)
        }
    }


    function renderPages(title) {
        return `
     <li class="tours__item">
                <div class="tours__item-img">
                    <img src="./images/tour.jpg" alt="tour">
                </div>
                <div class="tours__item-info">
                    <p class="tours__item-title">${title}</p>
                    <p class="tours__item-subtitle">Золотое кольцо Абхазии (из Адлера)</p>
                    <div class="tours__item-data">
                        <div class="tours__item-price-block">
                            <p class="tours__item-adult-price">1 618 ₽</p>
                            <p class="tours__item-adult-title">Взрослый билет</p>
                        </div>
                        <div class="tours__item-price-block">
                            <p class="tours__item-child-price">1 412 ₽</p>
                            <p class="tours__item-child-title">Детский билет</p>
                        </div>
                        <p class="tours__item-duration">2,5 часа</p>
                    </div>
                    <p class="tours__item-text">
                        Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер
                        (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию
                        осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без
                        пересадок...
                    </p>
                    <div class="tours__item-bottom">
                        <button type="button" class="tours__item-button button-small">Подробнее</button>
                        <div class="tours__item-favorite">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#EDEDED"/>
<path class="currentPath" d="M28.8401 12.61C28.3294 12.099 27.7229 11.6936 27.0555 11.4171C26.388 11.1405 25.6726 10.9982 24.9501 10.9982C24.2276 10.9982 23.5122 11.1405 22.8448 11.4171C22.1773 11.6936 21.5709 12.099 21.0601 12.61L20.0001 13.67L18.9401 12.61C17.9084 11.5783 16.5092 10.9987 15.0501 10.9987C13.5911 10.9987 12.1918 11.5783 11.1601 12.61C10.1284 13.6417 9.54883 15.041 9.54883 16.5C9.54883 17.959 10.1284 19.3583 11.1601 20.39L12.2201 21.45L20.0001 29.23L27.7801 21.45L28.8401 20.39C29.3511 19.8792 29.7565 19.2728 30.033 18.6053C30.3096 17.9379 30.4519 17.2225 30.4519 16.5C30.4519 15.7775 30.3096 15.0621 30.033 14.3946C29.7565 13.7272 29.3511 13.1208 28.8401 12.61V12.61Z" stroke="#D4D4D4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                        </div>
                    </div>
                </div>
            </li>
    `
    }
}
