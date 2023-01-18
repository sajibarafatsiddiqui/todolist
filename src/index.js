import './style.css';

const todoList = [{ description: 'taking breakfast', completed: false, index: '1' },
  { description: 'taking breakfast 3', completed: false, index: '3' },
  { description: 'taking breakfast 2', completed: false, index: '2' },
];

const todos = document.getElementsByClassName('todolist')[0];

const sortedTodoList = todoList.sort((a, b) => a.index - b.index);

sortedTodoList.forEach((todo) => {
  const task = document.createElement('li');
  task.classList.add('task');
  task.id = todo.index;
  todos.appendChild(task);
  task.innerHTML = todo.description;
});
