const filterBtn = document.getElementById('filterBtn');
const filterCloseBtns = document.querySelectorAll('.store-close-filter-btn');
const filterPanel = document.getElementById('filterPanel');

if (filterPanel) {
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.add('store__wrapper-filters-panel--open');
        document.querySelector('body').classList.add('f-open');
    });
    
    filterCloseBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterPanel.classList.remove('store__wrapper-filters-panel--open');
            document.querySelector('body').classList.remove('f-open');
        });
    })
}