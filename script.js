"use strict";

searchBtn.addEventListener("click", searchWeatherData);

function searchWeatherData() {

    loadingText.style.display = "block";
    weatherDiv.style.display = "none";

    var userInput = cityName.value;

    if (userInput.trim() == 0) {
        alert("Enter City Name");
    } else {
        var http = new XMLHttpRequest();
        var apiKey = "546f6e6e2e9ada0d51dab595a78f5c97";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=metric&appid="+apiKey;
        var method = "GET";

        http.open(method, url);
        http.onreadystatechange = function () {
            if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {

                var data = JSON.parse(http.responseText);
                var weatherData = new Weather(userInput, data.weather[0].description.toUpperCase());
                weatherData.temperature = data.main.temp;

                updateWeather(weatherData);
            } else if (http.readyState === XMLHttpRequest.DONE) {
                alert("Something Went Wrong !");
            }
        };
        http.send();
    }
}


function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = "none";
    weatherDiv.style.display = "block";
}