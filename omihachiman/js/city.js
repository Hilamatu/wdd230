
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