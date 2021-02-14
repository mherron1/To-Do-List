import { taskList } from "./createTask";
import { selectedFolder } from "./createFolder";

const displayList = function () {
  let listArea = document.querySelector("#listArea");
  while (listArea.firstChild) {
    listArea.removeChild(listArea.firstChild);
  }

  let folderName = document.createElement("div");
  folderName.textContent = selectedFolder;
  folderName.classList = "folderName";
  listArea.appendChild(folderName);
  for (let i = 0; i < taskList.length; i++) {
    if (
      taskList[i].folder === selectedFolder ||
      selectedFolder === "All Tasks"
    ) {
      let listItem = document.createElement("div");
      let removeItem = document.createElement("div");
      listItem.innerHTML = `
      <p>Task: ${taskList[i].task}</p>
      <p>Descriptio: ${taskList[i].description}</p>
      <p>Priority: ${taskList[i].priority}</p>
      <p>Due: ${taskList[i].dueDate}</p>
      <p>Folder: ${taskList[i].folder}</p>`;
      removeItem.textContent = "Remove";
      removeItem.addEventListener("click", () => {
        taskList.splice(i, 1);
        displayList();
      });
      listItem.classList = "listItems";
      removeItem.classList = "listRemove";
      listArea.appendChild(listItem);
      listItem.appendChild(removeItem);
    }
  }
};

export { displayList };
