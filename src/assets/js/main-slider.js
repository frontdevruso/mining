if (document.querySelector('.main-slider')) {    
    const gear = document.getElementById('gear');

    let mainSlider = new Swiper('.main-slider', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 120,
        speed: 600,
    
        pagination: {
            el: ".main-slider__navigation-fraction",
            clickable: true,
            type: "fraction",
        },

        navigation: {
            nextEl: ".main-slider__navigation-arrow--prev",
            prevEl: ".main-slider__navigation-arrow--next",
        },
        breakpoints: {
            575: {
                direction: 'vertical',
            },
        }
    });

    mainSlider.on('slidePrevTransitionStart', function() {
        const currentPosition = document.getElementById('gear').getAttribute('data-position');
        const newPosition = Number(currentPosition) + 35;
        gear.setAttribute('data-position', Number(currentPosition) + 35);
        gear.style.transform = "rotate(" + newPosition + "deg)";
    });
    
    mainSlider.on('slideNextTransitionStart', function() {
        const currentPosition = document.getElementById('gear').getAttribute('data-position');
        const newPosition = Number(currentPosition) + -35;
        gear.setAttribute('data-position', Number(currentPosition) + -35);
        gear.style.transform = "rotate(" + newPosition + "deg)";
    });
}