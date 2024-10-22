export const editTask = (id) => {
    console.log('You are editing the task with the id: ', id)
}

export const deleteTask = (id) => {
    console.log('You are deleting the task with the id: ', id)
}

const url = 'http://localhost:3000';

export const getTasks = async () => {

    const res = await fetch(url + '/tasks', {
        method: 'GET', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', 
        referrerPolicy: 'no-referrer', 
    })

    const tasks = await res.json();

    console.log(tasks)

    return tasks;
}