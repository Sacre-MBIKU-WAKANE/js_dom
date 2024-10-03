const modification = document.querySelectorAll(".modification");

modification.forEach( function(button){
    button.addEventListener('Click', function(){
        let taskId = button.getAttribute("data-id");
        modification_tasks(taskId)
    })
})

function modification_tasks(id){
    let recherche = taches.find( (tache) => tache.id === id);
    recherche.paragraphe = String(prompt("votre modification"));
    displayTasks()
}



let taches = [{
    auteur: "emmanuel",
    id: 0,
    paragraphe: "faire les taches menager",
    etat : false
},{
    auteur: "Gad",
    id: 1,
    paragraphe: "bonjour tout le monde",
    etat : false
}]
