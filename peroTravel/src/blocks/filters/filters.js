import {renderCalendar} from "../calendar/caledndar";

let state = 'bus'

if (window.location.pathname === '/indexT.html') {
    console.log(window.location.pathname.indexOf('/indexT.html'))
    const filterBox = document.querySelectorAll('.tours__content');
    const filterButtons = document.querySelectorAll('.filters__tour')
    const filterButton = document.querySelector('.filters__submit')
    const calendarButton = document.querySelector('.filters__date')
    const calendar = document.querySelector('.calendar')

    calendarButton.addEventListener('click', e => {
        e.target.classList.toggle('active')
        calendar.classList.toggle('active')
        if (e.target.classList.contains('active')) renderCalendar()
    })
    document.querySelector('.filters__tours-navigation').addEventListener('click', (event) => {
        if (event.target.tagName !== 'LI') return false;
        state = event.target.dataset['filter']
        filterButton.addEventListener('click', e => {
            filterBox.forEach(elem => {
                elem.classList.remove('hide');
                if (!elem.classList.contains(state)) elem.classList.add('hide');
            });
        })
        filterButtons.forEach(item => {
            item.classList.remove('active')
        })
        event.target.classList.add('active')
    });

}
export const getState = () => {
    console.log(state)
    return {
        "state": state
    }
}