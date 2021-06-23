//filling in the numbers for totals
$.getJSON("https://corona.lmao.ninja/v3/covid-19/all", function (data){
    $("#total-cases").html(data.cases);
    $("#total-deaths").html(data.deaths);
    $("#total-recovered").html(data.recovered);
});


// populating the dom with all the countries
$.getJSON("https://corona.lmao.ninja/v3/covid-19/countries", function (data){
    for(let i = 0; i < data.length; i++){
        let date = new Date(data[i].updated);
        $("#all-countries").append("<div class=\"col-xl-3 col-sm-12 p-3\">\n" +
            "    <div class=\"card h-100\">\n" +
            "      <div class=\"card-body\">\n" +
            "        <h5 class=\"card-title\">"+data[i].country+"</h5>\n" +
            "        <p class=\"card-text\"> Total Cases: "+ data[i].cases + "</p>\n" +
            "        <p class=\"card-text\">Deaths: "+ data[i].deaths + "</p>\n" +
            "        <p class=\"card-text\">Recovered: "+ data[i].recovered + "</p>\n" +
            "      </div>\n" +
            "      <div class=\"card-footer\">\n" +
            "        <small class=\"text-muted\">Last updated: "+ date.toLocaleString() +"</small>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>");
    }
});