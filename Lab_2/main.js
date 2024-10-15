import { registerUser, authenticateUser } from './userMananement.js';

console.log("I'm in")

const user = {};

const loginForm = document.getElementById('login');
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    user.email = document.getElementById('login-email').value.trim();
    user.password = hash(document.getElementById('login-password').value.trim());

    console.log(user)

    if (authenticateUser(user)) {
        console.log('User logged in')
        displayTasks(tasks);
    } else {
        console.log('Wrong password')
    }
})



let tasks = [
    {
        'id':1,
        'responsible': 'andrei@gmail.com',
        'description': 'do the dishes',
        'status': 'pending'
    },
    {
        'id':2,
        'responsible': 'andreea@gmail.com',
        'description': 'do the homework',
        'status': 'done'
    },
    {
        'id':3,
        'responsible': 'flavius@gmail.com',
        'description': 'buy electric castle tickets',
        'status': 'in progress'
    },
    {
        'id':4,
        'responsible': 'mihai@gmail.com',
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


const taskContainer = document.getElementById('task-container');

const editTask = (task) => {
    const editForm = document.createElement('form');
    const editTaskId = document.createElement('label');
    editTaskId.textContent = 'Task ID:';
    editForm.appendChild(editTaskId);

    const editTaskIdInput = document.createElement('input');
    editTaskIdInput.type = 'text';
    editTaskIdInput.value = task.id;
    editForm.appendChild(editTaskIdInput);

    const editResponsible = document.createElement('label');
    editResponsible.textContent = 'Responsible:';
    editResponsible.id = 'edit-responsible';
    editForm.appendChild(editResponsible);

    const editResponsibleInput = document.createElement('input');
    editResponsibleInput.type = 'text';
    editResponsibleInput.value = task.responsible;
    editResponsibleInput.id = 'edit-responsible';
    editForm.appendChild(editResponsibleInput);

    const editDescription = document.createElement('label');
    editDescription.textContent = 'Description:';
    editForm.appendChild(editDescription);

    const editDescriptionInput = document.createElement('input');
    editDescriptionInput.type = 'text';
    editDescriptionInput.value = task.description;
    editDescriptionInput.id = 'edit-description';
    editForm.appendChild(editDescriptionInput);

    const editStatus = document.createElement('label');
    editStatus.textContent = 'Status:';
    editForm.appendChild(editStatus);

    const editStatusInput = document.createElement('input');
    editStatusInput.type = 'text';
    editStatusInput.value = task.status;
    editStatusInput.id = 'edit-status';
    editForm.appendChild(editStatusInput);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.type = 'submit';
    editForm.appendChild(editButton);

    loginForm.appendChild(editForm);

    editForm.classList.add('edit-form');
    editForm.addEventListener('submit', event => {
        event.preventDefault();
        const newTask = {};
        newTask.id = task.id;
        newTask.responsible = document.getElementById('edit-responsible').value;
        newTask.description = document.getElementById('edit-description').value;
        newTask.status = document.getElementById('edit-status').value;

        tasks = tasks.map(task => {
            if (task.id === newTask.id) {
                return newTask;
            }
            return task;
        })

        console.log(tasks)
        displayTasks(tasks);
    })

   

}

const displayTasks = (tasks) => {    

    if (taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild);
    }
    
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

            if (user.email && user.email === task.responsible) {
                const taskButton = document.createElement('button');
                taskButton.classList.add('edit-button');
                taskButton.textContent = 'Edit';
                taskItem.appendChild(taskButton);
                taskButton.addEventListener('click', () => {
                    console.log("merge")
                    editTask(task);
                })
            }
            
            tasksList.appendChild(taskItem);
        })
        taskContainer.appendChild(tasksList);
    }
}



displayTasks(tasks);

const hash = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
}

const registerForm = document.getElementById('register');
registerForm.addEventListener('submit', event => {
    event.preventDefault();
    const user = {};
    user.name = document.getElementById('register-name').value.trim();
    user.email = document.getElementById('register-email').value.trim();
    user.password = hash(document.getElementById('register-password').value.trim());

    registerUser(user)
})


///////