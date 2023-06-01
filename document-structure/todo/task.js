let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

const taskRemove = e => {
	e.target.closest(".task").remove();
}

const addTask = e => {
	tasksList.innerHTML +=
		`<div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
	taskInput.value = "";
  [...(tasksList.getElementsByClassName("task__remove"))].forEach(element => {
		element.addEventListener("click", taskRemove)
	});
	e.preventDefault();
}

document.getElementById("tasks__add").addEventListener("click", addTask);
taskInput.addEventListener("keypress", e => {
	if (e.keyCode == 13) addTask(e);
});