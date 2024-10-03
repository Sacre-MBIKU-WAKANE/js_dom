// creer l'entete

const titre = document.createElement('h1');
titre.textContent = 'Liste des auteurs';
document.body.appendChild(titre)

// Creation du div pour l'entree de tache et le bouton

const container = document.createElement('div');
document.body.appendChild(container);

// creation de Champ de saisie pour la tache

const listInput = document.createElement('input');
listInput.setAttribute('type', 'text');
listInput.setAttribute('id', 'listInput');
listInput.setAttribute('placeholder', 'Entrez le nom d un auteur...');
container.appendChild(listInput);

// Bouton pour ajouter un auteur
const ajouBtn = document.createElement('button');
ajouBtn.setAttribute('id', 'ajouBtn');
ajouBtn.textContent = 'Ajouter';
container.appendChild(ajouBtn);

// Liste des auteurs
const ulList = document.createElement('ul');
ulList.setAttribute('id', 'ulList');
document.body.appendChild(ulList);


// Fonction pour ajouter un auteur
function ajouAuteur() {
    const nomAuteur = listInput.value;
  
    if (listInput() !== '') {
    
        // Creer un nouvel element <li> pour l'auteur
    
    const newauteur = document.createElement('li');
    newauteur.textContent = ajouAuteur;

        // Ajouter le bouton de suppression
    
    const BtnEffac = document.createElement('button');
    BtnEffac.textContent = 'Supprimer';
    BtnEffac.addEventListener('click', () => {
      ulList.removeChild(newauteur);
    });

    // Ajouter le bouton pour modifier
    
    const BtnModif = document.createElement('button');
    BtnModif.textContent = 'Modifier';
    BtnModif.addEventListener('click', () => {
      newauteur.classList.toggle('modifier');
    });

        // Ajouter les boutons à l'élément <li>
        newauteur.appendChild(BtnModif);
        newauteur.appendChild(BtnEffac);
    
        // Ajouter l'élément <li> à la liste des tâches
        ulList.appendChild(newauteur);
    
        // Effacer le champ de saisie
        listInput.value = '';
      }
    }