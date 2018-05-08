"use strict";

searchBtn.addEventListener("click", searchWeatherData);

function searchWeatherData() {
    var userInput = cityName.value;

    if (userInput.trim() == 0) {
        alert("Enter City Name");
    } else {
        var http = new XMLHttpRequest();
        var apiKey = "546f6e6e2e9ada0d51dab595a78f5c97";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput;
        var method = "GET";

        http.open(method, url);
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
                var data = JSON.parse(http.responseText);
            } else if (http.readyState === XMLHttpRequest.DONE) {
                alert("Something Went Wrong !");
            }
        };
    }
}