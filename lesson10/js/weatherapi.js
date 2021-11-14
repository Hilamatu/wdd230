const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=39118d2fb9fc18f735a898398fe6dfa3"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject)
    })