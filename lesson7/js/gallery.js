let today = new Date(Date.now())

const milisecondsToDays = 86400000;



const lastVisit = JSON.parse(window.localStorage.getItem('lastvisit'))

let lastVisitDate = new Date(lastVisit)

let numberOfDays;
if (lastVisit !== 0) {
    numberOfDays = Math.round((lastVisitDate - today) / milisecondsToDays)
}
else {
    numberOfDays = 0
}

document.getElementById("days").textContent = numberOfDays
