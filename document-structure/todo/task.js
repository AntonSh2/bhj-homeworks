let taskInput = document.getElementById("task__input");
let tasksList = document.getElementById("tasks__list");

const addTask = () => {
	tasksList.insertAdjacentHTML (
		 'afterEnd',
		`<div class="task">
      <div class="task__title">
        ${taskInput.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`);
	taskInput.value = "";

	const taskRemove = document.querySelector('.task__remove');

    taskRemove.addEventListener('click', event => {
    event.target.closest('.task').remove();
   })

}

document.getElementById("tasks__add").addEventListener("click", addTask);
 e.preventDefault();
