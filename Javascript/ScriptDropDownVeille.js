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

let showingAll = false; // Suivi de l'état des services affichés (tous ou 4)

function generateCards() {
    const serviceContainer = document.getElementById('service-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    
    // Si showingAll est true, on affiche tous les services, sinon seulement les 4 premiers
    const limit = showingAll ? services.length : 4;

    // Générer les services jusqu'à la limite (tous ou 4)
    for (let i = 0; i < limit; i++) {
        const service = services[i];
        
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
        
        // Ajouter la carte au conteneur
        serviceContainer.appendChild(card);

        // Initialiser l'état de la carte (opacité 0 et translation vers le bas)
        card.style.opacity = '0.5';
        card.style.transform = 'translateY(5px)';
        card.style.transition = 'opacity 0.1s ease-out, transform 0.5s ease-out';

        // Attendre un petit moment avant d'afficher la carte pour que l'animation commence
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 50); // Le délai permet de déclencher la transition
    }

    // Changer le texte du bouton selon l'état (Voir plus / Voir moins)
    if (showingAll) {
        showMoreBtn.textContent = "Voir moins";
    } else {
        showMoreBtn.textContent = "Voir plus";
    }
}

generateCards();

document.getElementById('show-more-btn').addEventListener('click', function() {
    // Alterner entre afficher tous les services ou seulement les 4 premiers
    showingAll = !showingAll; 

    // Vider le conteneur avant de regénérer les services
    const serviceContainer = document.getElementById('service-container');
    serviceContainer.innerHTML = "";

    // Regénérer les services en fonction de l'état actuel
    generateCards();
});
