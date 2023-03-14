let task = document.getElementById('task');

function addTask() {
    //alert(`Adicionou: ${task.value}!`)
    let ul = document.getElementById('lista')

    let li = `<li class="list-group-item">${task.value}</li>`

    ul.innerHTML = li
}


//let tasks = [] 
//if(tasks)
//tasks.push(task.value)
//innerHTML