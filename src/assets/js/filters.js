const filterBtn = document.getElementById('filterBtn');
const filterCloseBtns = document.querySelectorAll('.store-close-filter-btn');
const filterPanel = document.getElementById('filterPanel');
const filterSettings = document.querySelectorAll('.store__wrapper-filters ul li');

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

    filterSettings.forEach(function(item) {
        item.querySelector('button').addEventListener('click', function() {
            item.classList.remove('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.noUi-handle').forEach(function(rangeBtn) {
            rangeBtn.addEventListener('touchstart', function() { this.classList.add('active') })
            rangeBtn.addEventListener('touchend', function() { this.classList.remove('active') })
        });
    })

    document.addEventListener('DOMSubtreeModified', function() {
        console.log('DOMSubtreeModified');
    })
}