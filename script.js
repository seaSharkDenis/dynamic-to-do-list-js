document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false));
  }

  function addTask(taskText, save = true) {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.addEventListener("click", () => {
      taskList.removeChild(newTask);
      removeTaskFromLocalStorage(taskText);
    });

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    taskInput.value = "";
  }

  // Remove a task from Local Storage
  function removeTaskFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Input is empty, please enter a task.");
    } else {
      addTask(taskText);
    }
  });

  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Input is empty, please enter a task.");
      } else {
        addTask(taskText);
      }
    }
  });

  //   Load stored tasks on page load
  loadTasks();
});
