const blogItemTitle = document.querySelectorAll('.main-slider__item-info p');

if (blogItemTitle) {
    blogItemTitle.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
}