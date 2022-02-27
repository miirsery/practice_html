if (window.location.pathname === '/indexT.html') {
    let inputLeft = document.getElementById("input-left");
    let inputRight = document.getElementById("input-right");

    let thumbLeft = document.querySelector(".slider > .thumb.left");
    let thumbRight = document.querySelector(".slider > .thumb.right");
    let range = document.querySelector(".slider > .range");

    let inputLeftValue = document.querySelector(".aside__input-price-left");
    let inputRightValue = document.querySelector(".aside__input-price-right");

    const countPeople = document.querySelector('.aside__people-tabs')

    const asideBlockTop = document.querySelectorAll('.aside__field-title')

    const resetButton = document.querySelector('.aside__button-reset')
    resetButton.addEventListener('click', e => {
        e.preventDefault()
        document.querySelectorAll('.active').forEach(item => {
            item.classList.remove('active')
        })
    })
    asideBlockTop.forEach(item => {
        item.addEventListener('click', e => {
            e.target.classList.toggle('hidden')
            let currentTab = e.target.closest('.aside__field')
            if (currentTab) {
                currentTab.querySelector('.aside__field-content').classList.toggle('sneak')
            }
        })
    })
    countPeople.addEventListener('click', (e) => {
        const countPeopleButtons = countPeople.getElementsByTagName('input')
        const array = [...countPeopleButtons]
        array.forEach(button => {
            button.classList.remove('active')
        })
        e.target.classList.add('active')
    })

    function setLeftValue() {
        let _this = inputLeft,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
        let percent = ((_this.value - min) / (max - min)) * 100;
        inputLeftValue.value = _this.value

        thumbLeft.style.left = percent + "%";
        range.style.left = percent + "%";
    }

    setLeftValue();

    function setRightValue() {
        let _this = inputRight,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
        let percent = ((_this.value - min) / (max - min)) * 100;
        inputRightValue.value = _this.value
        thumbRight.style.right = (100 - percent) + "%";
        range.style.right = (100 - percent) + "%";
    }

    setRightValue();
    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
}
