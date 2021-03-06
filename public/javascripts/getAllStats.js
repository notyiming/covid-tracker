//filling in the numbers for totals
$.getJSON("https://disease.sh/v3/covid-19/all", function (data){
    $("#total-cases").html(data.cases.toLocaleString('en-US'));
    $("#total-deaths").html(data.deaths.toLocaleString('en-US'));
    $("#total-recovered").html(data.recovered.toLocaleString('en-US'));
});


// populating the dom with all the countries
$.getJSON("https://disease.sh/v3/covid-19/countries", function (data){
    for(let i = 0; i < data.length; i++){
        let date = new Date(data[i].updated);
        $("#all-countries").append("<div class=\"col-xl-3 col-sm-12 p-3 country\">\n" +
            "    <div id='"+ data[i].country +"' class=\"card text-white bg-dark-card h-100\">\n" +
            "      <div class=\"card-body\">\n" +
            "        <h5 class=\"card-title\"><span>"+data[i].country+"</span><img width='35px' height='25px' class=\"float-end\" src=\""+ data[i].countryInfo.flag +"\" alt=\"Card image cap\"></h5>\n" +
            "        <p class=\"card-text\"> Total Cases: "+ data[i].cases.toLocaleString('en-US') + "</p>\n" +
            "        <p class=\"card-text\">Deaths: "+ data[i].deaths.toLocaleString('en-US') + "</p>\n" +
            "        <p class=\"card-text\">Recovered: "+ data[i].recovered.toLocaleString('en-US') + "</p>\n" +
            "      </div>\n" +
            "      <div class=\"card-footer\">\n" +
            "        <small class=\"text-muted\">Last updated: "+ date.toLocaleString() +"</small>\n" +
            "        <a href='/"+ data[i].country +"' class='btn btn-secondary mt-2 float-end'>View Full Stats</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>");


        $("#countryList").append("<a class='dropdown-item' href='/"+ data[i].country +"'>"+ data[i].country +"</a>");
    }
});


function filterFunction() {
    var input, filter, span, country, i, div, txtValue;
    input = document.getElementById("searchCountryInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("all-countries");
    country = div.getElementsByClassName("country");
    for (i = 0; i < country.length; i++) {
        span = country[i].getElementsByTagName("span");
        txtValue = span[0].textContent || span[0].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            country[i].style.display = "";
        } else {
            country[i].style.display = "none";
        }
    }
}