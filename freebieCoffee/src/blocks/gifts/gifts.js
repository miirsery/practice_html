document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelector('.tabs')
    const tabsBtn = document.querySelectorAll('.tabs__btn')
    const tabsContent = document.querySelectorAll('.tabs__block');
    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => {el.classList.remove('tabs__btn--active')});
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
                tabsHandler(tabsPath);
            }
        })
    }
    const tabsHandler = (path) => {
        tabsContent.forEach(el => {
            el.classList.remove('tabs__block--active')
        });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__block--active');
    };
})
