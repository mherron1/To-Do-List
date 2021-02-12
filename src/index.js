import { createTask, taskList } from "./createTask";

//form Popup
let addItemButton = document.querySelector("#addItemButton");
addItemButton.addEventListener("click", () => {
  document.querySelector("#mainForm").style.display = "block";
});

//close popup
let formClose = document.querySelector("#formX");
formClose.addEventListener("click", () => {
  console.log("closing");
  document.querySelector("#mainForm").style.display = "none";
});

//addNewItem new Item

let doneButton = document.querySelector("#doneButton");
doneButton.addEventListener("click", createTask);

let listArea = document.querySelector("#listArea");

const displayList = function () {
  let listArea = document.querySelector("#listArea");
  removeAllChildNodes(listArea);
  taskList.forEach(function (item) {
    let task = document.createElement("div");
    task.textContent = item.taskName;
    listArea.appendChild(task);
  });
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
