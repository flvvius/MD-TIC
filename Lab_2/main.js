console.log("I'm in")

const tasks = [
    {
        'id':1,
        'responsible': 'Mihai',
        'description': 'do the dishes',
        'status': 'pending'
    },
    {
        'id':2,
        'responsible': 'Elena',
        'description': 'do the homework',
        'status': 'done'
    },
    {
        'id':3,
        'responsible': 'Cosmin',
        'description': 'buy electric castle tickets',
        'status': 'in progress'
    }
]

const printTasks = (tasks) => {
    tasks.forEach(element => {
        console.log(`Task ${element.id}: ${element.description}
${element.responsible} is responsible for this task
------------------------------------`)
    })
}

printTasks(tasks);

const displayTasks = (tasks) => {

    const taskContainer = document.getElementById('task-container');
    
    if (tasks.length === 0) {
        const noTasksWarning = document.createElement('p');
        noTasksWarning.textContent = 'No tasks available';
        taskContainer.appendChild(noTasksWarning);
    } else {
        const tasksList = document.createElement('ul');
        tasks.forEach(task => {
            const taskItem = document.createElement('li');
            const taskId = document.createElement('div');
            taskId.textContent = task.id;
            taskItem.appendChild(taskId);
            
            const taskResponsible = document.createElement('div');
            taskResponsible.textContent = task.responsible;
            taskItem.appendChild(taskResponsible);

            const taskDescription = document.createElement('div');
            taskDescription.textContent = task.description;
            taskItem.appendChild(taskDescription);

            const taskStatus = document.createElement('div');
            taskStatus.textContent = task.status;
            taskItem.appendChild(taskStatus);

            
            tasksList.appendChild(taskItem);
        })
        taskContainer.appendChild(tasksList);x
    }

}

displayTasks(tasks)