let today = new Date(Date.now())

const milisecondsToDays = 86400000;


const lastVisit = JSON.parse(window.localStorage.getItem('lastvisit'))

let lastVisitDate = new Date(lastVisit)

let numberOfDays;
if (lastVisitDate !== 0) {
    numberOfDays = Math.round((today - lastVisitDate) / milisecondsToDays)
}
else {
    numberOfDays = 0
}

document.getElementById("days").textContent = numberOfDays

window.localStorage.setItem('lastvisit', JSON.stringify(today))
