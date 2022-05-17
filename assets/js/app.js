const blogItemTitle = document.querySelectorAll('.main-slider__item-info p');
const mapOnPageIOS = document.getElementById('map');

if (blogItemTitle) {
    blogItemTitle.forEach(function(item) {
        item.style.setProperty("-webkit-box-orient", "vertical");
    })
};

if (mapOnPageIOS) {
    mapOnPageIOS.addEventListener('click', function() {
        if(navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
            window.location.href = "https://yandex.ru/maps/10740/mytischi/house/novoslobodskaya_ulitsa_1/Z04YcQBoTkICQFtvfXVxeXpjYg==/?ll=37.778775%2C55.908606&z=17";
        }
    }, {once : true});
}

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const body = document.body;
    
    burger.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("isOpen");
        body.classList.toggle('m-open');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        const formPhone = document.querySelector('[data-validate-field="tel"]');
        const formName = document.querySelector('[data-validate-field="name"]');
        const formMail = document.querySelector('[data-validate-field="mail"]');
        const formCheckbox = document.querySelector('[data-validate-field="checkbox"]');
        const formCheckboxWrapper = document.querySelector('#policyCheckboxWrapper');
    
        const formAllInput = document.querySelectorAll('[data-validate-field]');
        const contactFormSubmitBtn = document.getElementById('contactFormBtn');
    
        let regx = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
        
        formAllInput.forEach(function(item) {
            item.addEventListener('focus', function() {
                item.classList.remove('g-input-error');
                item.classList.remove('policy-error');
            })
        });
        
        formCheckbox.addEventListener('change', function() {
            if(this.checked) {
                formCheckboxWrapper.classList.remove('policy-error');
            }
        });

        const thankYou = () => document.querySelector('.thx__message h2 span').innerHTML = `, ${formName.value}`;
    
        contactFormSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            let errCount = 0;
            const formCheckbox = document.querySelector('[data-validate-field="checkbox"]');

            if (formName.value.length === 0) {
                formName.classList.add('g-input-error');
                errCount++;
            } else { formName.classList.remove('g-input-error') }

            if (formMail.value.length === 0 || !regx.test(formMail.value)) {
                formMail.classList.add('g-input-error');
                errCount++;
            } else { formMail.classList.remove('g-input-error') }
    
            if (formPhone.value.length >= 24 || formPhone.value.length === 0 || formPhone.value.length < 15) {
                formPhone.classList.add('g-input-error');
                errCount++;
            } else { formPhone.classList.remove('g-input-error') }

            if (formCheckbox.checked == false) {
                errCount++;
                formCheckboxWrapper.classList.add('policy-error');
            } else { formCheckbox.classList.remove('policy-error') }

            if (errCount === 0) {
                document.querySelector('.card360deg').classList.add('card360deg--active');
                thankYou();
                // HERE YOU CAN ADD A AJAX REQUEST TO SEND THE FORM
                console.log(errCount);
            }
        });
    }
});

if (document.querySelector('.cookies')) {
    document.getElementById('cookiesBtn').addEventListener('click', function() {
        document.querySelector('.cookies').classList.add('cookies--hidden');
    });
}

const rsDepth = document.querySelector(".rs-Depth");
const inputDepthSliderFirst = document.querySelector(".input-depth--first");
const inputDepthSliderSecond = document.querySelector(".input-depth--second");
const inputDepthSliderLimitMin = document.querySelector(".range-slider--depth .range-slider__limits .min");
const inputDepthSliderLimitMax = document.querySelector(".range-slider--depth .range-slider__limits .max");

const inputsDepthSlider = [inputDepthSliderFirst, inputDepthSliderSecond];

if (rsDepth) {
  noUiSlider.create(rsDepth, {
    start: [60, 1600],
    connect: true,
    step: 5,
    margin: 200,
    range: {
      min: [60],
      max: [1600]
    }
  });
  
  rsDepth.noUiSlider.on("update", function(values, handle) {
    inputsDepthSlider[handle].value = Math.round(values[handle]);
  
    function setSliderHandle(i, value) {
      var r = [null, null];
      r[i] = value;
      rsDepth.noUiSlider.set(r);
    }
  
    inputsDepthSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });
  
  inputsDepthSlider.forEach(function(input) {input.value = ""});
  inputDepthSliderLimitMin.innerHTML = Number(Math.round(rsDepth.noUiSlider.get()[0]));
  inputDepthSliderLimitMax.innerHTML = Number(Math.round(rsDepth.noUiSlider.get()[1]));
}

