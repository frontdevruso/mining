if(document.querySelector('.equipment-slider')) {
    let swiperEquipment = new Swiper(".equipment-slider", {
        spaceBetween: 20,
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
}