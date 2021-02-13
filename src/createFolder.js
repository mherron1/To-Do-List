import { displayList } from "./displayList";

let folderList = ["All Tasks"];
let selectedFolder = "All Tasks";

const createFolder = function () {
  let name = document.querySelector("#projectInput").value;
  if (name != "") {
    folderList.push(name);
    displayFolders();
  }
};

const displayFolders = function () {
  let sideBar = document.querySelector("#sideBar");
  while (sideBar.firstChild) {
    sideBar.removeChild(sideBar.firstChild);
  }

  for (let i = 0; i < folderList.length; i++) {
    let newFolder = document.createElement("div");

    newFolder.addEventListener("click", () => {
      selectedFolder = folderList[i];
      displayList();
      console.log(selectedFolder);
    });
    newFolder.textContent = folderList[i];
    newFolder.classList = "folderList";
    sideBar.appendChild(newFolder);
  }
};

export { createFolder, displayFolders, selectedFolder };
