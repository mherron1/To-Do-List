import { showForm } from "./index";

const editTask = function (t) {
  document.querySelector("#taskName").value = t.task;
  document.querySelector("#dueDate").value = t.dueDate;
  document.querySelector("#priority").value = t.priority;
  document.querySelector("#taskDescription").value = t.description;
  showForm();
};

export { editTask };
