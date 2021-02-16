import { createTask } from "./createTask";
import { displayList } from "./displayList";

function closeForm() {
  document.querySelector("#mainForm").style.opacity = "0.0";
  document.querySelector("#mainForm").style.transform = "translateY(40px)";
}

function submitTask() {
  let task = document.querySelector("#taskName").value;

  if (task != "") {
    createTask();
    displayList();
    closeForm();
  }
  
}

export { closeForm, submitTask };
