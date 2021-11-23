// Get the current weather and calculating the WindChill
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5595277&units=imperial&appid=39118d2fb9fc18f735a898398fe6dfa3"

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
    });

// Get the forecast for 5 days
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=021e6802b9ec4c17d8adb058949ab7c7"

fetch(forecastURL)
    .then((response) => response.json())
    .then((forecast) => {
        console.log(forecast)

        const list = forecast.list

        // Declare an empty array to store the returned value from the for loop that will get the five forecasts based on time (18:00:00)
        let fiveDays = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].dt_txt.includes("18:00:00")) {
                fiveDays.push(list[i])
            }
        }

        // Define a function to convert the unix date to human date format
        // the parameter will the "dt" from fiveDays list in unix format
        function unixToDate(dt) {
            const miliseconds = dt * 1000
            const dateObject = new Date(miliseconds)
            const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
            return weekDay
        }

        // Set the days of the week
        document.getElementById("weekday1").textContent = unixToDate(fiveDays[0].dt);
        document.getElementById("weekday2").textContent = unixToDate(fiveDays[1].dt);
        document.getElementById("weekday3").textContent = unixToDate(fiveDays[2].dt);
        document.getElementById("weekday4").textContent = unixToDate(fiveDays[3].dt);
        document.getElementById("weekday5").textContent = unixToDate(fiveDays[4].dt);


        // Set the temperature
        document.getElementById("data1").textContent = `${fiveDays[0].main.temp}°F`
        document.getElementById("data2").textContent = `${fiveDays[1].main.temp}°F`
        document.getElementById("data3").textContent = `${fiveDays[2].main.temp}°F`
        document.getElementById("data4").textContent = `${fiveDays[3].main.temp}°F`
        document.getElementById("data5").textContent = `${fiveDays[4].main.temp}°F`

        // Set the weather icon
        const imageLink = "https://openweathermap.org/img/w/";
        document.getElementById("img1").setAttribute("src", `${imageLink}${fiveDays[0].weather[0].icon}.png`)
        document.getElementById("img2").setAttribute("src", `${imageLink}${fiveDays[1].weather[0].icon}.png`)
        document.getElementById("img3").setAttribute("src", `${imageLink}${fiveDays[2].weather[0].icon}.png`)
        document.getElementById("img4").setAttribute("src", `${imageLink}${fiveDays[3].weather[0].icon}.png`)
        document.getElementById("img5").setAttribute("src", `${imageLink}${fiveDays[4].weather[0].icon}.png`)

        // Set the description for each day
        document.getElementById("img1").setAttribute("alt", fiveDays[0].weather[0].description)
        document.getElementById("img2").setAttribute("alt", fiveDays[1].weather[0].description)
        document.getElementById("img3").setAttribute("alt", fiveDays[2].weather[0].description)
        document.getElementById("img4").setAttribute("alt", fiveDays[3].weather[0].description)
        document.getElementById("img5").setAttribute("alt", fiveDays[4].weather[0].description)
    

    })

// Get the events from towns list
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"
// Fetching to get the events 
fetch(requestURL)
    .then(function (response) {
    return response.json();
    })

    .then(function (jsonObject) {
        // Create a list from JSON file
        const towns = jsonObject ["towns"]
        getInformation(towns, 2)
        
    });


// Function that will iterate through the Towns list and get events of that town
function getInformation (list, index){
    const events = list[index].events
    for (let i = 0; i < events.length; i ++) {
        let event = document.createElement("p")
        event.textContent = events[i]
        document.querySelector("section.events").appendChild(event)
    }

}

// Checking the day of the week to announce the pancakes 

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}

//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();
