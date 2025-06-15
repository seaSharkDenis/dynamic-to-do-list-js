document.addEventListener("DOMContentLoaded", function(){
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask(){
        let taskText = taskInput.value.trim();
        if(taskText===""){
            alert('Input is empty, please enter a task.');
        }else{
            const newTask = document.createElement('li');
            newTask.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove-btn');

            removeButton.addEventListener("click", ()=>{
                taskList.removeChild(newTask);
                taskInput.value = "";
            });

            newTask.appendChild(removeButton);
            taskList.appendChild(newTask);

            taskInput.value = "";
        }
    }

    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function(event){
        if (event.key === "Enter"){
            addTask();
        } 
    });
});