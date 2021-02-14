import { selectedFolder } from "./createFolder";

let taskList = [];

class Todo {
  constructor(task, description, dueDate, priority, folder) {
    this.task = task;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.folder = folder;
  }
}

const createTask = function () {
  let task = document.querySelector("#taskName").value;
  let dueDate = document.querySelector("#dueDate").value;
  let priority = document.querySelector("#priority").value;
  let description = document.querySelector("#taskDescription").value;
  let folder = selectedFolder;
  if (task != "") {
    let newTask = new Todo(task, description, dueDate, priority, folder);
    taskList.push(newTask);
  }
  //reset input field
  document.querySelector("#taskName").value = "";
  document.querySelector("#dueDate").value = "";
  document.querySelector("#priority").value = "";
  document.querySelector("#taskDescription").value = "";
};

export { createTask, taskList };
