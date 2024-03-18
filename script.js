// Define an array to store tasks
let tasks = [];
// Function to add a new task
function addTask() {
    // Get the task input element
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    // Check if the task is not empty
    if (task) {
        // Add the task to the tasks array using the push method
        tasks.push(task);
        // Call the displayTasks function to update the UI
        displayTasks();
        // Clear the input field
        taskInput.value = '';
    } else {
        // If the task is empty, show an alert
        //this is error handling for stretch
        alert('Please enter a valid task.');
    }
}
// Function to remove a task based on its index
function removeTask(index) {
    // Remove the task at the specified index from the tasks array using the splice method
    tasks.splice(index, 1);
    // Call the displayTasks function to update the UI
    displayTasks();
}
// Function to display tasks on the screen
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    // Use the forEach method to loop through each task in the tasks array
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task;
        //Code bellow works with removeTask function to remove tasks with a click of a button
        const removeButton = document.createElement('button');
        removeButton.textContent = '❌';
        removeButton.onclick = () => removeTask(index);
        li.appendChild(removeButton);
        taskList.appendChild(li);
    });
}
