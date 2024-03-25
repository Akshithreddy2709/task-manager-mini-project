function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.value = "";
}
// Function to delete a task
function deleteTask(taskElement) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement);
}

// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;

    // Add a button to mark task as completed
    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    // Add a button to delete task
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
}

// Add event listener to Add Task button
document.getElementById("addTaskBtn").addEventListener("click", addTask);