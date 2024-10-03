const divAuteur = document.createElement('div');
divAuteur.id = 'container';

divAuteur.style.display = 'flex';
 divAuteur.style.width = '20.5rem' ;
 divAuteur.style.border = '0.1rem black';
 divAuteur.style.gap = '2%'
 divAuteur.style.margin = ' 10rem 0 0 10rem' ;
 divAuteur.style.padding = '1rem 0 1rem 0'
 divAuteur.style.background= 'red'

const label = document.createElement('label');
            label.setAttribute('for', 'input');
            label.textContent = 'Entrer auteur ';
            label.id='label'
 
 const input = document.createElement('input');
 input.type = 'text';
 input.placeholder = 'saisir auteur';
 input.id = 'nom';

 input.style.width = '10rem';

divAuteur.appendChild(label);
divAuteur.appendChild(input);

 document.querySelector('body').appendChild(divAuteur);


 const authorInput = document.getElementById('authorInput');
 const addTaskButton = document.getElementById('addAuteur');
 const listAuteur = document.getElementById('listAuteur');
 addTaskButton.addEventListener('click', () => {
     const authorText = authorInput.value;
     if (authorText) {
         const deleteButton = li.querySelector('.delete');
         deleteButton.addEventListener('click', () => {
             listAuteur.removeChild(li);
         });
         const editButton = li.querySelector('.edit');
         editButton.addEventListener('click', () => {
             authorInput.value = authorText;
             listAuteur.removeChild(li);
         });
     }
 });
 authorInput.addEventListener('keypress', (event) => {
     if (event.key === 'Enter') {
         addTaskButton.click();
     }
 });
 










