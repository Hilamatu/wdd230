const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets']
        console.table(jsonObject);

        //loop through every record and process them into their own 'cards' (HTML output), one at a time
        for (let i = 0; i < prophets.length; i++) {
            // build the HTML of the prophet card using the createElement(), textContent(), and appendChild() methods on the document
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let birthDate = document.createElement("p")
            let birthPlace = document.createElement("p")
            let image = document.createElement("img")

            // Set a class with the order of the prophets + 1
            card.setAttribute("class", `order${prophets[i].order}`)

            // Pass the value to h2 created above (usin template literals `` )
            h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;

            // get and pass the birth date
            birthDate.textContent = `Birth Date: ${prophets[i].birthdate}`;

            // Get and pass the birth place
            birthPlace.textContent = `Birth Place: ${prophets[i].birthplace}`;

            // Set src and alt attributes to img element
            image.setAttribute("src", prophets[i].imageurl)
            image.setAttribute( "alt", `${prophets[i].name} ${prophets[i].lastname} - ${prophets[i].order}`)

            card.appendChild(h2);
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(image)
            
            // Append the information above to the div on HTML
            document.querySelector('div.cards').appendChild(card)

        
        }
    });

