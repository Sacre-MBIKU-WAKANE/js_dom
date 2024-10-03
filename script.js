const tasks = {
    list: [],

    displayTasks : function() {
        const taskList = getElementById("taskList");
        taskList.innerHTML = "";

        if(this.list.length === 0) {
            taskList.innerHTML = "<li>Aucune tâche dans la liste</li>";
        }else {
            this.list.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                taskList.appendChild(li)
            })
        }
    }
}


//Tableau qui contiendra les tasks
const tableau = [];

const elementList = document.querySelector(".list-item");
