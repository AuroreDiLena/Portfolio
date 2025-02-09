document.addEventListener("DOMContentLoaded", function () {
    // Fonction pour récupérer le paramètre de l'URL
    function getParametre(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Récupérer le numéro du projet depuis l'URL
    const projetId = getParametre("projet");
    console.log("Projet ID récupéré depuis l'URL :", projetId);  // Vérifie la valeur du paramètre projet

    // Cacher tous les projets au départ
    const projets = document.querySelectorAll('.details');
    projets.forEach(function(projet) {
        projet.style.display = "none"; // Cache tous les projets
    });

    // Si un projet est spécifié dans l'URL
    if (projetId) {
        // Vérifier si l'ID correspond à un projet existant
        const projet = document.getElementById("projet" + projetId);
        if (projet) {
            projet.style.display = "block";  // Affiche le projet sélectionné
        } else {
            console.error("Aucun élément trouvé pour projet " + projetId);  // Si l'élément n'existe pas
        }
    } else {
        console.error("Aucun projet spécifié dans l'URL");  // Si aucun paramètre "projet" n'est spécifié dans l'URL
    }
});
