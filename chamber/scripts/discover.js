// Menu Toggle for Mobile
document.getElementById('myButton').addEventListener('click', function() {
    const menuLinks = document.querySelector('.menuLinks');
    menuLinks.classList.toggle('active');
});

// To close the menu when clicking outside (optional)
document.addEventListener('click', function(event) {
    const menuLinks = document.querySelector('.menuLinks');
    if (!menuLinks.contains(event.target) && !event.target.matches('#myButton')) {
        menuLinks.classList.remove('active');
    }
});

// Lazy Load Companies
const companies = [
    { name: 'Ampikalgede Design'},
    { name: 'Tech Mindset'},
    { name: 'Mapasa IT Solution'},
    { name: 'Global Trade'},
    { name: 'Creative Lab'},
    { name: 'Eco Ventures'},
];

const companiesOnBoard = document.getElementById('companiesOnBoard');

// Populate Companies
companies.forEach(company => {
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('company');
    companyDiv.innerHTML = `
        <p>${company.name}</p>
    `;
    companiesOnBoard.appendChild(companyDiv);
});

// Last Visit Functionality
const visitMessageElement = document.getElementById("visit-message");

const lastVisitDate = localStorage.getItem("lastVisit");

if (lastVisitDate) {
    const lastVisitTime = new Date(parseInt(lastVisitDate));
    const currentTime = new Date();
    const timeDiff = Math.floor((currentTime - lastVisitTime) / (1000 * 60 * 60 * 24)); // Days difference

    if (timeDiff < 1) {
        visitMessageElement.textContent = "Back so soon! Awesome!";
    } else if (timeDiff === 1) {
        visitMessageElement.textContent = `You last visited 1 day ago.`;
    } else {
        visitMessageElement.textContent = `You last visited ${timeDiff} days ago.`;
    }
}

// Save current visit time to localStorage
localStorage.setItem("lastVisit", Date.now().toString());

// Calendar Population
const daysElement = document.getElementById('days');
const monthYearElement = document.getElementById('month-year');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');

// Generate Calendar for the current month
function generateCalendar(monthOffset = 0) {
    const currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth() + monthOffset);
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    monthYearElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

    // Clear previous days
    daysElement.innerHTML = '';

    // Fill in the calendar days
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = i;
        daysElement.appendChild(dayElement);
    }
}

// Initial calendar load
generateCalendar();

// Calendar navigation
prevMonthButton.addEventListener('click', () => generateCalendar(-1));
nextMonthButton.addEventListener('click', () => generateCalendar(1));
