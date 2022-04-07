if (document.querySelector('.charts')) {
    const showOnScroll = (elem) => {
        $(window).scroll(function() {
            let hT = $(`#${elem}`).offset().top,
                hH = $(`#${elem}`).outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
            if (wS > (hT+hH-wH)){
                document.getElementById(elem).classList.remove('chart-img-none');
            }
         });
    }
    
    showOnScroll('charImg1');
    showOnScroll('charImg2');
}