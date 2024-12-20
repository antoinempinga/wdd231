//busienss cards getting info
async function getBusiness(){
    const response = await fetch('./data/members.json');
    const data = await response.json();
    displayBusiness(data.companies);
}

//  business data for Chamber Directory
const businesses = [
    {
        name: "Ampikalgede Design",
        description: "Creative design services including graphic design, branding, and visual communication.",
        category: "Design",
        address: "123 Creative St Lazar, Kajiba, Mbuji Mayi",
        phone: "+243 843-383-352",
        website: "https://antoinempinga.github.io/ampikalgededesign/index.html",
    },
    {
        name: "Tech Mindset",
        description: "Providing cutting-edge technology solutions for businesses, including cloud services and IT consulting.",
        category: "Tech Solution",
        address: "456 Ngandajika, Lomami",
        phone: "+243 830-526-352",
        website: "https://nkambakabeya.github.io/techmindset.github.io/techmindset.html/",
    },
    {
        name: "Mapasa IT Solution",
        description: "End-to-end IT solutions for businesses, from setup to maintenance and network management.",
        category: "IT Solution",
        address: "789 IT Blvd, Digital congo, Masanka, Mbuji Mayi",
        phone: "+243 830-526-352",
        website: "https://nkambakabeya.github.io/techmindset.github.io/techmindset.html",
    },
    {
        name: "Global Trade",
        description: "International trade solutions, import/export services, and logistics management",
        category: "Trade Logistcis",
        address: "88 Trade Park, Lubumbashi",
        phone: "+243 812-654-98",
        website: "https://nkambakabeya.github.io/techmindset.github.io/techmindset.html",
    },
    {
        name: "Eco Ventures",
        description: "Sustainable business solutions focused on environmental conservation and green technologies.",
        category: "Sustainability",
        address: "55 Green Ave, Goma",
        phone: "+243 896-456-123",
        website: "https://antoinempinga.github.io/ampikalgededesign/index.htmls"
       },
    {
        name: "Creative Lab",
        description: "Innovative solutions for digital marketing, brand strategy, and interactive media.",
        category: "Media marketing",
        address: "200 Media Rd, Kinshasa",
        phone: "+243 800-123-456",
        website: "https://antoinempinga.github.io/ampikalgededesign/index.html",
    },
    {
        name: "HealthCare Pro",
        description: "Specializing in user interface and user experience design to create seamless digital experiences.",
        category: "Health",
        address: "101 Health St, Kisangani",
        phone: "+243 821-975-463",
        website: "https://antoinempinga.github.io/ampikalgededesign/index.html",
    },
    
    // You can add more businesses here...
];

// Function to create the member cards dynamically
function createDirectory() {
    const directoryContainer = document.getElementById('member-container');
    directoryContainer.innerHTML = ''; // Clear previous content

    businesses.forEach(business => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        memberCard.classList.add(business.category.toLowerCase().replace(' ', '-')); // Add class based on category

        memberCard.innerHTML = `
            <h3 class="member-name">${business.name}</h3>
            <p class="member-description">${business.description}</p>
            <p class="member-address">Address: ${business.address}</p>
            <p class="member-phone">Phone: ${business.phone}</p>
            <a href="${business.website}" class="member-website" target="_blank">Visit Website</a>
        `;

        directoryContainer.appendChild(memberCard);
    });
}

// Call the function to populate the directory page
document.addEventListener('DOMContentLoaded', createDirectory);