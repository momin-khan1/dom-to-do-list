
// Select Element 
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let inCompleteTask = document.querySelector('#items')
let completeTask = document.querySelector('.complete-list ul')

//function

let crateTask = function(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkBox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = crateTask(newTask.value);
    inCompleteTask.appendChild(listItem);
    newTask.value = "";
    //blind the new list item to the incomplete list
    bindInCompleteTask(listItem, completeList);
}

let completeList= function(){
    let listItem = this.parentNode;
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'delete';
    listItem.appendChild(deleteButton);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeTask.appendChild(listItem);
    bindCompleteTask(listItem, deleteTask)
}

let deleteTask = function(){
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}


let bindInCompleteTask = function(taskItem, checkBoxClick){
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkBoxClick;
}
let bindCompleteTask = function(taskItem, deleteButtonClick){
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(i=0; i< inCompleteTask.children.length; i++){
    bindInCompleteTask(inCompleteTask.children[i], completeList);
}
for(i=0; i< completeTask .children.length; i++){
    bindCompleteTask(completeTask.children[i], deleteTask );
}

form.addEventListener('submit', addTask);