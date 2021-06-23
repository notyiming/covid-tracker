function initMap() {
    var mapOptions = {
        zoom: 3,
        center: new google.maps.LatLng(20, 0),
        mapTypeId: 'satellite'
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}