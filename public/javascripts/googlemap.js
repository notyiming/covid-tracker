function initMap() {
    var mapOptions = {
        zoom:5,
        maxZoom: 6,
        minZoom:3,
        center: new google.maps.LatLng(50, 10),
        disableDefaultUI: true,
        // mapId: "8e0a97af9386fef",
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "administrative.country",
                elementType: "geometry.stroke",
                stylers: [{ color: "#bf937e" }, {weight: 2}],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ]
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $.getJSON("https://corona.lmao.ninja/v3/covid-19/countries", function (data){
        for(let i = 0; i < data.length; i++){
            let lat = data[i].countryInfo.lat;
            let long = data[i].countryInfo.long;
            let content = "<h2>"+ data[i].country +"</h2>" +
                "<h5>Total Cases: "+ data[i].cases +"</h5>" +
                "<h5>New Cases: +"+ data[i].todayCases +"</h5>"
            let icon = {
                url:data[i].countryInfo.flag,
                scaledSize: new google.maps.Size(30,20)
            }
            addCountryMarker(lat, long,content, icon)
        }
    });



    function addCountryMarker(lat, long, content, icon){
        var marker = new google.maps.Marker({
            position:{lat:lat,lng:long},
            map:map,
            icon:icon
        });

        var statPopup = new google.maps.InfoWindow({
            content:content
        });

        marker.addListener('click', function(){
            statPopup.open(map, marker);
        })
    }
}