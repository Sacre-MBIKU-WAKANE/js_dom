
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
