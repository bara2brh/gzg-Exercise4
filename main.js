const tasks = [];
const completionStatus = [];

function tasksAreEmpty() {
    if (tasks.length === 0) {
        alert("Add Some Tasks First!");
        console.clear();
        return true;
    }
    return false;
}

function showAllTasks() {
    if (!tasksAreEmpty()) {
    console.log("============== All Tasks ================");
    tasks.forEach((task, index) => {
        console.log(`${index} - ${task} - ${completionStatus[index] ? "Completed" : "Not Completed"}`);
    });
    console.log("=========================================");
    }
}

function showMenu() {
    console.log(`
Task Manager Menu:

1 - Add Task
2 - View Tasks
3 - Toggle Task Completion
4 - Edit Task
5 - Delete Task
6 - Exit

    `);
}

function addTask() {
    const value = prompt("Enter Task Name:");
    tasks.push(value);
    completionStatus.push(false);
    alert(`Task Added Successfully: ${value}`);
}

function toggleTaskCompletion() {
    if (!tasksAreEmpty()) {
        showAllTasks();
        const id = prompt("Enter Task ID:");
        completionStatus[id] = !completionStatus[id];
        alert("Task Completion Toggled Successfully");
    }
}

function editTask() {
    if (!tasksAreEmpty()) {
        showAllTasks();
        const id = prompt("Enter Task ID:");
        tasks[id] = prompt("Add The New Task Name:", tasks[id]);
        alert("Task Edited Successfully");
    }
}

function deleteTask() {
    if (!tasksAreEmpty()) {
        showAllTasks();
        const id = prompt("Enter Task ID:");
        tasks.splice(id, 1);
        completionStatus.splice(id, 1);
        alert("Task Deleted Successfully");
    }
}

function handleUserInput(input) {
    console.clear();
    switch (input) {
        case "1":
            addTask();
            break;
        case "2":
            showAllTasks();
            break;
        case "3":
            toggleTaskCompletion();
            break;
        case "4":
            editTask();
            break;
        case "5":
            deleteTask();
            break;
        case "6":
            alert("Goodbye ^__^");
            console.clear();
            return false;
        default:
            alert("Wrong Input! Choose Only (1-6)!");
    }
    return true;
}

while (true) {
    showMenu();
    const input = prompt('Enter Operation Number (1-6):');
    if (!handleUserInput(input)) break;
}
