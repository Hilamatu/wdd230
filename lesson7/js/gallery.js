let today = new Date(Date.now())

const milisecondsToDays = 8640000;

let lastVisit;
if ("lastVisit" in localStorage) {
    lastVisit = JSON.parse(window.localStorage.getItem('lastvisit'));
}
else {
    lastVisit = Date.now();
}

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
