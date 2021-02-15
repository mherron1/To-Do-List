import { displayList } from "./displayList";
import { closeForm } from "./form";
import { showForm } from "./index";

const editTask = function (t) {
  //populate fields with current entry
  document.querySelector("#taskName").value = t.task;
  document.querySelector("#dueDate").value = t.dueDate;
  document.querySelector("#priority").value = t.priority;
  document.querySelector("#taskDescription").value = t.description;

  //put "save" in pace of "add" on edit form
  document.querySelector("#doneButton").style.display = "none";
  if (!document.querySelector(".saveButton")) {
    let saveChanges = document.createElement("div");
    saveChanges.textContent = "save";
    saveChanges.classList = "saveButton";
    document.querySelector("#mainForm").appendChild(saveChanges);
    saveChanges.addEventListener("click", function () {
      t.task = document.querySelector("#taskName").value;
      t.dueDate = document.querySelector("#dueDate").value;
      t.priority = document.querySelector("#priority").value;
      t.description = document.querySelector("#taskDescription").value;
      displayList();
      closeForm();
      document.querySelector("#doneButton").style.display = "block";
      document.querySelector(".saveButton").remove();

      document.querySelector("#taskName").value = "";
      document.querySelector("#dueDate").value = "";
      document.querySelector("#priority").value = "";
      document.querySelector("#taskDescription").value = "";
    });
  }

  showForm();
};

export { editTask };
