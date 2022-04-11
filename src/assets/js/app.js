const blogItemTitle = document.querySelectorAll('.main-slider__item-info p');
const mapOnPage = document.getElementById('map');

if (blogItemTitle) {
    blogItemTitle.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
};

if (mapOnPage) {
    mapOnPage.addEventListener('click', function() {
        if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            window.location.href = "https://yandex.ru/maps/10740/mytischi/house/novoslobodskaya_ulitsa_1/Z04YcQBoTkICQFtvfXVxeXpjYg==/?ll=37.778775%2C55.908606&z=17";
        }
    }, {once : true});
}