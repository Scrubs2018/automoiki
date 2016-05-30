if ($('#map').length) {
    function show_markers() {

        var myCollection = new ymaps.GeoObjectCollection();
        var myGeoObjects = [];
        $('.mps').each(function(indx, el) {
            var lng = $(el).data('lng');
            var lat = $(el).data('lat');
            var baloon = $(el).data('baloon');
            var vip = $(el).data('vip');

            var img = (vip) ? '/files/img/map-marker-vip.png' : '/files/img/map-marker.png';
            if (lng && lat) {
                myGeoObjects[indx] = new ymaps.Placemark([lng, lat], { // Создаем метку с такими координатами и суем в переменную
                    balloonContent: '<div class="m-baloon">' + baloon + '<span class="close"></span></div>'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: img,
                    iconImageSize: [37, 54],
                    iconImageOffset: [-32, -64],
                });
                // myMap.geoObjects.add(myGeoObjects[indx]);

                // 		myGeoObjects[indx].events.add('click', function(e) {
                // 			updateBookingButtons();
                // 		});

                myCollection.add(myGeoObjects[indx]);

            }

        });

        myMap.geoObjects.add(myCollection);
        myMap.setBounds(myCollection.getBounds());
        if (myMap.getZoom() > 17) {
            myMap.setZoom(17);
        }


    }
    var myMap;
    ymaps.ready(function() {
        myMap = new ymaps.Map("map", {
            center: [53.89, 27.32],
            zoom: 7
        });
        show_markers();
    });
};

(function() {
    $('.b-where-i').click(function() {

        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            var center = latitude + ',' + longitude;

            console.log(center);

            myMap.setCenter([latitude, longitude], 13);

            var mark = new ymaps.Placemark([latitude, longitude], {

            }, {
                iconLayout: 'default#image',
    			iconImageHref: '/files/img/map-marker-men.png',
    			iconImageSize: [37, 54]
            });

            myMap.geoObjects.add(mark);

            return false;
        });
    })
})();
