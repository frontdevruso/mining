if (document.querySelector('.main-slider')) {    
    let mainSlider = new Swiper('.main-slider', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 120,
    
        pagination: {
            el: ".main-slider__navigation-fraction",
            clickable: true,
            type: "fraction",
        },

        navigation: {
            nextEl: ".main-slider__navigation-arrow--prev",
            prevEl: ".main-slider__navigation-arrow--next",
        },
    });

    mainSlider.on('slidePrevTransitionStart', function() {
        console.log('Prev slide');
    });
    
    mainSlider.on('slideNextTransitionStart', function() {
        console.log('Next slide');
    });
}