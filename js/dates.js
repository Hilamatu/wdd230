const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


const lastmodified = document.getElementById("lastmodified")
lastmodified.textContent = new Date(document.lastModified);
