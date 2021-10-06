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