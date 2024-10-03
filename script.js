const divAuteur = document.createElement('div');
divAuteur.id = 'container';

const label = document.createElement('label');
            label.setAttribute('for', 'input');
            label.textContent = 'Entrer auteur ';
            label.id='label'
 
 const input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'saisir auteur';
 input.id = 'nom';

divAuteur.appendChild(label);
divAuteur.appendChild(input);

 document.querySelector('body').appendChild(divAuteur);




