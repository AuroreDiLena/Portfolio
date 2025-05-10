window.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');

  let currentIndex = -1;
  let currentGalleryItems = [];

  function openModal(index, items) {
    const imageSrc = items[index].querySelector('a img').src;
    const description = items[index].querySelector('a').getAttribute('data-description');

    modalImage.src = imageSrc;
    modalDescription.textContent = description;

    currentIndex = index;
    currentGalleryItems = items;
    modal.style.display = 'block';
  }

  // ✅ CIBLE TOUTES LES GALERIES
  document.querySelectorAll('.gallery').forEach(gallery => {
    const items = gallery.querySelectorAll('ul li');
    
    items.forEach((item, index) => {
      item.addEventListener('click', function (event) {
        event.preventDefault();
        openModal(index, items);
      });
    });
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });


// Fonction pour passer à l'image précédente
prevImage.addEventListener('click', function () {
  if (currentGalleryItems.length === 0) return;

  const prevIndex = (currentIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
  openModal(prevIndex, currentGalleryItems);
});

// Fonction pour passer à l'image suivante
nextImage.addEventListener('click', function () {
  if (currentGalleryItems.length === 0) return;

  const nextIndex = (currentIndex + 1) % currentGalleryItems.length;
  openModal(nextIndex, currentGalleryItems);
});

// Navigation au clavier (gauche/droite)
window.addEventListener('keydown', function (event) {
  if (modal.style.display === 'block') {
    if (event.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + currentGalleryItems.length) % currentGalleryItems.length;
      openModal(prevIndex, currentGalleryItems);
    } else if (event.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % currentGalleryItems.length;
      openModal(nextIndex, currentGalleryItems);
    }
  }
});







});
