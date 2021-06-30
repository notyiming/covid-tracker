//filling in the numbers for totals
$.getJSON("https://disease.sh/v3/covid-19/all", function (data){
    $("#total-cases").html(data.cases);
    $("#total-deaths").html(data.deaths);
    $("#total-recovered").html(data.recovered);
});


// populating the dom with all the countries
$.getJSON("https://disease.sh/v3/covid-19/countries", function (data){
    for(let i = 0; i < data.length; i++){
        let date = new Date(data[i].updated);
        $("#all-countries").append("<div class=\"col-xl-3 col-sm-12 p-3\">\n" +
            "    <div id='"+ data[i].country +"' class=\"card text-white bg-dark-card h-100\">\n" +
            "      <div class=\"card-body\">\n" +
            "        <h5 class=\"card-title\"><span>"+data[i].country+"</span><img width='35px' height='25px' class=\"float-end\" src=\""+ data[i].countryInfo.flag +"\" alt=\"Card image cap\"></h5>\n" +
            "        <p class=\"card-text\"> Total Cases: "+ data[i].cases + "</p>\n" +
            "        <p class=\"card-text\">Deaths: "+ data[i].deaths + "</p>\n" +
            "        <p class=\"card-text\">Recovered: "+ data[i].recovered + "</p>\n" +
            "      </div>\n" +
            "      <div class=\"card-footer\">\n" +
            "        <small class=\"text-muted\">Last updated: "+ date.toLocaleString() +"</small>\n" +
            "        <a href='/"+ data[i].country +"' class='btn btn-secondary float-end'>View Full Stats</a>\n" +
            "      </div>\n" +
            "    </div>\n" +
            "  </div>");


        $("#countryList").append("<a class='dropdown-item' href='/"+ data[i].country +"'>"+ data[i].country +"</a>");
    }
});


function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("searchCountryInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}