const rsDiameter = document.querySelector(".rs-Diameter");
const inputDiameterSliderFirst = document.querySelector(".input-diameter--first");
const inputDiameterSliderSecond = document.querySelector(".input-diameter--second");
const inputDiameterSliderLimitMin = document.querySelector(".range-slider--diameter .range-slider__limits .min");
const inputDiameterSliderLimitMax = document.querySelector(".range-slider--diameter .range-slider__limits .max");

const inputsDiameterSlider = [inputDiameterSliderFirst, inputDiameterSliderSecond];

if (rsDiameter) {
  noUiSlider.create(rsDiameter, {
    start: [1.2, 6],
    connect: true,
    step: 0.1,
    margin: 0.5,
    range: {
      min: [1.2],
      max: [6]
    }
  });
  
  rsDiameter.noUiSlider.on("update", function(values, handle) {
    inputsDiameterSlider[handle].value = values[handle];
  
    function setSliderHandle(i, value) {
      let r = [null, null];
      r[i] = value;
      rsDiameter.noUiSlider.set(r);
    }
  
    inputsDiameterSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });

  let rgx = /(?=\B(?:\d{3})+(?!\d))/g;
  inputsDiameterSlider.forEach(function(input) {input.value = ""});
  inputDiameterSliderLimitMin.innerHTML = Number(rsDiameter.noUiSlider.get()[0]).toFixed(1).toString().replace( rgx, ' ' ).replace('.', ',');
  inputDiameterSliderLimitMax.innerHTML = Number(rsDiameter.noUiSlider.get()[1]).toFixed(1).toString().replace( rgx, ' ' ).replace('.', ',');
}

let swiperEquipment = new Swiper(".equipment-slider", {
    spaceBetween: 20,
    autoHeight: true,

    pagination: {
        el: ".equipment-slider-fraction",
        clickable: true,
        type: "fraction",
    },

    navigation: {
        nextEl: ".equipment-slider--next",
        prevEl: ".equipment-slider--prev",
    },
});

const filterBtn = document.getElementById('filterBtn');
const filterCloseBtns = document.querySelectorAll('.store-close-filter-btn');
const filterPanel = document.getElementById('filterPanel');
const filterSettings = document.querySelectorAll('.store__wrapper-filters ul li');

if (filterPanel) {
    filterBtn.addEventListener('click', function() {
        filterPanel.classList.add('store__wrapper-filters-panel--open');
        document.querySelector('body').classList.add('f-open');
    });
    
    filterCloseBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            filterPanel.classList.remove('store__wrapper-filters-panel--open');
            document.querySelector('body').classList.remove('f-open');
        });
    })

    filterSettings.forEach(function(item) {
        item.querySelector('button').addEventListener('click', function() {
            item.classList.remove('active');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.noUi-handle').forEach(function(rangeBtn) {
            rangeBtn.addEventListener('touchstart', function() { this.classList.add('active') })
            rangeBtn.addEventListener('touchend', function() { this.classList.remove('active') })
        });
    })

    document.addEventListener('DOMSubtreeModified', function() {
        console.log('DOMSubtreeModified');
    })
}

const tels = document.querySelectorAll("input[type=\"tel\"]");

tels.forEach(el => {
    IMask(el, { mask: "+ {0} (000) 000 00 000 00" });
});

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

document.addEventListener("DOMContentLoaded", () => {
    const allLangSwitchers = document.querySelectorAll('[data-language-switcher]');
    const enBtns = document.querySelectorAll('.lang-switcher__btn--en');
    const ruBtns = document.querySelectorAll('.lang-switcher__btn--ru');

    enBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
           allLangSwitchers.forEach(function(switcher) {
               switcher.setAttribute('data-language-switcher', 'en');
               // HERE SHOULD BE THE CODE WHICH WILL CHANGE LANGUAGE TO English
           });
        });
    })

    ruBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
           allLangSwitchers.forEach(function(switcher) {
               switcher.setAttribute('data-language-switcher', 'ru');
               // HERE SHOULD BE THE CODE WHICH WILL CHANGE LANGUAGE TO Russian
           });
        });
    })
});

