const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=39118d2fb9fc18f735a898398fe6dfa3"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        console.log(jsObject)

        // Set the current temperature to <span> element in the document
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        

        // Use a variable to store the image address which needs to be concatenated together given the API icon code value result
        // This icon is just a preset code value that corresponds to OpenWeatherMap's library of images which is found at 
        // https://openweathermap.org/img/w/
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    })