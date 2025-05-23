const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
      li.style.color = "gray";
    } else {
      li.style.textDecoration = "none";
      li.style.color = "black";
    }
  });

  const label = document.createElement("span");
  label.textContent = " " + taskText + " ";

  const delBtn = document.createElement("button");
  delBtn.textContent = "Hapus";
  delBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(delBtn);

  taskList.appendChild(li);
  taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
