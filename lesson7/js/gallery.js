let newDate = new Date()

let today = Date.now()

const milisecondsToDays = 8640000;

const lastVisit = JSON.parse(localStorage.getItem('lastvisit'))

let numberOfDays;
if (lastVisit > 0){
    numberOfDays = lastVisit - today / milisecondsToDays.toFixed(0)
} 
else {
    numberOfDays = 0
}

document.getElementById("days").textContent = numberOfDays


localStorage.setItem('lastvisit', JSON.stringify(today))