function addTask() {
    var taskText = document.getElementById("new-task").value;

    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var taskList = document.getElementById("tasks");

    var li = document.createElement("li");
    li.innerHTML = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    document.getElementById("new-task").value = "";
}

document.getElementById("add-button").addEventListener("click", addTask);
