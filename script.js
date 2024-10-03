const tasks = {
    list: [
        {id:1, name:"Faire"},
        {id:2, name:"Faire"},
        {id:3, name:"Faire"},
        {id:4, name:"Faire"},
        {id:5, name:"Faire"},
        {id:6, name:"Faire"},

    ],
    nextId: 1,

    displayTasks : function() {
        const task = {id: this.nextId++, name: name}
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = "";

        if(this.list.length === 0) {
            taskList.innerHTML = "<li>Aucune tâche dans la liste</li>";
        }else {
            this.list.forEach((task) => {
                const li = document.createElement('li');
                li.innerHTML = `
                <p>${task.name}</p>
                <button data-id="${task.id}">Modifier</button>
                `
                taskList.appendChild(li)
            })
        }
    }
}



let tasklist = document.createElement('ul');
tasklist.id = "taskList";
document.body.appendChild(tasklist);

tasks.displayTasks();