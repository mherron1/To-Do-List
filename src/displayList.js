import { taskList } from "./createTask";
import { selectedFolder } from "./createFolder";
import { editTask } from "./editTask";

const displayList = function () {
  let listArea = document.querySelector("#listArea");

  //clear list
  while (listArea.firstChild) {
    listArea.removeChild(listArea.firstChild);
  }

  let folderName = document.createElement("div");
  folderName.textContent = selectedFolder;
  folderName.classList = "folderName";
  listArea.appendChild(folderName);
  for (let i = 0; i < taskList.length; i++) {
    //loop through list array and display if tasks matching the selected folder
    //or all if all tasks selected
    if (
      taskList[i].folder === selectedFolder ||
      selectedFolder === "All Tasks"
    ) {
      let listItem = document.createElement("div");
      let removeItem = document.createElement("i");
      let editItem = document.createElement("div");
      listItem.innerHTML = `
      <p>Task: ${taskList[i].task}</p>
      <p>Notes: ${taskList[i].description}</p>
      <p>Priority: ${taskList[i].priority}</p>
      <p>Deadline: ${taskList[i].dueDate}</p>
      <p>Folder: ${taskList[i].folder}</p>`;

      removeItem.addEventListener("click", () => {
        taskList.splice(i, 1);
        displayList();
      });

      editItem.addEventListener("click", () => {
        editTask(taskList[i]);
      });

      listItem.classList = "listItems";
      removeItem.classList = "fa fa-trash";
      editItem.classList = "fa fa-edit";
      listItem.appendChild(removeItem);
      listItem.appendChild(editItem);
      listArea.appendChild(listItem);
      if (i % 2 === 0) {
        listItem.style.backgroundColor = "rgb(182, 222, 247)";
      }
    }
  }
};

export { displayList };
