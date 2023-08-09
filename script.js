document.addEventListener("DOMContentLoaded", function () {
	const newTodoInput = document.getElementById("newTodo");
	const addTodoButton = document.getElementById("addTodo");
	const todoList = document.getElementById("todoList");
	const dingSound = document.getElementById("dingSound");
	addTodoButton.addEventListener("click", function () {
	  const todoText = newTodoInput.value.trim();
	  if (todoText !== "") {
		const todoItem = createTodoItem(todoText);
		todoList.appendChild(todoItem);
		newTodoInput.value = "";
	  }
	});
	function createTodoItem(text) {
	  const li = document.createElement("li");
	  const checkbox = document.createElement("input");
	  checkbox.type = "checkbox";
	  const label = document.createElement("span");
	  label.textContent = text;
	  const deleteButton = document.createElement("button");
	  deleteButton.textContent = "Delete";
	  checkbox.addEventListener("change", function () {
		li.classList.toggle("checked", checkbox.checked);
		if (checkbox.checked) {
		  dingSound.play();
		}
		if (checkbox.checked) {
		  todoList.appendChild(li);
		} else {
		  todoList.prepend(li);
		}
	  });
	  deleteButton.addEventListener("click", function () {
		li.classList.add("deleted");
		li.addEventListener("animationend", function () {
		  li.remove();
		});
	  });
	  li.appendChild(checkbox);
	  li.appendChild(label);
	  li.appendChild(deleteButton);
	  return li;
	}
  });