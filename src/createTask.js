import { selectedFolder } from "./createFolder";

let taskList = [];

class Todo {
  constructor(task, dueDate, priority, folder) {
    this.task = task;
    this.dueDate = dueDate;
    this.priority = priority;
    this.folder = folder;
  }
}

const createTask = function () {
  let task = document.querySelector("#taskName").value;
  let dueDate = document.querySelector("#dueDate").value;
  let priority = document.querySelector("#priority").value;
  let folder = selectedFolder;
  if (task != "") {
    let newTask = new Todo(task, dueDate, priority, folder);
    taskList.push(newTask);
  }
};

export { createTask, taskList };
