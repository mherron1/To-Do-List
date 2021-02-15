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
      let removeItem = document.createElement("div");
      let editItem = document.createElement("div");
      listItem.innerHTML = `
      <p>Task: ${taskList[i].task}</p>
      <p>Description: ${taskList[i].description}</p>
      <p>Priority: ${taskList[i].priority}</p>
      <p>Due: ${taskList[i].dueDate}</p>
      <p>Folder: ${taskList[i].folder}</p>`;
      removeItem.textContent = "Remove";
      editItem.textContent = "Edit";

      removeItem.addEventListener("click", () => {
        taskList.splice(i, 1);
        displayList();
      });

      editItem.addEventListener("click", () => {
        editTask(taskList[i]);
      });

      listItem.classList = "listItems";
      removeItem.classList = "listRemove";
      editItem.classList = "listEdit";
      listArea.appendChild(listItem);
      listItem.appendChild(removeItem);
      listItem.appendChild(editItem);
    }
  }
};

export { displayList };
