let taskList = [];

class Todo {
  constructor(task) {
    this.task = task;
  }
}

const createTask = function () {
  let taskName = document.querySelector("#taskName").value;
  let task1 = new Todo(taskName);
  taskList.push(task1);
  removeAllChildNodes(listArea);

  taskList.forEach(displayList);
  document.querySelector("#taskName").value = "";
};

const displayList = function (item) {
  let listArea = document.querySelector("#listArea");
  let newTask = document.createElement("div");
  newTask.classList = "listItems";
  newTask.textContent = item.task;
  listArea.appendChild(newTask);
};

export { createTask };

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
