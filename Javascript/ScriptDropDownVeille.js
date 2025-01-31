const services = [
    {
        title: "Service 1",
        description: "Description du service 1. Ce service est très utile pour...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 2",
        description: "Description du service 2. Il offre une solution innovante pour...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 3",
        description: "Service 3 avec une approche différente. Ce service répond à...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 4",
        description: "Service 4 avec des fonctionnalités avancées pour...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 5",
        description: "Service 5 orienté vers l'optimisation des processus...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 6",
        description: "Service 6 avec des outils modernes et intuitifs...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 7",
        description: "Service 7 orienté vers l'optimisation des processus...",
        img: "Images/fe.png",
        link: "#"
    },
    {
        title: "Service 8",
        description: "Service 8 avec des outils modernes et intuitifs...",
        img: "Images/fe.png",
        link: "#"
    }
];

let currentIndex = 0;

function generateCards() {
    const serviceContainer = document.getElementById('service-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    
    for (let i = 0; i < 4; i++) {         
        const service = services[currentIndex];
        
        const card = document.createElement('div');
        card.classList.add('service-card');
        
        card.innerHTML = `
            <img src="${service.img}" alt="Illustration du service">
            <div class="service-info">
                <h2>${service.title}</h2>
                <p>${service.description}</p>
                <a href="${service.link}">Lire</a>
            </div>
        `;
        
        serviceContainer.appendChild(card);
        
        currentIndex++; 
        if (currentIndex >= services.length) {
            // Si toutes les cartes sont générées, on cache le bouton
            showMoreBtn.style.display = 'none';
            return;
        }
    }
}

generateCards();

document.getElementById('show-more-btn').addEventListener('click', function() {
    generateCards(); 
});
