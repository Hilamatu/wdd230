function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}



let newDate = new Date();

let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

let weekDay = days[newDate.getDay()];
let month = months[newDate.getMonth()];
let year = newDate.getFullYear();
let date = newDate.getDate();

let dateTime = weekDay + "," + " " + date + " " + month + " " + year;

document.getElementById("date").innerHTML = dateTime

if (weekDay !== "Friday") {
    document.getElementById("notification").style.display = "none"
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();
