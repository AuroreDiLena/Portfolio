// Récupère les éléments nécessaires
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementById('closeModal');

// Ajoute un gestionnaire d'événements aux liens des images
const imageLinks = document.querySelectorAll('.image-link');
imageLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut (suivi du lien)

    // Récupère l'URL de l'image et la description
    const imageSrc = this.querySelector('img').src;
    const description = this.getAttribute('data-description');

    // Affiche l'image et la description dans la fenêtre modale
    modalImage.src = imageSrc;
    modalDescription.textContent = description;

    // Affiche la fenêtre modale
    modal.style.display = 'block';
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
