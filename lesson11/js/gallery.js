// JavaScript to calculate the days from lastvisit of the site 

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

//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Function to hide and show the menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}