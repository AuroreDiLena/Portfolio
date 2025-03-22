// Récupère les éléments nécessaires
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');
const prevImage = document.getElementById('prevImage');
const nextImage = document.getElementById('nextImage');

// Récupère tous les éléments <li> pour naviguer entre eux
const galleryItems = document.querySelectorAll('.gallery ul li');

// Variables pour savoir quelle image est affichée
let currentIndex = -1;  // L'index de l'image actuellement affichée

// Fonction pour ouvrir la modale avec les données d'une image
function openModal(index) {
  const imageSrc = galleryItems[index].querySelector('a img').src;
  const description = galleryItems[index].querySelector('a').getAttribute('data-description');

  modalImage.src = imageSrc;
  modalDescription.textContent = description;

  currentIndex = index;  // Met à jour l'index de l'image actuelle
  modal.style.display = 'block';
}

// Ajouter un gestionnaire d'événements pour ouvrir la modale lors du clic sur un élément <li>
galleryItems.forEach((item, index) => {
  item.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche la propagation du clic
    openModal(index); // Ouvre la modale avec l'image correspondante
  });
});

// Ferme la fenêtre modale quand on clique sur "X"
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Ferme la fenêtre modale si l'utilisateur clique en dehors de l'image
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

// Fonction pour passer à l'image précédente
prevImage.addEventListener('click', function() {
  const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; // Calcul pour revenir à la dernière image quand on est au début
  openModal(prevIndex); // Ouvre la modale avec l'image précédente
});

// Fonction pour passer à l'image suivante
nextImage.addEventListener('click', function() {
  const nextIndex = (currentIndex + 1) % galleryItems.length; // Calcul pour revenir à la première image quand on est à la fin
  openModal(nextIndex); // Ouvre la modale avec l'image suivante
});

// Fonction pour passer à l'image précédente avec les flèches du clavier
window.addEventListener('keydown', function(event) {
  if (modal.style.display === 'block') {  // Vérifier si la modale est ouverte
    if (event.key === 'ArrowLeft') {  // Flèche gauche
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      openModal(prevIndex);
    } else if (event.key === 'ArrowRight') {  // Flèche droite
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      openModal(nextIndex);
    }
  }
});
