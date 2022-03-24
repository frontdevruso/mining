let productsSlider = new Swiper(".products-slider__table", {
    spaceBetween: 20,
    slidesPerView: 1,

    pagination: {
        el: ".products-slider-fraction",
        clickable: true,
        type: "fraction",
    },

    navigation: {
        nextEl: ".products-slider--next",
        prevEl: ".products-slider--prev",
    },
});