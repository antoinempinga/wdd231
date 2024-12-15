const team = document.querySelector("#team");
const teamContainer = document.querySelector('#teamContainer');
const contactUs = document.querySelector('#contactUs');


function addTitle(title, int){
    titleH = document.createElement('h2')
    titleH.innerHTML= `${title}`
    int.prepend(titleH);
}
async function getTeam(a){
    try{
        const response = await fetch('./data/cardsInformation.json'); 
        if(response.ok){
            const data = await response.json();
            console.log(data.teachers)

            data.teachers.forEach(element => {
                //create elements
                let card = document.createElement('div');
                let cardText = document.createElement('div');
                let cardImg = document.createElement('img');
                let cardTitle = document.createElement('h5');
                let cardPargf = document.createElement('p')
        
                // card.classList.add('content-flex-row');
                card.classList.add('team-card');
                // card.classList.add('content-flex-column');
                cardImg.classList.add('picture');
                cardText.classList.add('textcontainer')
                
        
                //populateelements
                cardImg.src = `${element.image}`;
                cardImg.loading = "lazy";
                cardTitle.innerHTML = `${element.name}`;
                cardPargf.innerHTML = `${element.description}`;
        
                //append
        
                card.appendChild(cardImg);
                cardText.appendChild(cardTitle);
                cardText.appendChild(cardPargf);
                card.appendChild(cardText);
        
                a.appendChild(card);
         } )
        }else{
            throw Error(await response.text());
        }
    } catch(error){
        console.log(error);
    }
}

function getContat(){
    let card = document.createElement('div');
    let qrImg = document.createElement('img');
    let about = document.createElement('div');

    card.classList.add('space-between');
    card.classList.add('contactUs');
    about.classList.add('aboutCourses');

    about.innerHTML=`
    <h4>Scan For more information : </h4>
    <ul > 
    <li>Core Basics English</li>
    <li>Intermediate English proficiency</li>
    <li>Advanced English Proficiency</li>
    </ul>`
    qrImg.src = './Images/qr.jpg';

    // about.style.padding = '50px';
    qrImg.style.padding = '1%';
    
    card.appendChild(qrImg);
    card.appendChild(about);
 
    contactUs.appendChild(card)
}

addTitle('Our Team', teamContainer);
getTeam(team);
addTitle('Contact Us', contactUs)
getContat();

// booking session
// Mentor data
const mentors = [
    {
      name: "Antoine Mpinga Kalambayi",
      image: "./Images/ampi.jpg",
      description: "Mr. Antoine excels at breaking down complex grammar rules, ensuring every student masters sentence structure and punctuation with clarity and precision."
    },
    // Add more mentors here if needed
  ];
  
  // Function to display team members dynamically
  function displayMentors() {
    const teamContainer = document.getElementById('team');
    
    mentors.forEach(mentor => {
      // Create mentor card
      const mentorCard = document.createElement('div');
      mentorCard.classList.add('team-member-card');
      
      // Create image element
      const mentorImage = document.createElement('img');
      mentorImage.src = mentor.image;
      mentorImage.alt = mentor.name;
      
      // Create mentor name element
      const mentorName = document.createElement('h3');
      mentorName.textContent = mentor.name;
      
      // Create mentor description element
      const mentorDescription = document.createElement('p');
      mentorDescription.textContent = mentor.description;
      
      // Create the "Book Session" button
      const bookButton = document.createElement('button');
      bookButton.classList.add('book-btn');
      bookButton.textContent = 'Book a Session';
      bookButton.onclick = () => showBookingForm(mentor.name); // Show the booking form for this mentor
      
      // Append the elements to the mentor card
      mentorCard.appendChild(mentorImage);
      mentorCard.appendChild(mentorName);
      mentorCard.appendChild(mentorDescription);
      mentorCard.appendChild(bookButton);
      
      // Append the mentor card to the team container
      teamContainer.appendChild(mentorCard);
    });
  }
  
  // Show booking form with selected mentor's name
  function showBookingForm(mentorName) {
    document.getElementById('mentorName').innerText = mentorName;
    document.getElementById('bookingFormContainer').classList.remove('hidden');
  }
  
  // Close the booking form
  function closeBookingForm() {
    document.getElementById('bookingFormContainer').classList.add('hidden');
  }
  
  // Show payment options based on selected payment method
  document.querySelectorAll('input[name="paymentMethod"]').forEach(function(input) {
    input.addEventListener('change', function() {
      const paymentDetails = document.getElementById('paymentDetails');
      if (this.value === 'Visa Card' || this.value === 'Mobile Money') {
        paymentDetails.classList.remove('hidden');
      } else {
        paymentDetails.classList.add('hidden');
      }
    });
  });
  
  // Handle form submission (this could be connected to an actual backend)
  document.getElementById('bookMentorship').addEventListener('click', function() {
    alert('Your mentorship session has been booked successfully!');
    closeBookingForm();
  });
  
  // Call the displayMentors function when the page loads
  window.onload = function() {
    displayMentors();
  };
  
