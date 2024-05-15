const form = document.getElementById("todo-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const taskToInsert = document.getElementById("task");

  const newTask = taskToInsert.value;
  console.log(newTask);
  const box = document.createElement("div");

  const ul = document.createElement("ul");
  const containerList = document.getElementById("box-list");
  containerList.appendChild(ul);
  const li = document.createElement("id");
  ul.appendChild(li);
  li.innerText = newTask;

  taskToInsert.value = ""; //rimuovo stringa dall'input

  const buttonRemove = document.createElement("button");
  containerList.appendChild(buttonRemove);
});
