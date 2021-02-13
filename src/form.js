import { createTask } from "./createTask";
import { displayList } from "./displayList";

function closeForm() {
  document.querySelector("#mainForm").style.display = "none";
}

function submitTask() {
  createTask();
  displayList();
  closeForm();
}

export { closeForm, submitTask };
