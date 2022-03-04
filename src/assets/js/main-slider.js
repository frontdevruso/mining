let mainSlider = new Swiper('.main-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 10,
});

mainSlider.on('slidePrevTransitionStart', function() {
 console.log('Prev slide');
});

mainSlider.on('slideNextTransitionStart', function() {
 console.log('Next slide');
});