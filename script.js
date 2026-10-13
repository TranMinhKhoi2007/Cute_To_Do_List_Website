
const input = document.querySelector("input");
const btn = document.getElementById("btn");
let tasks = [];
const list = document.createElement("ul");
document.body.append(list);
btn.addEventListener("click", addItem);
let id = 0;
let completed = false;

function addItem() {
    if (input.value.trim() === "") {
        return;
    }
    const newItem = { id: id, text: input.value, completed: completed };
    id++;
    tasks.push(newItem);
    renderTasks();
}

function renderTasks() {
    list.innerHTML = ""; // Xóa phần tử list cũ
    tasks.forEach(function (element) {
        const item = document.createElement("li");
        item.textContent = element.text;
        const checkbox = document.createElement("input");
        const delBtn = document.createElement("button");
        delBtn.textContent = "Delete item";
        delBtn.addEventListener("click", function () {
            tasks = tasks.filter(item => item.id !== element.id);
            renderTasks();
        });
        checkbox.type = "checkbox"
        checkbox.addEventListener("change", function () {
            element.completed = checkbox.checked;
            renderTasks();
        });
        item.append(checkbox);
        item.append(delBtn);
        list.append(item);
        checkbox.checked = element.completed;
    });
    updateTask();
}

const completedTask = document.getElementById("completed-task");
function updateTask() {
    const completed = tasks.filter(task => task.completed).length;
    const total = tasks.length;
    if (completed == 0) {
        completedTask.textContent = `0 of ${total} tasks completed`;
    }
    else {
        completedTask.textContent = `${completed} of ${total} tasks completed`;
    }
}
