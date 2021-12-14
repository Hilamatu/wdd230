
//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Function to hide and show the menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}

// Getting and passing the last modified date 
const lastmodified = document.getElementById("lastmodified")
lastmodified.textContent = new Date(document.lastModified);
