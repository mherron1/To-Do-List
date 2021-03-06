import { displayList } from "./displayList";
import { closeForm, submitTask } from "./form";
import { createFolder, displayFolders } from "./createFolder";

//form Popup
let addItemButton = document.querySelector("#addItemButton");
addItemButton.addEventListener("click", showForm);

function showForm() {
  document.querySelector("#mainForm").style.opacity = "1";
  document.querySelector("#mainForm").style.transform = "translateY(-40px)";
}

//close popup
let formClose = document.querySelector("#formX");
formClose.addEventListener("click", closeForm);

//addNewItem new Item

let doneButton = document.querySelector("#doneButton");
doneButton.addEventListener("click", submitTask);

//add new project button

let newProject = document.querySelector("#newProject");
newProject.addEventListener("click", createFolder);

displayList();
displayFolders();

export { showForm };
