if (document.querySelector('.menu')) {
    const allLinks = document.querySelectorAll('.menu__container ul li');
    const allDropDownLinks = document.querySelectorAll('.menu__container ul li .menu__drop-down .menu__drop-down-item');

    allLinks.forEach(function(item) {
        item.querySelector('main').addEventListener('click', function() {
            item.classList.toggle('active');
        })
    })

    allDropDownLinks.forEach(function(item) {
        item.querySelector('.menu__drop-down-item-btn').addEventListener('click', function() {
            item.classList.toggle('active');
        });
    })
}