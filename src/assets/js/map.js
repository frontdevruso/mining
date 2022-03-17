let center = [55.908606, 37.778775];

function init() {
    //eslint-disable-next-line
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 15,
        controls: []
    });

    //eslint-disable-next-line
    let placemark = new ymaps.Placemark(center, {
        balloonContent: null,
    }, {
        iconLayout: "default#image",
        iconImageHref: "./assets/images/map-marker.webp",
        iconImageSize: [28, 37],
    });

    map.geoObjects.add(placemark);
}

window.ymaps?.ready(init);