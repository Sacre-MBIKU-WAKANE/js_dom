document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementsByClassName('taskList');

    // Écoute les clics sur le bouton "Supprimer"
    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            const li = event.target.parentElement; // Trouver le parent <li>
            itemList.removeChild(li); // Supprimer le <li> de la liste
        }
    });
});
