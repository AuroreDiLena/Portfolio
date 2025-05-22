const services = [
    {
        description: "18/02/2025 - La VR transforme la formation pro en offrant immersion et gain d’efficacité dans plusieurs secteurs (santé, industrie, etc.).",
        img: "Images/fe.png",
        link: "https://www.laprovence.com/article/economie/7050138943202914/realite-virtuelle-la-formation-change-de-dimension"
    },
    {
        description: "17/02/2025 - La police nationale expérimente la VR pour former ses agents à des situations critiques avec plus de réalisme.",
        img: "Images/fe.png",
        link: "https://www.aefinfo.fr/depeche/726656-la-police-nationale-veut-experimenter-la-realite-virtuelle-pour-simuler-les-interventions-de-primo-intervenants"
    },
    {
        description: "28/01/2025 - Présentation des tendances 2025 en VR/AR pour la formation, avec cas d’usage et innovations attendues.",
        img: "Images/fe.png",
        link: "https://www.callimedia.fr/le-learning-lab/blog/apprentissage-immersif-tendances-vr-et-ar-2025/"
    },
    {
        description: "12/11/2024 - Étude sur les impacts mesurables de la VR en formation : meilleure mémorisation et implication.",
        img: "Images/fe.png",
        link: "https://www.learningtechnologiesfrance.com/news/la-r-alit-virtuelle-en-formation-professionnelle-une-r-volution-p-dagogique-mesurable?utm_source=chatgpt.com"
    },
    {
        description: "07/01/2025 - Sony lance un casque XR conçu pour les professionnels, avec des usages adaptés à la formation numérique.",
        img: "Images/fe.png",
        link: "https://gamergen.com/actualites/sony-xyn-le-casque-xr-qui-redefinit-creation-numerique-professionnelle-338381-1/amp"
    },
    {
        description: "24/10/2024 - Les perspectives futures de la VR dans la formation professionnelle : modularité, IA, interactivité.",
        img: "Images/fe.png",
        link: "https://rvolution.fr/2024/10/24/les-tendances-futures-de-la-realite-virtuelle-dans-le-secteur-de-la-formation/?utm_source=chatgpt.com"
    },
    {
        description: "29/10/2024 - Études de cas en entreprise : logistique, industrie, maintenance... la VR fait ses preuves.",
        img: "Images/fe.png",
        link: "https://tech-lab.fr/2024/10/la-realite-virtuelle-au-service-de-la-formation-en-entreprise-une-revolution-en-cours.html?utm_source=chatgpt.com"
    },
    {
        description: "03/09/2024 - Présentation d’outils VR pour les métiers manuels et techniques, avec gains de temps et d'efficacité.",
        img: "Images/fe.png",
        link: "https://blog.mimbus.com/la-realite-virtuelle-pour-le-futur-de-la-formation-professionnelle?utm_source=chatgpt.com"
    },
    {
        description: "26/07/2024 - Comparatif des usages complémentaires entre VR et AR dans la formation, selon les besoins métiers.",
        img: "Images/fe.png",
        link: "https://www.anaia.io/ar-et-vr-dans-la-formation/?utm_source=chatgpt.com"
    },
    {
        description: "31/01/2024 - Tour d’horizon des futurs usages de la VR/AR dans les programmes de formation des entreprises.",
        img: "Images/fe.png",
        link: "https://consor.fr/avenir-realite-virtuelle-et-augmentee-dans-la-formation-professionnelle/?utm_source=chatgpt.com"
    },
    {
        description: "13/11/2024 - Étude de l’impact pédagogique de la VR sur la motivation et la performance des apprenants.",
        img: "Images/fe.png",
        link: "https://kwark.education/blog/la-realite-virtuelle-en-formation-professionnelle-une-revolution-pedagogique-mesurable?utm_source=chatgpt.com"
    },
    {
        description: "11/06/2024 - Utilisation de la VR/AR pour la formation sécurité (incendie, gestes de secours, procédures d’urgence).",
        img: "Images/fe.png",
        link: "https://www.preventica.com/magazine/actualites/la-realite-augmentee-et-la-realite-virtuelle-pour-la-formation-a-la-securite-11062024?utm_source=chatgpt.com"
    },
    {
        description: "15/04/2024 - Exemples d’entreprises utilisant VR/AR pour former plus efficacement en milieu professionnel.",
        img: "Images/fe.png",
        link: "https://nexton-group.com/blog/la-realite-virtuelle-et-augmentee-des-outils-innovants-pour-la-formation?utm_source=chatgpt.com"
    },
    {
        description: "09/08/2024 - Arguments pour inciter les étudiants et jeunes pro à suivre des formations immersives en 2024.",
        img: "Images/fe.png",
        link: "https://www.planetegrandesecoles.com/pourquoi-suivre-une-formation-en-realite-virtuelle-en-2024?utm_source=chatgpt.com"
    },
    {
        description: "22/04/2024 - Témoignage d’Apave sur l’intégration de la VR et AR dans leurs parcours de formation technique.",
        img: "Images/fe.png",
        link: "https://www.managementdelaformation.fr/interviews/2024/04/22/luc-martinato-apave-realite-virtuelle-augmentee-formation/?utm_source=chatgpt.com"
    }
];

let currentIndex = 0;
let allCardsVisible = false;

function generateCards() {
    const serviceContainer = document.getElementById('service-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    
    // Clear the current cards in the container before generating new ones
    serviceContainer.innerHTML = '';
    
    // Calculate the number of cards to show based on the state of 'allCardsVisible'
    const cardsToShow = allCardsVisible ? services.length : 4;
    
    for (let i = 0; i < cardsToShow; i++) {
        const service = services[currentIndex];
        
        const card = document.createElement('div');
        card.classList.add('service-card');
        
        card.innerHTML = `
            <img src="${service.img}" alt="Illustration du service">
            <div class="service-info">
                <p>${service.description}</p>
                <a href="${service.link}">En savoir plus</a>
            </div>
        `;
        
        serviceContainer.appendChild(card);
        
        currentIndex++;
    }
    
    // Update the button text based on whether all cards are shown
    if (allCardsVisible) {
        showMoreBtn.textContent = 'Voir moins';
    } else {
        showMoreBtn.textContent = 'Voir plus';
    }
}

generateCards();

document.getElementById('show-more-btn').addEventListener('click', function() {
    // Toggle the 'allCardsVisible' state
    allCardsVisible = !allCardsVisible;
    currentIndex = 0; // Reset the index to start from the beginning
    generateCards();
});
