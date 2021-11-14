const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=39118d2fb9fc18f735a898398fe6dfa3"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        // Get the current weather description, high temperature, wind speed and, humidity and set it to 
        // their respective ID on HTML document
        document.getElementById("current").textContent = jsObject.weather[0].description
        document.getElementById("temp").textContent = jsObject.main.temp_max;
        document.getElementById("speed").textContent = jsObject.wind.speed;
        document.getElementById("humidity").textContent = jsObject.main.humidity

        // Declare variables to get and store high temperature and wind speed from the jsObject file
        let temp = parseFloat(jsObject.main.temp_max);
        let speed = parseFloat(jsObject.wind.speed);

        // Declare a variable to store the value for windChill
        let windChill;
        //  Checks if the windchill can be calculated considering the temperature and wind speed value
        if (temp <= 50 && speed >= 3) {
            // Declare a variable to calculate and store the windChill
            calculation = (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(0);
            // Declare a variable to concatenate the windchill and °F
            windChill = calculation + '°F' 
        }
        // If the windChill cannot be calculated, will pass N/A to windChill variable
        else {
            windChill = "N/A";
        }

        // Will pass the windChill variable value to windChill ID of HTML document.
        document.querySelector('#windChill').textContent = windChill;
    })