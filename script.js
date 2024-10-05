
const liste = document.querySelector("h1")
liste.style.color = 'blue';               
liste.style.fontSize = '2em';             
liste.style.textAlign = 'center';       
liste.style.marginTop = '20px';     
const btn = document.querySelectorAll ("button")
btn.style.display= "flex";
btn.style.flexdirection= "row";
btn.style.color="red";
btn.style.justifycontent="center";
btn.style.gap="2rem";
const modification = document.querySelectorAll(".modification");

modification.forEach( function(button){
    button.addEventListener('Click', function(){
        let taskId = button.getAttribute("data-id");
        modification_tasks(taskId)
    })
})
function modification_tasks(id){
    let recherche = list.find( (tache) => tache.id === id);
    recherche.paragraphe = String(prompt("votre modification"));
    displayTasks()
}
let main= document.createElement('main');
main.className='main';
document.body.appendChild(main);

let newh1= document.createElement('h1');
newh1.textContent ="To Do List";
newh1.className="title";
main.appendChild(newh1);

let newInput= document.createElement('input');
newInput.textContent ="Add a new task";
newInput.placeholder='Add a new task';
newInput.className='input-field';
main.appendChild(newInput);



let btn= document.createElement('button');
btn.textContent='Add text';
btn.className='btn';
main.appendChild(btn);

let p= document.createElement('p');
p.textContent='LIST OF TASKS';
main.appendChild(p);

let ul= document.createElement('ul');
ul.className='taskList';
main.appendChild(ul);

let li= document.createElement('li');
li.textContent='GYM';
ul.appendChild(li);

let li1= document.createElement('li');
li1.textContent='WORK';
ul.appendChild(li1);


const auteur = document.createElement('input');
auteur.type = 'text';
auteur.placeholder = 'Auteur';
auteur.className = 'auteur';
main.appendChild(auteur);

let Taches = 0;

function addTasks () {

    Taches++;

    Tache = {
        id: Taches,
        paragraphe : newInput.value,
        auteur : auteur.value,
        etat : false,
    }

    let li = document.createElement('li');
    li.textContent = Tache.paragraphe + ' - ' + Tache.auteur;
    ul.appendChild(li);

    newInput.value = '';
    auteur.value = '';


}

    li.addEventListener("click", () => {
      Tache.etat = !Tache.etat;
      li.classList.toggle("checked");
    });

    btn.addEventListener("click", () => {
      addTasks();
    });

    