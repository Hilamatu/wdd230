//  Getting the current year and passing it to the copyright
const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Function to hide and show the menu
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide")
}

function cardsToggle() {
    document.querySelector('#layout').classList.toggle('cards');
    document.querySelector('#layout').classList.toggle('list');
}

function listToggle() {
    document.querySelector('#layout').classList.toggle('list');
    document.querySelector('#layout').classList.toggle('cards');
}
// Getting and passing the last modified date 
const lastmodified = document.getElementById("lastmodified")
lastmodified.textContent = new Date(document.lastModified);

// Getting information from JSON
const requestLink = "../json/directory.json"

fetch(requestLink)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const directory = jsonObject['directory']

        console.log(jsonObject)

        //loop through every record and process them into their own 'cards' (HTML output), one at a time
        for (let i = 0; i < directory.length; i++) {
            // build the HTML of the prophet card using the createElement(), textContent(), and appendChild() methods on the document
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let contact = document.createElement("p")
            let link = document.createElement("a")
            let logo = document.createElement("img")
            
            card.setAttribute("class", directory[i].name)
            // Set the href attribute and pass name to be displayed as a link
             // Create the text node for anchor element.
             let text = document.createTextNode("Web link");
               
             // Append the text node to anchor element.
             link.appendChild(text); 
               
             // Set the title.
             link.title = "Web link"; 
               
             // Set the href property.
             link.href = directory[i].link; 
            
            // Check if there is logo for the business and Set src and alt attributes to img element
            if (directory[i].logo != "none"){
                logo.setAttribute("src", `../omihachiman/images/${directory[i].logo}`)
                logo.setAttribute( "alt", `${directory[i].name}`)
            } else {
                logo.setAttribute("src", "../omihachiman/images/nologo.png")
                logo.setAttribute( "alt", "No logo available") 
            }

            // Pass the value to h2 created above (using template literals `` )
            h2.textContent = `${directory[i].name}`;

            // get and pass the contat information
            contact.textContent = `Contact: ${directory[i].contact}`;


            card.appendChild(h2);
            card.appendChild(contact);
            card.appendChild(link);
            card.appendChild(logo)
            
            // Append the information above to the div on HTML
            document.querySelector('div.cards').appendChild(card)

        
        }
    });