const date = new Date();

const renderCalendar = () => {
    date.setDate(1);
    const monthDays = document.querySelector(".calendar__days");
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const firstDayIndex = date.getDay();
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    const nextDays = 7 - lastDayIndex - 1;
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
    document.querySelector(".calendar__date").innerHTML = months[date.getMonth()];
    let days = "";
    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="calendar__days-prev-date">${prevLastDay - x + 1}</div>`;
    }
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="calendar__days-next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }

    const totalDays = document.querySelectorAll(".calendar__days > div")
    const dateInput = document.querySelector('.date-input')
    const calendar = document.querySelector('.calendar')
    totalDays.forEach(item => pickTheDate(item))

    function pickTheDate(item) {
        item.addEventListener('click', e => {

            dateInput.value = `${e.target.textContent} ${declinationMonth(months[date.getMonth()])} ${date.getFullYear()}`
            calendar.classList.remove('active')
        })
    }
};

function declinationMonth(word) {
    let newWord = ''
    const months = {
        'Январь': 'Января',
        'Февраль': 'Февраля',
        'Март': 'Марта',
        'Апрель': '',
        'Май': 'Мая',
        'Июнь': 'Июня',
        'Июль': 'Июля',
        'Август': 'Августа',
        'Сентябрь': 'Сентября',
        'Октябрь': 'Октября',
        'Ноябрь': 'Ноября',
        'Декабрь': 'Декабря',
    }
    newWord = months[word]
    return newWord
}

document.querySelector(".prev-month").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next-month").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});
renderCalendar()

export {renderCalendar}