const observer = lozad('.lozad', {
    loaded: function(img) {
        img.addEventListener('load', function() {
            img.classList.add('loaded');
        });
        
        if(img.hasAttribute('data-background-image')) {
            img.classList.add('loaded');
        };
    },
});


observer.observe();

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

    document.addEventListener('DOMContentLoaded', function() {
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
                        350: {
                            slidesPerView: "auto",
                            spaceBetween: 50,
                        },

                        320: {
                            slidesPerView: 1,
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
    })
} 

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

const allPrivacyBtns = document.querySelectorAll('[data-article]');
const allArticles = document.querySelectorAll('.privacy__articles article');
if (allPrivacyBtns) {
    allPrivacyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            allPrivacyBtns.forEach(function(everyBtn) { everyBtn.classList.remove('active')});
            btn.classList.add('active');
            allArticles.forEach(function(everyBtn) { everyBtn.classList.remove('active')});
            document.getElementById(`${this.getAttribute('data-article')}`).classList.add('active');
        });
    });
}

const rsPower = document.querySelector(".rs-power");
const inputPowerSlider = [document.querySelector(".input-power")];

if (rsPower) {
  noUiSlider.create(rsPower, {
    start: 20,
    connect: 'lower',
    step: 5,
    range: {
        'min': 250,
        'max': 5250
    }
  });
  
  rsPower.noUiSlider.on('update', function (values, handle) {
    inputPowerSlider[handle].value = Math.round(values[handle]);
  
    function setSliderHandle(i, value) {
      var r = [null, null];
      r[i] = value;
      rsPower.noUiSlider.set(r);
    }
  
    inputPowerSlider.forEach(function(input, handle) {
      input.addEventListener("change", function() {setSliderHandle(handle, this.value)});
    });
  });

  inputPowerSlider.forEach(function(input) {input.value = ""});
}

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

if (document.querySelector('.search-bar__hints')) {
    const searchHintsContainer = document.querySelector('.search-bar__hints');
    const searchInput = document.querySelector('.search-bar input');
    const searchProducts = document.querySelectorAll('.search-bar__hints button');

    searchInput.addEventListener('focus', function() {
        searchHintsContainer.classList.add('active');
    })

    searchInput.addEventListener('blur', function() {
        searchHintsContainer.classList.remove('active');
    })

    searchProducts.forEach(function(product) {
        product.addEventListener('click', function() {
            const productTitle = this.getAttribute('data-product-title')
            searchInput.value = productTitle;
        });
    })
}

const selectItems = document.querySelectorAll('.partners__select-item');

if(selectItems) {
    selectItems.forEach(function(item) {
        item.addEventListener('click', function() {
            selectItems.forEach(function(item) { item.classList.remove('active')} )
            item.classList.add('active');
        });
    })
}

// WITH Placeholder

const selectBoxBlog = document.querySelector('.select-box');
if (selectBoxBlog) {
    const optionsContainer = document.getElementById("optionsContainerBlog");
    const selected = document.getElementById("selectBoxCurrentBlog");
    const selectArrow = document.getElementById("selectBoxArrowBlog");
    const optionsList = document.querySelectorAll(".option");

    document.addEventListener('click', (event) => {
        let isClickInsideElement = selected.contains(event.target); 
        if (!isClickInsideElement) {
            optionsContainer.classList.remove("active");
            selectArrow.classList.remove("select-box-arrow-opened");
            selected.classList.remove("select-box-current--open");
        }
    });

    selected.addEventListener("click", () => {
        optionsContainer.classList.toggle("active");
        selectArrow.classList.toggle("select-box-arrow-opened");
        selected.classList.toggle("select-box-current--open");
    });

    optionsList.forEach(o => {
        o.addEventListener("click", () => {
            hasSelected = false;
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
            selectArrow.classList.remove("select-box-arrow-opened");
        });
    });
}

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
        
        navigation: {
            nextEl: ".services__slider-arrow--next",
            prevEl: ".services__slider-arrow--prev",
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

                
                navigation: {
                    nextEl: ".services__slider-arrow--next",
                    prevEl: ".services__slider-arrow--prev",
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
        }
    };
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
if (smoothLinks) {
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');
    
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };
}

if (document.getElementById('achievement')) {
    $(window).on('load', function() {
        $('#achievement').vide('./assets/images/about-background.mp4');
    });
}