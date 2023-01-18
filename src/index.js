import './style.css';

const todoList = [{ description: 'taking breakfast', completed: false, index: '1' },
  { description: 'taking breakfast 3', completed: false, index: '3' },
  { description: 'taking breakfast 2', completed: false, index: '2' },
];

const todos = document.getElementsByClassName('todolist')[0];
todoList.forEach((todo) => {
  const task = document.createElement('li');
  task.classList.add('task');
  task.id = todo.index;
  todos.appendChild(task);
  task.innerHTML = todo.description;
});

const sortList = () => {
  let i; let switching; let b; let
    shouldSwitch;
  switching = true;
  while (switching) {
    switching = false;
    b = todos.getElementsByTagName('li');
    for (i = 0; i < (b.length - 1); i += 1) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
};

sortList();