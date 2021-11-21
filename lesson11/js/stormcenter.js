// Adjust the label with the current value

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


// Make the defaul selection value unselectable
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectRegion');
	s.style.display = "block";
	s.textContent = sel.value;
}

//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();