import './style.css';
import TodoList from './modules/TodoList.js';
import toggleStatus from './modules/TaskStatus.js';

let todolist = [];
if (JSON.parse(localStorage.getItem('todolist'))) {
  todolist = JSON.parse(localStorage.getItem('todolist')).todolist;
}
const latestTodoList = new TodoList(todolist);
const todos = document.getElementsByClassName('todolist')[0];

const sortedTodoList = todolist.length > 0 ? todolist.sort((a, b) => a.index - b.index) : [];

sortedTodoList.forEach((todo) => {
  const task = document.createElement('li');
  task.classList.add('task');
  task.id = todo.index;
  task.innerHTML = `<input type="checkbox" ${todo.completed ? 'checked' : ''} name="${todo.index}"><label class = "${todo.index}" for="${todo.index}">${todo.description}</label><div class="remove-button"><i class='fa fa-trash'></i><div>`;
  todos.appendChild(task);
});

const enterButton = document.getElementById('submit-new-item');

const addTask = (e) => {
  e.preventDefault();
  const inputForm = document.getElementById('new-item');
  if (inputForm.value) {
    const description = inputForm.value.trim();
    const index = todolist.length + 1;
    latestTodoList.addTask(description, index);
    localStorage.setItem('todolist', JSON.stringify(latestTodoList));
    inputForm.value = '';
  }
  window.location.reload();
};

enterButton.addEventListener('click', addTask);

const editButton = document.querySelectorAll('.task');
editButton.forEach((elm) => {
  const element = elm.children[1];
  element.addEventListener('click', () => {
    element.contentEditable = true;
    element.focus();
  });

  element.addEventListener('focusout', () => {
    if (element.innerHTML) {
      latestTodoList.editTask(element.innerHTML, element.className);
      localStorage.setItem('todolist', JSON.stringify(latestTodoList));
      element.contentEditable = false;
    }
  });
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && element.innerHTML) {
      latestTodoList.editTask(element.innerHTML, element.className);
      localStorage.setItem('todolist', JSON.stringify(latestTodoList));
      element.contentEditable = false;
    }
  });
});

const removeButton = document.querySelectorAll('.remove-button');

const removeTask = (e) => {
  const index = e.target.parentNode.parentNode.id;
  latestTodoList.removeTask(index);
  localStorage.setItem('todolist', JSON.stringify(latestTodoList));
  window.location.reload();
};

removeButton.forEach((element) => element.addEventListener('click', removeTask));

const checkBox = (e) => {
  const ind = e.target.name;
  const task = latestTodoList.getTaskByIndex(ind);
  toggleStatus(task);
  latestTodoList.todolist[ind - 1] = task;
  localStorage.setItem('todolist', JSON.stringify(latestTodoList));
};

const tasks = document.querySelectorAll('.task');
tasks.forEach((elm) => {
  const inputCheck = elm.childNodes[0];
  inputCheck.addEventListener('change', checkBox);
});

const clearButton = document.getElementsByClassName('link-button')[0];

const clearCompleted = () => {
  const filteredList = latestTodoList.todolist.filter((elm) => elm.completed === false);
  const sortList = filteredList.map((object, ind) => {
    const index = ind + 1;
    return { ...object, index };
  });
  latestTodoList.todolist = sortList;
  localStorage.setItem('todolist', JSON.stringify(latestTodoList));
  window.location.reload();
};

clearButton.addEventListener('click', clearCompleted);