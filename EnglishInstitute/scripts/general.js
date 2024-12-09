const year = document.querySelector("#copy");
const currentYear = new Date().getFullYear();
year.textContent = currentYear

//footer

async function getSocial(){
    let responce = await fetch('./data/cardsInformation.json');
    let data = await responce.json();

    data.social.forEach(element => {     
        let card = document.createElement('div');
        card.classList.add('content-flex-row-small');
        let socialImg = document.createElement('img');

        socialImg.src = `${element.image}`;
        socialImg.loading = "lazy";

        card.appendChild(socialImg);

        document.querySelector('#social').appendChild(card);
    });
}

getSocial();

const hamMenu = document.querySelector('#myButton');
const navElement = document.querySelector('header ul')
hamMenu.addEventListener('click', ()=>{
    navElement.classList.toggle('open');
})




const resources = document.querySelector("#resources");

function display404Page() {
   
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-container');

    
    const errorTitle = document.createElement('h1');
    errorTitle.textContent = "404 - Page Not Found";
    
   
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "The page you're looking for doesn't exist. Please check the URL or return to the homepage.";

   
    const homeButton = document.createElement('a');
    homeButton.textContent = "Go to Homepage";
    homeButton.href = './index.html';
    homeButton.classList.add('home-button');

    errorContainer.appendChild(errorTitle);
    errorContainer.appendChild(errorMessage);
    errorContainer.appendChild(homeButton);
    resources.appendChild(errorContainer);
}

display404Page();
