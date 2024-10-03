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
