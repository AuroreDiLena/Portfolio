document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;
        content.classList.toggle('active');
        button.textContent = content.classList.contains('active') ? 'Voir moins' : 'Voir plus';
    });
});