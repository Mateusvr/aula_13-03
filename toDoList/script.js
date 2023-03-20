let form = document.getElementById('form');
console.log(task.value)
let taskList = []
function addTask() {
    form.addEventListener('submit', function() {
    event.preventDefault()
    let task = document.getElementById('task');
    let inputValue=task.value.trim()
        if(inputValue !== '') {
            // console.log('valor:'+ task.value.trim());
            taskList.push(inputValue);
            console.log(taskList)
            task.value = ''
            showList();
        }
    });
}

function showList() {
    let list = document.getElementsByTagName('ul')[0];
    console.log(list)
    list.innerHTML = '';

    //percorrer cada elemento da lista e imprimí-lo, conferir se está lendo cada task adicionado no array
        taskList.forEach((item, index) => {
        console.log(item)

        const li = document.createElement('li');
        li.classList.add('list-group-item')

        const texto = document.createTextNode(item);

        li.appendChild(texto);

        let button = document.createElement('button')
        button.classList.add('btn', 'btn-danger', 'float-end');
        button.dataset.index = index
        
        const x = document.createTextNode('X')
        
        button.appendChild(x)

        button.addEventListener('click', function(e){
            let index = e.target.dataset.index;
            console.log(index);

            taskList.splice(index, 1);
            showList();
        })

        li.appendChild(button)

        list.appendChild(li);
    })
}
