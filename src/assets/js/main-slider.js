const mainSlider = document.querySelector('.main-slider');

if (mainSlider) {
    const navSliderBar = document.getElementById('navMainSliderBar');

    const arrowNext = document.querySelector('.main-slider__navigation-arrow--next');
    const arrowPrev = document.querySelector('.main-slider__navigation-arrow--prev');

    const transparentNext = document.querySelector('.main-slider-transparent-arrow--next');
    const transparentPrev = document.querySelector('.main-slider-transparent-arrow--prev');

    const nextBtns = [arrowNext, transparentNext];
    const prevBtns = [arrowPrev, transparentPrev];
    
    const allBtns = [arrowNext, arrowPrev, transparentPrev, transparentNext];

    const allItems = document.querySelectorAll('.main-slider__item');

    const onPrevAddLine = () => {
        let newLine = document.createElement('span');
        newLine.classList.add('new-created');
        navSliderBar.insertBefore(newLine, navSliderBar.firstChild);
        setTimeout(function() {
            newLine.classList.remove('new-created');
        }, 100);

        navSliderBar.lastElementChild.classList.add('new-created');
        setTimeout(function() {
            navSliderBar.removeChild(navSliderBar.lastElementChild);
        }, 400);
    }

    const onNextAddLine = () => {
        let newLine = document.createElement('span');
        newLine.classList.add('new-created');
        navSliderBar.insertBefore(newLine, navSliderBar.lastChild);
        setTimeout(function() {
            newLine.classList.remove('new-created');
        }, 100);

        navSliderBar.firstElementChild.classList.add('new-created');
        setTimeout(function() {
            navSliderBar.removeChild(navSliderBar.firstElementChild);
        }, 400);
    }

    const gearRotating = (deg) => {
        const currentPosition = document.getElementById('gear').getAttribute('data-position');
        const newPosition = Number(currentPosition) + deg;
        gear.setAttribute('data-position', Number(currentPosition) + deg);
        gear.style.transform = "rotate(" + newPosition + "deg)";
    }

    const navDisabling = () => {
        if($('.main-slider__item--active').hasClass('main-slider__item--1')) {
            console.log($('.main-slider__item--active').hasClass('main-slider__item--1'));
        }
    }

    const arrowsCoolDown = () => {
        allBtns.forEach(function(btn) {
            btn.disabled = true;
            setTimeout(function() { btn.disabled = false }, 500);
        });
    }

    const reassignmentActiveLine = (elementIndex) => {
        navSliderBar.querySelector('.active').classList.remove('active');
        navSliderBar.querySelector(' :nth-child(' + elementIndex +')').classList.add('active');
    }

    const fractionPosition = () => {
        const current = document.querySelector('.swiper-pagination-current');
        const total = document.querySelector('.swiper-pagination-total');

        total.innerHTML = allItems.length;

        let currElem = $('.main-slider__item').filter('.main-slider__item--active');
        current.innerHTML = currElem.index() + 1;
    }

    const changeNextSlide = () => {
        $('.main-slider__item').each(function(index) {
            $(this).css('transform', $(this).prev().attr('data-transform'))
        });

        $('.main-slider__item--1').css('transform', $('.main-slider__item--8').attr('data-transform'));
        setTimeout(function() {
            $('.main-slider__item--active').next().addClass('main-slider__item--active').prev().removeClass('main-slider__item--active');
        }, 400)

        document.querySelectorAll('.main-slider__item').forEach(function(item) {
            item.setAttribute('data-transform', item.style.transform);
        });
    }

    const changePrevSlide = () => {
        $('.main-slider__item').each(function(index) {
            $(this).css('transform', $(this).next().attr('data-transform'))
        });

        $('.main-slider__item--8').css('transform', $('.main-slider__item--1').attr('data-transform'));
        setTimeout(function() {
            $('.main-slider__item--active').prev().addClass('main-slider__item--active').next().removeClass('main-slider__item--active');
        }, 100)

        document.querySelectorAll('.main-slider__item').forEach(function(item) {
            item.setAttribute('data-transform', item.style.transform);
        });
    }

    if ($(window).width() >= 768) {
        nextBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (!document.querySelector('.main-slider__item--active').classList.contains('main-slider__item--8')) {
                    gearRotating(-35);
                    onNextAddLine();
                    arrowsCoolDown();
                    reassignmentActiveLine(5);
                    fractionPosition();
                    
                    changeNextSlide();
                    let currElem = $('.main-slider__item').filter('.main-slider__item--active');
                    document.querySelector('.swiper-pagination-current').innerHTML = (currElem.index() + 1) + 1;

                    prevBtns.forEach(function(btn) {
                        btn.classList.remove('navigation-arrows--disabled');
                    })

                    if(currElem.index() + 2 === 8) {
                        nextBtns.forEach(function(btn) {
                            btn.classList.add('navigation-arrows--disabled');
                        })
                    }
                }
            });
        });
    
        prevBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (!document.querySelector('.main-slider__item--active').classList.contains('main-slider__item--1')) {
                    gearRotating(35);
                    onPrevAddLine();
                    arrowsCoolDown();
                    reassignmentActiveLine(4)
                    fractionPosition();

                    changePrevSlide();
                    let currElem = $('.main-slider__item').filter('.main-slider__item--active');
                    document.querySelector('.swiper-pagination-current').innerHTML = (currElem.index() + 1) - 1;

                    nextBtns.forEach(function(btn) {
                        btn.classList.remove('navigation-arrows--disabled');
                    })

                    if(currElem.index() === 1) {
                        prevBtns.forEach(function(btn) {
                            btn.classList.add('navigation-arrows--disabled');
                        })
                    }
                }
            });
        });
    }


    $(document).ready(function() {
        (function() {
            window.onresize = displayWindowSize;
            window.onload = displayWindowSize;
        
            function displayWindowSize() {
                let myWidth = window.innerWidth;
                if (myWidth <= 768) {
                    mainSlider.classList.add('swiper');
            
                    document.querySelectorAll('.main-slider__item').forEach(function(item) {
                        item.classList.add('swiper-slide');
                    });
            
                    let mainMbSlider = new Swiper('.main-slider', {
                        slidesPerView: 1,
                        spaceBetween: 30,
                        speed: 600,
    
                        breakpoints: {
                            450: {
                                slidesPerView: "auto",
                                spaceBetween: 30,
                            },
                          }
                    });
            
                    mainMbSlider.on('slidePrevTransitionStart', function() {
                        onPrevAddLine();
                        reassignmentActiveLine(4);
                    });
                    
                    mainMbSlider.on('slideNextTransitionStart', function() {
                        onNextAddLine();
                        reassignmentActiveLine(5);
                    });
                }
            };

            window.addEventListener('load', function () {
                $('.main-slider').css('opacity', '1');
            });
        })();
    })
} 