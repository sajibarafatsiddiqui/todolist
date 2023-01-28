import './style.css';
import TodoList from './modules/TodoList.js';
import toggleStatus from './modules/TaskStatus.js';


export let latestTodoList = new TodoList();
latestTodoList.reload()

const enterButton = document.getElementById('submit-new-item');

export const addTask = (e) => {
  e.preventDefault();
  const inputForm = document.getElementById('new-item');
  if (inputForm.value) {
    const description = inputForm.value.trim();
    const index = latestTodoList.todolist.length + 1;
    latestTodoList.addTask(description, index);
    localStorage.setItem('todolist', JSON.stringify(latestTodoList.todolist));
    inputForm.value = '';
  }
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
      localStorage.setItem('todolist', JSON.stringify(latestTodoList.todolist));
      element.contentEditable = false;
    }
  });
  element.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && element.innerHTML) {
      latestTodoList.editTask(element.innerHTML, element.className);
      localStorage.setItem('todolist', JSON.stringify(latestTodoList.todolist));
      element.contentEditable = false;
    }
  });
});



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

