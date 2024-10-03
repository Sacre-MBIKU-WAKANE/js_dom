// création du boutton 
const addBtn = document.createElement('button');
addBtn.textContent = 'Ajouter une tache';
addBtn.classList.add('btn');
addBtn.addEventListener('click', handleClick); 

document.body.appendChild(addBtn);

function handleClick() {
    // Créer le champ d'input
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'input-field';
    input.placeholder ='Veuillez entrer une tache';

    document.body.appendChild(input);
    input.focus();
}