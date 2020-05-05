const taskInput = document.querySelector('.taskInput');
const inputBtn = document.querySelector('input.btn');
const filterTasks = document.querySelector('.filter-tasks');
const taskList = document.querySelector('.task-collection');
const clearTask = document.querySelector('.clear-tasks');

loadEventListeners()

function loadEventListeners() {
    inputBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);
    clearTask.addEventListener('click', clearTasks);
    filterTasks.addEventListener('keyup', filter);
}

function addTask(e) {
    if (taskInput.value === '') {
        alert('Please Enter a Task');
    } else {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(taskInput.value));
        const link = document.createElement('a');
        const img = document.createElement('img');
        img.src = 'icons/delete.svg';
        link.className = 'delete';
        link.appendChild(img);
        li.appendChild(link);
        taskList.appendChild(li);
        taskInput.value = '';
        e.preventDefault();
    }
}

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks () {
    if(confirm("Are you sure?")) {
        taskList.innerHTML = "";
    }
}

function filter(e) {
	 const text = e.target.value.toLowerCase();
	 document.querySelectorAll('.collection-item').forEach(function(task) {
	    const item = task.firstChild.textContent;
	    if(item.toLocaleLowerCase().indexOf(text) != -1) {
	        task.style.display = 'block';
	    } else {
	        task.style.display = 'none';
	    }
	 }); 
}



