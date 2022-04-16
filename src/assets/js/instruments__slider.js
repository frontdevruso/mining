let instrumentSlider = new Swiper(".instruments__slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    allowTouchMove: true,

    pagination: {
        el: ".instruments__slider-fraction",
        clickable: true,
        type: "fraction",
    },
    
    navigation: {
        nextEl: ".instruments__slider--next",
        prevEl: ".instruments__slider--prev",
    },
});