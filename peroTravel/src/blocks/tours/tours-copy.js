// const toursItems = document.querySelectorAll('.tours__content')
// const pagination = document.querySelector('.pagination')
// const notesOnPage = 4
// const items = [{}, {}, {}, {}, {}, {}]
// let countOfItems = Math.ceil(items.length / notesOnPage)
// let pages = []
// for (let i = 1; i <= countOfItems; i++) {
//     let li = document.createElement('li')
//     li.innerHTML = i
//     pagination.appendChild(li)
//     pages.push(li)
// }
// toursItems.forEach(item => {
//     const constItems = item.getElementsByTagName('li')
//     if (item.classList.contains('hide')) return
//     pages.forEach(page => {
//         page.addEventListener('click', function () {
//             let active = document.querySelector('.pagination li.active')
//             if (active) active.classList.remove('active')
//             this.classList.add('active')
//             let pageNum = +this.innerHTML
//             /*
//             *  1page - 0 - 3
//             *  2page - 3 - 7
//             *  3page - 7 - 11
//             *  4page - 11 - 15
//             * */
//             let start = (pageNum - 1) * notesOnPage
//             let end = start + notesOnPage
//             let notes = items.slice(start, end)
//             console.log(notes.length)
//             item.innerHTML = ''
//             for (let note in notes) {
//                 const node = document.createRange().createContextualFragment(renderPages())
//                 item.appendChild(node)
//             }
//         })
//     })
//
// })
//
// function renderPages() {
//     return `
//      <li class="tours__item">
//                 <div class="tours__item-img">
//                     <img src="./images/tour.jpg" alt="tour">
//                 </div>
//                 <div class="tours__item-info">
//                     <p class="tours__item-title">Автобусный тур</p>
//                     <p class="tours__item-subtitle">Золотое кольцо Абхазии (из Адлера)</p>
//                     <div class="tours__item-data">
//                         <div class="tours__item-price-block">
//                             <p class="tours__item-adult-price">1 618 ₽</p>
//                             <p class="tours__item-adult-title">Взрослый билет</p>
//                         </div>
//                         <div class="tours__item-price-block">
//                             <p class="tours__item-child-price">1 412 ₽</p>
//                             <p class="tours__item-child-title">Детский билет</p>
//                         </div>
//                         <p class="tours__item-duration">2,5 часа</p>
//                     </div>
//                     <p class="tours__item-text">
//                         Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер
//                         (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию
//                         осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без
//                         пересадок...
//                     </p>
//                     <div class="tours__item-bottom">
//                         <button type="button" class="tours__item-button button-small">Подробнее</button>
//                         <div class="tours__item-favorite">
//                             <img src="./images/favorite.svg" alt="">
//                         </div>
//                     </div>
//                 </div>
//             </li>
//     `
// }