import { createTask } from "./createTask";
import { displayList } from "./displayList";

function closeForm() {
  document.querySelector("#mainForm").style.opacity = "0.0";
}

function submitTask() {
  createTask();
  displayList();
  closeForm();
}

export { closeForm, submitTask };
