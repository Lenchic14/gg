;(function() {
  if (typeof ymaps === 'undefined') {
    return;
  }

  ymaps.ready(function () {
    var myMap = new ymaps.Map('ymap', {
            center: [54.72503, 55.942459],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'г. Уфа, Карла Маркса, 12'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../img/common/marker.svg',
            iconImageSize: [40, 63.2],
            iconImageOffset: [-50, -38]
        });

    myMap.geoObjects.add(myPlacemark);
});


})();