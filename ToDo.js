
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("new-task-form");
    const input = document.getElementById("top-input");
    const taskList = document.querySelector(".task-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const newTask = document.createElement("div");
        newTask.classList.add("task");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "task";
        checkbox.id = "task";

        const label = document.createElement("label");
        label.htmlFor = "task";
        label.textContent = input.value;

        const icons = document.createElement("div");
        icons.classList.add("icons");

        const editIcon = document.createElement("i");
        editIcon.classList.add("fa", "fa-pencil");
        editIcon.setAttribute("aria-hidden", "true");
        editIcon.style.fontSize = "25px";

        const deleteIcon = document.createElement("i");
        deleteIcon.classList.add("fa", "fa-trash-o");
        deleteIcon.setAttribute("aria-hidden", "true");
        deleteIcon.style.fontSize = "25px";

        icons.appendChild(editIcon);
        icons.appendChild(deleteIcon);

        newTask.appendChild(checkbox);
        newTask.appendChild(label);
        newTask.appendChild(icons);

        taskList.appendChild(newTask);

        input.value = "";
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("fa-pencil")) {
            const parentTask = event.target.parentNode.parentNode;
            const label = parentTask.querySelector("label");
            const inputField = document.getElementById("bottom-input");

            inputField.value = label.textContent;
        } else if (event.target.classList.contains("fa-trash-o")) {
            const parentTask = event.target.parentNode.parentNode;
            parentTask.remove();
        }
    });

    const saveButton = document.querySelector("#headtask button");
    const inputField = document.getElementById("bottom-input");

    saveButton.addEventListener("click", function () {
        const task = taskList.querySelector(".task");
        const label = task.querySelector("label");
        label.textContent = inputField.value;

        inputField.value = "";
    });
});

