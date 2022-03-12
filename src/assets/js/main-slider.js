if (document.querySelector('.main-slider')) {    
    const gear = document.getElementById('gear');
    const navBar = document.getElementById('navBar');
    const arrowsBtns = document.querySelectorAll('.main-slider__navigation-arrow');

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

    const arrowsCoolDown = () => {
        arrowsBtns.forEach(function(btn) {
            btn.disabled = true;
            setTimeout(function() { btn.disabled = false }, 500);
        });
    }

    const reassignmentActiveLine = (elementIndex) => {
        navBar.querySelector('.active').classList.remove('active');
        navBar.querySelector(' :nth-child(' + elementIndex +')').classList.add('active');
    }

    const gearRotating = (deg) => {
        const currentPosition = document.getElementById('gear').getAttribute('data-position');
        const newPosition = Number(currentPosition) + deg;
        gear.setAttribute('data-position', Number(currentPosition) + deg);
        gear.style.transform = "rotate(" + newPosition + "deg)";
    }

    const onPrevAddLine = () => {
        let newLine = document.createElement('span');
        newLine.classList.add('new-created');
        navBar.insertBefore(newLine, navBar.firstChild);
        setTimeout(function() {
            newLine.classList.remove('new-created');
        }, 100);

        navBar.lastElementChild.classList.add('new-created');
        setTimeout(function() {
            navBar.removeChild(navBar.lastElementChild);
        }, 400);
    }

    const onNextAddLine = () => {
        let newLine = document.createElement('span');
        newLine.classList.add('new-created');
        navBar.insertBefore(newLine, navBar.lastChild);
        setTimeout(function() {
            newLine.classList.remove('new-created');
        }, 100);

        navBar.firstElementChild.classList.add('new-created');
        setTimeout(function() {
            navBar.removeChild(navBar.firstElementChild);
        }, 400);
    }

    mainSlider.on('slidePrevTransitionStart', function() {
        gearRotating(35);
        onPrevAddLine();
        arrowsCoolDown();
        reassignmentActiveLine(4);
    });
    
    mainSlider.on('slideNextTransitionStart', function() {
        gearRotating(-35);
        onNextAddLine();
        arrowsCoolDown();
        reassignmentActiveLine(5);
    });
}