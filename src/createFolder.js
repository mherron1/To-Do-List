import { displayList } from "./displayList";

let folderList = ["All Tasks"];
let selectedFolder = "All Tasks";

const createFolder = function () {
  let name = document.querySelector("#projectInput").value;
  //check for input then add to folderList and render
  if (name != "") {
    folderList.push(name);
    displayFolders();
  }
  //reset input field
  document.querySelector("#projectInput").value = "";
};

const displayFolders = function () {
  let sideBar = document.querySelector("#sideBar");
  //clear list
  while (sideBar.firstChild) {
    sideBar.removeChild(sideBar.firstChild);
  }

  for (let i = 0; i < folderList.length; i++) {
    let newFolder = document.createElement("div");
    let removeItem = document.createElement("div");
    removeItem.textContent = "x";
    removeItem.classList = "folderRemoveButton";
    removeItem.addEventListener("click", () => {
      folderList.splice(i, 1);
      displayFolders();
    });

    newFolder.addEventListener("click", () => {
      selectedFolder = folderList[i];
      displayList();
      console.log(selectedFolder);
    });

    newFolder.textContent = folderList[i];
    newFolder.classList = "folderList";
    sideBar.appendChild(newFolder);
    if (newFolder.textContent != "All Tasks") {
      newFolder.appendChild(removeItem);
    }
  }
};

export { createFolder, displayFolders, selectedFolder };
