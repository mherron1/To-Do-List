import { taskList } from "./createTask";
import { selectedFolder } from "./createFolder";

const displayList = function () {
  let listArea = document.querySelector("#listArea");
  while (listArea.firstChild) {
    listArea.removeChild(listArea.firstChild);
  }
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].folder === selectedFolder) {
      let listItem = document.createElement("div");
      let removeItem = document.createElement("div");
      listItem.textContent = `${taskList[i].task}`;
      removeItem.textContent = "X";
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
