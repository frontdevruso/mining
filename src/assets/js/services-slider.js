if(document.querySelector('.services__slider')) {
    const servicesNavBarSlider = document.querySelector('.services__slider-navBar');
    const navSliderBar = document.getElementById('navServicesSliderBar');
    const arrowsBtns = document.querySelectorAll('.services__slider-arrow');
    
    let servicesSlider = new Swiper(".services__slider", {
        spaceBetween: 400,
        slidesPerView: 1,
        allowTouchMove: false,

        pagination: {
            el: ".services__slider-fraction",
            clickable: true,
            type: "fraction",
        },
    });

    const arrowsCoolDown = () => {
        arrowsBtns.forEach(function(btn) {
            btn.disabled = true;
            setTimeout(function() { btn.disabled = false }, 500);
        });
    }

    const reassignmentActiveLine = (elementIndex) => {
        navSliderBar.querySelector('.active').classList.remove('active');
        navSliderBar.querySelector(' :nth-child(' + elementIndex +')').classList.add('active');
    }

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

    servicesSlider.on('slidePrevTransitionStart', function() {
        onPrevAddLine();
        arrowsCoolDown();
        reassignmentActiveLine(4);
    });
    
    servicesSlider.on('slideNextTransitionStart', function() {
        onNextAddLine();
        arrowsCoolDown();
        reassignmentActiveLine(5);
    });

    window.onresize = displayWindowSize;
    window.onload = displayWindowSize;

    function displayWindowSize() {
        let myWidth = window.innerWidth;
        if (myWidth <= 768) {
            let servicesSlider = new Swiper(".services__slider", {
                spaceBetween: 400,
                slidesPerView: 1,
                allowTouchMove: true,
            
                pagination: {
                    el: ".services__slider-fraction--mb",
                    clickable: true,
                    type: "fraction",
                },
            });
        }
    };
}