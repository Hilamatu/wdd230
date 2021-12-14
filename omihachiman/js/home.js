const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=35.128339&lon=136.097907&exclude=minutely,hourly&units=imperial&appid=157bce0f1cc1f8b2908d79e381909cc3"

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        
        // Get the value from the returned json file and pass it to the respective document ID
        document.getElementById("current").textContent = jsObject.current.weather[0].description
        document.getElementById("temp").textContent = jsObject.current.temp
        document.getElementById("humidity").textContent = jsObject.current.humidity

        // Convert the unix value to human readable date
        function unixToDate(dt) {
            const miliseconds = dt * 1000
            const dateObject = new Date(miliseconds)
            const weekDay = dateObject.toLocaleString("default", { weekday: "short" })
            return weekDay
        }
        // Call the function to convert the unix date to human readable date and pass it to 
        // the respective document ID
        document.getElementById("weekday1").textContent = unixToDate(jsObject.daily[1].dt)
        document.getElementById("weekday2").textContent = unixToDate(jsObject.daily[2].dt)
        document.getElementById("weekday3").textContent = unixToDate(jsObject.daily[3].dt)

        // Set the temperature
        document.getElementById("data1").textContent = `${jsObject.daily[1].temp.max}°F`
        document.getElementById("data2").textContent = `${jsObject.daily[2].temp.max}°F`
        document.getElementById("data3").textContent = `${jsObject.daily[3].temp.max}°F`
        // Set the weather icon
        const imageLink = "https://openweathermap.org/img/w/";
        document.getElementById("img1").setAttribute("src", `${imageLink}${jsObject.daily[1].weather[0].icon}.png`)
        document.getElementById("img2").setAttribute("src", `${imageLink}${jsObject.daily[2].weather[0].icon}.png`)
        document.getElementById("img3").setAttribute("src", `${imageLink}${jsObject.daily[3].weather[0].icon}.png`)

        // Set the description for each day
        document.getElementById("img1").setAttribute("alt", jsObject.daily[0].weather[0].description)
        document.getElementById("img2").setAttribute("alt", jsObject.daily[1].weather[0].description)
        document.getElementById("img3").setAttribute("alt", jsObject.daily[2].weather[0].description)

        if (jsObject.alerts){
            document.getElementById("weather-alert").className = "on"
            document.getElementById("alert").textContent = jsObject.alerts.event
            document.getElementById("start").textContent = unixToTime(jsObject.alerts.start)
            document.getElementById("end").textContent = unixToTime(jsObject.alerts.end)
            document.getElementById("description").textContent = jsObject.alerts.description
        }

        function unixToTime(unix) {
            const miliseconds = dt * 1000
            const dateObject = new Date(miliseconds)
            // Create human-friendly date string by calling the .toLocaleString()
            const dateAndTime = dateObject.toLocaleString()
            return dateAndTime
        }
    })


//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Getting and passing the last modified date 
const lastmodified = document.getElementById("lastmodified")
lastmodified.textContent = new Date(document.lastModified);

// Function to hide and show the menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}

// JavaScript for Lazy Loading

const images = document.querySelectorAll("[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    };

    img.src = src;
    img.onload = () => {
        img.removeAttribute('data-src');
    };
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target)
        };
    });
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});