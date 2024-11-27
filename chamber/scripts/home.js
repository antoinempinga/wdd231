const eventCards = document.querySelector('#current-event');

async function getEvent(){
    const response = await fetch('./data/events.json');
    const data = await response.json();
    displayCards(data.events);
    
    
};

getEvent();

const displayCards = (e) => {
    console.log(e);
    e.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('event-card');

        let title = document.createElement('h6');
        title.textContent = `${element.event}`;

        let eventDesc = document.createElement('p');
        eventDesc.innerHTML = `<b>About:</b> ${element.description}`;

        let eventLoc = document.createElement('p');
        eventLoc.innerHTML = `<b>Location:</b> ${element.location}`;
        
        let eventDate = document.createElement('p');
        eventDate.innerHTML = `<b>Date:</b> ${element.date}`;
        
        card.appendChild(title);
        card.appendChild(eventDesc);
        card.appendChild(eventLoc);
        card.appendChild(eventDate);

        eventCards.appendChild(card);
    });
};


//wheather 
const indexCard = document.querySelector('#weather');


const myKey = 'e1d3b62518b56abd4811d6a72b8ced76';
const myLat = '-17.366832637140057';
const myLon = '-66.19878838429028';

const myUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&appid=${myKey}`;


async function weatherFetch(){
    try{
        const response = await fetch(myUrl);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error)
    }
};

weatherFetch();

function displayResults(d){
    console.log(d)
    for (let i = 0; i < 3; i++) {
        let card = document.createElement('div');
        card.classList.add('weather-container');
        let image = document.createElement('img');
        let city = document.createElement('h6');
        let currentTemp = document.createElement('p');
        let description = document.createElement('p');

        city.innerHTML = `${d.city.name},${d.city.country}`;
        currentTemp.innerHTML = `${d.list[i].main.temp.toString().slice(1)}°F`;
        description.innerHTML = d.list[i].weather[0].description;
        image.innerHTML = `https://openweathermap.org/img/wn/${d.list[i].weather[0].icon}@2x.png`;
        image.src = `https://openweathermap.org/img/wn/${d.list[i].weather[0].icon}@2x.png`;
        image.setAttribute('alt', d.list[i].weather[0].description);

        card.appendChild(city);
        card.appendChild(image)
        card.appendChild(currentTemp);
        card.appendChild(description);

        indexCard.appendChild(card);

    }
}


async function getBusiness(){
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayBusiness(data.companies);
}

getBusiness();


/*Member of the bord */
// Define a list of users with their details
const users = [
    {
        name: 'Antoine Mpinga Kalambayi',
        title: 'CEO,',
        address: '15, Kenge Manzonzo, Mbuji Mayi',
        email: 'antoine.mp@ampibusiness.org',
        photo: 'https://nkambakabeya.github.io/techmindset.github.io/ampi.jpg'
    },
    {
        name: 'Max Gardel Tshibanda Tshibangu',
        title: 'Marketing Manager',
        address: '18, Kalubanda, Ngandajika',
        email: 'gradel.max@ampibusiness.org',
        photo: 'https://nkambakabeya.github.io/techmindset.github.io/max.jpg'
    },
    {
        name: 'Augustin Nkamba Kabeya',
        title:'Creative Leader',
        address: '1123 Kin Plaz, KInshasa',
        email: 'a.nkamba@ampibusiness.org',
        photo: 'https://nkambakabeya.github.io/techmindset.github.io/ankc.jpg'
    },
];

// Select the element where the profiles will be displayed
const container = document.querySelector('#profiles-container');

// Function to display the profiles
const displayProfiles = (users) => {
    users.forEach(user => {
        // Create a profile container div
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card'); // Add a CSS class for styling

        // Create the profile image
        const img = document.createElement('img');
        img.src = user.photo;
        img.alt = `${user.name} - Profile Picture`;
        img.classList.add('profile-photo'); // Optional: Add a class for styling

        // Create the user's name
        const name = document.createElement('h3');
        name.textContent = user.name;

        // Create the user's address
        const address = document.createElement('p');
        address.textContent = `Address: ${user.address}`;

        // Create the user's email
        const email = document.createElement('p');
        email.textContent = `Email: ${user.email}`;

        // Append all the elements to the profile card
        profileCard.appendChild(img);
        profileCard.appendChild(name);
        profileCard.appendChild(address);
        profileCard.appendChild(email);

        // Add the profile card to the page
        container.appendChild(profileCard);
    });
};

// Call the function to display the profiles
displayProfiles(users);
// Définir les données pour chaque type de contenu
// Define data for each type of content
const contentData = [
    {
        type: 'Logo',
        description: 'A logo represents the visual identity of a brand or company. It is essential for making an impression on clients.',
        image: src="images/logoservice.png"
    },
    {
        type: 'Flyers',
        description: 'Flyers are marketing materials often used to promote events, sales, or specific products.',
        image: src="images/flayer.png"
    },
    {
        type: 'Posters',
        description: 'Posters are used for public announcements, such as events or large-scale marketing messages.',
        image: src="images/poster.png"
    },
    {
        type: 'Brochures',
        description: 'Brochures are printed documents that provide details about products, services, or events.',
        image: src="images/brochure.png"
    }
];

// Select the element where the content boxes will be displayed
const service = document.querySelector('#content-service');

// Function to display the content boxes
const displayContentBoxes = (contentData) => {
    contentData.forEach(content => {
        // Create a content box
        const contentBox = document.createElement('div');
        contentBox.classList.add('content-box'); // Add a CSS class for styling

        // Create the content image (logo, flyer, etc.)
        const img = document.createElement('img');
        img.src = content.image;
        img.alt = `${content.type} image`;
        img.classList.add('content-image'); // Optional: Add a CSS class for styling

        // Create the title for the content
        const title = document.createElement('h3');
        title.textContent = content.type;

        // Create the description for the content
        const description = document.createElement('p');
        description.textContent = content.description;

        // Append all elements to the content box
        contentBox.appendChild(img);
        contentBox.appendChild(title);
        contentBox.appendChild(description);

        // Append the content box to the container
        container.appendChild(contentBox);
    });
};

// Call the function to display the content boxes
displayContentBoxes(contentData);
