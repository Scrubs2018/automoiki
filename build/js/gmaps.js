create_map();

function create_map() {

    var markers_ = [];
    if ($('.b-map').length) {
        var mark = $('.b-map').data('center');
        var image = $('.b-map').data('marker');
        var settings = {
            zoom: 10,
            icon: image,
            center: new google.maps.LatLng(mark),
            mapTypeControl: true,
            zoomControl: true,
            navigationControl: true,
            scrollwheel: true,
        };
        window.map_ = new google.maps.Map(document.getElementById('map'), settings);

    };

    for (i in markers_) {
        markers_[i].setMap(null);
    }

    var bounds = new google.maps.LatLngBounds();

    $('.mps').each(function() {

        var lat = $(this).data('lng');
        var lng = $(this).data('lat');
        var baloon = $(this).data('baloon');
        var vip = $(this).data('vip');
        var id = $(this).index();
        var image = (vip) ? '/files/img/map-marker-vip.png' : '/files/img/map-marker.png';

        if (lat && lng) {

            var myLatLng = new google.maps.LatLng(lat, lng);
            bounds.extend(myLatLng);

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: window.map_,
                icon: image
            });

            var infowindow = new google.maps.InfoWindow({
                content: baloon
            });
            markers_[id] = marker;

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map_, marker);
            });
        }
    });
    map_.fitBounds(bounds);
};
(function() {
    $('.b-where-i').click(function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            map_.setCenter(new google.maps.LatLng(latitude, longitude));
            map_.setZoom(13);

            var myLatLng = new google.maps.LatLng(latitude, longitude);
            var marker = new google.maps.Marker({
                position: myLatLng,
                map: window.map_,
                icon: '/files/img/map-marker-men.png'
            });


            return false;
        });
    });
})();
