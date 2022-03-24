const filterBtn = document.getElementById('filterBtn');
const filterCloseBtn = document.getElementById('closeBtn');
const filterPanel = document.getElementById('filterPanel');

if (filterPanel) {
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.add('store__wrapper-filters-panel--open');
        document.querySelector('body').classList.add('f-open');
    });

    filterCloseBtn.addEventListener('click', function() {
        filterPanel.classList.remove('store__wrapper-filters-panel--open');
        document.querySelector('body').classList.remove('f-open');
    });
}